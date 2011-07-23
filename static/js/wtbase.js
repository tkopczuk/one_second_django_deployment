/*
$Id: wtbase.js 71829 2011-07-11 15:09:07Z vishal $
 */
function dcsCQP(){
            var qry=window.location.search.toLowerCase();
            if ( (qry && (qry.indexOf("wt.mc_id")!=-1) && (qry.indexOf("wt.mc_ev")==-1)) || ((WT.mc_id!=null) && (WT.mc_id.toString()!="")) ) {
                        return "click";
            }
            else{
                        return "";
            }
}
function dcsCookie(){
	if (typeof(dcsOther)=="function"){
		dcsOther();
	}
	else if (typeof(dcsFPC)=="function"){
		dcsFPC(dcsInit.timezone);
	}
}
function dcsGetCookie(name){
	var cookies=document.cookie.split("; ");
	var cmatch=[];
	var idx=0;
	var i=0;
	var namelen=name.length;
	var clen=cookies.length;
	for (i=0;i<clen;i++){
		var c=cookies[i];
		if ((c.substring(0,namelen+1))==(name+"=")){
			cmatch[idx++]=c;
		}
	}
	var cmatchCount=cmatch.length;
	if (cmatchCount>0){
		idx=0;
		if ((cmatchCount>1)&&(name==dcsInit.fpc)){
			var dLatest=new Date(0);
			for (i=0;i<cmatchCount;i++){
				var lv=parseInt(dcsGetCrumb(cmatch[i],"lv"));
				var dLst=new Date(lv);
				if (dLst>dLatest){
					dLatest.setTime(dLst.getTime());
					idx=i;
				}
			}
		}
		return unescape(cmatch[idx].substring(namelen+1));
	}
	else{
		return null;
	}
}
function dcsGetCrumb(cval,crumb){
	var aCookie=cval.split(":");
	for (var i=0;i<aCookie.length;i++){
		var aCrumb=aCookie[i].split("=");
		if (crumb==aCrumb[0]){
			return aCrumb[1];
		}
	}
	return null;
}
function dcsGetIdCrumb(cval,crumb){
	var id=cval.substring(0,cval.indexOf(":lv="));
	var aCrumb=id.split("=");
	for (var i=0;i<aCrumb.length;i++){
		if (crumb==aCrumb[0]){
			return aCrumb[1];
		}
	}
	return null;
}
function dcsFPC(offset){
	if (typeof(offset)=="undefined"){
		return;
	}
	if (document.cookie.indexOf("WTLOPTOUT=")!=-1){
		return;
	}
	var name=dcsInit.fpc;
	var dCur=new Date();
	var adj=(dCur.getTimezoneOffset()*60000)+(offset*3600000);
	dCur.setTime(dCur.getTime()+adj);
	var dExp=new Date(dCur.getTime()+315360000000);
	var dSes=new Date(dCur.getTime());
	WT.co_f=WT.vt_sid=WT.vt_f=WT.vt_f_a=WT.vt_f_s=WT.vt_f_d=WT.vt_f_tlh=WT.vt_f_tlv="";
	if (document.cookie.indexOf(name+"=")==-1){
		if ((typeof(gWtId)!="undefined")&&(gWtId!="")){
			WT.co_f=gWtId;
		}
		else if ((typeof(gTempWtId)!="undefined")&&(gTempWtId!="")){
			WT.co_f=gTempWtId;
			WT.vt_f="1";
		}
		else{
			WT.co_f="2";
			var cur=dCur.getTime().toString();
			for (var i=2;i<=(32-cur.length);i++){
				WT.co_f+=Math.floor(Math.random()*16.0).toString(16);
			}
			WT.co_f+=cur;
			WT.vt_f="1";
		}
		if (typeof(gWtAccountRollup)=="undefined"){
			WT.vt_f_a="1";
		}
		WT.vt_f_s=WT.vt_f_d="1";
		WT.vt_f_tlh=WT.vt_f_tlv="0";
	}
	else{
		var c=dcsGetCookie(name);
		var id=dcsGetIdCrumb(c,"id");
		var lv=parseInt(dcsGetCrumb(c,"lv"));
		var ss=parseInt(dcsGetCrumb(c,"ss"));
		if ((id==null)||(id=="null")||isNaN(lv)||isNaN(ss)){
			return;
		}
		WT.co_f=id;
		var dLst=new Date(lv);
		WT.vt_f_tlh=Math.floor((dLst.getTime()-adj)/1000);
		dSes.setTime(ss);
		if ((dCur.getTime()>(dLst.getTime()+1800000))||(dCur.getTime()>(dSes.getTime()+28800000))){
			WT.vt_f_tlv=Math.floor((dSes.getTime()-adj)/1000);
			dSes.setTime(dCur.getTime());
			WT.vt_f_s="1";
		}
		if ((dCur.getDay()!=dLst.getDay())||(dCur.getMonth()!=dLst.getMonth())||(dCur.getYear()!=dLst.getYear())){
			WT.vt_f_d="1";
		}
	}
	WT.co_f=escape(WT.co_f);
	WT.vt_sid=WT.co_f+"."+(dSes.getTime()-adj);
	var expiry="; expires="+dExp.toGMTString();
	document.cookie=name+"="+"id="+WT.co_f+":lv="+dCur.getTime().toString()+":ss="+dSes.getTime().toString()+expiry+"; path=/"+(((dcsInit.fpcdom!=""))?("; domain="+dcsInit.fpcdom):(""));
	if (document.cookie.indexOf(name+"=")==-1){
		WT.co_f=WT.vt_sid=WT.vt_f_s=WT.vt_f_d=WT.vt_f_tlh=WT.vt_f_tlv="";
		WT.vt_f=WT.vt_f_a="2";
	}
}

