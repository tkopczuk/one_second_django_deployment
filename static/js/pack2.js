var TimesPeople=TimesPeople||{};if(typeof Object.create!=="function"){Object.create=function(o){function F(){}F.prototype=o;return new F()}}(function(app){var debug=false;if(typeof console=="undefined"||!debug){app.console={log:function(){}}}else{app.console=console}app.Object={};app.Object.extend=function(destination,source){for(var property in source){destination[property]=source[property]}return destination};app.isIE=function(){return !+"\v1"};app.isIE6=function(){return app.isIE()&&!window.XMLHttpRequest};app.isReady=function(){return(document.body&&document.body.firstChild)?true:false};app.$=function $(element){if(typeof element=="string"){element=document.getElementById(element)}return element};app.truncate=function(string,length){length=length||30;return string.length>length?string.slice(0,length-3)+"...":String(string)};app.hasClassName=function(element,className){if(!(element=app.$(element))){return}var elementClassName=element.className;return(elementClassName.length>0&&(elementClassName==className||new RegExp("(^|\\s)"+className+"(\\s|$)").test(elementClassName)))};app.getElementsByClassName=(function(){var fn,el=document.createElement("div");if(el.getElementsByClassName){fn=function getElementsByClassName(className,element){element=element||document.body;return Array.prototype.slice.call(element.getElementsByClassName(className),0)}}else{fn=function getElementsByClassName(className,element){element=element||document.body;for(var results=[],childNodes=element.getElementsByTagName("*"),re=new RegExp("(?:\\s|^)"+className+"(?:\\s|$)"),length=childNodes.length,i=0;i<length;++i){element=childNodes[i];if(re.test(element.className)){results.push(element)}}return results}}return fn})();app.hasNativeShadow=(function(){var is_capable=false;var element=document.documentElement;var style=element.style;var shadow_properties=["boxShadow","MozBoxShadow","WebkitBoxShadow"];for(var i=0,shadow_property;shadow_property=shadow_properties[i];i++){app.console.log(shadow_property,style[shadow_property]);is_capable=typeof style[shadow_property]=="string";if(is_capable){break}}if(app.isIE()){is_capable=true}return is_capable})()})(TimesPeople);(function(app){app.EventPublisher=function EventPublisher(){this.observers=[]};app.EventPublisher.prototype={register:function(observer){this.observers.push(observer)},unregister:function(observer){var current_observers=this.observers;var results=[];for(var i=0,current_observer;current_observer=current_observers[i];i++){if(observer!=current_observer){results.push(current_observer)}}this.observers=results},notifyObservers:function(event,data){for(var i=0,observers=this.observers;i<observers.length;i++){try{observers[i].update({event:event,data:data})}catch(e){app.console.log(e)}}}}})(TimesPeople);(function(app){var cache=[];app.Event={observe:function(element,eventName,fn){var handler;if(element.addEventListener){if(eventName==="mouseenter"||eventName==="mouseleave"){eventName=eventName==="mouseenter"?"mouseover":"mouseout";handler=function(event){var parent=event.relatedTarget;while(parent&&parent!==element){try{parent=parent.parentNode}catch(e){parent=element}}if(parent===element){return}fn.call(element,event)}}element.addEventListener(eventName,(handler||fn),false)}else{if(element.attachEvent){if(eventName.indexOf(":")>-1){eventName="dataavailable"}handler=function(){return fn.call(element,normalize(window.event))};element.attachEvent("on"+eventName,handler)}}cache.push(handler||fn);if(handler){fn.handler=handler}return element},fire:function(element,eventName,memo){element=app.$(element);if(element==document&&document.createEvent&&!element.dispatchEvent){element=document.documentElement}var event;if(document.createEvent){var event=document.createEvent("HTMLEvents");event.initEvent(eventName,true,true)}else{var event=document.createEventObject();event.eventType=(eventName.indexOf(":")>-1)?"ondataavailable":on+eventName}event.eventName=eventName;event.memo=memo||{};if(document.createEvent){element.dispatchEvent(event)}else{element.fireEvent(event.eventType,event)}return event},stopObserving:function(element,eventName,fn){var handler;if(typeof fn.handler=="function"){handler=fn.handler}else{handler=fn}if(element.removeEventListener){switch(eventName){case"mouseenter":eventName="mouseover";break;case"mouseleave":eventName="mouseout";break}element.removeEventListener(eventName,handler,false)}else{if(element.detachEvent){element.detachEvent("on"+eventName,handler)}}},pointer:function(event){var docElement=document.documentElement,body=document.body||{scrollLeft:0,scrollTop:0};return{x:event.pageX||(event.clientX+(docElement.scrollLeft||body.scrollLeft)-(docElement.clientLeft||0)),y:event.pageY||(event.clientY+(docElement.scrollTop||body.scrollTop)-(docElement.clientTop||0))}}};function destroyCache(){for(var i=0,entry;entry=cache[i];i++){entry=null}}function normalize(event){event.stopPropagation=event.stopPropagation||function(){event.cancelBubble=true};event.preventDefault=event.preventDefault||function(){this.returnValue=false};event.target=event.target||event.srcElement;return event}if(window.attachEvent){window.attachEvent("onunload",destroyCache)}})(TimesPeople);(function(app){app.Cookie={get:function(name){return new RegExp(name+"=([^;]+)").test(unescape(document.cookie))?RegExp.$1:null},set:function(name,value,options){var newcookie=[escape(name)+"="+escape(value)];if(options){if(options.expires){newcookie.push("expires="+options.expires.toGMTString())}if(options.path){newcookie.push("path="+options.path)}if(options.domain){newcookie.push("domain="+options.domain)}if(options.secure){newcookie.push("secure")}}document.cookie=newcookie.join("; ")}}})(TimesPeople);(function(app){function run(){loadCSS();restoreState()}function restoreState(){app.state=app.Cookie.get("news_people_toolbar");if(app.state!="NO"){addMargin()}}function addMargin(){if(document.body){document.body.style.paddingTop="51px"}else{document.write("<style>html body {padding-top:51px;}</style>")}}function loadCSS(){var head=document.getElementsByTagName("head")[0];function createLink(uri){var link=document.createElement("link");link.href=uri;link.type="text/css";link.rel="stylesheet";head.appendChild(link);link=null}createLink(app.Config.css_host+app.Config.css_build_path+"/styles.css");(function(){if(document.body){var value=document.body.style.backgroundColor;if(!value&&document.defaultView){var css=document.defaultView.getComputedStyle(document.body,null);value=css?css.backgroundColor:null}else{if(!value&&document.body.currentStyle){value=document.body.currentStyle.backgroundColor}}if(value=="rgb(26, 26, 26)"||value.toLowerCase()=="#1a1a1a"){app.Config.is_dark=true;createLink(app.Config.css_host+app.Config.css_path+"/dark.css")}else{app.Config.is_dark=false}if(app.isIE6()){createLink(app.Config.css_host+app.Config.css_path+"/ie6.css")}}else{setTimeout(arguments.callee,10)}})()}run()})(TimesPeople);(function(app){var cache={};app.template=function(str,data){var fn=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return data?fn(data):fn}})(TimesPeople);if(!this.JSON){JSON=function(){function f(n){return n<10?"0"+n:n}Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()};var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapeable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapeable.lastIndex=0;return escapeable.test(string)?'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==="string"){return c}return"\\u"+("0000"+(+(a.charCodeAt(0))).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(typeof value.length==="number"&&!(value.propertyIsEnumerable("length"))){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}return{stringify:function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})},parse:function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+(+(a.charCodeAt(0))).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}()}(function(){this.FX=function(el,attributes,duration,callback,ctx){this.el=DOM.get(el);this.attributes=attributes;this.duration=duration||0.7;this.callback=callback||function(){};this.ctx=ctx||window};this.FX.prototype={frame:{},endAttr:{},startAttr:{},start:function(){var fx=this;this.getAttributes();this.duration=this.duration*1000;this.time=new Date().getTime();this.animating=true;this.timer=setInterval(function(){var time=new Date().getTime();if(time<(fx.time+fx.duration)){fx.elapsed=time-fx.time;fx.setCurrentFrame()}else{fx.frame=fx.endAttr;fx.complete()}fx.setAttributes()},1)},stop:function(finish){if(this.animating){if(finish){this.frame=this.endAttr;this.setAttributes()}this.complete()}},ease:function(start,end){return start+((1-Math.cos((this.elapsed/this.duration)*Math.PI))/2)*(end-start)},complete:function(){clearInterval(this.timer);this.timer=null;this.animating=false;this.callback.call(this.ctx)},setCurrentFrame:function(){for(attr in this.startAttr){if(this.startAttr[attr] instanceof Array){this.frame[attr]=[];for(var i=0;i<this.startAttr[attr].length;i++){this.frame[attr][i]=this.ease(this.startAttr[attr][i],this.endAttr[attr][i])}}else{this.frame[attr]=this.ease(this.startAttr[attr],this.endAttr[attr])}}},getAttributes:function(){for(var attr in this.attributes){switch(attr){case"color":case"background-color":this.startAttr[attr]=parseColor(this.attributes[attr].from||DOM.getStyle(this.el,attr));this.endAttr[attr]=parseColor(this.attributes[attr].to);break;case"scrollTop":case"scrollLeft":var el=(this.el==document.body)?(document.documentElement||document.body):this.el;this.startAttr[attr]=this.attributes[attr].from||el[attr];this.endAttr[attr]=this.attributes[attr].to;break;default:this.startAttr[attr]=this.attributes[attr].from||(parseFloat(DOM.getStyle(this.el,attr))||0);this.endAttr[attr]=this.attributes[attr].to;break}}},setAttributes:function(){for(var attr in this.frame){switch(attr){case"opacity":DOM.setStyle(this.el,attr,this.frame[attr]);break;case"scrollLeft":case"scrollTop":var el=(this.el==document.body)?(document.documentElement||document.body):this.el;el[attr]=this.frame[attr];break;case"color":case"background-color":var rgb="rgb("+Math.floor(this.frame[attr][0])+","+Math.floor(this.frame[attr][1])+","+Math.floor(this.frame[attr][2])+")";DOM.setStyle(this.el,attr,rgb);break;default:DOM.setStyle(this.el,attr,this.frame[attr]+"px");break}}}};var DOM={get:function(id){return(typeof id=="string")?document.getElementById(id):id},getStyle:function(el,prop){prop=toCamelCase(prop);var view=document.defaultView;if(view&&view.getComputedStyle){return el.style[prop]||view.getComputedStyle(el,"")[prop]||null}else{if(prop=="opacity"){var opacity=el.filters("alpha").opacity;return isNaN(opacity)?1:(opacity?opacity/100:0)}return el.style[prop]||el.currentStyle[prop]||null}},setStyle:function(el,prop,value){if(prop=="opacity"){el.style.filter="alpha(opacity="+value*100+")";el.style.opacity=value}else{prop=toCamelCase(prop);el.style[prop]=value}}};var toCamelCase=(function(){var cache={};return function(str){if(!cache[str]){return cache[str]=str.replace(/-([a-z])/g,function($0,$1){return $1.toUpperCase()})}else{return cache[str]}}})();var parseColor=function(str){var rgb=str.match(/^#?(\w{2})(\w{2})(\w{2})$/);if(rgb&&rgb.length==4){return[parseInt(rgb[1],16),parseInt(rgb[2],16),parseInt(rgb[3],16)]}rgb=str.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);if(rgb&&rgb.length==4){return[parseInt(rgb[1],10),parseInt(rgb[2],10),parseInt(rgb[3],10)]}rgb=str.match(/^#?(\w{1})(\w{1})(\w{1})$/);if(rgb&&rgb.length==4){return[parseInt(rgb[1]+rgb[1],16),parseInt(rgb[2]+rgb[2],16),parseInt(rgb[3]+rgb[3],16)]}}}).call(TimesPeople);(function(app){app.Request=(function(){var head=document.getElementsByTagName("head")[0];var scripts=document.getElementsByTagName("script");var bell_pathname=app.Config.bell_pathname;if(!bell_pathname){for(var i=0,script;script=scripts[i];i++){app.console.log(script.src);if(script.src&&(/\?bell=(.*)/).test(script.src)){bell_pathname=RegExp.$1;break}}}if(bell_pathname==window.location.pathname&&window!=window.top){throw"Aborting: toolbar loading in the tunnel iframe"}if(!bell_pathname){throw'Please supply a root relative path to the "bell" file. (filename.js?bell=/path/to/file)'}var publisher=new app.EventPublisher();function Request(url,options){options=app.Object.extend({method:"get",params:"",onComplete:function(){}},options||{});publisher.notifyObservers("http request initiated");iframeRequest(url,options)}function iframeRequest(url,options){var iframe=document.createElement("iframe");iframe.style.position="absolute";iframe.style.top="-1000px";head.appendChild(iframe);var onComplete=options.onComplete;app.Event.observe(iframe,"load",processResponse);app.console.log("document.domain",document.domain);iframe.src=app.Config.tunnel_uri+"?url="+encodeURIComponent(url)+"&method="+options.method+"&params="+encodeURIComponent(options.params)+"&bell="+window.location.protocol+"//"+window.location.host+bell_pathname;function processResponse(){try{if(iframe.contentWindow.location&&iframe.contentWindow.location.pathname==bell_pathname){app.Event.stopObserving(iframe,"load",processResponse);app.console.log("gained access to iframe: "+iframe.contentWindow.location.pathname);var responseText=iframe.contentWindow.name;if(responseText){var response=JSON.parse(responseText);var innerResponse=JSON.parse(response.responseText);response.status=innerResponse.error_id||response.status;if(response.status&&response.status==200&&typeof options.onSuccess==="function"){options.onSuccess(response)}if(typeof options.onComplete==="function"){options.onComplete(response)}app.Event.stopObserving(iframe,"load",processResponse);window.setTimeout(function(){head.removeChild(iframe)},500);publisher.notifyObservers("http request completed")}}}catch(e){app.console.log(e)}}}app.Object.extend(Request,{register:function(observer){publisher.register(observer)},unregister:function(observer){publisher.unregister(observer)}});return Request})();app.Ajax={};app.Ajax.Request=app.Request})(TimesPeople);(function(app){app.User=(function(){var user,member,regi,loaded;var publisher=new app.EventPublisher();function User(){if(this==window){throw"User can only be used as a constructor."}this.profile=this.profile||{};this.newsfeed=this.newsfeed||[];user=user||this;return user}User.getInstance=function(){return new User()};User.create=function(attributes){var user=new User();if(user.profile.uid){attributes.uid=user.profile.uid}new app.Request(app.Config.user_service_create_url,{method:"post",params:"profile="+encodeURIComponent(JSON.stringify(attributes)),onComplete:function(response){switch(response.status){case 200:processResponse(response);publisher.notifyObservers("user created",user);publisher.notifyObservers("user saved",user);publisher.notifyObservers("user logged in",user);break;case 412:case 500:var data=response.responseText&&JSON.parse(response.responseText);if(data){app.console.log(data.error_message);publisher.notifyObservers("user could not be created",data)}break}}});return user};User.prototype={attributes:{},register:function(observer){publisher.register(observer)},unregister:function(observer){publisher.unregister(observer)},load:function(){new app.Request(app.Config.user_service_get_url,{onComplete:processResponse})},update:update,save:function(){new app.Request(app.Config.user_service_update_url,{method:"post",params:"profile="+JSON.stringify(this.profile),onComplete:processResponse})},login:function(credentials){var instance=this;new app.Request(app.Config.user_service_login_url,{method:"post",params:"username="+credentials.username+"&password="+credentials.password+"&svid="+credentials.svid,onComplete:function(response){switch(response.status){case 200:processResponse(response);publisher.notifyObservers("user logged in",instance);break;case 403:processResponse(response);break;case 500:var data=response.responseText&&JSON.parse(response.responseText);if(data){app.console.log(data.error_message);publisher.notifyObservers("user login failed",data)}break}loaded=true}})},updateImage:function(){this.profile.picURL=imagePath(this.profile.uid);this.save();window.setTimeout(function(){publisher.notifyObservers("user image updated")},1000)},updateFullSizeImage:function(){this.profile.fullpicURL=imagePath(this.profile.uid,true);this.save();window.setTimeout(function(){publisher.notifyObservers("user full size image updated")},1000)},addToFeed:function(activity){this.newsfeed.unshift(activity);publisher.notifyObservers("feed updated",user)},isLoaded:function(){return loaded},isMember:function(){return member},isNYTMember:function(){return regi},isTimesPeopleMember:function(){return member},addFollowee:function(userId){new app.Request(app.Config.user_service_add_following_url,{method:"post",params:"ids="+encodeURIComponent("["+userId+"]"),onComplete:function(response){user.load()}})},removeFollowee:function(userId){app.console.log(JSON.stringify({ids:[userId]}));new app.Request(app.Config.user_service_remove_following_url,{method:"post",params:"ids="+encodeURIComponent("["+userId+"]"),onComplete:function(response){user.load()}})},getSearchPageURI:function(){if(!member){return}return app.Config.host+"/view/user/"+this.profile.uid+"/findpeople.html"},getFollowersPageURI:function(){if(!member){return""}return app.Config.host+"/view/user/"+this.profile.uid+"/interested_people.html"},invite:function(emails){var instance=this;var url=app.Config.service_base+"/user/invite";new app.Request(url,{method:"post",params:"emails="+encodeURIComponent('["'+emails.join('","')+'"]'),onSuccess:function(response){app.console.log("invitations sent",response);instance.load();publisher.notifyObservers("invitations sent",{})},onComplete:function(response){if(response.status==500){app.console.log("error sending invitations",response.responseText);var data=JSON.parse(response.responseText);instance.load();publisher.notifyObservers("error sending invitations",data)}}})}};function update(attributes){app.Object.extend(user,attributes);publisher.notifyObservers("attributes updated",user);app.console.log(user)}function processResponse(response){switch(response.status){case 200:member=true;var attributes=response.responseText?JSON.parse(response.responseText):response;if(attributes.profile||attributes.newsfeed){update(attributes)}break;case 401:member=false;publisher.notifyObservers("no user info",null);break;case 403:member=false;regi=true;publisher.notifyObservers("user not registered",null);break;case 500:publisher.notifyObservers("service error",null);break}loaded=true}function imagePath(id,fullsize){return app.Config.user_image_host+"/"+idToPartitionedPath(id)+"/"+(fullsize?"uncropped-":"cropped-")+id+".jpg?"+Math.random().toString()}function idToPartitionedPath(id){return id.toString().replace(/(\d{4}(?=\d))/g,"$1/")}return User})()})(TimesPeople);(function(app){app.Activity=(function(){var publisher=new app.EventPublisher();var activity;function Activity(){if(this==window){throw"Activity can only be used as a constructor"}activity=this;Activity.user=Activity.user||new app.User();if(!Activity.user.profile.uid){throw"The current user object is not valid or hasn't loaded yet"}if(typeof arguments[0]=="object"){initializeWithObject.call(this,arguments[0])}else{initializeWithArguments.apply(this,arguments)}save()}Activity.prototype={makeDisplayReady:function(){return makeDisplayReady(this)}};function initializeWithObject(options){if(this instanceof Activity==false){throw"this function needs to be called with 'apply' and be passed an instance of Activity"}options=app.Object.extend({userid:Activity.user.profile.uid,object_desc:app.Page&&app.Page.description||"",object_type:app.Page&&app.Page.type||"",object_url:getObjectUrl(),object_thumbnail_url:"",object_note:"",visible:1,source:window.location.host},options);app.Object.extend(this,options)}function initializeWithArguments(verb,object,object_desc,object_url,object_thumbnail_url,object_type,object_note){if(this instanceof Activity==false){throw"this function needs to be called with 'apply' and be passed an instance of Activity"}this.userid=Activity.user.profile.uid;this.verb=verb;this.object=object;this.object_desc=object_desc||app.Page&&app.Page.description||"";this.object_type=object_type||app.Page&&app.Page.type;this.object_url=object_url||getObjectUrl();this.object_thumbnail_url=object_thumbnail_url||"";this.object_note=object_note||"";this.visible=1;this.source=window.location.host}function save(){new app.Request(app.Config.activity_service_post_url,{method:"post",params:"activities="+encodeURIComponent("["+JSON.stringify(activity)+"]"),onComplete:processResponse})}function processResponse(response){switch(response.status){case 200:Activity.user.addToFeed(makeDisplayReady(activity));publisher.notifyObservers("action saved");break;case 401:case 403:break;case 500:publisher.notifyObservers("error saving action");app.console.log(response.responseText);break}}function makeDisplayReady(activity){var item=app.Object.extend({},activity);item.actorDisplayname="You";item.date_updated=new Date().toString();item.picURL=Activity.user.profile.picURL;return item}function getObjectUrl(){var preserve_search;switch(window.location.hostname){case"community.nytimes.com":case"query.nytimes.com":case"travel.nytimes.com":case"movies.nytimes.com":preserve_search=true;break;case"www.nytimes.com":default:preserve_search=false}var search=window.location.search&&preserve_search?window.location.search+"&src=tp":"?src=tp";return[window.location.protocol,"//",window.location.host,window.location.pathname,search,window.location.hash].join("")}app.Object.extend(Activity,{register:function(observer){publisher.register(observer)},unregister:function(observer){publisher.unregister(observer)},hide:function(id){new app.Request(app.Config.activity_service_hide_url,{method:"post",params:"activity_id="+id,onSuccess:function(response){publisher.notifyObservers("action hidden")}})}});return Activity})()})(TimesPeople);(function(app){var self,spinner;var template='    <div id="TP_container" class="TP_env">      <div id="TP_inner">        <div id="TP_left_panel" class="TP_toolbar_item"></div>        <div id="TP_feed" class="TP_toolbar_item">          <div id="TP_latest_item" class="TP_feed_content TP_toolbar_item_content" style=""></div>        </div>        <div style="display: none;" id="TP_spinner">          <object width="24" height="24" data="'+app.Config.image_host+app.Config.image_path+'spinner.swf" type="application/x-shockwave-flash">            <param value="'+app.Config.image_host+app.Config.image_path+'spinner.swf" name="movie"/>            <param value="Transparent" name="WMode"/>          </object>        </div>        <div id="TP_right_panel"  class="TP_toolbar_item">           <div id="TP_activity_on_page" class="TP_toolbar_item_content" style=""></div>        </div>        <div  id="TP_minimize_button" class="TP_toolbar_item"></div>      </div>    </div>    <div id="TP_container_shadow_wrap"><div id="TP_container_shadow"<% if (!hasNativeShadow) { %> class="border-shadow"<% } %>></div></div>  ';app.ToolbarView=function ToolbarView(user,latestItemView,feedView,userView,toolsView,pageActivityView){this.user=user;this.latestItemView=latestItemView;this.feedView=feedView;this.userView=userView;this.toolsView=toolsView;this.pageActivityView=pageActivityView;this.panels=[];this.open_panel=null;this.user.register(this);self=self||this;return self};app.ToolbarView.prototype={draw:function(){if(this.drawn){return}this.container=document.createElement("div");this.container.id="TP_fixed_toolbar";this.container.innerHTML=app.template(template,app);this.drawn=true;document.body.insertBefore(this.container,document.body.firstChild);var self=this;var minimizeButton=app.$("TP_minimize_button");if(minimizeButton){app.Event.observe(minimizeButton,"click",function(){self.minimize()})}this.latest_item=app.$("TP_latest_item");this.latest_item.appendChild(this.latestItemView.element);spinner=app.$("TP_spinner");app.Request.register(this);app.Event.observe(document.body,"ToolbarPanelView:open",onOpenPanel);app.Event.observe(document.body,"ToolbarPanelView:close",onClosePanel)},minimize:function(){if(!this.minimized){for(var i=0,panel;panel=this.panels[i];i++){panel.close()}this.minimized=true;persistState("NO");new app.FX(this.container,{top:{to:-40}},0.5).start();new app.FX(document.body,{paddingTop:{to:13}},0.5).start();this.minimizedView.toggle()}},restore:function(){app.console.log("restore!");if(this.minimized){if(!this.drawn){this.draw()}this.minimized=false;persistState("YES");new app.FX(this.container,{top:{to:0}},0.5).start();new app.FX(document.body,{paddingTop:{to:51}},0.5).start();this.minimizedView.toggle();this.user.load()}},update:function(msg){switch(msg.event){case"attributes updated":drawMemberToolbar(this);break;case"user saved":drawMemberToolbar(this);break;case"followees updated":break;case"user not registered":drawGuestToolbar(this);break;case"no user info":drawGuestToolbar(this);break;case"user image updated":var user=msg.data;var imgs=app.getElementsByClassName("you");for(var i=0,img;img=imgs[i];i++){img.src=this.user.profile.picURL}break;case"feed updated":updateFeed(this);break;case"service error":app.console.log("service error");handleError(this);break;case"http request initiated":spinner.style.display="block";break;case"http request completed":spinner.style.display="none";break}}};function handleError(view){view.feedView.data=view.latestItemView.data=[{actorDisplayname:"",actorId:0,picURL:"http://graphics8.nytimes.com/images/apps/timespeople/none.png",verb:"",object:"TimesPeople is down for maintenance",object_desc:"",object_url:"http://timespeople.nytimes.com/home/about/",object_type:"",object_thumbnail_url:"",date_updated:new Date(),object_note:null}];updateFeed(view);window.setTimeout(function(){view.minimize();persistState("YES")},2000)}function updateFeed(view){view.latestItemView.draw(1)}function drawGetStartedToolbar(view){new app.Request(app.Config.default_feed_url,{onSuccess:function(response){view.feedView.data=view.latestItemView.data=generateDefaultFeed(response);view.user.update({profile:{followers_count:0,displayname:"Your Name",userpage:"",picURL:"http://graphics8.nytimes.com/images/apps/timespeople/none.png"},newsfeed:view.feedView.data,page_activity:[]});drawMemberToolbar(view);app.$("TP_minimize_button").style.display="none"}})}function drawGuestToolbar(view){if(view.minimized){return}if(app.Page&&app.Page.isGetStarted()){drawGetStartedToolbar(view);return}new app.Request(app.Config.default_feed_url,{onSuccess:function(response){var defaultFeed=generateDefaultFeed(response);view.feedDrawerView=new app.ToolbarPanelView(view.feedView,app.$("TP_feed"),"The latest activity in your network...","Latest activity in your network","/packages/html/timespeople/ad.html");view.panels=[view.feedDrawerView];view.feedView.data=view.latestItemView.data=defaultFeed;app.$("TP_left_panel").innerHTML='<h4>Welcome to TimesPeople</h4><a class="TP_toolbar_link" href="'+app.Config.get_started_uri+'">Get Started</a>';app.$("TP_right_panel").innerHTML='<div class="TP_toolbar_item_content"><div  id="TP_get_started_button" class="TP_leftcap TP_rightcap"><span>Recommend</span></div></div>';app.Event.observe(app.$("TP_get_started_button"),"click",onClickRecommendButtonWhenLoggedOut);updateFeed(view);view.container.style.position="absolute";view.container.style.top="0%";persistState("NO")}})}function drawMemberToolbar(view){if(view.minimized){return}view.userView.setElement(app.$("TP_left_panel"));view.userView.draw();view.toolsView.setElement(app.$("TP_activity_on_page"));view.toolsView.draw();view.feedDrawerView=new app.ToolbarPanelView(view.feedView,app.$("TP_feed"),"The latest activity in your network...","Latest activity in your network","/packages/html/timespeople/ad.html");view.panels=[view.feedDrawerView];if(app.Page&&app.Page.isRecommendable()){view.toolsDrawerView=new app.ToolbarPanelView(view.pageActivityView,app.$("TP_right_panel"),"What your friends are saying","","/packages/html/timespeople/annotation_ad.html");view.toolsView.observe("clickAnnotate",function(){view.toolsDrawerView.open()});view.panels.push(view.toolsDrawerView)}view.feedView.data=view.latestItemView.data=view.user.newsfeed;view.pageActivityView.feedView.data=view.user.page_activity;view.toolsView.updatePageActivityCount(view.user.page_activity.length);updateFeed(view);view.container.style.position="";view.container.style.top="0%";view.container.style.top=""}function onClickRecommendButtonWhenLoggedOut(){window.location=app.Config.get_started_uri+"?url="+encodeURIComponent(window.location.href)}function persistState(state){var date=new Date();date.setTime(date.getTime()+31536000000);app.Cookie.set("news_people_toolbar",state,{domain:app.Config.cookie_domain,path:"/",expires:date})}function onOpenPanel(event){var panel=event.memo;if(self.open_panel){self.open_panel.close()}self.open_panel=panel}function onClosePanel(event){var panel=event.memo;self.open_panel=null}function generateDefaultFeed(response){if(response.status!=200){return[{actorDisplayname:"",actorId:0,picURL:"http://graphics8.nytimes.com/images/apps/timespeople/none.png",verb:"",object:"TimesPeople Lets You Share and Discover the Best of NYTimes.com",object_desc:"",object_note:"",object_url:"http://timespeople.nytimes.com/home/about/",object_type:"",object_thumbnail_url:"",date_updated:new Date()}]}var items=JSON.parse(response.responseText);var defaultFeed=[];for(var i=0,item;item=items[i];i++){defaultFeed.push({actorDisplayname:"TimesPeople",actorId:0,picURL:"http://graphics8.nytimes.com/images/apps/timespeople/none.png",verb:"recommended",object:item.title,object_desc:item.object_desc||"",object_note:"",object_url:item.url,object_type:"",object_thumbnail_url:"",date_updated:new Date()})}return defaultFeed}})(TimesPeople);(function(app){app.FeedView=(function(){var activityTemplate='      <tr>        <td class="TP_avatar_cell">          <a href="<%= userpage %>"><img class="TP_avatar" src="<%= picURL %>"></a>        </td>        <td class="TP_object_cell">          <span class="TP_story"><a class="TP_user" href="<%= userpage %>"><%= actorDisplayname %></a> <%= verb %><%= punctuation %> </span>          <span class="TP_object"><a origin="tp" href="<%= object_url %>" title="<%= object %>"><%= truncated_object %></a></span>          <% if (object_note) { %>            <img src="<%= TimesPeople.Config.image_host + TimesPeople.Config.image_path %>toolbar/1.5/annotation.gif">          <% } %>          <% if (display_annotations && object_note) { %>              <p class="TP_annotation">&ldquo;<%= object_note %>&rdquo;</p>          <% } %>        </td>        <td class="TP_timestamp_cell"><%= date %></td>      </tr>    ';function FeedView(element,data){this.element=element||document.createElement("div");this.data=data||{};this.display_annotations=true}FeedView.prototype={draw:function(length){this.element.innerHTML=buildFeed(length,this.data,this.display_annotations)},buildFeedItem:function(activity){return buildFeedItem(activity,this.display_annotations)},setDisplayAnnotations:function(value){this.display_annotations=Boolean(value)}};function buildFeed(length,activities,display_annotations){if(!activities||!activities.length){return""}length=length||activities.length;var html=[];html.push('<table class="TP_feed_content">');for(var i=0;i<length;i++){if(i==25){break}html.push(buildFeedItem(activities[i],display_annotations))}html.push("</table>");return html.join("")}function buildFeedItem(activity,display_annotations){activity=app.Object.extend({},activity);activity.actorDisplayname=activity.actorDisplayname||activity.user_displayname;activity.actorId=activity.actorId||activity.userid;var d=new Date(activity.date_updated);if(d=="Invalid Date"||isNaN(d)){var dateStr=activity.date_updated.replace(/-/g,"/");d=new Date(dateStr)}if(d.getDate()==new Date().getDate()){var mhours=d.getHours();var hours=mhours>12?mhours-12:mhours;if(hours==0){hours=12}var minutes=d.getMinutes();minutes=minutes<10?"0"+minutes:minutes;var period=mhours>=12?"pm":"am";activity.date=hours+":"+minutes+" "+period}else{activity.date=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()]+" "+d.getDate()}if(activity.verb=="commented"){activity.verb="commented on"}activity.object_type=activity.object_type.toLowerCase();activity.article="";activity.object_type="";activity.punctuation="";if(activity.verb){activity.punctuation=":"}if(activity.object_type=="user"){activity.article="";activity.object_type="";activity.punctuation=""}var string_length=(activity.actorDisplayname+activity.verb+activity.article+activity.object_type).length+5;activity.truncated_object=activity.object;activity.userpage=app.Config.host+"/view/user/"+activity.actorId;activity.display_annotations=display_annotations;return app.template(activityTemplate,activity)}return FeedView})();app.FeedContentView=app.FeedView})(TimesPeople);(function(app){app.LocalFeedView=(function(){var activityTemplate='      <tr>        <td class="TP_avatar_cell">          <a href="<%= userpage %>"><img class="TP_avatar" src="<%= picURL %>"></a>        </td>        <td class="TP_object_cell">          <span class="TP_story"><a class="TP_user" href="<%= userpage %>"><%= actorDisplayname %></a> <%= verb %></span>          <% if (object_note) { %>            <img src="<%= TimesPeople.Config.image_host + TimesPeople.Config.image_path %>toolbar/1.5/annotation.gif">          <% } %>          <% if (object_note) { %>            <p class="TP_annotation">&ldquo;<%= object_note %>&rdquo;</p>          <% } %>        </td>      </tr>    ';function LocalFeedView(element,data){this.element=element||document.createElement("div");this.data=data||{}}LocalFeedView.prototype={draw:function(length){this.element.innerHTML=buildFeed(length,this.data)}};function buildFeed(length,activities){if(!activities||!activities.length){return""}length=length||activities.length;var html=[];html.push('<table class="TP_feed_content">');for(var i=0;i<length;i++){if(i==25){break}html.push(buildFeedItem(activities[i]))}html.push("</table>");return html.join("")}function buildFeedItem(activity){activity=app.Object.extend({},activity);activity.actorDisplayname=activity.actorDisplayname||activity.user_displayname;activity.actorId=activity.actorId||activity.userid;activity.userpage=app.Config.host+"/view/user/"+activity.actorId;return app.template(activityTemplate,activity)}return LocalFeedView})()})(TimesPeople);(function(app){app.PageActivityView=(function(){var annotateButton,textArea,_feedView,characterCount,characterLimit=140;var annotationFormTemplate='    <h4><label>      <img src="'+TimesPeople.Config.image_host+TimesPeople.Config.image_path+'toolbar/1.5/annotation.gif">      Add a note to your recommendation    </label></h4>    <textarea id="TP_annotation_form"></textarea>    <div class="opposingFloatControl clearfix">    <div class="element1" id="TP_note_char_count"><p>(optional)</p></div>    <div class="element2">    <button id="TP_annotate_btn" class="TP_leftcap TP_rightcap" >      <span>Recommend</span>    </button>    </div>    </div>    <div id="TP_page_activity_feed"></div>    ';function PageActivityView(feedView){this.element=document.createElement("div");this.feedView=_feedView=feedView;_feedView.display_annotations=true}PageActivityView.prototype={draw:function(length){this.element.innerHTML=annotationFormTemplate;_feedView.draw();app.$("TP_page_activity_feed").appendChild(_feedView.element);annotateButton=app.$("TP_annotate_btn");characterCount=app.$("TP_note_char_count");textArea=app.$("TP_annotation_form");app.Event.observe(annotateButton,"click",onClickAnnotateButton);app.Event.observe(textArea,"keyup",onKeyUp);app.Event.observe(textArea,"focus",onFocus)}};function onKeyUp(){updateCharCount()}function onFocus(){updateCharCount()}function updateCharCount(){characterCount.innerHTML=characterLimit-textArea.value.length+" characters left";if(textArea.value.length>characterLimit-10){characterCount.style.color="#A81817"}else{characterCount.style.color=""}}function onClickAnnotateButton(){var span=annotateButton.getElementsByTagName("span")[0];if(span.innerHTML=="Thanks!"){return false}var title=app.Page&&app.Page.title||document.title;var note=app.$("TP_annotation_form").value;var activity=new app.Activity({verb:"recommended",object:title,object_thumbnail_url:app.Page.getThumbnail(),object_note:app.$("TP_annotation_form").value.substr(0,characterLimit)});var item=activity.makeDisplayReady();updateFeed(item);app.$("TP_annotation_form").value="";span.innerHTML="Thanks!";window.setTimeout(function(){span.innerHTML="Recommend"},2000)}function updateFeed(item){_feedView.data.unshift(item);_feedView.draw(_feedView.data.length)}return PageActivityView})()})(TimesPeople);(function(app){app.UserView=(function(){function UserView(user){this.user=user;this.user.register(this)}UserView.prototype={setElement:function(element){this.element=element},draw:function(){if(this.element){this.element.innerHTML=buildUser(this.user)}},update:function(msg){switch(msg.event){case"attributes updated":case"user saved":app.console.log("update user name view");this.draw();break}}};function buildUser(user){var template_object=app.Object.extend({},user.profile);template_object.people_count=buildPeople(user);template_object.displayname=app.truncate(template_object.displayname,20);template_object.followers_url=user.getFollowersPageURI();return app.template(template,template_object)}function buildPeople(user){var number=user.profile.followers_count;var people=(number==1)?"Follower":"Followers";return number+" "+people}var template='      <div class="TP_user">       <a href="<%= userpage %>"><img class="TP_avatar you" src="<%= picURL %>"></a>       <h4 class="TP_header">        <% if (userpage) { %>          <a href="<%= userpage %>">            <%= displayname %>          </a>        <% } else { %>          <%= displayname %>        <% } %>      </h4>       <p class="TP_following_count">        <% if (followers_url) { %>          <a href="<%= followers_url %>">            <%= people_count %>          </a>        <% } else { %>          <%= people_count %>        <% } %>      </p>      </div>    ';return UserView})()})(TimesPeople);(function(app){app.ToolsView=(function(){function ToolsView(user){var events={},recommendButton,annotateButton;app.Object.extend(this,{user:user,setElement:function(element){this.element=element},draw:function(){if(!this.element){throw"You must provide an element: call setElement(el) before calling draw()"}this.element.innerHTML='          <div class="TP_split_button" id="TP_toolbar_buttons">          <button id="TP_toolbar_recommend_btn" class="TP_leftcap TP_disabled" disabled="disabled" >            <span>Recommend</span>          </button><button id="TP_toolbar_annotate_btn" class="TP_bevel TP_rightcap TP_disabled" disabled="disabled">            <span><img src="'+TimesPeople.Config.image_host+TimesPeople.Config.image_path+'toolbar/1.5/annotation.gif"></img>          </button>          </div>          <div id="TP_page_activity_count_button" class="TP_capsule_button" style="display:none"><span id="TP_page_activity_count">...</span></div>          ';recommendButton=app.$("TP_toolbar_recommend_btn");annotateButton=app.$("TP_toolbar_annotate_btn");app.Event.observe(annotateButton,"click",onClickAnnotateButton);app.Event.observe(recommendButton,"click",onClickRecommendButton);if(app.Page&&app.Page.isRecommendable()){enableButton()}},updatePageActivityCount:function(count){if(count>0){var countView=app.$("TP_page_activity_count");countView.innerHTML=count;$("TP_page_activity_count_button").style.display=""}},observe:function(event,fn){events[event]=fn}});function enableButton(){recommendButton.disabled=false;recommendButton.className=recommendButton.className.replace("TP_disabled","");annotateButton.disabled=false;annotateButton.className=annotateButton.className.replace("TP_disabled","")}function onClickRecommendButton(event){var span=recommendButton.getElementsByTagName("span")[0];if(span.innerHTML=="Thanks!"){return false}var title=app.Page&&app.Page.title||document.title;new app.Activity("recommended",app.Page.getTitle(),app.Page.getDescription(),app.Page.getUrl(),app.Page.getThumbnail());dcsMultiTrack&&dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/Article-Tool-Share-Recommend-Toolbar.html","WT.ti","Article-Tool-Share-Recommend-Toolbar ","WT.z_dcsm","1");span.innerHTML="Thanks!";window.setTimeout(function(){span.innerHTML="Recommend"},2000);event.stopPropagation();event.preventDefault()}function onClickAnnotateButton(event){fire("clickAnnotate");event.stopPropagation();event.preventDefault()}function fire(event){if(typeof events[event]==="function"){events[event]()}}}return ToolsView})()})(TimesPeople);(function(app){app.ToolbarPanelView=(function(){function ToolbarPanelView(contentView,element,tooltipText,openText,adUrl){var resizing,newY,oldY,instance=this,closed=true,drawer,content,tooltip,tab,teaser,teasing,toggle,ad,drawer_outter=document.createElement("div"),feedHeight="232px";this.contentView=contentView;draw();drawer=app.getElementsByClassName("TP_drawer",drawer_outter)[0];tooltip=app.getElementsByClassName("TP_drawer_tooltip",drawer_outter)[0];tab=app.getElementsByClassName("TP_drawer_tab",drawer_outter)[0];teaser=app.getElementsByClassName("TP_teaser",drawer_outter)[0];toggle=app.getElementsByClassName("TP_drawer_toggle",drawer_outter)[0];ad=app.getElementsByClassName("TP_tile_ad",drawer_outter)[0];this.handle=app.getElementsByClassName("TP_feed_handle",drawer_outter)[0];this.toggleDrawer=function toggleDrawer(e){app.console.log("toggle feed",e);if(closed){open()}else{close()}};this.open=open;this.close=close;app.Event.observe(element,"mouseenter",onMouseEnter);app.Event.observe(element,"mouseleave",onMouseLeave);app.Event.observe(element,"click",onClickToggle);app.Event.observe(tab,"click",onClickToggle);app.Event.observe(this.handle,"mousedown",onMouseDown);function onMouseEnter(e){app.console.log("enter");tease();element.className+=" TP_toolbar_item_highlight"}function onMouseLeave(e){app.console.log("leave");untease();element.className=element.className.replace(" TP_toolbar_item_highlight","")}function onClickToggle(e){app.console.log(e.target);app.console.log(e.target.href);app.console.log(e.target.parentNode.href);switch(true){case /TP_drawer_toggle/.test(e.target.className):case /TP_drawer_tab/.test(this.className):case closed&&(!e.target.href&&!e.target.parentNode.href):instance.toggleDrawer(e);e.preventDefault();e.stopPropagation()}}function onMouseDown(e){startResize(e);e.preventDefault();e.stopPropagation();document.body.focus();document.onselectstart=function(){return false};if(e.srcElement){e.srcElement.ondragstart=function(){return false}}return false}function onMouseMove(e){resize(e);e.preventDefault();e.stopPropagation()}function onMouseUp(e){stopResize(e);e.preventDefault();e.stopPropagation()}function draw(){drawer_outter.className="TP_drawer_outter";drawer_outter.innerHTML=app.template(template,{tooltipText:tooltipText,openText:openText});element.appendChild(drawer_outter);var content=app.getElementsByClassName("TP_drawer_content",drawer_outter)[0];content.appendChild(contentView.element)}function tease(){teasing=window.setTimeout(showTooltip,1000)}function untease(){window.clearTimeout(teasing);tooltip.style.display="none";teaser.className=teaser.className.replace(/\btease|shadow|border-shadow\b/g,"")}function showTooltip(){tooltip.style.display="block";teaser.className+=app.hasNativeShadow?" tease shadow":" tease border-shadow"}function open(){untease();app.Event.stopObserving(element,"mouseenter",onMouseEnter);app.Event.stopObserving(element,"mouseleave",onMouseLeave);instance.contentView.draw();tab.style.display="block";drawer.style.height=(feedHeight);drawer.className+=app.hasNativeShadow?" open shadow":" open border-shadow";toggle.className="TP_drawer_toggle_up";closed=false;app.Event.fire(document.body,"ToolbarPanelView:open",instance);ad.innerHTML=adTemplate(adUrl)}function close(){if(closed){return}app.Event.observe(element,"mouseenter",onMouseEnter);app.Event.observe(element,"mouseleave",onMouseLeave);tab.style.display="none";feedHeight=drawer.style.height||feedHeight;drawer.style.height=null;drawer.className=drawer.className.replace(/\s*open|shadow|border-shadow/g,"");toggle.className="TP_drawer_toggle";closed=true;app.Event.fire(document.body,"ToolbarPanelView:close",instance)}function startResize(e){app.console.log("start resize");resizing=true;app.Event.observe(document,"mouseup",onMouseUp);app.Event.observe(document,"mousemove",onMouseMove)}function resize(e){app.console.log("resizing...");if(resizing){newY=app.Event.pointer(e).y;oldY=oldY||newY;var delta=oldY<newY?newY-oldY:-(oldY-newY);drawer.style.height=parseInt(drawer.style.height,10)+delta+"px";oldY=newY;if(window.opera){var n=document.createTextNode(" ");content.appendChild(n);window.setTimeout(function(){n.parentNode.removeChild(n)},10)}}}function stopResize(e){app.console.log("stop resize");resizing=false;app.Event.stopObserving(document,"mousemove",onMouseMove);app.Event.stopObserving(document,"mouseup",onMouseUp)}}var template='      <div class="TP_drawer">        <div class="TP_drawer_content TP_drawer_content"></div>        <div class="TP_feed_handle">          <div class="TP_groove"></div>        </div>      </div>      <div class="TP_drawer_tooltip">        <div class="TP_drawer_tooltip_inner">        <%= tooltipText %>        </div>      </div>      <div class="TP_drawer_tab">        <div class="TP_tile_ad"></div>        <h4><%= openText %></h4>      </div>      <div class="TP_teaser"></div>      <div class="TP_drawer_toggle"></div>    ';function adTemplate(adUrl){return'<iframe width="88" height="31" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" src="'+app.Config.ad_host+adUrl+'"></iframe>'}return ToolbarPanelView})()})(TimesPeople);(function(app){app.MemberToolsItemView=function MemberToolsItemView(toolbar){this.toolbar=toolbar;this.toolbar.minimizedView=this;var memberTools=app.$("memberTools");var memberLinks=app.$("memberLinks");if(memberTools){memberTools.innerHTML+='<li id="TP_restore_button" style="display:none"><a>TimesPeople</a></li>';var login_iframe=memberTools.getElementsByTagName("iframe")[0];if(login_iframe){var iframeStyle=login_iframe.style;iframeStyle.width="400px";iframeStyle.position="relative";iframeStyle.top="2px";iframeStyle.marginRight="-4px";memberTools.style.paddingTop="0"}}else{if(memberLinks){memberLinks.innerHTML+='- <a id="TP_restore_button" style="display:none">TimesPeople</a>'}else{var page=app.$("shell")||document.body;var button=document.createElement("div");var coords=page.id=="shell"?"top: -14px; right: 0pt;":"top: 0px; right: 0pt;";button.innerHTML='<a id="TP_restore_button" style="display:none;position: absolute; '+coords+' font-family: Arial, Helvetica, sans-serif;font-size:10px;">TimesPeople</a>';page.insertBefore(button,page.firstChild)}}var self=this;this.button=app.$("TP_restore_button");app.Event.observe(this.button,"click",function(){self.toolbar.restore()},false)};app.MemberToolsItemView.prototype={toggle:function(){this.button.style.display=this.button.style.display==""?"none":""},show:function(){this.button.style.display=""}}})(TimesPeople);(function(app){var _ran,_user,_view,anchorLinkPattern=/#.+/;app.ToolbarController=function ToolbarController(user,view){_ToolbarController.initialize(user,view);return _ToolbarController};var _ToolbarController={initialize:function(user,view){_user=user;_view=view;_minimizedView=new app.MemberToolsItemView(_view)},run:function(){app.state=app.state||app.Cookie.get("news_people_toolbar");if(app.state=="NO"){runMinimized()}else{runMaximized()}}};function runMinimized(){_view.minimized=true;_minimizedView.show()}function runMaximized(){respectAnchorLinks();_view.draw()}function respectAnchorLinks(){app.Event.observe(document.body,"click",onClickWindow)}function onClickWindow(event){var href,position,hrefNode=event.target.getAttributeNode("href");if(hrefNode&&(href=hrefNode.nodeValue)){position=href.search(anchorLinkPattern);if(position===-1){return}var name=href.substring(position+1);var destination=app.$(name)||document.getElementsByName(name)[0];if(destination){var valueT=0,element=destination;do{valueT+=element.offsetTop||0}while(element=element.offsetParent);window.setTimeout(function(){window.scroll(0,valueT-45)},0)}}}})(TimesPeople);(function(app){function run(){if(app.isReady()&&!app.ran){var user=new app.User(),userView=new app.UserView(user),feedView=new app.FeedView(),latestItemView=new app.FeedView(),localFeedView=new app.LocalFeedView(),pageActivityView=new app.PageActivityView(localFeedView),toolsView=new app.ToolsView(user),toolbarView=new app.ToolbarView(user,latestItemView,feedView,userView,toolsView,pageActivityView),toolbarController=new app.ToolbarController(user,toolbarView);latestItemView.setDisplayAnnotations(false);toolbarController.run();user.load();app.ran=true}else{setTimeout(run,10)}}run()})(TimesPeople);NYTD.HomepageRefresh=(function(){var timeoutPeriod=900000;var refresh=function(){var expTime=new Date();expTime.setTime(expTime.getTime()+60000);document.cookie="autorefresh=1; expires="+expTime.toGMTString()+"; path=/";document.location.reload();};var timeoutID,timeoutState,timeoutTime;var doTimerStart=function(){timeoutID=window.setTimeout(refresh,timeoutPeriod);timeoutState="running";var now=(new Date()).getTime();timeoutTime=new Date(now+timeoutPeriod);};var doTimerStop=function(){window.clearTimeout(timeoutID);timeoutID=null;timeoutState="stopped";timeoutTime=0;};doTimerStart();var idCounter=0;var registrants={};var register=function(callerName){var identifier=callerName||"<anonymous>";idCounter++;registrants["id"+idCounter]={name:identifier,started:true};return idCounter;};var stop=function(id){registrants["id"+id].started=false;if(timeoutID!==null){doTimerStop();}};var start=function(id){registrants["id"+id].started=true;if(timeoutID===null){var startTimer=true;for(var prop in registrants){if(registrants.hasOwnProperty(prop)){startTimer=startTimer&&registrants[prop].started;}}if(startTimer){doTimerStart();}}};var dumpState=function(){var now=new Date();if(typeof console!="undefined"&&console.log){console.log("Timer is "+timeoutState+".");if(timeoutTime>0){var diff=timeoutTime.getTime()-now.getTime();diff=Math.floor(diff/1000);var minutes=Math.floor(diff/60);var seconds=diff-(minutes*60);console.log(""+minutes+" minutes, "+seconds+" seconds remaining.");console.log("Approximate refresh time: "+timeoutTime+".");console.log("Current time: "+now);}for(var key in registrants){if(registrants.hasOwnProperty(key)){var id=key.substring("2");var line="ID "+id;if(registrants[key].name!==""){line+=" ("+registrants[key].name+")";}line+=": "+(registrants[key].started?"running":"stopped");console.log(line);}}}};return{register:register,start:start,stop:stop,manualRefresh:refresh,currentStatus:dumpState};})();var pageTimer=(function(){var id=NYTD.HomepageRefresh.register("window.pageTimer");var setToStart=true;var doStart=function(){NYTD.HomepageRefresh.start(id);setToStart=true;};var doStop=function(){NYTD.HomepageRefresh.stop(id);setToStart=false;};return{start:function(){doStart();},stop:function(){doStop();},toggle:function(){if(setToStart){doStop();}else{doStart();}}};})();(function(){function resizeColumns(){function resize(layout){var parentLayout=layout.up(".layout");if(!parentLayout||parentLayout.hasClassName("noBackground")){return;}var parentColumn=layout.up(".column");if(!parentColumn){return;}var targetLayout=parentColumn.childElements().last();if(targetLayout.hasClassName("adjusted")){return;}var delta=parentLayout.getHeight()-parentColumn.getHeight()-parseInt(parentLayout.getStyle("paddingTop"),10)-parseInt(targetLayout.getStyle("paddingTop"),10);if(delta>0){var paddingDiv=new Element("div");parentColumn.appendChild(paddingDiv);paddingDiv.setStyle({"height":delta+"px"}).addClassName("adjusted");}}$$(".aColumn, .bColumn, .abColumn").invoke("addClassName","column");$$(".spanAB, .wideB, .wideA, .subColumn-2").invoke("addClassName","layout").each(resize);}if(window.addEventListener){window.addEventListener("load",resizeColumns,false);}else{if(window.attachEvent){window.attachEvent("onload",resizeColumns);}}})();NYTD.Cookies={getOrCreate:function(cookieName){var cookies=document.cookie.split(";");var nameSearchString=cookieName+"=";var cookieValueString="";for(var c=0,len=cookies.length;c<len;++c){var cur=cookies[c];cur=cur.replace(/^ */,"");if(cur.indexOf(nameSearchString)==0){cookieValueString=cur.substring(nameSearchString.length,cur.length);}}var Cookie=function(name,str){var checkKey="creator";var checkVal="NYTD.Cookies";var cookieName=name;var cookieString=str||"";var keyValPairs={};if(str!=""){var checkStr=checkKey+"|"+checkVal;var regex=new RegExp(checkStr,"g");cookieString.replace(regex,"");var pairs=cookieString.split("^");for(var p=0,len=pairs.length;p<len;++p){var cur=pairs[p];var vals=cur.split("|");keyValPairs[vals[0]]=vals[1];}}var set=function(expirationMillis){var exp=new Date();var expirationOffset=expirationMillis||31536000000;var len=0;var keyvals=[];if(keyValPairs[checkKey]){delete keyValPairs[checkKey];}for(key in keyValPairs){if(keyValPairs.hasOwnProperty(key)){keyvals.push(key+"|"+keyValPairs[key]);len++;}}keyvals.push(checkKey+"|"+checkVal);if(len>0){exp.setTime(exp.getTime()+expirationOffset);}else{exp.setTime(exp.getTime()-86400000);}var expires="; expires="+exp.toGMTString();document.cookie=cookieName+"="+keyvals.join("^")+expires+"; domain=.nytimes.com; path=/";};this.lookup=function(key){return keyValPairs[key];};this.add=function(obj,expiration){for(key in obj){if(obj.hasOwnProperty(key)){keyValPairs[key]=obj[key];}}set(expiration);};this.remove=function(){for(var i=0,arg;arg=arguments[i];++i){if(keyValPairs[arg]){delete keyValPairs[arg];}}set();};};return new Cookie(cookieName,cookieValueString);},cookiesEnabled:function(){var name="NYTCookiesEnabled";var exp=new Date();exp.setTime(exp.getTime()+10000);document.cookie=name+"=test; expires="+exp.toGMTString();var result=(document.cookie.indexOf(name)!==-1);if(result){exp=new Date();exp.setTime(exp.getTime()-10000);document.cookie=name+"=test; expires="+exp.toGMTString();}return result;}};NYTD.BCVideoAsyncManager=(function(){var scriptLoaded=false;var callbacks=[];var register=function(func){if(scriptLoaded){window.setTimeout(func,0);}else{callbacks.push(func);}};var doCallbacks=function(){for(var i=0,len=callbacks.length;i<len;++i){window.setTimeout(callbacks[i],0);}};var scriptElem=document.createElement("script");scriptElem.type="text/javascript";scriptElem.src="http://admin.brightcove.com/js/BrightcoveExperiences_all.js";scriptElem.async=true;scriptElem.onreadystatechange=function(){if(this.readyState=="complete"){scriptLoaded=true;doCallbacks();}};scriptElem.onload=function(e){scriptLoaded=true;doCallbacks();};var s=document.getElementsByTagName("script")[0];window.setTimeout(function(){s.parentNode.insertBefore(scriptElem,s);},1000);return{registerCallback:register};})();NYTD.TimesCastManager=(function(){var bcExperience=null;var videoModule=null;var adModule=null;var midrollAdObj=null;var videoId=0;var videoDate="";var refreshTimerId=NYTD.HomepageRefresh.register("timescast player");var init=function(bcExperience){videoModule=bcExperience.getModule(APIModules.VIDEO_PLAYER);videoModule.addEventListener(BCMediaEvent.BEGIN,function(e){NYTD.HomepageRefresh.stop(refreshTimerId);var adSvcUrl="http://video.nytimes.com/svc/ads/video/SinglePlayerVideoAd.js";var adSvcQuery="callback=NYTD.TimesCastManager.adHandler&pagename=www.nytimes.com/timescastad/video&positions=VideoPlayerAd,ADX_CLIENTSIDE&ver="+Math.random();var scriptElem=document.createElement("script");scriptElem.setAttribute("src",adSvcUrl+"?"+adSvcQuery);scriptElem.setAttribute("type","text/javascript");document.getElementsByTagName("head")[0].appendChild(scriptElem);NYTD.TimesCastManager.Tracking.trackPlay(videoId,videoDate);});videoModule.addEventListener(BCMediaEvent.COMPLETE,function(e){NYTD.HomepageRefresh.start(refreshTimerId);NYTD.TimesCastManager.Tracking.trackStop(videoId,videoDate);});adModule=bcExperience.getModule(APIModules.ADVERTISING);adModule.enableOverrideAds(true);adModule.setStayInFullScreen(true);var experienceModule=bcExperience.getModule(APIModules.EXPERIENCE);experienceModule.addEventListener(BCExperienceEvent.CONTENT_LOAD,function(){var socialModule=bcExperience.getModule(APIModules.SOCIAL);videoId=videoModule.getCurrentVideo().referenceId;var videoDateObj=videoModule.getCurrentVideo().publishedDate;videoDate=""+(videoDateObj.getMonth()+1)+"/"+videoDateObj.getDate()+"/"+videoDateObj.getFullYear();socialModule.setEmbedCode('<iframe width="480" height="373" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="nyt_video_player" title="New York Times Video - Embed Player" src="http://graphics8.nytimes.com/bcvideo/1.0/iframe/embed.html?videoId='+videoId+'&playerType=embed"></iframe>');var videoDateMonth=(videoDateObj.getMonth()+1)<10?"0"+(videoDateObj.getMonth()+1):videoDateObj.getMonth();var videoDateDay=(videoDateObj.getDate()+1)<10?"0"+(videoDateObj.getDate()+1):videoDateObj.getDate();socialModule.setLink("http://video.nytimes.com/video/"+videoDateObj.getFullYear()+"/"+videoDateMonth+"/"+videoDateDay+"/continuous/"+videoId+"/timescast.html");var cuepointModule=bcExperience.getModule(APIModules.CUE_POINTS);cuepointModule.addEventListener("cuePoint",function(e){if(e.cuePoint.name==="midroll1"){if(midrollAdObj){showAndTrackAd();}else{adModule.resumeAfterExternalAd();}}});});experienceModule.addEventListener(BCExperienceEvent.ENTER_FULLSCREEN,function(e){NYTD.TimesCastManager.Tracking.trackGoBig(videoId,videoDate);});experienceModule.addEventListener(BCExperienceEvent.EXIT_FULLSCREEN,function(e){NYTD.TimesCastManager.Tracking.trackGoSmall(videoId,videoDate);});};var showAndTrackAd=function(){if(midrollAdObj["ADX_CLIENTSIDE"]){var trackingContainer=document.getElementById("timescastTrack");if(trackingContainer){trackingContainer.innerHTML=midrollAdObj["ADX_CLIENTSIDE"];}}if(midrollAdObj["VideoPlayerAd"]){adModule.showAd(midrollAdObj["VideoPlayerAd"]);return;}};var parseAdResponse=function(adRespObj){if(adRespObj){midrollAdObj=adRespObj;}};return{initialize:function(id){init(brightcove.getExperience("timescastVideoPlayerObj"));},adHandler:function(obj){parseAdResponse(obj);}};})();NYTD.TimesCastManager.Tracking={trackPlay:function(id,dateStr){dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/video/TimesCast/Play.html","WT.ti","Video TimesCast Play","WT.cg_n","Video","WT.videoCategory","TimesCast","WT.videoEvent","play","WT.videoLoad","user","WT.videoName","TimesCast: "+dateStr,"WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Play","WT.z_vid",id,"WT.z_vpt","TimesCast","WT.z_dcsm","0");},trackStop:function(id,dateStr){dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/video/TimesCast/Finish.html","WT.ti","Video TimesCast FinishStop","WT.cg_n","Video","WT.videoCategory","TimesCast","WT.videoEvent","finish","WT.videoLoad","null","WT.videoName","TimesCast: "+dateStr,"WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Finish","WT.z_vid",id,"WT.z_vpt","TimesCast","WT.z_dcsm","0");},trackGoBig:function(id,dateStr){dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/video/TimesCast/GoBig.html","WT.ti","Video TimesCast GoBig","WT.cg_n","Video","WT.videoCategory","TimesCast","WT.videoEvent","Go Big","WT.videoLoad","null","WT.videoName","TimesCast: "+dateStr,"WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Go","WT.z_vid",id,"WT.z_vpt","TimesCast","WT.z_dcsm","1");},trackGoSmall:function(id,dateStr){dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/video/TimesCast/GoSmall.html","WT.ti","Video TimesCast GoSmall","WT.cg_n","Video","WT.videoCategory","TimesCast","WT.videoEvent","Go Small","WT.videoLoad","null","WT.videoName","TimesCast: "+dateStr,"WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Go","WT.z_vid",id,"WT.z_vpt","TimesCast","WT.z_dcsm","1");}};NYTD.TimesCastManager.NativePlayer=(function(){var videoId,videoDate;var init=function(){var apiCall="http://api.brightcove.com/services/library?command=find_video_by_reference_id&reference_id="+NYTD.TimesCastVideoId+"&token=cE97ArV7TzqBzkmeRVVhJ8O6GWME2iG_bRvjBTlNb4o.&callback=NYTD.TimesCastManager.NativePlayer.apiHandler";var apiScript=document.createElement("script");apiScript.setAttribute("src",apiCall);document.getElementsByTagName("head")[0].appendChild(apiScript);};var handleApiResponse=function(obj){if(!obj){return false;}var videoFile="";if(obj.renditions){var encodes=obj.renditions;for(var i=0;i<encodes.length;++i){var cur=encodes[i];if(cur.videoCodec=="H264"&&cur.referenceId.indexOf("video_well_s_nb")!=-1){videoFile=cur.url;break;}}}$$(".timescastVideoPlayer")[0].innerHTML='<video id="timesCastNative" src="'+videoFile+'" controls poster="'+obj.videoStillURL+'" style="height:190px;width:337px">';videoId=obj.referenceId;var videoDateObj=new Date(obj.publishedDate);videoDate=""+(videoDateObj.getMonth()+1)+"/"+videoDateObj.getDate()+"/"+videoDateObj.getFullYear();var videoPlayer=$("timesCastNative");videoPlayer.observe("play",function(){NYTD.HomepageRefresh.stop(refreshTimerId);dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/video/TimesCast HTML5/Play.html","WT.ti","Video TimesCast HTML5 Play","WT.cg_n","Video","WT.videoCategory","TimesCast","WT.videoEvent","play","WT.videoLoad","user","WT.videoName","TimesCast: "+dateStr,"WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Play","WT.z_vid",id,"WT.z_vpt","TimesCast HTML5","WT.z_dcsm","0");});videoPlayer.observe("ended",function(){NYTD.HomepageRefresh.start(refreshTimerId);dcsMultiTrack("DCS.dcssip","www.nytimes.com","DCS.dcsuri","/video/TimesCast HTML5/Finish.html","WT.ti","Video TimesCast HTML5 FinishStop","WT.cg_n","Video","WT.videoCategory","TimesCast","WT.videoEvent","finish","WT.videoLoad","null","WT.videoName","TimesCast: "+dateStr,"WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Finish","WT.z_vid",id,"WT.z_vpt","TimesCast HTML5","WT.z_dcsm","0");});};return{initialize:function(){init();},apiHandler:function(obj){handleApiResponse(obj);}};})();NYTD.TimesCastManager.turnkey=function(){if(navigator.userAgent.indexOf("AppleWebKit")>=0&&("createTouch" in document)){NYTD.TimesCastManager.NativePlayer.initialize();}else{var tcPlayerObj=$("timescastVideoPlayerObj");NYTD.BCVideoAsyncManager.registerCallback(function(){brightcove.createExperience(tcPlayerObj,tcPlayerObj,false);});}};NYTD.HPChannelPlayer=(function(){var playerObjectId="channelPlayer";var playlistId;var experienceModule=null;var playerModule=null;var contentModule=null;var adModule=null;var videoList=[];var selectedThumbEl=null;var moreVideoPromoShowing=false;var refreshTimerId=NYTD.HomepageRefresh.register("pocket channel player");var adxTrackingContainer=null;var adxTrackingContainerId=null;var init=function(bcObj){experienceModule=bcObj.getModule(APIModules.EXPERIENCE);playerModule=bcObj.getModule(APIModules.VIDEO_PLAYER);contentModule=bcObj.getModule(APIModules.CONTENT);adModule=bcObj.getModule(APIModules.ADVERTISING);experienceModule.addEventListener(BCExperienceEvent.TEMPLATE_READY,templateReadyHandler);playerModule.addEventListener(BCVideoEvent.STREAM_START,streamStartHandler);playerModule.addEventListener(BCVideoEvent.VIDEO_START,mediaStartHandler);playerModule.addEventListener(BCVideoEvent.VIDEO_COMPLETE,videoCompleteHandler);experienceModule.addEventListener(BCExperienceEvent.CONTENT_LOAD,contentLoadedHandler);experienceModule.addEventListener("enterFullScreen",function(){trackVideo("go","GoBig","null",1);});experienceModule.addEventListener("exitFullScreen",function(){trackVideo("go","GoSmall","null",1);});setADXTrackingContainer();};var setADXTrackingContainer=function(){adxTrackingContainerId="adxTrackingContainer_"+new Date().getTime();if(!adxTrackingContainer){adxTrackingContainer=document.createElement("div");adxTrackingContainer.setAttribute("id",adxTrackingContainerId);adxTrackingContainer.setAttribute("visibility","hidden");document.getElementsByTagName("body")[0].appendChild(adxTrackingContainer);}};var templateReadyHandler=function(e){var getSection=function(tagArr){for(var i=0;i<tagArr.length;i++){if(tagArr[i].indexOf("nyto_")>=0){return tagArr[i].substring(5);}}return"";};var playlistObj=contentModule.getPlaylist(playlistId,"referenceId");var limit=(playlistObj.videoIds.length>4)?4:playlistObj.videoIds.length;for(var i=0;i<limit;i++){var curVideo=contentModule.getVideo(playlistObj.videoIds[i]);curVideo.section=getSection(curVideo.tags);videoList.push(curVideo);}renderTemplate();};var renderTemplate=function(){for(var i=0,len=videoList.length;i<len;++i){var videoData=videoList[i],thumbEl=$("thumbContainer-"+i);thumbEl.index=i;thumbEl.update(""+'<img src="'+videoData.thumbnailURL+'" width="75" height="50" alt="'+videoData.displayName.escapeHTML()+'" />'+'<div class="videoThumbOverlay"></div>'+'<div class="videoThumbPlayOverlay kicker">PLAY</div>'+'<div class="kicker section">'+videoData.section+"</div>"+'<div class="videoThumbPointerIcon"></div>');if(i===0){selectedThumbEl=thumbEl;selectThumb(thumbEl);selectedThumbEl.addClassName("playing");NYTD.Video.Share.initializeShareSFHP(videoData,$("channelPlayer"));}}addTabEventHandlers();};var selectThumb=function(thumbEl){var currentIndex=thumbEl.index,videoData=videoList[currentIndex];selectedThumbEl.removeClassName("selected");selectedThumbEl=thumbEl;selectedThumbEl.addClassName("selected");setMetaData(currentIndex);};var setMetaData=function(index){var videoData=videoList[index];$("sectionName").update(videoData.section);$("videoTitle").update(videoData.displayName);$("videoShortDesc").update(videoData.shortDescription);};var addTabEventHandlers=function(){for(var i=0;i<4;++i){var thumbEl=$("thumbContainer-"+i);thumbEl.observe("mouseover",(function(index){return function(e){mouseOverTabHandler(index);};})(i));thumbEl.observe("mouseout",(function(index){return function(e){mouseOutTabHandler(index);};})(i));thumbEl.observe("click",(function(index){return function(e){clickTabHandler(index);};})(i));}};var mouseOverTabHandler=function(index){if(index!=selectedThumbEl.index){var hoverThumb=$("thumbContainer-"+index);hoverThumb.addClassName("selected");$("infoSection").update(videoList[index].section);$("infoTitle").update(videoList[index].displayName);$("infoDesc").update(videoList[index].longDescription);$("infoOverlay").style.display="block";}};var mouseOutTabHandler=function(index){if(index!=selectedThumbEl.index){var hoverThumb=$("thumbContainer-"+index);hoverThumb.removeClassName("selected");$("infoOverlay").style.display="none";}};var clickTabHandler=function(index){playVideo(index,"user");$("infoOverlay").style.display="none";};var playVideo=function(index,caller){selectedThumbEl.removeClassName("playing");var thumbEl=$("thumbContainer-"+index);selectThumb(thumbEl);selectedThumbEl.addClassName("playing");$("titleInfoContainer").addClassName("playing");playerModule.loadVideo(videoList[index].id);if(moreVideoPromoShowing){$("screenCover").addClassName("hidden");}NYTD.Video.Share.setCurrentVideo(videoList[index]);};var streamStartHandler=function(e){trackVideo("play","PlayStart","null",0);};var mediaStartHandler=function(e){NYTD.HomepageRefresh.stop(refreshTimerId);if(moreVideoPromoShowing){$("screenCover").addClassName("hidden");moreVideoPromoShowing=false;}$("titleInfoContainer").addClassName("playing");};var videoCompleteHandler=function(e){trackVideo("finish","FinishStop","null",0);NYTD.HomepageRefresh.start(refreshTimerId);if((1+selectedThumbEl.index)<videoList.length){playVideo((1+selectedThumbEl.index),"autoplay");}else{$("screenCover").removeClassName("hidden");moreVideoPromoShowing=true;$("titleInfoContainer").removeClassName("playing");}};var contentLoadedHandler=function(e){if(!adModule.getExternalAdsEnabled()){adModule.enableExternalAds(true);adModule.addEventListener("externalAd",externalAdEvent);}};var externalAdEvent=function(e){var adUrl="http://video.nytimes.com/svc/ads/video/SinglePlayerVideoAd.js?callback=NYTD.HPChannelPlayer.adResponseHandler&positions=VideoPlayerAd,ADX_CLIENTSIDE,Inv1,Inv2,Inv3&pagename=www.nytimes.com/homepage/video&ver="+Math.random();var scriptElem=new Element("script");scriptElem.type="text/javascript";scriptElem.src=adUrl;document.getElementsByTagName("head")[0].appendChild(scriptElem);};var adRespHandler=function(adObj){var jsonResp=adObj||{};if(jsonResp["ADX_CLIENTSIDE"]){jsonResp["ADX_CLIENTSIDE"]=jsonResp["ADX_CLIENTSIDE"]+"";var adxTrackerRegex=/^\s*(<img.+src=['"])(.+)$/gi;var matches=adxTrackerRegex.exec(jsonResp["ADX_CLIENTSIDE"]);if(matches&&matches.length==3){jsonResp["ADX_CLIENTSIDE"]=matches[1]+"http://www.nytimes.com"+matches[2];}}var didPlayVideoAd=false;for(positionName in jsonResp){if(positionName=="VideoPlayerAd"){if(jsonResp.VideoPlayerAd){adModule.showAd(jsonResp.VideoPlayerAd);didPlayVideoAd=true;}else{didPlayVideoAd=false;}}else{if(adxTrackingContainer){if(jsonResp[positionName]){adxTrackingContainer.innerHTML=jsonResp[positionName];}}}}if(!didPlayVideoAd){adModule.resumeAfterExternalAd();}};var trackVideo=function(eventName,subType,actor,dcsm){var curVideo=videoList[selectedThumbEl.index];try{dcsMultiTrack("WT.videoName",curVideo.displayName,"WT.videoCategory",curVideo.section,"WT.videoLoad",actor,"WT.videoEvent",eventName,"WT.z_vid",curVideo.referenceId,"WT.z_vpt","Homepage","WT.z_gpt","Multimedia","WT.z_gpst","Video","WT.z_gpsst","Video-Play","WT.ti","Video Homepage "+subType,"WT.z_dcsm",dcsm);}catch(e){}};return{setup:function(options){playlistId=options.playlistId;var callbackFunc=function(){var player=$(playerObjectId);var newParam=new Element("param");newParam.name="@playlistTabs";newParam.value="ref:"+playlistId;player.appendChild(newParam);brightcove.createExperience(player,player,false);NYTD.Video.Share.initTimesPeople();};if(navigator.userAgent.indexOf("AppleWebKit")>=0&&("createTouch" in document)){var iframeTag='<iframe src="http://graphics8.nytimes.com/bcvideo/1.0/iframe/nativeVideo.html?playlistId='+playlistId+'" id="nyt_video_player" width="337" height="393" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>';$("multiPlayer").innerHTML=iframeTag;}else{NYTD.BCVideoAsyncManager.registerCallback(callbackFunc);}},initialize:function(){init(brightcove.getExperience(playerObjectId));},adResponseHandler:adRespHandler};})();NYTD.ArticleShareToolsPostToNetwork=function(network,meta){function postPopUp(url,name,params){var win=window.open(url,name,params);}var openers={newsvine:function(){var keywords=meta.getSection();if(typeof(getShareSubSection)=="function"){if(meta.getSubSection()!=""){keywords+=","+meta.getSubSection();}}if(meta.getKeywords()!=""){keywords+=","+meta.getKeywords();}postPopUp("http://www.newsvine.com/_wine/save?ver=2&popoff=0&aff=nytimes&t="+keywords+"&e="+meta.getDescription()+"&h="+meta.getHeadline()+"&u="+meta.getURL("newsvine"),"newsvine","toolbar=0,status=0,height=445,width=650,scrollbars=yes,resizable=yes");s_code_linktrack("Article-Tool-Share-Newsvine");},facebook:function(){postPopUp("http://www.facebook.com/sharer.php?u="+meta.getURL()+"&t="+meta.getHeadline(),"facebook","toolbar=0,status=0,height=436,width=646,scrollbars=yes,resizable=yes");s_code_linktrack("Article-Tool-Share-Facebook");},digg:function(){postPopUp("http://digg.com/remote-submit?phase=2&url="+meta.getURL()+"&title="+meta.getHeadline()+"&bodytext="+meta.getDescription(),"digg","toolbar=0,status=0,height=450,width=650,scrollbars=yes,resizable=yes");s_code_linktrack("Article-Tool-Share-Digg");},permalink:function(){postPopUp("http://"+window.location.hostname+"/export_html/common/new_article_post.html?url="+meta.getURL()+"&title="+meta.getHeadline()+"&summary="+meta.getDescription()+"&section="+meta.getSectionDisplay()+"&pubdate="+meta.getPubdate()+"&byline="+meta.getByline(),"permalink","toolbar=0,status=0,height=410,width=490,scrollbars=yes,resizable=no");s_code_linktrack("Article-Tool-Share-Permalink");},delicious:function(){postPopUp("http://del.icio.us/post?v=4&partner=nyt&noui&jump=close&url="+meta.getURL()+"&title="+meta.getHeadline()+"&bodytext="+meta.getDescription(),"delicious","toolbar=0,status=0,height=400,width=700,scrollbars=yes,resizable=no");s_code_linktrack("Article-Tool-Share-Delicious");},linkedin:function(){postPopUp("http://www.linkedin.com/shareArticle?mini=true"+"&url="+meta.getURL()+"&title="+meta.getHeadline()+"&summary="+meta.getDescription()+"&source="+"The New York Times","Linkedin","toolbar=0,status=0,height=550,width=700,scrollbars=yes,resizable=no");s_code_linktrack("Article-Tool-Share-LinkedIn");},myspace:function(){postPopUp("http://www.myspace.com/index.cfm?fuseaction=postto&u="+meta.getURL()+"&t="+meta.getHeadline()+"&c="+meta.getDescription(),"myspace","toolbar=0,status=0,height=436,width=880,scrollbars=yes,resizable=yes");s_code_linktrack("Article-Tool-Share-MySpace");},twitter:function(){postPopUp("http://twitter.com/index.cfm?fuseaction=postto&u="+meta.getURL()+"&t="+meta.getHeadline()+"&c="+meta.getDescription(),"myspace","toolbar=0,status=0,height=436,width=880,scrollbars=yes,resizable=yes");s_code_linktrack("Article-Tool-Share-MySpace");}};openers[network]();};NYTD.ArticleShareTools=function(rootId,meta){var NYTShareAdScript="http://www.nytimes.com/adx/bin/adx_remote.html?type=fastscript&page=www.nytimes.com/yr/mo/day/&posall=Frame6A&query=qstring&keywords=?",imageHost="http://graphics8.nytimes.com",imagePath="/images/article/functions/",parentElement,postElement,postLink,closeLink,postList,closeTimerId;var meta=meta||{getDescription:function(){return getShareDescription();},getURL:function(){return getShareURL();},getHeadline:function(){return getShareHeadline();},getKeywords:function(){return getShareKeywords();},getSection:function(){return getShareSection();},getSectionDisplay:function(){return getShareSectionDisplay();},getByline:function(){return getShareByline();},getSubSection:function(){return getShareSubSection();},getPubdate:function(){return getSharePubdate();}};if(closeLink!==undefined){$(document).observe("click",function(event){if(closeLink.hasClassName("closeButton")&&outsideShareTools(event.target)){closeShareTools();}});}this.writePost=function(excludedShareTypes){parentElement=getShareRootElement();postElement=this.makePostElement(parentElement);postElement.style.width="168px";postLink=makePostLink();closeLink=makeCloseLink();postList=makePostList();postElement.appendChild(postLink);postElement.appendChild(closeLink);if(excludedShareTypes){window.shareToolsExcludeList=excludedShareTypes;}addShareTargets(postList);postElement.appendChild(postList);parentElement.appendChild(postElement);addFacebook();};this.writeLinks=function(sList,excludedShareTypes){if(excludedShareTypes){window.shareToolsExcludeList=excludedShareTypes;}addShareLinks(sList);};this.makePostElement=function(root){if(root===undefined){getShareRootElement();}if(root.id=="toolsList"){return new Element("LI",{id:"shareMenu"}).addClassName("closed");}else{if(root.id=="shareToolButton"){return new Element("SPAN",{id:"shareMenu"}).addClassName("closed");}else{throw ("Couldn't find share tool element.");}}};function getShareRootElement(){var root;if(rootId){return $(rootId);}if(root=$("toolsList")){return root;}else{if(root=$("shareToolButton")){root.update("");return root;}}}function makePostLink(){var postLink=new Element("a",{href:"#"}).update("Share").addClassName("shareButton");postLink.observe("click",function(event){displayShareTools(postElement);event.stop();return false;});return postLink;}function makeCloseLink(){closeLink=new Element("a",{"href":"#"}).update("Close").addClassName("hidden");closeLink.style.opacity=0;closeLink.observe("click",function(event){closeShareTools();event.stop();return false;});return closeLink;}function makePostList(){var postList=new Element("ul",{"id":"shareList"}).addClassName("hidden");postList.style.opacity=0;return postList;}function displayShareTools(element){if(element.hasClassName("closed")){if(parentElement.id=="shareToolButton"||parentElement.hasClassName("toolsList")){parentElement.addClassName("shareMenuOpened");}element.className="opened";new Effect.Scale(element,200,{duration:0.5,scaleContent:false,scaleMode:{originalWidth:167.5,originalHeight:114},afterFinish:function(){closeLink.className="closeButton";$("shareList").className="";toggleShareAd("show");new Effect.Opacity(closeLink,{duration:0.5,from:0,to:1});new Effect.Opacity($("shareList"),{duration:0.5,from:0,to:1});var numEvent=0;$(document).observe("mouseover",function(event){if(closeLink.hasClassName("closeButton")&&outsideShareTools(event.target)&&numEvent==0){closeTimerId=window.setTimeout(closeShareTools,5000);numEvent++;}event.stop();return false;});}});}else{closeShareTools();}}function closeShareTools(){clearTimeout(closeTimerId);closeLink.className="hidden";new Effect.Opacity($("shareList"),{duration:0.5,from:1,to:0,afterFinish:function(){$("shareList").className="hidden";toggleShareAd("hide");new Effect.Scale($("shareMenu"),50,{duration:0.5,scaleMode:{originalWidth:335,originalHeight:228},scaleContent:false,afterFinish:function(){$("shareMenu").className="closed";if(parentElement.hasClassName("shareMenuOpened")){parentElement.removeClassName("shareMenuOpened");}}});}});new Effect.Opacity(closeLink,{from:1,to:0});}function outsideShareTools(target){var bool=!(target.id=="shareMenu"||target.id=="shareList");for(var i=0;i<$("shareMenu").childNodes.length;i++){if(target==$("shareMenu").childNodes[i]){bool=false;}}for(var i=0;i<$("shareList").childNodes.length;i++){var node=$("shareList").childNodes[i];if(target==node||target==node.childNodes[0]){bool=false;}}for(var i=0;i<$("shareMenuAd").childNodes.length;i++){var node=$("shareMenuAd").childNodes[i];if(target==node||target==node.childNodes[0]){bool=false;}}return bool;}function toggleShareAd(state){if(typeof adxpos_Frame6A!="undefined"){state=="show"?displayShareAd():hideShareAd();}else{$("shareMenu").className="opened noAd";}}function displayShareAd(){$("shareMenuAd").update("<span class='shareSponsor'></span>"+adxads[adxpos_Frame6A]);}function hideShareAd(){$("shareMenuAd").update("");var reloadScript=new Element("script",{src:NYTShareAdScript});$("shareMenuAd").appendChild(reloadScript);}function postPopUp(url,name,params){var win=window.open(url,name,params);}function itemInExcludeList(sharelinkName){return typeof window.shareToolsExcludeList!="undefined"&&typeof window.shareToolsExcludeList[sharelinkName]!="undefined";}function addShareLink(parentElement,sharelinkName,sharelinkText){if(itemInExcludeList(sharelinkName)){return;}var postItem=new Element("li").addClassName(sharelinkName);var itemLink=new Element("a",{href:"#"}).update(sharelinkText);itemLink.style.backgroundImage="url("+imageHost+imagePath+sharelinkName+".gif)";itemLink.observe("click",function(e){NYTD.ArticleShareToolsPostToNetwork(sharelinkName,meta);e.stop();});postItem.appendChild(itemLink);parentElement.appendChild(postItem);}function addShareLinks(sList){var typeMeta=$$('meta[name="PT"]')[0];addShareLink(sList,"linkedin","Linkedin");addShareLink(sList,"digg","Digg");if(!typeMeta||typeMeta.content!="Article"){addShareLink(sList,"facebook","Facebook");}addShareLink(sList,"myspace","MySpace");addShareLink(sList,"permalink","Permalink");}function addShareTargets(shareList){var sList=$(shareList);addShareLinks(sList);var shareMenuAd=new Element("li",{id:"shareMenuAd"});var loadScript=new Element("SCRIPT",{"src":NYTShareAdScript});shareMenuAd.appendChild(loadScript);sList.appendChild(shareMenuAd);}function addFacebook(){var target=$("toolsList");if(target){var postItem=new Element("li").addClassName("facebook");var itemLink=new Element("a",{href:"#"}).update("Facebook");itemLink.style.backgroundImage="url("+NYTD.Hosts.imageHost+"/images/article/functions/facebook.gif)";itemLink.style.backgroundRepeat="no-repeat";itemLink.style.backgroundPosition="-1px -1px";itemLink.style.padding="0 0 3px 20px";itemLink.observe("click",function(e){window.open("http://www.facebook.com/sharer.php?u="+meta.getURL()+"&t="+meta.getHeadline(),"facebook","toolbar=0,status=0,height=436,width=646,scrollbars=yes,resizable=yes");s_code_linktrack("Article-Tool-Share-Facebook");e.stop();});postItem.appendChild(itemLink);target.insert({top:postItem});}}};NYTD.ArticleShareAd=function(position,form_data){var el=$(position);var etaForm=$(document.forms.emailThis);if(!el||!etaForm){return;}function popupPermalink(e){e.stop();NYTD.ArticleShareToolsPostToNetwork("permalink",meta);}function overloadETAForm(e){e.stop();etaForm.getElements().each(function(input){if(typeof form_data[input.name]!="undefined"){input.setValue(form_data[input.name]);}});etaForm.submit();}var meta={getDescription:function(){return form_data.description;},getURL:function(){return form_data.url;},getHeadline:function(){return form_data.title;},getKeywords:function(){return"";},getSection:function(){return"Advertisement";},getSectionDisplay:function(){return"Advertisement";},getByline:function(){return"";},getSubSection:function(){return"";},getPubdate:function(){return"";}};var wrapper=new Element("ul").addClassName("articleAdTools clearfix");var permalink=new Element("li").update('<a href="#">Link To This Ad</a>').addClassName("perma");var emaillink=new Element("li").update('<a href="#">E-Mail This Ad &#187;</a>').addClassName("email");$(permalink.getElementsByTagName("a")[0]).observe("click",popupPermalink.bindAsEventListener());$(emaillink.getElementsByTagName("a")[0]).observe("click",overloadETAForm.bindAsEventListener());wrapper.insert(permalink);wrapper.insert(emaillink);el.insert({bottom:wrapper});};NYTD.ArticleShareAdExpiredAlert=function(){var body=$(document.getElementsByTagName("body")[0]);var bodySize=body.getDimensions();var background=new Element("div").setStyle({"backgroundColor":"#000000","width":bodySize.width+"px","height":bodySize.height+"px","position":"absolute","top":0,"left":0,"zIndex":900000}).setOpacity("0.7");var top=Math.floor((document.documentElement.clientHeight-90)/2);var left=Math.floor((document.documentElement.clientWidth-400)/2);var a_alert=new Element("div").update('<p>Sorry, the advertising campaign you are looking for has ended.</p><a href="#" class="close">Close</a>').setStyle({"top":top+"px","left":left+"px"}).addClassName("expiredAd");function removeAlert(e){e.stop();background.remove();a_alert.remove();}Event.observe(window,"load",function(){window.scrollTo(0,0);body.appendChild(background);body.appendChild(a_alert);$(a_alert.getElementsByTagName("a")[0]).observe("click",removeAlert.bindAsEventListener());});};function getShareURL(){if(NYTD.Video.Share.currentVideo.customFields){return NYTD.Video.Share.currentVideo.customFields.videourl;}}function getShareHeadline(){return NYTD.Video.Share.currentVideo.name||NYTD.Video.Share.currentVideo.displayName;}NYTD.Video={playerType:"homepage"};NYTD.Video.Share=function(){var initialized=false;var playerEl;function getEmbedCode(videoId){var embedIframeURL="http://graphics8.nytimes.com/bcvideo/1.0/iframe/embed.html";if(!videoId||!NYTD.Video.hasRights){return"This video cannot be embedded";}else{return'<iframe width="480" height="373" frameborder="0" scrolling="no" marginheight="0" '+'marginwidth="0" id="nyt_video_player" title="New York Times Video - Embed Player" src="'+embedIframeURL+"?videoId="+videoId+'&playerType=embed"></iframe>';}}function initShareNetworks(pObj){var shareListEl=$("shareList");var shareTools=new NYTD.ArticleShareTools(shareListEl,{getDescription:function(){return pObj.longDescription;},getURL:function(){return pObj.customFields.videourl;},getHeadline:function(){return pObj.name||pObj.displayName;},getKeywords:function(){return pObj.publishedDate;},getSection:function(){return pObj.section;},getSectionDisplay:function(){return pObj.section;},getByline:function(){return pObj.shortDescription;},getSubSection:function(){return pObj.section;},getPubdate:function(){return new Date(parseInt(pObj.publishedDate,10));}});shareListEl.update("");shareTools.writeLinks(shareListEl,{"permalink":"hide"});if(NYTD.Video.playerType=="embed"){NYTD.TwitterTool.initialize(shareListEl,pObj.name,pObj.customFields.videourl);}}function initialize(pObj,player){var shareContEl=$("bc_share"),shareStoryEl=shareContEl.select(".story")[0],inputEls=$$("#toolsList .embeds input"),embedCodeEl=$("embed_code"),triggerEl=$("shareButton"),embedCode=getEmbedCode(pObj.referenceId);NYTD.Video.Share.isShareOpen=false;playerEl=player;if(shareStoryEl){var origStoryEl=$$("#bc_articleInfo .story")[0];if(!pObj.thumbnailURL){var thumbnailURL="/images/video/t-thumbnail-75x50.jpg";}else{var thumbnailURL=pObj.thumbnailURL;}if(!initialized){var thumbEl=new Element("img",{"id":"thumbImage","class":"thumb","src":thumbnailURL});shareStoryEl.appendChild(thumbEl);}else{$("thumbImage").setAttribute("src",thumbnailURL);}if(!initialized){shareStoryEl.appendChild(new Element("span",{"id":"videoName"}).update(pObj.name||pObj.displayName));if(NYTD.Video.playerType=="embed"){shareStoryEl.appendChild(origStoryEl.select(".summary")[0].cloneNode(true));}thumbEl.width=75;thumbEl.height=50;}else{$("videoName").update(pObj.name||pObj.displayName);}}var videoUrl=pObj.customFields&&pObj.customFields.videourl;$("video_permalink").writeAttribute("value",videoUrl);embedCodeEl.removeAttribute("disabled");embedCodeEl.writeAttribute("value",embedCode);if(!NYTD.Video.hasRights){embedCodeEl.setAttribute("disabled","disabled");}initShareNetworks(pObj);if(initialized){return;}triggerEl.observe("click",function(event){shareContEl.removeClassName("hidden");playerEl.setStyle({"left":"-1000px"});NYTD.Video.Share.isShareOpen=true;if(NYTD.Video.Share.currentVideo){initialize(NYTD.Video.Share.currentVideo,playerEl);}Event.stop(event);});$("closeButton").observe("click",function(event){playerEl.setStyle({"left":"0"});shareContEl.addClassName("hidden");NYTD.Video.Share.isShareOpen=false;if($("twitter_panel")){TimesPeople.TwitterTool.close();}setShareButton();Event.stop(event);});inputEls.each(function(el){var select=function(){el.select();};el.observe("focus",select);el.observe("click",select);});initialized=true;}function initializeShareSFHP(video,playerElement){playerEl=$(playerElement);var titleContainer=$("titleInfoContainer");titleContainer.appendChild(new Element("a",{"href":"#","class":"shareButton","id":"shareButton"}).update("Share"));NYTD.Video.Share.initialize(video,playerEl);setCurrentVideo(video);}function setCurrentVideo(video){NYTD.Video.Share.currentVideo=video;NYTD.Video.hasRights=(video.tags.indexOf("nyt_rights")!==-1);if(!NYTD.Video.Share.isShareOpen){setShareButton();}}function setShareButton(){videoUrl=NYTD.Video.Share.currentVideo.customFields&&NYTD.Video.Share.currentVideo.customFields.videourl;if(videoUrl){$("shareButton").show();}else{$("shareButton").hide();}}function initTimesPeople(){var position_right,position_top;var tpAssetObj={getSection:function(){return NYTD.Video.Share.currentVideo.section.toLowerCase();},getTitle:function(){return NYTD.Video.Share.currentVideo.name||NYTD.Video.Share.currentVideo.displayName;},getDescription:function(){return NYTD.Video.Share.currentVideo.shortDescription;},getUrl:function(){return NYTD.Video.Share.currentVideo.customFields.videourl;},getThumbnail:function(){return NYTD.Video.Share.currentVideo.thumbnailURL;},getType:function(){return"video";}};(function(){var user=new TimesPeople.User();user.register({update:function(){var tools=$("timespeople_tools");new TimesPeople.RecommendTool(tools,"bottom",tpAssetObj).draw();switch(NYTD.Video.playerType){case"section":position_right=-57;position_top=-68;break;case"homepage":position_right=-92;position_top=-81;break;case"blog":position_right=-67;position_top=-81;break;case"article":default:position_right=-67;position_top=-81;}TimesPeople.TwitterTool.initialize(tools,"bottom",position_right,position_top,tpAssetObj);user.unregister(this);}});})();}return{initialize:initialize,initializeShareSFHP:initializeShareSFHP,setCurrentVideo:setCurrentVideo,initTimesPeople:initTimesPeople};}();NYTD.track=function(){if("dcsMultiTrack" in window){dcsMultiTrack.apply(this,arguments);}else{setTimeout(function(){NYTD.track.apply(this,arguments);},1000);}};NYTD.Facebook={APP_ID:"9869919170",API_KEY:"990e3f5d72ed31535d09dc1a05fb5ddd",CHANNEL:"http://www.nytimes.com/packages/html/facebook/fbchannel.html"};NYTD.Facebook.SDK=(function(){return{load:function(){if(!document.body){setTimeout(arguments.callee,100);}else{var d=document.createElement("div");d.id="fb-root";document.body.insertBefore(d,document.body.firstChild);var e=document.createElement("script");e.src=document.location.protocol+"//connect.facebook.net/en_US/all.js";e.async=true;document.body.insertBefore(e,document.body.firstChild);}},initialize:function(){FB.init({apiKey:NYTD.Facebook.API_KEY,appId:NYTD.Facebook.APP_ID,status:false,cookie:true,xfbml:false,channelUrl:NYTD.Facebook.CHANNEL});}};})();(function(app){app.Cookie={get:function(name){return new RegExp(name+"=([^;]+)").test(unescape(document.cookie))?RegExp.$1:null;},set:function(name,value,options){var newcookie=[escape(name)+"="+escape(value)];if(options){if(options.expires){newcookie.push("expires="+options.expires.toGMTString());}if(options.path){newcookie.push("path="+options.path);}if(options.domain){newcookie.push("domain="+options.domain);}if(options.secure){newcookie.push("secure");}}document.cookie=newcookie.join("; ");}};})(NYTD.Facebook);NYTD.Facebook=NYTD.Facebook||{};NYTD.Facebook.User=(function(){var callbacks=[],head=document.getElementsByTagName("head")[0],meta=new Element("meta",{"name":"WT.z_fbc"}),baseUrl="/svc/timespeople/toolbar/2.0/user/",fbloggedInUrl=baseUrl+"fbloggedin",setEmailFormatUrl=baseUrl+"setemailformat",unlinkUrl=baseUrl+"unlink",loginOrigin="";head.appendChild(meta);function notify(value,response){for(var i=0,callback;callback=callbacks[i];i++){callback(value,response);}}function setTrackingMeta(value){meta.content=value;}function processToken(response){var response=JSON.parse(response.responseText);if(response.error_id){switch(response.error_id){case 401:var date=new Date();date.setTime(date.getTime()+31536000000);NYTD.Facebook.Cookie.set("nyt-nofb","0",{domain:".nytimes.com",path:"/",expires:date});notify(false);break;case 402:var date=new Date();date.setTime(date.getTime()+31536000000);NYTD.Facebook.Cookie.set("nyt-nofb","1",{domain:".nytimes.com",path:"/",expires:date});notify(false);break;case 500:notify(false);break;}setTrackingMeta("0");}else{if(response.user.facebook_id){NYTD.Facebook.User.facebook_id=response.user.facebook_id;FB.init({apiKey:NYTD.Facebook.API_KEY,appId:NYTD.Facebook.APP_ID,status:false,cookie:true,xfbml:false,channelUrl:NYTD.Facebook.CHANNEL,session:{uid:response.user.facebook_id,access_token:response.user.fb_session_key}});notify(true);setTrackingMeta("1");}}}function onCodeSaved(response){NYTD.Facebook.User.unlinked=false;var date=new Date();date.setTime(date.getTime()-31536000000);NYTD.Facebook.Cookie.set("nyt-nofb","0",{domain:".nytimes.com",path:"/",expires:date});var response=JSON.parse(response.responseText);if(response.user&&response.user["new"]&&NYTD.Facebook.User.showNewsletterPrefs){NYTD.track("WT.z_fb_login","3","DCS.dcsuri","/facebook_regi"+loginOrigin+".html","WT.ti","Facebook Widget Regi","WT.z_fb","1","WT.z_dcsm","1");NYTD.Facebook.PrefsDialog.open();}loginOrigin="";}return{showNewsletterPrefs:true,isLoggedIn:function(callback){var session=FB.getSession();var noFB=NYTD.Facebook.Cookie.get("nyt-nofb");if(session){NYTD.Facebook.User.facebook_id=session.uid;notify(true);setTrackingMeta("1");}else{if(noFB){notify(false);}else{new Ajax.Request(fbloggedInUrl,{method:"get",onSuccess:processToken});}}},login:function(callback,origin){origin=origin?"_"+origin:"";var session=FB.getSession();if(session){NYTD.Facebook.User.saveCode(session.access_token,function(){if(callback&&typeof callback==="function"){callback();}notify(true);setTrackingMeta("1");NYTD.track("WT.z_fb_login","1","DCS.dcsuri","/facebook_post_logon"+origin+".html","WT.ti","Facebook Widget Post Logon","WT.z_fb","1","WT.z_dcsm","1");});}else{FB.login(function(response){if(response.session){loginOrigin=origin;NYTD.Facebook.User.saveCode(response.session.access_token,function(){if(callback&&typeof callback==="function"){callback();}notify(true);setTrackingMeta("1");NYTD.track("WT.z_fb_login","1","DCS.dcsuri","/facebook_post_logon"+origin+".html","WT.ti","Facebook Widget Post Logon","WT.z_fb","1","WT.z_dcsm","1");});}else{notify(false);NYTD.track("WT.z_fb_login","2","DCS.dcsuri","/facebook_post_logon"+origin+".html","WT.ti","Facebook Widget Post Logon","WT.z_fb","1","WT.z_dcsm","1");}},{perms:"offline_access,email,user_about_me,user_birthday,user_education_history,user_groups,user_hometown,user_interests,user_likes,user_location,user_website,user_work_history"});}},register:function(callback){if(callback&&typeof callback==="function"){callbacks.push(callback);}},saveCode:function(code,callback){new Ajax.Request(fbloggedInUrl+"?code="+code,{method:"get",onSuccess:function(response){onCodeSaved(response);callback();}});},setEmailFormat:function(queryString){new Ajax.Request(setEmailFormatUrl+"?"+queryString,{method:"get"});},isSelf:function(facebook_id){return NYTD.Facebook.User.facebook_id&&NYTD.Facebook.User.facebook_id==facebook_id;},unlink:function(){if(!NYTD.Facebook.User.unlinked){FB.logout();NYTD.Facebook.User.unlinked=true;new Ajax.Request(unlinkUrl,{method:"get",onSuccess:function(){notify(false);}});}}};})();NYTD.Facebook=NYTD.Facebook||{};NYTD.Facebook.Feeds=(function(){var defaultLimit=3;var knownURLs=[];function handleError(response){switch(response.error_code){case"190":default:NYTD.Facebook.User.unlink();}}function request(method,callback,limit){FB.api({method:method,site:"nytimes.com",limit:limit||defaultLimit},function(response){if(response.error_code){handleError(response);return;}callback(response);});}function filterSelf(items){var filteredItems=[];for(var i=0,item;item=items[i];i++){if(NYTD.Facebook.User.isSelf(item.user.id)){continue;}filteredItems.push(item);}return filteredItems;}return{getRecommendations:function(callback,limit){if(FB.getSession()&&!NYTD.Facebook.User.unlinked){request("recommendations.get",callback,limit);}else{this.getDefaultRecommendations(callback);}},getDefaultRecommendations:function(callback,limit){new Ajax.Request("/facebook?format=json",{method:"get",onSuccess:function(response){callback(JSON.parse(response.responseText).slice(0,(limit||defaultLimit)));}});},getActivity:function(callback,limit){limit=limit||defaultLimit;var paddedlimit=limit+3;request("activity.get",function(items){items=filterSelf(items);items=items.slice(0,limit);callback(items);},paddedlimit);},dedupe:function(items){var filteredItems=[];for(var i=0,item;item=items[i];i++){if(item.url in knownURLs){continue;}item.title=item.title.replace(" - NYTimes.com","");filteredItems.push(item);knownURLs[item.url]=1;}return filteredItems;}};})();if(typeof Object.create!=="function"){Object.create=function(o){function F(){}F.prototype=o;return new F();};}NYTD.Facebook=NYTD.Facebook||{};NYTD.Facebook.BaseController={run:function(){NYTD.Facebook.SDK.initialize();this.patch();},render:function(isLoggedIn){if(isLoggedIn){this.view.renderLoggedIn();this.getLoggedInFeeds();}else{this.view.renderLoggedOut();NYTD.Facebook.Feeds.getRecommendations(function(feed){this.view.updatePopular(feed);}.bind(this),2);}},patch:function(){var cColumn=$$(".cColumn").first();if(cColumn){var holder=new Element("div",{"id":"facebookContainer"}).addClassName("columnGroup");if($(document.body).hasClassName("wideAd")){cColumn.insert({bottom:holder});}else{if(!$("FixedPanel")){cColumn.insert({top:holder});}}NYTD.Facebook.User.register(this.render.bind(this));NYTD.Facebook.User.isLoggedIn();}else{setTimeout(this.patch.bind(this),10);}},mergeFeeds:function(){if("activities" in this&&"recommendations" in this){try{if(this.activities.length){var activities=NYTD.Facebook.Feeds.dedupe(this.activities);var recommendations=NYTD.Facebook.Feeds.dedupe(this.recommendations);this.view.updateNetwork(activities);this.view.updateRecommendations(recommendations.splice(0,(4-activities.length)));}else{this.view.setHeader("Popular on Facebook");this.view.updatePopular(this.recommendations);}}catch(e){var self=this;NYTD.Facebook.Feeds.getDefaultRecommendations(function(){self.view.setHeader("Popular on Facebook");self.view.updatePopular(self.recommendations);});}}},getLoggedInFeeds:function(){NYTD.Facebook.Feeds.getActivity(function(feed){this.activities=feed;this.mergeFeeds();}.bind(this));NYTD.Facebook.Feeds.getRecommendations(function(feed){this.recommendations=feed;this.mergeFeeds();}.bind(this),4);}};NYTD.Facebook.Module=(function(){var recommendationsEl=new Element("div"),activitiesEl=new Element("div"),headerEl=new Element("div");var info="Throughout NYTimes.com, you will see Facebook modules like this one. Log in with Facebook to see what your friends are recommending and make your own recommendations. For details, click &ldquo;What&rsquo;s This?&rdquo; to open the Social Media FAQ.";function activateFacebookButton(){$$(".fb_button").invoke("observe","click",function(event){NYTD.Facebook.User.login();});}function appendTrackingToURL(url,trackingSrc){var retStr=url;if(retStr.indexOf("?")!==-1){retStr+="&";}else{retStr+="?";}retStr+="src="+trackingSrc;return retStr;}return{renderLoggedIn:function(){var container=$("facebookContainer");if(container){var inset=new Element("div").addClassName(NYTD.Facebook.ArticleModuleView?"":"inset");headerEl.update(this.templates.loggedInHeader);inset.insert(headerEl);inset.insert(this.templates.faq);inset.insert(activitiesEl);inset.insert(recommendationsEl);container.removeClassName("loggedOut");container.addClassName("loggedIn");container.update(inset);}},renderLoggedOut:function(){var container=$("facebookContainer");if(container){var inset=new Element("div").addClassName("inset");inset.insert(this.templates.login);headerEl.update(this.templates.loggedOutHeader);inset.insert(headerEl);inset.insert(recommendationsEl);container.removeClassName("loggedIn");container.addClassName("loggedOut");container.update(inset);activateFacebookButton();}},updateNetwork:function(activities){var buffer=new Element("div");for(var i=0,activity;activity=activities[i];i++){activity.url=appendTrackingToURL(activity.url,this.TRACKING_NETWORK);var item=NYTD.Template(this.templates.activity,activity);buffer.insert(item);}activitiesEl.update(buffer.innerHTML);},updateRecommendations:function(activities){recommendationsEl.removeClassName("subColumns").removeClassName("subColumn-2");var buffer=new Element("div");for(var i=0,activity;activity=activities[i];i++){activity.url=appendTrackingToURL(activity.url,this.TRACKING_RECOMMENDATION);activity.img=activity.thumbnail||activity.img;var item=NYTD.Template(this.templates.recommendation,activity);buffer.insert(item);}recommendationsEl.update(buffer.innerHTML);},updatePopular:function(activities){recommendationsEl.addClassName("subColumns").addClassName("subColumn-2");var buffer=new Element("div");for(var i=0,activity;activity=activities[i];i++){activity.url=appendTrackingToURL(activity.url,this.TRACKING_POPULAR);activity.img=activity.thumbnail||activity.img;var item;if(NYTD.Facebook.ArticleModuleView){item='<div class="column '+(i%2?"last":"")+'">'+NYTD.Template(this.templates.popular,activity)+"</div>";}else{item=NYTD.Template(this.templates.popular,activity);}buffer.insert(item);}recommendationsEl.update(buffer.innerHTML);},setHeader:function(header){headerEl.down("h4").update(header);},templates:{login:'        <a class="fb_button fb_button_medium">          <span class="fb_button_text">Log In With Facebook</span>        </a>        <p class="caption">Log in to see what your friends are sharing on nytimes.com.        <span id="fbInfo"><a href="http://www.nytimes.com/privacy">Privacy Policy</a> | <a href="http://www.nytimes.com/packages/html/timespeople/faq/social/" title="'+info+'">What&rsquo;s This?</a></span></p>        <div class="singleRuleDivider"></div>      ',loggedOutHeader:'<h4 class="sectionHeaderHome">What&rsquo;s Popular Now <img class="inTextImage" src="'+NYTD.Hosts.imageHost+'/images/article/functions/facebook.gif"></h4>',loggedInHeader:'<h4 class="sectionHeaderHome">Latest in My Network <img class="inTextImage" src="'+NYTD.Hosts.imageHost+'/images/article/functions/facebook.gif"></h4>',activity:'        <div class="activity">          <% if (user.image) { %>            <img class="userImage" height="25" width="25" src="<%= user.image %>" />          <% } %>          <div class="actor">            <a href="<%= user.href %>"><%= user.name %></a>            <span class="verb"> recommended </span>           </div>           <p><a href="<%= url %>"><%= title %></a></p>        </div>',recommendation:'        <div class="activity">          <div class="verb">Popular Now</div>          <p><a href="<%= url %>"><%= title %></a></p>        </div>',popular:'          <div class="activity">            <% if (img) { %>              <img class="runaroundRight" height="50" width="50" src="<%= img %>" />            <% } %>            <p class="popular"><a href="<%= url %>"><%= title %></a></p>          </div>',faq:'<div id="fbInfo"><a class="meta" href="http://www.nytimes.com/packages/html/timespeople/faq/social/" title="'+info+'">What&rsquo;s This?</a></div>'}};})();$$("head").first().insert(new Element("link",{"rel":"stylesheet","type":"text/css","href":NYTD.Hosts.cssHost+"/css/app/facebook/newsletterPrefs.css"}));NYTD.Facebook.PrefsDialog=(function(){function setEventHandlers(){Event.observe($("facebookNewsletterForm"),"submit",function(e){var queryString=e.element().serialize();NYTD.Facebook.User.setEmailFormat(queryString);NYTD.UPTracker&&NYTD.UPTracker.track({"eventType":"es","data":{"name":"nytupdates","src":"MPS-FBM"}});NYTD.Facebook.PrefsDialog.close();e.stop();});Event.observe($("facebookNewsletterForm"),"reset",function(e){NYTD.Facebook.PrefsDialog.close();e.stop();});}return{element:new Element("div"),open:function(){this.element.update(this.template);document.body.appendChild(this.element);this.open=null;setEventHandlers();},close:function(){this.element.remove();},template:'  <div id="facebookModalBg">    <div id="facebookModal">      <div class="facebookModalBar facebookModalBarTop">&nbsp;</div>      <form id="facebookNewsletterForm">      <div class="facebookModalInner">      <p class="facebookModalText">Thanks for logging in with Facebook and creating an NYTimes.com account!</h1>      <p><strong>Sign up for e-mails from NYTimes.com, exclusively for registered users:</strong></p>      <table cellspacing="0">      <tr>      <td><p>Preferred E-Mail Format:</p></td>      <td>      <label><input type="radio" name="email_format" value="html" checked="checked"></input> HTML (Text and Images)</label>      <label><input type="radio" name="email_format" value="text"></input> Text Only</label>      </td>      </tr>      </table>      </div>      <div class="facebookModalBar">        <div class="inset">        <button type="submit" class="appButton" name="facebookNewsletterSubscribe" value="yes"><span>Yes!</span></button>&nbsp;&nbsp;        <button type="reset" class="appButton" name="facebookNewsletterSubscribe" value="no"><span>No Thanks.</span></button>        </div>      </div>      </div>    </div>  </div>  '};})();$$("head").first().insert(new Element("link",{"rel":"stylesheet","type":"text/css","href":NYTD.Hosts.cssHost+"/css/app/facebook/homepage.css"}));NYTD.Facebook.HomepageModuleView=NYTD.Facebook.Module;NYTD.Facebook.HomepageModuleView.TRACKING_NETWORK="ISMR_HP_LI_LST_FB";NYTD.Facebook.HomepageModuleView.TRACKING_RECOMMENDATION="ISMR_HP_LI_MST_FB";NYTD.Facebook.HomepageModuleView.TRACKING_POPULAR="ISMR_HP_LO_MST_FB";NYTD.Facebook.HomepageController=Object.create(NYTD.Facebook.BaseController);NYTD.Facebook.HomepageController.view=NYTD.Facebook.HomepageModuleView;NYTD.Facebook.HomepageController.patch=function(){if(typeof no_facebook_module!="undefined"){return;}var toolsHome;var cColumnTopSpanRegion=$("cColumnTopSpanRegion");var lastColumn=cColumnTopSpanRegion&&cColumnTopSpanRegion.select(".lastColumn").first();if(cColumnTopSpanRegion&&lastColumn){var lastColumnContent=lastColumn.select(".columnGroup").first();lastColumn.previous(".column").appendChild(lastColumnContent);var holder=new Element("div",{"id":"facebookContainer"});lastColumn.appendChild(holder);var moduleHeight=$("cColumnTopSpanRegion").offsetHeight;moduleHeight+=8;holder.style.minHeight=moduleHeight+"px";NYTD.Facebook.User.register(this.render.bind(this));NYTD.Facebook.User.isLoggedIn();}else{setTimeout(this.patch.bind(this),10);}};if(window.XMLHttpRequest){(function(){var meta=document.getElementsByName("PST")[0];if(meta&&meta.content=="Global Edition"){return;}window.fbAsyncInit=function(){NYTD.Facebook.HomepageController.run();};NYTD.Facebook.SDK.load();})();}(function(){NYTD.EditionPref={};NYTD.EditionPref.setGlobal=function(){var cookie=NYTD.Cookies.getOrCreate("NYT-Edition");cookie.add({"edition":"GLOBAL"});};NYTD.EditionPref.setUS=function(){var cookie=NYTD.Cookies.getOrCreate("NYT-Edition");cookie.add({"edition":"US"});};}());function onTemplateLoaded(experienceId){var experienceObject=brightcove.getExperience(experienceId);var videoModule=experienceObject.getModule(APIModules.VIDEO_PLAYER);videoModule.setConnectOnLoad(false);switch(experienceId){case"timescastVideoPlayerObj":NYTD.TimesCastManager.initialize();break;case"channelPlayer":NYTD.HPChannelPlayer.initialize();break;}}
// Wed Jul 13 18:35:28 EDT 2011
//  CONFIGURE HOST BASED ON ENVIRONMENT
var NYTD = NYTD || {};

NYTD.Hosts = NYTD.Hosts ||  (function(){
  var host, scripts = document.getElementsByTagName("script");

  for (var i = 0, script; script = scripts[i]; i++) {
    host = script.src &&
/^(.+\.nytimes.com)\/js\/app\/analytics\/trackingTags_v1\.1\.js/.test(script.src) ? RegExp.$1 :'';
    if (host) { break };
  };

  return {
    imageHost: host,
    jsHost: host,
    cssHost: host
  }
})();


// START WEBTRENDS JS TAG
var gtrackevents=false;
var gdcsid="dcsym57yw10000s1s8g0boozt_9t1x";
var gfpcdom=".nytimes.com";
var gdomain="wt.o.nytimes.com";
var js_host = NYTD.Hosts.jsHost + "/js/app/analytics/";


// Include WebTrends wtid.js
var wt_initObj = { enabled:true, fpc:"WT_FPC", domain:gdomain, dcsid:gdcsid };
if (wt_initObj.enabled&&(document.cookie.indexOf(wt_initObj.fpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
var wtid_js_host="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+wt_initObj.domain+"/"+wt_initObj.dcsid+"/"
var wtidjs = document.createElement('script');
wtidjs.setAttribute('type', 'text/javascript');
wtidjs.setAttribute('src', wtid_js_host+'wtid.js');
document.getElementsByTagName('head').item(0).appendChild(wtidjs);
}

var wtInc = document.createElement('script');
wtInc.setAttribute('language', 'javascript');
wtInc.setAttribute('type', 'text/javascript');
wtInc.setAttribute('src', js_host+'controller_v1.1.js');
document.getElementsByTagName('head').item(0).appendChild(wtInc);
// END WEBTRENDS JS TAG

// START REVENUE SCIENCE PIXELLING CODE
var revSc = document.createElement('script');
revSc.setAttribute('language', 'javascript');
revSc.setAttribute('type', 'text/javascript');
revSc.setAttribute('src', js_host+'gw.js?csid=H07707');
document.getElementsByTagName('head').item(0).appendChild(revSc);

var customRevSci = document.createElement('script');
customRevSci.setAttribute('language', 'javascript');
customRevSci.setAttribute('type', 'text/javascript');
customRevSci.setAttribute('src', js_host+'revenuescience.js');
document.getElementsByTagName('head').item(0).appendChild(customRevSci);
// END REVENUE SCIENCE PIXELLING CODE

// Duped in common.js
(function(){
  if (NYTD.require) {
    return;
  }
  
  var windowLoaded = false;
  var document_scripts;
  
  if (window.addEventListener) {
    window.addEventListener ("load", function(){ windowLoaded = true }, false);
  } else if (window.attachEvent) {
    window.attachEvent ("onload", function(){ windowLoaded = true });
  }
  
  function scriptLoaded(src) {
    document_scripts = document_scripts || {};
    
    if (document_scripts[src]) { return true; }
    else {
      var script_tags= document.getElementsByTagName("script");
      for (var i = 0, script; script = script_tags[i]; i++) {
        if(script.src) { document_scripts[script.src] = 1; }
      };
      if (document_scripts[src]) { return true; }
      else { return false; }
    }
    
  }

  NYTD.require = function(file, callback) {
    
    if (windowLoaded) { throw('Cannot require file, document is already loaded'); }  

    // If matches root relative url (single slash, not protocol-agnostic double slash)
    var url = /^\/[^\/]/.test(file) ?  NYTD.Hosts.jsHost + file : file;
    var force = arguments[arguments.length - 1] === true;
    var needsCallbackScriptTag;
    
    if (force || !scriptLoaded(url)) { 
      document.write('<script src="' + url + '" type="text/javascript" charset="utf-8" onerror="throw(\'NYTD.require: An error occured: \' + this.src)"><\/script>');
      document_scripts[url] = 1;
      needsCallbackScriptTag = true;
    }

    if (typeof callback == 'function') {

      if (document.addEventListener && !navigator.userAgent.match(/MSIE/)) {
        if (needsCallbackScriptTag) { 
          document.write('<script type="text/javascript" charset="utf-8">(' + callback.toString() + ')();<\/script>');
        }
        else {
          window.setTimeout(function(){
            callback()
          }, 0)
        }
      }
      else {
        NYTD.require.callbacks = NYTD.require.callbacks || [];
        NYTD.require.callbacks.push(callback);
        NYTD.require.callbacks.count = (++NYTD.require.callbacks.count) || 0;
        document.write("<script id=__onAfterRequire" + NYTD.require.callbacks.count + " src=//:><\/script>");
        document.getElementById("__onAfterRequire" + NYTD.require.callbacks.count).onreadystatechange = function() {
          if (this.readyState == "complete") {
            this.onreadystatechange = null;
            (NYTD.require.callbacks.pop())();
            this.parentNode.removeChild(this);
          }
        };
      }

    }

  };
})();

// comScore beacon
NYTD.require((window.location.protocol == 'https:' ? 'https://sb' : 'http://b') +
'.scorecardresearch.com/beacon.js', function () {
  var url = window.location.protocol + '//' + window.location.host + window.location.pathname;
  
  var section = (function () {
    var metaTagEls = document.getElementsByTagName('meta');
    for (var i=0; i<metaTagEls.length; i++) {
      if (metaTagEls[i].name=='CG') {
        return metaTagEls[i].content.toLowerCase();
      }
    }
    return '';
  })();

  if (typeof COMSCORE !== "undefined") {
    COMSCORE.beacon({
      c1: 2,
      c2: 3005403,
      c3: '',
      c4: url,
      c5: section,
      c6: '', 
      c15: ''
    });
  }
});

// Nielsen tagging
(function () {
  var d = new Image(1, 1);
  d.onerror = d.onload = function () {
    d.onerror = d.onload = null;
  };
  d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-nytimes&cg=0&cc=1&si=",
           escape(window.location.href), "&rp=", escape(document.referrer),
           "&ts=compact&rnd=", (new Date()).getTime()].join('');
})();

// Charbeat beacon

var _sf_async_config = {
    uid: 16698,
    domain: "nytimes.com",
    pingServer: "pnytimes.chartbeat.net",
    path:window.location.pathname,
    title: window.TimesPeople && TimesPeople.Page && TimesPeople.Page.getTitle() || document.title.replace('- NYTimes.com', '')
};

try {
  _sf_async_config.sections = [document.getElementsByName('CG')[0].content, document.getElementsByName('SCG')[0].content].join(",");
} catch(e){}

try {
  _sf_async_config.authors = (document.getElementsByName('byl')[0] || document.getElementsByName('CLMST')[0]).content.replace('By ', '').toLowerCase().replace(/\b[a-z]/g, function(){return arguments[0].toUpperCase();});
} catch(e){}

 (function() {
    function loadChartbeat() {
        window._sf_endpt = (new Date()).getTime();
        var e = document.createElement('script');
        e.setAttribute('language', 'javascript');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src',
        (("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") + "js/chartbeat.js");
        document.body.appendChild(e);
    }
    
    if (window.addEventListener) {
      window.addEventListener('load', loadChartbeat, false);
    } else if (window.attachEvent) {
      window.attachEvent('onload', loadChartbeat);
    } 

})();

// UPTracker
var NYTD = NYTD || {};
if (! NYTD.Hosts) NYTD.Hosts = {};
if (! NYTD.Hosts.jsHost) NYTD.Hosts.jsHost = "http://js.nyt.com";
NYTD.UPTracker = (function () {
		
		// default configuration
	var config = {
		baseUrl: 	'//up.nytimes.com/?',
		eventType: 	undefined, 
		data: 		undefined,
		defaultArguments: 'd=0//&c=1'
	};

	var url;
	
	function init (params) {
		if (params.baseUrl)
			config.baseUrl = params.baseUrl;
		if (params.eventType)
			config.eventType = params.eventType;
		if (params.data)
			config.data = params.data;
	};
	
	function createUrl() {
	
			// begin with baseUrl
		url = config.baseUrl + config.defaultArguments;
		
			// append eventType
		if (config.eventType) {
			url += '&e=' + config.eventType;
		}
		
			// url encode and append url
		url += '&u=' + encodeURIComponent(window.location.href);
		
			// url encode and append referrer
		url += '&r=' + encodeURIComponent(document.referrer);

			// if we have meta data, encode and append it
		if (config.data) {
			try {
				JSON.stringify({world:'peace'});
				appendAndSend();				
			} catch (e) {  // if no JSON, inlcude json2-min
				var script = document.createElement('script');
				script.type = "text/javascript";
				script.src  = "//www.nytimes.com/js/app/lib/json/json2-min.js";
				script.onload =	function () { 
					appendAndSend(); 
				};
				script.onreadystatechange =	function () {
					if (this.readyState == 'loaded' || this.readyState == 'complete') {
						appendAndSend();	
					}
				};
				
				document.getElementsByTagName("head")[0].appendChild(script);
			}
		} else {
			send();
		}
	}; 

	function appendAndSend() {
		var jsonData = JSON.stringify(config.data);
		if (jsonData) {
			url += '&p=' + encodeURIComponent(jsonData);
		}
		send ();
	}
	
	function send() {
		if (url) {
		    var img = document.createElement('img');
		    img.setAttribute('border', 0);
		    img.setAttribute('height', 0);
		    img.setAttribute('width', 0);
		    img.setAttribute('src', url);
		    document.body.appendChild(img);
		} else {
			return false;
		}
	};
		
	return {
		track: function (params) {
			var params = params || {};
			init(params);
			createUrl();
		}
	};
})();


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
<!-- 
gTempWtId="83.24.155.236-1419851744.30164886";  
// -->
function DcsInit(){
  this.enabled=true;
  this.trackevents=gtrackevents;
  this.dcsid=gdcsid;
  this.fpcdom = (function(){ 
    var d = document.location.hostname.split('.'),
        l = d.length,
        fpcdom = (l >= 2) ? "." + d[l-2] + "." + d[l-1] : "";
    return fpcdom;
  })();
  this.domain=gdomain;
  this.exre=(function(){
    if (window.RegExp){
      return(new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)","i"));
    }
    else{
      return("");
    }
  })();
  this.fpc="WT_FPC";
  this.i18n=false;
  this.images=[];
  this.index=0;
  this.qp=[];
  this.re=(function(){
    if (window.RegExp){
      return(this.i18n?{"%25":/\%/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g});
    }
    else{
      return("");
    }
  })();
  this.timezone=-5;
//  var t=this;
//    (function(){
//        if (t.enabled&&(document.cookie.indexOf(t.fpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
//            document.write("<scr"+"ipt type='text/javascript' src='"+"http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+t.domain+"/"+t.dcsid+"/wtid.js"+"'><\/scr"+"ipt>");
//        }
//  })();
}
var DCS={};
var WT={};
var DCSext={};
var dcsInit=new DcsInit();

