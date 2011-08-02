from __future__ import with_statement
from fabric.api import *
from fabric.colors import *

from fabric.contrib.console import confirm
from fabric.contrib.files import upload_template

from boto.s3.connection import S3Connection
from boto.s3.key import Key 
from zlib import compress, Z_BEST_COMPRESSION
import gzip

import mimetypes
import os 
from stat import *
import time

# globals
env.colors = True
env.config_file = 'fabconfig.yaml'
env.format = True
env.release = time.strftime('%Y%m%d%H%M%S')

env.use_s3 = False
env.optimize_images = False

ALWAYS_UPDATE = True
UTILS_DIR = '/usr/local/bin/'

try: 
	from s3_login_data import S3_API_KEY, S3_SECRET
except ImportError:
	S3_API_KEY = '<FILL ME>'
	S3_SECRET = '<FILL ME>'

# Tomek Kopczuk (www.askthepony.com/blog/): bring 1.0a API up to par
def better_put(local_path, remote_path, mode=None):
	put(local_path.format(**env), remote_path.format(**env), mode)

# tasks

@task
def deploy_media(): 
	def get_file_base_and_extension(filename):
		if filename.count('.'):
			return '.'.join(filename.split('.')[:-1]), '.%s' % filename.split('.')[-1]
		else:
			return filename, ''

	# Concatenate jquery libraries
	for outpath in env.config.default['bundle_and_minify']:
		with open(outpath, 'w') as outfile:
			for libpath in env.config.default['bundle_and_minify'][outpath]:
				with open(libpath, 'r') as libfile:
					outfile.write(libfile.read())
	
	# Open S3 connection if desired 
	if env.use_s3:
		conn = S3Connection(S3_API_KEY, S3_SECRET) 
		bucket = conn.get_bucket(env.config.default['s3_bucket'])
	else:
		conn, bucket = None, None 

	interesting_extensions = set(['.js', '.css'])
	if env.optimize_images:
		interesting_extensions.update(set(['.png', '.jpg', '.jpeg']))

	# Minify, gzip and upload
	dir_list = list(os.walk(env.config.default['static_relative_dir']))
	files_set = set()
	for directory in dir_list:
		files_set.update(set([ \
			get_file_base_and_extension(os.path.join(directory[0], d)) \
				for d in directory[2] \
					if get_file_base_and_extension(d)[1] in interesting_extensions and not get_file_base_and_extension(d)[0].count('.min') \
		]))

	files_no = len(files_set)
	for index, (file_basename, file_extension) in enumerate(files_set):
		print green("%.1f%% done (%d/%d)" % ((index+1.)*100./files_no, index+1, files_no))
		original_path = '%s%s' % (file_basename, file_extension)
		minified_path = '%s.min%s' % (file_basename, file_extension)

		success = False
		gzipped = False

		if file_extension in ['.png']:
			local('pngcrush -rem gAMA -rem cHRM -rem iCCP -rem sRGB -rem alla -rem text -reduce -brute "%s" "%s"'%(original_path, minified_path))
			try:
				print yellow('\tcompressed %d'%os.path.getsize(original_path)+" => %d"%os.path.getsize(minified_path)+ " => %d%%" % (os.path.getsize(minified_path) * 100 / os.path.getsize(original_path)))
				success = True
			except OSError:
				print red("File %s is not a PNG file." % original_path)
		elif file_extension in ['.jpg', '.jpeg']:
			local('jpegtran -outfile "%s" -optimize -copy none "%s"'%(minified_path, original_path))
			try:
				print yellow('\tcompressed %d'%os.path.getsize(original_path)+" => %d"%os.path.getsize(minified_path)+ " => %d%%" % (os.path.getsize(minified_path) * 100 / os.path.getsize(original_path)))
				success = True
			except OSError:
				print red("File %s is not a JPG file." % original_path)
		elif file_extension in ['.js', '.css']:
			local('java -jar %s -v -o "%s" --charset utf-8 "%s"'%(os.path.join(UTILS_DIR, 'yuicompressor-2.4.6.jar'), minified_path, original_path))
			try:
				indata = open(minified_path, "rb")
				outdata = gzip.open(minified_path + '.gz', 'wb')
				outdata.writelines(indata)
				indata.close()
				outdata.close()
				try:
					ratio = (os.path.getsize(minified_path+'.gz') * 100 / os.path.getsize(original_path))
				except ZeroDivisionError:
					ratio = 100
				print yellow('\tcompressed %d'%os.path.getsize(original_path)+" => %d"%os.path.getsize(minified_path)+ " => %d"%os.path.getsize(minified_path+'.gz') + " => gzipped %d%%" % ratio)
				gzipped = True
				success = True
			except OSError:
				import traceback
				traceback.print_exc()
				print red("File %s triggered a parsing error." % original_path)
		# Successful S3 connection and minify
		if bucket and success:
			modify_time = os.stat(original_path)[ST_MTIME] 
			key = None			
			if not ALWAYS_UPDATE:
				key = bucket.get_key(minified_path) 
			if key is None: 
				key = Key(bucket) 
				key.key = minified_path 
			if (key.last_modified is None or time.localtime(modify_time) > time.strptime(key.last_modified, '%a, %d %b %Y %H:%M:%S %Z')) or ALWAYS_UPDATE: 
				headers = {'Cache-Control': 'public,max-age=604800'}
				mime = mimetypes.guess_type(minified_path)[0]
				if mime:
					headers["Content-Type"] = mime
				if gzipped:
					headers.update({'Content-Encoding': 'gzip'})
					key.set_contents_from_filename(minified_path + '.gz', policy='public-read', headers=headers)
					os.remove(minified_path + '.gz')
				else:
					key.set_contents_from_filename(minified_path, policy='public-read', headers=headers)
				print yellow('\tFile uploaded.')


