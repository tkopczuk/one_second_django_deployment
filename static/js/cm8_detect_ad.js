// All rights reserved CheckM8 Inc. (c) 2009


if (typeof(window.CM8Page) == "undefined") {
	if (document.location && (document.location.search.indexOf('CM8Page=') != -1))
		window.CM8Page=document.location.search.replace(/.*CM8Page=/, "").replace(/&.*/, "");
	else if (window.top == window)
			window.CM8Page=String(Math.random()).slice(2);
		else
			window.CM8Page="";
}



var CM8XCat = decodeURIComponent(((CM8Cat.toLowerCase().indexOf("encoded:") == 0) ? CM8Cat.substring(8) : encodeURIComponent(CM8Cat))); 

window.CM8E = window.CM8E || {};
CM8E[CM8XCat] = CM8E[CM8XCat] || {};
var CM8ET = {
	cat: CM8XCat,
	page: CM8Page,
	server: CM8Server,
	lastRequestSerial: 999,
	pageViewStartSerial: 1,
	serialsData: {},
	spotlesses: {},
	placeHolders: [],
	lastPVCriterias: "",
	lastPVPHs: {},
	counts: {},


	clearRemovedPlaceHolders: function(elementToBeRemoved)
	{
		for (var cat in CM8E) {
			var otherCM8CE = CM8E[cat];
	
			for (var i = (otherCM8CE.placeHolders || []).length - 1; i >= 0; i--) {
				var ph = otherCM8CE.placeHolders[i];
				if (typeof(ph.element) != "string") {
					var elementInDom = function(scan)
						{
							if (! scan)
								return true;
							for (; scan && (scan != document.body); scan = scan.parentNode)
								if (scan == elementToBeRemoved) {
									scan = null;
									break;
								}
							return scan;
						};
					var placeHolderExists = elementInDom(ph.element) && elementInDom(ph.showingElement);
					
				}
				else {
					try {
						var placeHolderExists = eval(ph.element);
						
					}
					catch(e) {
						var placeHolderExists = false;
						
					}
				}
				if (! placeHolderExists) {
					if (ph.cleanup)
						ph.cleanup();
					otherCM8CE.placeHolders.splice(i, 1);
				}
			}
		}
	},
	
	
	initRequest: function(newPV)
	{
		this.lastRequestSerial++;
		
		if (newPV)
			this.pageViewStartSerial = this.lastRequestSerial;
		var now = new Date().getTime();
		this.serialsData[this.lastRequestSerial] = {cat: this.cat, serial: this.lastRequestSerial, sendTime: now, newPV: newPV, ads: {} };

		for (var i = 0; i < this.placeHolders.length; i++) {
			var ph = this.placeHolders[i];
			if (ph.lock_time && ((now - ph.lock_time) >20000)) {
				
				ph.lock_time = null;
			}
		}

		for (var otherCat in CM8E)
			if (CM8E[otherCat].clearRemovedPlaceHolders)
				CM8E[otherCat].clearRemovedPlaceHolders();
		
		return this.lastRequestSerial;
	},
	
	
	preparePH: function(serial, element, own, companion, format)
	{
		// TODO: REMOVE THIS!!!  Need to be done on the plugin !!!
		if (typeof(element) == "string")
			element = element.replace(/(\(function\(\){ var pluginData = \(window.CM8MainWindow \|\| window\).CM8E\[)([^\]]*)(\].pluginsData\[[0-9]*\]; return pluginData.pluginWindow.CM8PluginProxy\(plugin)s(Data.pluginObject,.*)/, "$1'$2'$3$4");
	
	
	
		if (typeof(element) != "string") {
			for (var parent = element; parent && (parent != document.body); parent = parent.parentNode) {
				for (var i = 0; i < this.placeHolders.length; i++) {
					var ph = this.placeHolders[i];
					if (ph.lock_time && (ph.element == parent) && ph.own) {
						
						return false; 
					}
				}
			}
			if (! parent) { 
				
				return false;
			}
			var kickedOut = [];
			if (own) {
				for (var i = 0; i < this.placeHolders.length; i++) {
					var ph = this.placeHolders[i];
					if (typeof(ph.element) != "string") {
						for (var parent = ph.element; parent && (parent != document.body); parent = parent.parentNode) {
							if (element == parent) {
								if (ph.lock_time) {
									
									return false;
								}
								if (! companion) {
									kickedOut.push(i);
									
									if (ph.cleanup)
										ph.cleanup();
									break;
								}
							}
						}
					}
				}
			}
			
			for (var i = kickedOut.length - 1; i >= 0; i--)
				this.placeHolders.splice(kickedOut[i], 1);
		}
		else {
			for (var i = 0; i < this.placeHolders.length; i++) {
				var ph = this.placeHolders[i];
				if (ph.lock_time && (ph.element == element)) {
					
					return false; 
				}
			}
		}
		
		this.placeHolders.push({
				element: element,
				showingElement: null,
				own: own,
				companion: companion,
				format: format,
				adId: null,
				serial: serial });
		
		return true;
	},
	
	
	buildRequest: function(serial, path, extraParams)
	{
		var ignoredFormats = {};
		if (window.CM8IgnoredFormats && CM8IgnoredFormats.length)
			for (var i = 0; i < CM8IgnoredFormats.length; i++)
				ignoredFormats[CM8IgnoredFormats[i]] = true;
	
		var serialData = this.serialsData[serial];
		var recentSerials = [];
		for (var serialScan in this.serialsData) {
			var serialScanData = this.serialsData[serialScan];
			var time = serialScanData.sendTime;
			if (serialScanData.receiveTime && time && (serialData.sendTime - time) <= 25000)
				recentSerials.push(serialScan);
		}
		
		var history = [];
		for (var adId in this.spotlesses)
			history.push(adId);
		for (var i = 0; i < this.placeHolders.length; i++) {
			var ph = this.placeHolders[i];
			if (ph.adId && (! ignoredFormats[ph.format]))
				history.push(ph.adId);
		}
		
		if (serialData.newPV) {
			this.lastPVCriterias = "";
			this.lastPVPHs = {};
			this.counts = {};
		}
		
		var xPH = "";
		for (var format in this.lastPVPHs)
			if (! ignoredFormats[format])
				xPH += format + "," + this.lastPVPHs[format] + ",";
		
		var dynamicDetections = (function()
{
	var nav = window.navigator || {};

	function get_time()
	{
	   	var theDate = new Date();
		var YYYY = new String(theDate.getYear());
		for(i=4-YYYY.length;i>0;i--)
			YYYY = "0" + YYYY;
		var MM = new String(theDate.getMonth()+1);
		if (MM < 1 || MM > 12)
			MM = 1;
		if (MM.length < 2)
			MM = "0" + MM;
		var DD = new String(theDate.getDate());
		if (DD < 1 || DD > 31)
			DD = 1;
		if (DD.length < 2)
			DD = "0" + DD;
		var HH = new String(theDate.getHours());
		if (HH < 0 || HH > 24)
			HH = 1;
		if (HH.length < 2)
			HH = "0" + HH;
	    return "&DATE=" + YYYY + MM + DD + "&HOUR=" + HH;
	}
	
	function get_size()
	{
		var width; var height;
		if (self.innerWidth) {
			width = self.innerWidth;
			height = self.innerHeight;
		}
		else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
			height = document.documentElement.clientHeight;
		}
		else if (document.body.clientWidth) {
			width = document.body.clientWidth;
			height = document.body.clientHeight
		}
		else {
			var width  = 1024;
			var height = 768;
		}
		
		var width_group;
		if (width > 1200)
			width_group = "WR_E";
		else if (width > 1000)
			width_group = "WR_D";
		else if (width > 800)
			width_group = "WR_C";
		else if (width > 600)
			width_group = "WR_B";
		else
			width_group = "WR_A";
	
		return "&WIDTH=" + width + "&HEIGHT=" + height + "&WIDTH_RANGE=" + width_group;
	}

	function resolution()
		{
			var s = window.screen || {};
			r = {
				w800h600:	"RS1",
				w1024h768:	"RS2",
				w1280h1024:	"RS3",
				w1600h1200:	"RS4",
				w1920h1440:	"RS5",
				w640h480:	"RS6",
				w720h480:	"RS7",
				w720h576:	"RS8",
				w848h480:	"RS9",
				w1152h864:	"RS10",
				w1280h720:	"RS11",
				w1280h768:	"RS12",
				w1280h960:	"RS13",
				w1280h800:	"RS14",
				w1280h854:	"RS15",
				w1280h900:	"RS16",
				w1400h1050:	"RS17",
				w1440h900:	"RS18",
				w1680h1050:	"RS19",
				w1920h1080:	"RS20",
				w1920h1200:	"RS21",
				w2048h1536:	"RS22",
				w2560h1600:	"RS23",
				w3200h2400:	"RS24",
				w3840h2400:	"RS25",
				w768h1024:	"RS26"
				}["w" + window.screen.width + "h" + window.screen.height];
			return "&RES=" + (r ? r : "OTHER");
		}
		var common = resolution();	

	window.CM8GetLocation = function()
	{
		var encoded = [];
		var loc = document.location.href;
		for (var i = 0; i < loc.length; i++) {
			var code = loc.charCodeAt(i);
			if ((code >= 256) || (code == 32))
				encoded.push(encodeURIComponent(loc.substr(i, 1)));
			else if (code == 92)  // \
				encoded.push("\\\\");
			else if (code == 63)  // ?
				encoded.push("\\q");
			else if (code == 38)  // &
				encoded.push("\\a");
			else if (code == 37)  // %
				encoded.push("\\p");
			else if (code == 35)  // #
				encoded.push("\\s");
			else if (code == 34)  // "
				encoded.push("\\w");
			else if (code == 39)  // '
				encoded.push("\\u");
			else
				encoded.push(loc.substr(i, 1));
		}
		return encoded.join("");
	};
	
	return (
		"&LOC=" + CM8GetLocation().substr(0,1000) +
		get_size() + 
		get_time() +
		common +
		"&ORD=" + String(Math.random()).slice(2));
})()
;
		
		serialData.url =
				((document.location.protocol=="https:")?"https:":"http:") +
				"//" + this.server + path + "?" +
				"cat=" + encodeURIComponent(serialData.cat).replace(/%2C/gi, ",") +
				(this.page ? "&page=" + this.page : "") +
				"&serial=" + serial + ":" + this.pageViewStartSerial + ":" +
					String.fromCharCode(65 + (this.counts.total ? 1 : 0) + (this.counts.rm ? 2 : 0) + (this.counts.ph ? 4 : 0)) +
				(recentSerials.length ? "&recent_serials=" + recentSerials.join(",") : "") +
				(history.length ? "&history=" + history.join(",") : "") +
				(xPH ? "&x_place_holders=" + xPH : "") +
				(this.lastPVCriterias ? "&criterias=" + this.lastPVCriterias : "") +
				(serialData.newPV ? "&same_pv=false" : "") +
				"&" + dynamicDetections + "&" +
				extraParams;
		
		return serialData.url;
	},
	

	requestReceived: function(serial, spotlesses, criterias, placeHolders, counts)
	{
		if (! this.serialsData[serial]) {
			
			return;
		}
			
		this.serialsData[serial].receiveTime = new Date().getTime();
		
	
		for (var spotlessIndex = 0; spotlessIndex < spotlesses.length; spotlessIndex++) {
			var spotless = spotlesses[spotlessIndex];
			var spotlessData = this.spotlesses[spotless];
			
			if (spotlessData && spotlessData.cleanup)
				spotlessData.cleanup();
			this.spotlesses[spotless] = {};
		}
	
		if (serial >= this.pageViewStartSerial) {
			this.lastPVCriterias += criterias;
			
			this.lastPVPHs = this.lastPVPHs || {};
			var phsList = placeHolders ? placeHolders.split(',') : [];
			for (var i = 0; i < phsList.length; i+=2) {
				var format = phsList[i];
				if (format)
					this.lastPVPHs[format] = (this.lastPVPHs[format] || 0) + parseInt(phsList[i+1]);
			}
			
			counts = counts.charCodeAt(0) - 65;
			this.counts.total = this.counts.total || ((counts & 1) != 0);
			this.counts.rm    = this.counts.rm    || ((counts & 2) != 0);
			this.counts.ph    = this.counts.ph    || ((counts & 4) != 0);
		}
	
		for (var i = 0; i < this.placeHolders.length; i++) {
			var ph = this.placeHolders[i];
			if (ph.serial == serial)
				ph.lock_time = null;
		}			
	},
	
	
	bannerShowing: function(serial, showingElement, format, adId, ph)
	{
		// TODO: REMOVE THIS!!!  Need to be done on the plugin !!!
		if (typeof(showingElement) == "string")
			showingElement = showingElement.replace(/(\(function\(\){ var pluginData = \(window.CM8MainWindow \|\| window\).CM8E\[)([^\]]*)(\].pluginsData\[[0-9]*\]; return pluginData.pluginWindow.CM8PluginProxy\(plugin)s(Data.pluginObject,.*)/, "$1'$2'$3$4");
	
	
	
		if (typeof(showingElement) != "string") {
			for (var parent = showingElement; parent != document.body; parent = parent.parentNode)
				if (! parent) {
					
					return false;
				}
		}
		else {
			try {
				var x = eval(showingElement);
				if (! x) {
					
					return false;
				}
			}
			catch(e) {
				
				return false;
			}
		}
			
		if (! ph) {
			var phs = [];
			for (var i = 0; i < this.placeHolders.length; i++) {
				ph = this.placeHolders[i];
				if (ph.serial == serial)
					phs.push(ph);
			}
			
			if (phs.length == 1) {
				ph = phs[0];
				
			}
			else if (typeof(showingElement) != "string") {

				for (var i = 0; i < phs.length; i++) {
					ph = phs[i];
					var phElement = ph.element;
					if (phElement && (phElement.tagName == 'SCRIPT') && phElement.nextSibling) {
						if (phElement.nextSibling.id && (phElement.nextSibling.id.indexOf("CM8_FORMAT_") == 0))
							phElement = phElement.nextSibling;
						if (phElement.nextSibling == showingElement) {
							
							break;
						}
					}
					ph = null;
				}

				if (! ph) {
					var bestDistance;
					for (var i = 0; i < phs.length; i++) {
						var candidatePh = phs[i];
						var phElement = candidatePh.element && ((candidatePh.element.tagName == 'SCRIPT') ? candidatePh.element.parentNode : candidatePh.element);
						for (var scan = showingElement, distance = 0;
						     scan && (scan != document.body) && (scan != phElement) && ((! ph) || (distance < bestDistance));
						     scan = scan.parentNode, distance++);
						if (scan == phElement) {
							
							ph = candidatePh;
							bestDistance = distance;
						}
					}
				}
			}
			else {
				ph = null;
				for (var i = 0; i < phs.length; i++) {
					ph = phs[i];
					if (ph.element == showingElement) {
						
						break;
					}
					ph = null;
				}
			}
		}
		
		if (ph) {
			ph.showingElement = showingElement;
			ph.format = format;
			ph.adId = adId;
			ph.own = true;
			ph.used = true;
			
			return true;
		}
		
		
		return false;
	},
	
	
	removeAd: function(adId)
	{
		var adData = this.spotlesses[adId];
		if (adData) {
			
			if (adData.cleanup)
				adData.cleanup();
			delete this.spotlesses[adId];
			return;
		}
		
		for (var i = 0; i < (this.placeHolders || []).length; i++) {
			var ph = this.placeHolders[i];
			if (ph.adId == adId) {
				
				if (ph.cleanup)
					ph.cleanup();
				while (ph.element.lastChild)
					ph.element.removeChild(ph.element.lastChild);
				this.placeHolders.splice(i, 1);
				return;
			}
		}		

		
	}
};
for (var CM8ETP in CM8ET)
	if ((typeof(CM8ET[CM8ETP]) == 'function') || (! CM8E[CM8XCat][CM8ETP]))
		CM8E[CM8XCat][CM8ETP] = CM8ET[CM8ETP];

(function(CM8CE){
	CM8CE.initRequest(false);

	var currentScript = ((function(parentElement)
{
	if ((parentElement.tagName == "SCRIPT") && (parentElement.src.indexOf("http://guccidigital.checkm8.com") == 0))
		return parentElement;
	for (var childElement = parentElement.lastChild; childElement; childElement = childElement.prevSibling) {
		var recursiveResult = arguments.callee(childElement);
		if (recursiveResult)
			return recursiveResult;
	}
})(document.body) ||
(function(parentElement)
{
	return ((parentElement.tagName != 'SCRIPT') && parentElement.lastChild) ? arguments.callee(parentElement.lastChild) : parentElement;
})(document.body));
	if (CM8CE.preparePH(CM8CE.lastRequestSerial, currentScript.parentNode, false, false, null)) {
	
		function CM8EncodeProfile(profile)
{
	var attrs = (profile || "").split("&");
	for (var i = 0; i < attrs.length; i++) {
		var index = attrs[i].indexOf("=");
		if (index == -1)
			index = attrs[i].length;
		var attr = attrs[i].substr(0, index);
		var value = attrs[i].substr(index + 1);
		if (attr) {
			attr = ((attr.toLowerCase().indexOf("encoded:") == 0) ? attr.substring(8) : encodeURIComponent(attr));
		}
		if (value) {
			value = ((value.toLowerCase().indexOf("encoded:") == 0) ? value.substring(8) : encodeURIComponent(value)).replace(/%2C/g, ",");
		}
		attrs[i] = attr + ((index < attrs[i].length) ? "=" : "") + value;
	}
	return ((attrs.length>0)?"&":"")+attrs.join("&");
}

		var CM8UpgProfile = CM8EncodeProfile(window.CM8Profile);
		
		if (window.CM8Id) CM8UpgProfile += "&id=" + window.CM8Id;
		
		if (window.CM8DefaultUrl) CM8UpgProfile += "&default_url=" + window.CM8DefaultUrl.replace(/%/g, "%25").replace(/&/g, "%26");
		
		if (typeof(CM8Redir) != "undefined")
	for (var CM8RedirScan in CM8Redir)
		CM8UpgProfile +=
			"&" + CM8RedirScan.replace(/%/g, "%25").replace(/&/g, "%26") +
			"=" + CM8Redir[CM8RedirScan].replace(/%/g, "%25").replace(/&/g, "%26");

		
		document.write("<SCR" + "IPT LANGUAGE='JAVASCRIPT' SRC='" +
				CM8CE.buildRequest(
						CM8CE.lastRequestSerial,
						"/adam/detect",
						"req=" + (window.CM8Req || 'b') +
						(window.CM8Page ? "&pos=" + String(Math.random()).slice(2) : "") + "&" +
						CM8UpgProfile) +
				"'></SCR" + "IPT>"); 
	}
})(CM8E[CM8XCat]);
