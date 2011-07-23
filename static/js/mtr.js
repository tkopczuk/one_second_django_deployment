var NYTD = NYTD || {};

NYTD.Meter = {};

(function(){
  
  var callbackName = String(String.fromCharCode(97 + Math.round(Math.random() * 25))+(new Date()).getTime()),
      head = document.getElementsByTagName('head')[0],
      hash, cookie, timeout;

  function getCookie() {
    return /NYT-M=([^;&]+)/i.test(unescape(document.cookie)) ? RegExp.$1 : '';
  }

  function getHash() {
    return /gwh=([^&]+)/.test(unescape(window.location.search.substring(1))) ? RegExp.$1 : '';
  }
  
  function removeHash() {
    window.location.replace(window.location.href.replace(/(\?|&)gwh=([^&]+)/, ''));
  }
  
  function checkMeter(url) {
    var referrer = url ? (document.referrer || window.location.href) : document.referrer, 
        script = document.createElement('script'),
        serviceUrl = '//meter-svc.nytimes.com/meter.js?url=' + encodeURIComponent(url || location.href) + '&referer=' + encodeURIComponent(referrer) + '&callback=' + callbackName;
        
    window[callbackName] = processMeterResponse;
    script.src = serviceUrl;
    script.async = true;
    head.appendChild(script);
  }
  
  function processMeterResponse(response) {
    if (response.counted) {
      var meta = document.createElement('meta');
      meta.name = 'WT.z_cad';
      meta.content = '1';
      head.appendChild(meta);
    }
    if (response.hitPaywall) {
      var anchor = unescape(document.location.href).split('#');
      anchor = anchor.length > 1 ? '#' + anchor[1] : null;
      var hash = 'gwh=' + response.hash;
      var url = window.location.search ? window.location.href + '&' + hash :  window.location.href + '?' + hash;
      url = anchor ? url.replace(anchor, '') + anchor : url;
      window.location.replace(url);
    }
  }
  
  function loadGateway() {

    if (location.hostname in {
      "myaccount.nytimes.com":1
    }) {
      return;
    }
    
    track();
    NYTD.Meter.gwy = true;
    var script = document.createElement('script');
    script.src = NYTD.Hosts.jsHost + '/js/gwy.js';
    head.appendChild(script);
  }
  
  function track() {
    mtr_track(
      "WT.cg_n", "Digital Subscription",
      "WT.cg_s", "",
      "WT.z_gpt", "E-Commerce",
      "WT.si_n", "Digital Subscription",
      "WT.si_x", "1",
      "WT.z_gpst", "Purchase",
      'WT.ti', 'Gateway',
      'DCS.dcssip', 'myaccount.nytimes.com',
      'DCS.dcsuri', '/mem/purchase/gateway'
    );
  }
  
  function mtr_track() {
    if ('dcsMultiTrack' in window) {
      var old_dcsid = dcsInit.dcsid 
      dcsInit.dcsid = wt_dcsidArray["Digital Subscription"];
      dcsMultiTrack.apply(this, arguments);
      dcsInit.dcsid = old_dcsid;
    } else {
      setTimeout(function() {
        mtr_track.apply(this, arguments);
      }, 1000);
    }
  }

  hash = getHash();
  cookie = getCookie();
  
  if (!hash) {
    checkMeter();
  } else if (hash && !cookie || hash !== cookie ) {
    removeHash();
  } else if (hash && cookie && hash === cookie) {
    if (window.addEventListener) {
      window.addEventListener ("load", loadGateway,false);
    } else if (window.attachEvent) {
      window.attachEvent ("onload",loadGateway);
    } else {
      window.onload = (typeof window.onload == 'function') ? 
        (function(old){ return function(){ old();loadGateway() }})(window.onload) :
        loadGateway;
    }
  }
  
  NYTD.Meter.check = checkMeter;
  
})();