@task
def setup_node():
	"""
	Setup a fresh virtualenv as well as a few useful directories, then run
	a full deployment
	"""

	env().multirun(_create_user, condensed=True)
	print yellow('>>> apting required packages')
	env().multirun('apt-get -y -qq install python-virtualenv python-dev')
	print ''
	print yellow('>>> creating folder structure in {path}'.format(**env))
	env().multirun('mkdir -p {path}; cd {path}; virtualenv .;\
					mkdir -p releases; mkdir -p shared; mkdir -p packages;\
					mkdir -p logs;mkdir -p sock;mkdir -p pid;mkdir -p conf;mkdir -p tmp/nginx;\
					chown -R {run_daemons_as_user} {path}/pid;\
					chown -R {run_daemons_as_user} {path}/logs;\
					chown -R {run_daemons_as_user} {path}/sock;\
					chmod -R 777 {path}/tmp')
	print yellow('>>> node software installation')	
	env().multirun(_install_software)
	print yellow('>>> deploying')
	env().local('git archive --format=tar master | gzip > {release}.tar.gz')
	env().multirun(_deploy)
	env().local('rm -rf {release}.tar.gz')	
	print yellow('>>> node software preparing to startup')	
	env().multirun(_post_deploy)
	env().multirun(_cold_start)
	print yellow('>>> node software post-startup setup')	
	env().multirun(_post_cold_start_software)

def _create_user():
	print yellow(">>> creating '%s' user and group" % env.run_daemons_as_user)
	with settings(warn_only=True):
		run("groupadd {run_daemons_as_user}; useradd -g {run_daemons_as_user} -M -s /sbin/nologin {run_daemons_as_user};")

def _install_software():
	if hasattr(env, 'installation'):
		for cmd in env.installation:
			warn_only = False
			if isinstance(cmd, list):
				print yellow('>>> %s' % cmd[0])	
				if len(cmd) > 2:
					warn_only = cmd[2]
					print cmd
				cmd = cmd[1]

			with cd(env.path):
				with settings(warn_only=warn_only):
					run(cmd.format(**env))

def _post_deploy():
	if hasattr(env, 'post_deploy'):
		for cmd in env.post_deploy:
			warn_only = False
			if isinstance(cmd, list):
				print yellow('>>> %s' % cmd[0])	
				if len(cmd) > 2:
					warn_only = cmd[2]
					print cmd
				cmd = cmd[1]

			with cd(env.path):
				with settings(warn_only=warn_only):
					run(cmd.format(**env))

def _post_cold_start_software():
	if hasattr(env, 'post_cold_start'):
		for cmd in env.post_cold_start:
			warn_only = False
			if isinstance(cmd, list):
				print yellow('>>> %s' % cmd[0])	
				if len(cmd) > 2:
					warn_only = cmd[2]
					print cmd
				cmd = cmd[1]

			with cd(env.path):
				with settings(warn_only=warn_only):
					run(cmd.format(**env))


