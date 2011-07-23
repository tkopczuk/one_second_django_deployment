/*
$Id: production.js 29823 2010-01-12 16:12:48Z santep $
(c) 2008 The New York Times Company
*/

var TimesPeople = TimesPeople || {};

(function(app){
  var SERVICE_BASE = '/svc/timespeople/toolbar/1.0';
  var CDN;
  app.Config = {
    host:                                'http://timespeople.nytimes.com',
    css_host:                            'http://graphics8.nytimes.com',
    image_host:                          'http://graphics8.nytimes.com',
    js_host:                             'http://graphics8.nytimes.com',
    ad_host:                             'http://www.nytimes.com',
    user_image_host :                    'http://pimage.timespeople.nytimes.com',
    image_path:                          '/images/apps/timespeople/',
    css_path:                            '/css/0.1/screen/timespeople/toolbar/1.6',
    css_build_path:                      '/css/0.1/screen/timespeople/toolbar/1.6',
    image_service:                       'http://tp-upload.nytimes.com/postpic.php',
    get_started_uri:                     'http://timespeople.nytimes.com/getstarted',
    tunnel_uri:                          'http://timespeople.nytimes.com/packages/html/timespeople/xmlhttprequest.html',
    bell_pathname:                       '/svc/timespeople/bell.html',
    cookie_domain:                       window.location.hostname.match(/\.?[^.]+?\.[^.]+$/)[0],
    service_base:                        SERVICE_BASE,
    activity_service_post_url:           SERVICE_BASE + '/activity/post',
    activity_service_hide_url:           SERVICE_BASE + '/activity/hide',
    user_service_get_url:                SERVICE_BASE + '/user?page_url=' + window.location.href,
    user_service_add_following_url:      SERVICE_BASE + '/following/add',
    user_service_remove_following_url:   SERVICE_BASE + '/following/remove',
    user_service_create_url:             SERVICE_BASE + '/register',
    user_service_update_url:             SERVICE_BASE + '/update',
    user_service_login_url:              SERVICE_BASE + '/login',
    default_feed_url:                    'http://timespeople.nytimes.com/tp/stats/mostpopular-recommended.json'
  };
})(TimesPeople);
