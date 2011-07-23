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