@task
def deploy():
	env().local('git archive --format=tar master | gzip > {release}.tar.gz')
	env().multirun(_deploy)
	env().multirun(_post_deploy)
	env().multirun(_restart)
	env().local('rm -rf {release}.tar.gz')

def _deploy():
	upload_tar_from_git()
	symlink_current_release()
	fetch_requirements()
	_update_configuration()

@task
def rollback_to_version(version):
	env.version = version

	print yellow('>>> updating releases/current to point at {path}/releases/{version}').format(**env)
	env().multirun('cd {path}; rm -f releases/previous', warn_only=True)
	env().multirun('cd {path}; cp releases/current releases/last_current', warn_only=True)
	env().multirun('cd {path}; mv releases/current releases/previous', warn_only=True)
	env().multirun('cd {path}; ln -s {version} releases/current')
	env().multirun('cd {path}; rm releases/last_current', warn_only=True)
	env().multirun(_restart)

@task
def rollback():
	print yellow('>>> updating releases/current to point at the version previously deployed on this server').format(**env)
	env().multirun('cd {path}; cp releases/current releases/previous_new', warn_only=True)
	env().multirun('cd {path}; mv releases/previous releases/current', warn_only=True)
	env().multirun('cd {path}; mv releases/previous_new releases/previous', warn_only=True)
	env().multirun(_restart)

def upload_tar_from_git():
#	if (GIT_UPLOAD_FROM_LOCAL):
	print yellow('>>> uploading .tar.gz package from this host\'s @master branch')
	run('mkdir -p {path}/releases/{release}')
	run('mkdir -p {path}/packages')
	better_put('{release}.tar.gz', '{path}/packages/')
	run('cd {path}/releases/{release} && tar zxf ../../packages/{release}.tar.gz')
#	else:
#		print yellow('>>> downloading .tar.gz package from remote @master branch')
#		run('cd {path}/releases; git clone -q  {release}')

def symlink_current_release():
	print yellow('>>> updating releases/current to point at {path}/releases/{release}').format(**env)
	with cd(env.path):
		with settings(warn_only=True):
			run('rm -f releases/previous')
			run('mv releases/current releases/previous')
		run('ln -s {release} releases/current')
	with cd(env.path):
		with settings(warn_only=True):
			run('rm -rf releases/{release}/shared')
		run('ln -s ../../../shared releases/{release}/shared')

def fetch_requirements():
	print yellow('>>> updating packages from requirements.txt').format(**env)
	with cd(env.path):
		run('bin/pip install -q -E . -r releases/current/requirements.txt')

@task
def update_configuration():
	env().multirun(_update_configuration)

def _update_configuration():
	print yellow('>>> uploading configuration files from your templates').format(**env)

	configs = {}
	if hasattr(env, 'configs'):
		configs.update(env.configs)
	if hasattr(env, 'additional_configs'):
		configs.update(env.additional_configs)

	for from_file, to_file in configs.items():
		remote_filename = to_file.format(**env)
		upload_template(from_file, remote_filename, context=env)
		run('chown -R {run_daemons_as_user} {path}/conf')

@task("db-servers")
def syncdb():
	env().run('cd {path}; sh bin/activate; bin/python releases/current/{django_project_name}/manage.py syncdb --noinput')

@task
def cold_start():
	env().multirun(_cold_start)

@task
def start():
	env().multirun(_start)

@task
def stop():
	env().multirun(_stop)

@task
def restart():
	env().multirun(_stop)
	env().multirun(_start)

def _cold_start():
	print yellow('>>> cold-starting node')	
	if hasattr(env, 'cold_start'):
		for cmd in env.cold_start:
			if isinstance(cmd, list):
				print yellow('>>> %s' % cmd[0])	
				cmd = cmd[1]
			with cd(env.path):
				run(cmd.format(**env))
def _start():
	print yellow('>>> starting node')	
	if hasattr(env, 'start'):
		for cmd in env.start:
			if isinstance(cmd, list):
				print yellow('>>> %s' % cmd[0])	
				cmd = cmd[1]
			with cd(env.path):
				run(cmd.format(**env))
def _stop():
	print yellow('>>> stopping node')	
	if hasattr(env, 'stop'):
		for cmd in env.stop:
			if isinstance(cmd, list):
				print yellow('>>> %s' % cmd[0])	
				cmd = cmd[1]
			with cd(env.path):
				run(cmd.format(**env))

def _restart():
	if getattr(env, 'cold_start', False):
		_cold_start()
	else:
		_stop()
		_start()	

@task
def shell():
	env().shell(format=True)