function dcsTypeMatch(pth, typelist){
	var type=pth.substring(pth.lastIndexOf(".")+1,pth.length);
	var types=typelist.split(",");
	for (var i=0;i<types.length;i++){
		if (type==types[i]){
			return true;
		}
	}
	return false;
}
function dcsEvt(evt,tag){
	var e=evt.target||evt.srcElement;
	while (e.tagName&&(e.tagName!=tag)){
		e=e.parentElement||e.parentNode;
	}
	return e;
}
function dcsSetVar(){
    if ((arguments.length%2==0)&&(navigator.appVersion.indexOf("MSIE")!=-1)){
		for (var i=0;i<arguments.length;i+=2){
			if (arguments[i].indexOf('WT.')==0){
				WT[arguments[i].substring(3)]=arguments[i+1];
			}
			else if (arguments[i].indexOf('DCS.')==0){
				DCS[arguments[i].substring(4)]=arguments[i+1];
			}
			else if (arguments[i].indexOf('DCSext.')==0){
                DCSext[arguments[i].substring(7)]=arguments[i+1];
			}
		}
    }
}
function dcsSetVarCap(e){
    var gCap = e.onclick.toString();
    var gStart = gCap.substring(gCap.indexOf("dcsSetVar(")+10,gCap.length);
    var gEnd = gStart.substring(0,gStart.indexOf(");")).replace(/\s"/gi,"").replace(/"/gi,"");
    var gSplit = gEnd.split(",");
    if (gSplit.length!=-1){
		for (var i=0;i<gSplit.length;i+=2){
            if (gSplit[i].indexOf('WT.')==0){
				WT[gSplit[i].substring(3)]=gSplit[i+1];
			}
			else if (gSplit[i].indexOf('DCS.')==0){
				DCS[gSplit[i].substring(4)]=gSplit[i+1];
			}
			else if (gSplit[i].indexOf('DCSext.')==0){
                DCSext[gSplit[i].substring(7)]=gSplit[i+1];
			}
		}
    }
}

function dcsNavigation(wtnode){
	try{
	var wtCount=0;
	while(wtCount!=1){
		if(wtnode.parentNode.tagName!="DIV"){
			wtnode=wtnode.parentNode;
		}
		if(wtnode.parentNode.tagName=="DIV"){
			if(wtnode.parentNode.getAttribute('id')){
				WT.nav = wtnode.parentNode.getAttribute("id");
				wtCount=1;
			}
			else{
				wtnode=wtnode.parentNode;
			}
		}
	}}
	catch(error){}
}

