/*
$Id: gw.js 17333 2009-04-08 15:19:43Z messay $ 
*/

/*
 * Build version Vermont-12.0.0-130
 */
var rsi_k;
var rsi_now = new Date();
var rsi_csid = 'H07707';
if(typeof(csids)=="undefined"){
	var csids=[rsi_csid];
}else{
	csids.push(rsi_csid);
}
var _rsiaa=0;
var _rsiba=1;
var _rsica=0;
var _rsida=0;
var _rsiea=0;
var _rsifa=1;
var _rsiga="0806180";
var _rsiha="pix04.revsci.net";
var _rsiia="js";
var _rsija="b";
var _rsika="3";
var _rsila=3;
var _rsima=new Array();
var _rsina=0;
var _rsioa;
var _rsipa;
var _rsiqa;
var _rsira;
var _rsisa;
var _rsita;
_rsiua();

function DM_cat(Da){
	_rsioa=Da;
}

function DM_name(Ea){
	_rsipa=Ea;
}

function DM_keywords(st){
	_rsiqa=st;
}

function DM_event(Fa){
	_rsira=Fa;
}

function DM_addToLoc(n,v){
	_rsisa=_rsiva(_rsisa,n,v);
}

function DM_addEncToLoc(n,v){
	DM_addToLoc(_rsiwa(n),_rsiwa(v));
}

function DM_setLoc(u){
	_rsisa=u;
}

function DM_setCsid(Ga){
	rsi_csid=Ga;
}

function rsi_c(Ha){
	this._rsixa=Ha;
}

function rsi_ral(Ia){
	this._rsiaa=Ia;
}

function rsi_riu(Ja){
	this._rsiba=Ja;
}

function rsi_tiu(Ka){
	this._rsica=Ka;
}

function rsi_m(La){
	this._rsida=La;
}

function rsi_dw(Ma){
	this._rsiea=Ma;
}

function rsi_tu(Na){
	this._rsifa=docW;
}

function rsi_s(Oa){this._rsiha=Oa;}
function rsi_t(Pa){this._rsiia=Pa;}
function rsi_en(Qa){this._rsija=Qa;}
function rsi_cn(Ra){this._rsika=Ra;}
function rsi_us(Sa){this._rsila=Sa;}
function DM_tag(){
	var Ta;
	if(_rsina==0||_rsida==1){
		if(typeof(DM_prep)=="function"){
			DM_prep(rsi_csid);
		}
		var Ua=_rsiya();
		if(_rsiia=="gif"){
			Ta=new Image(2,3);
			Ta.src=Ua;
			_rsima[_rsima.length]=Ta;
		}else if(_rsiia=="js"){
			if(_rsiea==1){
				document.write("<script language=\"JavaScript\" type=\"text/javascript\" src=\""+Ua+"\"><"+"/script>");
			}else{
				var Va=document.createElement("script");
				Va.language="JavaScript";
				Va.type="text/javascript";
				Va.src=Ua;
				if(document.body==null){
					document.getElementsByTagName("head")[0].appendChild(Va);
				}else{
					document.body.insertBefore(Va,document.body.firstChild);
				}Ta=Va;
			}
		}
		_rsina=1;
	}
	_rsiua();
	return Ta;
}

function _rsiya(){
	var Wa="";
	Wa="DM_LOC="+_rsiwa(_rsisa);
	if(_rsioa){
		Wa+="&DM_CAT="+_rsiwa(_rsioa);
	}
	if(_rsira){
		Wa+="&DM_EVT="+_rsiwa(_rsira);
	}if(_rsiqa){
		Wa+="&DM_KYW="+_rsiwa(_rsiqa);
	}if(_rsiba==1&&_rsita){
		Wa+="&DM_REF="+_rsiwa(_rsita);
	}if(_rsica==1){
		Wa+="&DM_TIT="+_rsiwa(document.title);
	}if(_rsipa){
		Wa+="&DM_NAM="+_rsiwa(_rsipa);
	}
	Wa+="&DM_EOM=1";
	var Xa=location.protocol+"//";
	var Ya="/"+rsi_csid+"/"+_rsija+_rsika+"/0/"+_rsila+"/"+_rsiga+"/";
	var Za=Math.floor(Math.random()*1000000000)+"."+_rsiia;
	var $a=Xa+_rsiha+Ya+Za+"?D="+_rsiwa(Wa)+"&C="+_rsiwa(csids);
	if(_rsifa){
		var ab=$a.length;
		if(ab>=2000){
			if($a.charAt(1998)=='%'){
				$a=$a.substr(0,1998);
			}else if($a.charAt(1999)=='%'){
				$a=$a.substr(0,1999);
			}else{
				$a=$a.substr(0,2000);
			}
		}
	}
	return $a;
}
function _rsiza(i){
	var bb=i.toString(16).toUpperCase();
	return bb.length<2?"0"+bb:bb;
}

function _rsiAa(c){
	var i=c.charCodeAt(0);
	if(isNaN(i))
		return "";
	if(i<128)
		return "%"+_rsiza(i);
	if(i<2048)
		return "%"+_rsiza(0xC0+(i>>6))+"%"+_rsiza(0x80+(i&0x3F));
	if(i<65536)
		return "%"+_rsiza(0xE0+(i>>12))+"%"+_rsiza(0x80+(i>>6&0x3F))+"%"+_rsiza(0x80+(i&0x3F));
	return "%"+_rsiza(0xF0+(i>>18))+"%"+_rsiza(0x80+(i>>12&0x3F))+"%"+_rsiza(0x80+(i>>6&0x3F))+"%"+_rsiza(0x80+(i&0x3F));
}

var _rsiwa;

if(typeof(encodeURIComponent)=="function"){
	_rsiwa=encodeURIComponent;
}else{
	var _rsiBa=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");
	_rsiwa=function(v){
		return v.toString().replace(_rsiBa,_rsiAa);
	}
}

function _rsiva(u,n,v){
	return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;
}

function _rsiCa(u){
	var i=u.indexOf('#');
	return(i>=0)?u.substr(0,i):u;
}

function _rsiua(){
	_rsita=_rsiCa(document.referrer.toString());
	_rsisa=(_rsiaa==1)?_rsita:_rsiCa(window.location.href);
	_rsioa=null;
	_rsipa=null;
	_rsiqa=null;
}