function dcsBind(event,func){
	if ((typeof(window[func])=="function")&&document.body){
		if (document.body.addEventListener){
			document.body.addEventListener(event, window[func], true);
		}
		else if(document.body.attachEvent){
			document.body.attachEvent("on"+event, window[func]);
		}
	}
}
function dcsET(){
	var e=(navigator.appVersion.indexOf("MSIE")!=-1)?"click":"mousedown";
	dcsBind(e,"dcsDownload");
	dcsBind(e,"dcsDynamic");
	dcsBind(e,"dcsFormButton");
	dcsBind("keypress","dcsFormButton");
	dcsBind(e,"dcsImageMap");
}
function dcsMultiTrack(){
	if (arguments.length%2==0){
		for (var i=0;i<arguments.length;i+=2){
			if (arguments[i].indexOf('WT.')==0){
				WT[arguments[i].substring(3)]=arguments[i+1];
			}
			else if (arguments[i].indexOf('DCS.')==0){
				DCS[arguments[i].substring(4)]=arguments[i+1];
			}
			else if (arguments[i].indexOf('DCSext.')==0){
				DCSext[arguments[i].substring(7)]=arguments[i+1];
			}
		}
		var dCurrent=new Date();
		DCS.dcsdat=dCurrent.getTime();
		dcsFunc("dcsCookie");
		dcsTag();
	}
}
function dcsQP(N){
	if (typeof(N)=="undefined"){
		return "";
	}
	var qry=location.search.substring(1);
	if (qry!=""){
		var pairs=qry.split("&");
		for (var i=0;i<pairs.length;i++){
			var pos=pairs[i].indexOf("=");
			if (pos!=-1){
				if (pairs[i].substring(0,pos)==N){
					dcsInit.qp[dcsInit.qp.length]=(i==0?"":"&")+pairs[i];
					return pairs[i].substring(pos+1);
				}
			}
		}
	}
	return "";
}

// Add event handlers here

// Code section for Track clicks to download links.
function dcsDownload(evt){

	evt=evt||(window.event||"");
	if (evt&&((typeof(evt.which)!="number")||(evt.which==1))){
		var e=dcsEvt(evt,"A");
		if (e){
		  var gclick=e.onclick?e.onclick.toString():e.mousedown?e.mousedown.toString():"";
		  if (e.hostname&&e.href&&e.protocol&&(e.protocol.indexOf("http")!=-1)&&(gclick.indexOf("dcsMultiTrack")==-1)){
            if((navigator.appVersion.indexOf("MSIE")==-1)&&(e.onclick)){dcsSetVarCap(e);}
            dcsNavigation(e);
				var qry=e.search?e.search.substring(e.search.indexOf("?")+1,e.search.length):"";
				var pth=e.pathname?((e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname):"/";
				var ttl="";
				var text=document.all?e.innerText:e.text;
				var img=dcsEvt(evt,"IMG");
				if (img.alt){
					ttl=img.alt;
				}
				else if (text){
					ttl=text;
				}
				else if (e.innerHTML){
					ttl=e.innerHTML;
				}
				dcsMultiTrack("DCS.dcssip",e.hostname,"DCS.dcsuri",pth,"DCS.dcsqry",e.search||"","WT.ti","Link:"+ttl,"WT.dl","20");
				DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=WT.nv="";

			}
		}
	}
}
// Code section for Track form button clicks.
function dcsFormButton(evt){
	evt=evt||(window.event||"");
	if (evt&&((typeof(evt.which)!="number")||(evt.which==1)||(evt.which==13))){
		var tags=["INPUT","BUTTON"];
		for (var j=0;j<tags.length;j++){
			var e=dcsEvt(evt,tags[j]);
			var type=e.type||"";
			var gclick=e.onclick?e.onclick.toString():e.mousedown?e.mousedown.toString():"";
			if ((gclick.indexOf("dcsMultiTrack")==-1)&&type&&((type=="submit")||(type=="image")||(type=="button")||(type=="reset"))||((type=="text")&&((evt.which||evt.keyCode)==13))){
			    if((navigator.appVersion.indexOf("MSIE")==-1)&&(e.onclick)){dcsSetVarCap(e);}
                dcsNavigation(e);
                var uri="";
				var ttl="";
				var qry="";
				var id=0;
				if (e.form){
					var elems=e.form.elements;
					for (var i=0;i<elems.length;i++){
						var etype=elems[i].type;
						if ((etype=="text")||(etype=="textarea")||(etype=="hidden")||(etype=="select-one")){
							qry+=((qry=="")?"":"&")+escape(elems[i].name)+"="+escape(elems[i].value);
						}
					}
					uri=e.form.action||window.location.pathname;
					ttl=e.form.id||e.form.name||e.form.className||"Unknown";
					id=(e.form.method&&(e.form.method.toLowerCase()=="post"))?27:26;
				}
				else{
					uri=window.location.pathname;
					ttl=e.name||e.id||"Unknown";
					id=(tags[j].toLowerCase()=="input")?28:29;
				}
				if (uri&&ttl&&(evt.keyCode!=9)){
					dcsMultiTrack("DCS.dcsuri",uri,"DCS.dcsqry",qry,"WT.ti","FormButton:"+ttl,"WT.dl",id,"WT.nv",dcsNavigation(evt));
				}
				DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=WT.nv="";
				break;
			}
		}
	}
}




// Code section for clicks to image maps.
function dcsImageMap(evt){
	evt=evt||(window.event||"");
	if (evt){
		var e=dcsEvt(evt,"AREA");
		var gclick=e.onclick?e.onclick.toString():e.mousedown?e.mousedown.toString():"";
		if ((gclick.indexOf("dcsMultiTrack")==-1)&&e.hostname&&e.href&&e.protocol&&(e.protocol.indexOf("http")!=-1)){
            if((navigator.appVersion.indexOf("MSIE")==-1)&&(e.onclick)){dcsSetVarCap(e);}
                dcsNavigation(e);
            var pth=e.pathname?((e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname):"/";
			dcsMultiTrack("DCS.dcssip",e.hostname,"DCS.dcsuri",pth,"DCS.dcsqry",e.search||"","WT.ti","ImageMap:","WT.dl","30");
			DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=WT.nv="";

		}
	}
}

// Code section for Enable custom meta tag capture.
function dcsMetaCap(){
	var namelst="METATA";
	var elems;
	if (document.all){
		elems=document.all.tags("meta");
	}
	else if (document.documentElement){
		elems=document.getElementsByTagName("meta");
	}
	if (typeof(elems)!="undefined"){
		var names=namelst.toLowerCase().split(",");
		var nlen=names.length;
		var elen=elems.length;
		for (var i=0;i<elen;i++){
			var name=elems.item(i).name.toLowerCase();
			var content=elems.item(i).content;
			if ((name.length>0)&&(content.length>0)){
				for(var j=0;j<nlen;j++){
					if (name==names[j]){
						DCSext["meta_"+names[j]]=content;
						break;
					}
				}
			}
		}
	}
}

function dcsAdv(){
	if (dcsInit.trackevents){
		if (window.addEventListener) {window.addEventListener('load', dcsET, false);}  // mozilla and friends
        else if (window.attachEvent) {window.attachEvent('onload', dcsET);} // IE
	}
	dcsFunc("dcsCookie");
	dcsFunc("dcsAdSearch");
	dcsFunc("dcsTP");
	dcsFunc("dcsMetaCap");
}

// Add customizations here

function dcsVar(){
	var dCurrent=new Date();
	WT.tz=dCurrent.getTimezoneOffset()/60*-1;
	if (WT.tz==0){
		WT.tz="0";
	}
	WT.bh=dCurrent.getHours();
	WT.ul=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
	if (typeof(screen)=="object"){
		WT.cd=navigator.appName=="Netscape"?screen.pixelDepth:screen.colorDepth;
		WT.sr=screen.width+"x"+screen.height;
	}
	if (typeof(navigator.javaEnabled())=="boolean"){
		WT.jo=navigator.javaEnabled()?"Yes":"No";
	}
	if (document.title){
		WT.ti=document.title;
	}
	WT.js="Yes";
	WT.jv=dcsJV();
	if (document.body&&document.body.addBehavior){
		document.body.addBehavior("#default#clientCaps");
		WT.ct=document.body.connectionType||"unknown";
		document.body.addBehavior("#default#homePage");
		WT.hp=document.body.isHomePage(location.href)?"1":"0";
	}
	else{
		WT.ct="unknown";
	}
	if (parseInt(navigator.appVersion)>3){
		if ((navigator.appName=="Microsoft Internet Explorer")&&document.body){
			WT.bs=document.body.offsetWidth+"x"+document.body.offsetHeight;
		}
		else if (navigator.appName=="Netscape"){
			WT.bs=window.innerWidth+"x"+window.innerHeight;
		}
	}
	WT.fi="No";
	if (window.ActiveXObject){
		for(var i=10;i>0;i--){
			try{
				var flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
				WT.fi="Yes";
				WT.fv=i+".0";
				break;
			}
			catch(e){
			}
		}
	}
	else if (navigator.plugins&&navigator.plugins.length){
		for (var i=0;i<navigator.plugins.length;i++){
			if (navigator.plugins[i].name.indexOf('Shockwave Flash')!=-1){
				WT.fi="Yes";
				WT.fv=navigator.plugins[i].description.split(" ")[2];
				break;
			}
		}
	}
	if (dcsInit.i18n){
		WT.em=(typeof(encodeURIComponent)=="function")?"uri":"esc";
		if (typeof(document.defaultCharset)=="string"){
			WT.le=document.defaultCharset;
		}
		else if (typeof(document.characterSet)=="string"){
			WT.le=document.characterSet;
		}
	}
	WT.tv="1.0.7";
//	WT.sp="@@SPLITVALUE@@";
	WT.dl=0;
	DCS.dcsdat=dCurrent.getTime();
	var nyt_url = window.location.hostname;
	if (/^(s?www[239]?\.)?(partners\.)?(nyt|(newyork|ny)?times(ontheweb)?)\.(com\.?|net)$/.test(nyt_url)) {
		DCS.dcssip="www.nytimes.com";
	} else {
		DCS.dcssip=window.location.hostname;
	}
	DCS.dcsuri=window.location.pathname;
	var wt_contentGroup = getMetaTag("WT.cg_n");
	if(wt_contentGroup == "Email This"){
	    var dcsuri = getMetaTag("WT.dcsuri");
		if(dcsuri != ""){
		    DCS.dcsuri = dcsuri;
		}
	}
	WT.es=DCS.dcssip+DCS.dcsuri;
	if (window.location.search){
		DCS.dcsqry=window.location.search;
		if (dcsInit.qp.length>0){
			for (var i=0;i<dcsInit.qp.length;i++){
				var pos=DCS.dcsqry.indexOf(dcsInit.qp[i]);
				if (pos!=-1){
					var front=DCS.dcsqry.substring(0,pos);
					var end=DCS.dcsqry.substring(pos+dcsInit.qp[i].length,DCS.dcsqry.length);
					DCS.dcsqry=front+end;
				}
			}
		}
	}
	if ((window.document.referrer!="")&&(window.document.referrer!="-")){
		if (!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4)){
			var origRefUrl = getCookie("FramesetReferrer");
			DCS.dcsref = origRefUrl || window.document.referrer;
			//remove frameset referrer cookie
			if (origRefUrl != null) {
				window.setTimeout(function() {
					var expTime = new Date();
					expTime.setTime(expTime.getTime() - 60000);
					document.cookie = "FramesetReferrer=; expires=" + expTime.toGMTString() + "; path=/";
				}, 5000);
			}
		}
	}
}
function dcsA(N,V){
	if (dcsInit.i18n&&(dcsInit.exre!="")&&!dcsInit.exre.test(N)){
		if (N=="dcsqry"){
			var newV="";
			var params=V.substring(1).split("&");
			for (var i=0;i<params.length;i++){
				var pair=params[i];
				var pos=pair.indexOf("=");
				if (pos!=-1){
					var key=pair.substring(0,pos);
					var val=pair.substring(pos+1);
					if (i!=0){
						newV+="&";
					}
					newV+=key+"="+dcsEncode(val);
				}
			}
			V=V.substring(0,1)+newV;
		}
		else{
			V=dcsEncode(V);
		}
	}
	return "&"+N+"="+dcsEscape(V, dcsInit.re);
}
function dcsEscape(S, REL){
	if (REL!=""){
		var retStr = new String(S);
		for (var R in REL){
			if (typeof(REL[R])!="function"){
				retStr = retStr.replace(REL[R],R);
			}
		}
		return retStr;
	}
	else{
		return escape(S);
	}
}
function dcsEncode(S){
	return (typeof(encodeURIComponent)=="function")?encodeURIComponent(S):escape(S);
}
function dcsCreateImage(dcsSrc){
	if (document.images){
		dcsInit.images[dcsInit.index]=new Image;
		dcsInit.images[dcsInit.index].src=dcsSrc;
		dcsInit.index++;
	}
	else{
		document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+dcsSrc+'">');
	}
}
function dcsMeta(){
	var elems;
	if (document.all){
		elems=document.all.tags("meta");
	}
	else if (document.documentElement){
		elems=document.getElementsByTagName("meta");
	}
	if (typeof(elems)!="undefined"){
		var length=elems.length;
		for (var i=0;i<length;i++){
			var name=elems.item(i).name;
			var content=elems.item(i).content;
			var equiv=elems.item(i).httpEquiv;
			if (name.length>0){
				if (name.indexOf("WT.")==0){
					WT[name.substring(3)]=content;
				}
				else if (name.indexOf("DCSext.")==0){
					DCSext[name.substring(7)]=content;
				}
				else if (name.indexOf("DCS.")==0){
					DCS[name.substring(4)]=content;
				}
			}
			else if (dcsInit.i18n&&(equiv=="Content-Type")){
				var pos=content.toLowerCase().indexOf("charset=");
				if (pos!=-1){
					WT.mle=content.substring(pos+8);
				}
			}
		}
	}
}
function dcsTag(){
	if (document.cookie.indexOf("WTLOPTOUT=")!=-1){
		return;
	}
	var P="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+dcsInit.domain+(dcsInit.dcsid==""?'':'/'+dcsInit.dcsid)+"/dcs.gif?";
	for (var N in DCS){
		if ((typeof DCS[N]!="function")&&DCS[N]){
			P+=dcsA(N,DCS[N]);
		}
	}
	var keys=["co_f","vt_sid","vt_f_tlv"];
	for (var i=0;i<keys.length;i++){
		var key=keys[i];
		if (WT[key]){
			P+=dcsA("WT."+key,WT[key]);
			delete WT[key];
		}
	}
	for (N in WT){
		if ((typeof WT[N]!="function")&&WT[N]!=undefined){
			P+=dcsA("WT."+N,WT[N]);
		}
	}
	for (N in DCSext){
		if ((typeof DCSext[N]!="function")&&DCSext[N]){
			P+=dcsA(N,DCSext[N]);
		}
	}
	if (P.length>2048&&navigator.userAgent.indexOf('MSIE')>=0){
		P=P.substring(0,2040)+"&WT.tu=1";
	}
	dcsCreateImage(P);
	WT.ad="";
}
function dcsJV(){
	var agt=navigator.userAgent.toLowerCase();
	var major=parseInt(navigator.appVersion);
	var mac=(agt.indexOf("mac")!=-1);
	var ff=(agt.indexOf("firefox")!=-1);
	var ff0=(agt.indexOf("firefox/0.")!=-1);
	var ff10=(agt.indexOf("firefox/1.0")!=-1);
	var ff15=(agt.indexOf("firefox/1.5")!=-1);
	var ff2up=(ff&&!ff0&&!ff10&!ff15);
	var nn=(!ff&&(agt.indexOf("mozilla")!=-1)&&(agt.indexOf("compatible")==-1));
	var nn4=(nn&&(major==4));
	var nn6up=(nn&&(major>=5));
	var ie=((agt.indexOf("msie")!=-1)&&(agt.indexOf("opera")==-1));
	var ie4=(ie&&(major==4)&&(agt.indexOf("msie 4")!=-1));
	var ie5up=(ie&&!ie4);
	var op=(agt.indexOf("opera")!=-1);
	var op5=(agt.indexOf("opera 5")!=-1||agt.indexOf("opera/5")!=-1);
	var op6=(agt.indexOf("opera 6")!=-1||agt.indexOf("opera/6")!=-1);
	var op7up=(op&&!op5&&!op6);
	var jv="1.1";
	if (ff2up){
		jv="1.7";
	}
	else if (ff15){
		jv="1.6";
	}
	else if (ff0||ff10||nn6up||op7up){
		jv="1.5";
	}
	else if ((mac&&ie5up)||op6){
		jv="1.4";
	}
	else if (ie5up||nn4||op5){
		jv="1.3";
	}
	else if (ie4){
		jv="1.2";
	}
	return jv;
}
function dcsFunc(func){
	if (typeof(window[func])=="function"){
		window[func]();
	}
}

function wtbaseInit() {
	if (dcsInit.enabled){
		dcsVar();
		dcsMeta();
		WT.mc_ev=dcsCQP();
		dcsFunc("dcsAdv");
		dcsTag();
	}
}

if (/MSIE/.test(navigator.userAgent)) {
	// In IE, wrapping this code block in setTimeout is needed because in certain cases,
	// it will execute before other script files needed are fully loaded.
	window.setTimeout(wtbaseInit, 1);
} else {
	wtbaseInit();
}


// fix for issue where dcsMultiTrack doesn't clear values from prior executions
//  i.e. dcsMultiTrack for video adds parameters that persist to later, non-video
//   dcsMultiTrack calls
var originalDcsMultiTrack = dcsMultiTrack;
dcsMultiTrack = function() {
    originalDcsMultiTrack.apply(window, arguments); 
    WT = {}; 
    DCS = {}; 
    DCSext = {}; 
    dcsVar(); 
    dcsMeta(); 
};
