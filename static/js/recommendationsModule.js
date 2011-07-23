/**
 * 
 * $Id: recommendationsModule.js 71982 2011-07-12 23:06:31Z lpierfelice $
 * 
 */
 var NYTD = NYTD || {};
 NYTD.mostPopWidget = (function() {
   
   // Config

   var mostPoplimit = 10;
   NYTD.MostPop = {};
         
   // Service URLs
   var mostEmailedUrl = '/recommendations/svc/mostpopular.json';
   var mostViewedUrl =  '/recommendations/svc/mostpopular.json?type=mostviewed';
   var recommendedUrl = '/recommendations/svc/personalized.json';
   
   // Default User Pic URL
   var default_user_pic_url = NYTD.Hosts.imageHost + "/images/apps/timespeople/none.png";
   
   // Get page content type
   NYTD.MostPop.CG = $$('meta[name=CG]')[0].content;
   NYTD.MostPop.PST = $$('meta[name=PST]')[0].content;
   if (NYTD.MostPop.CG == "Homepage") {
     NYTD.MostPop.contentType = 'Homepage';
     mostEmailedUrl += '?hp=1';
     mostViewedUrl += '&hp=1';
     recommendedUrl += '?hp=1';
   } else if (NYTD.MostPop.CG == 'opinion') {
     NYTD.MostPop.contentType = 'Opinion';
   } else if (NYTD.MostPop.CG == 'Member Center' && NYTD.MostPop.PST == 'Error Page') {
     NYTD.MostPop.contentType = 'Error Page';
   }
   
   // Loading Logger

   NYTD.MostPop.EventLog = {
    "mostPopContentRecommendations" : "unloaded",
    "mostPopContentMostEmailed" : "unloaded",
    "mostPopContentMostViewed" : "unloaded"
   };

 	function activateRecommended() {
 	  $('mostPopTabRecommendations').setStyle({"display":"block"}).addClassName('selected');
 	  $('mostPopTabMostEmailed').setStyle({"display":"block"}).removeClassName('selected');
 	  $('mostPopContentMostEmailed').setStyle({"display":"none"}).removeClassName('tabContentActive');
 	  $('mostPopContentRecommendations').setStyle({"display":"block"}).addClassName('tabContentActive');

 	  $('mostPopTabMostViewed').setStyle({"display":"none"}).removeClassName('selected');
 	  $('mostPopContentMostViewed').setStyle({"display":"none"}).removeClassName('tabContentActive');

 	  $$('.showRecommended').each(function(el){
 	    el.setStyle({"display":"none"});
 	  });

     if (NYTD.MostPop.EventLog['mostPopContentRecommendations'] != "loaded") loadData(recommendedUrl, 'mostPopContentRecommendations');
     setCookie('nyt-recmod', '1', {domain : 'nytimes.com', path : '/', expires : 30});
 	}

 	function deactivateRecommended(auto) {
 	  $('mostPopTabMostViewed').setStyle({"display":"block"});
 	  $('mostPopTabMostEmailed').setStyle({"display":"block"}).addClassName('selected');
 	  $('mostPopContentMostEmailed').setStyle({"display":"block"}).addClassName('tabContentActive');

 	  $('mostPopTabRecommendations').setStyle({"display":"none"}).removeClassName('selected');
 	  $('mostPopContentRecommendations').setStyle({"display":"none"}).removeClassName('tabContentActive');

 	  $$('.showRecommended').each(function(el){
 	    el.setStyle({"display":"block"});
 	  });

    if (NYTD.MostPop.EventLog['mostPopContentMostEmailed'] != "loaded") loadData(mostEmailedUrl, 'mostPopContentMostEmailed');
    if (auto !== true) {
      setCookie('nyt-recmod', '0', {domain : 'nytimes.com', path : '/', expires : 30});
    }
 	}

   // Ajax Calls

 	function loadData(url, id) {
   	new Ajax.Request(url, {
         method: 'get',
         onComplete: function(transport) {

           try { var response = transport.responseText.evalJSON(); } 
           catch(e) {
             errorMessage($(id));
           }

           switch(id)
           {
           case "mostPopContentRecommendations":
             NYTD.MostPop.loggedIn = (response.uid > 0);
             var json = response.suggestions; 
             NYTD.MostPop.num_articles = response.num_articles || "0";
             NYTD.MostPop.user_displayname = response.user_displayname || "";
             NYTD.MostPop.user_pic_url = response.user_pic_url || default_user_pic_url;
             var tracking = (NYTD.MostPop.contentType == "Homepage") ? '?src=rechp' : '?src=recg';
             break;
           case "mostPopContentMostEmailed":
             var json = response.articles;
             var tracking = '?src=me&ref=general';
             break;
           case "mostPopContentMostViewed":
             var json = response.articles;
             var tracking = '?src=mv&ref=general';
             break;
           default:
             var json = response.articles;
             var tracking = '?src=mv&ref=general';
           }
           if (json && json.length > 0) {
             populateMostPop(json, $(id), tracking);
             if (id == "mostPopContentRecommendations") setupRecommended();
             NYTD.MostPop.EventLog[id] = "loaded";
           } else {             
             if (id == "mostPopContentRecommendations" && !NYTD.MostPop.autoRecOff) { 
                deactivateRecommended(true);
                NYTD.MostPop.autoRecOff = true;            
             } else {
               errorMessage($(id));
             }             
           }
   				 $$('#'+id+' .loader').invoke('remove');
         },
         onFailure: function(transport) {
           errorMessage($(id));
         }
     }); 
   }

 	function setupRecommended() {
 	  if($('recommendedFooter')) $('recommendedFooter').setStyle({"display":"block"});
 	  if (NYTD.MostPop.loggedIn) {
 	    $('mostPopContentRecommendations').insert({ top : '<div id="recommendedHeader" class="opposingFloatControl wrap" style="display: none;">\
 				<div class="element1"><span id="articlesPastMonth">'+ NYTD.MostPop.num_articles +'</span> articles in the past month</div>\
 				<div class="element2"><p><img class="runaroundRight user_pic" src="'+ NYTD.MostPop.user_pic_url +'" /><strong>'+ NYTD.MostPop.user_displayname.truncate(25) +'</strong><br /><a href="http://www.nytimes.com/recommendations">All Recommendations</a></p></div></div>'});

 	    if($('recommendedHeader')) $('recommendedHeader').setStyle({"display":"block"});
 	    $$('#recommendedFooter .loggedIn').invoke('setStyle', {"display":"block"});
 	    $$('#recommendedFooter .loggedOut').invoke('setStyle', {"display":"none"});
 	  } else {
 	    if($('recommendedHeader')) $('recommendedHeader').remove();
 	    $$('#recommendedFooter .loggedIn').invoke('setStyle', {"display":"none"});
 	    $$('#recommendedFooter .loggedOut').invoke('setStyle', {"display":"block"});
 	  }
 	}

 	// Create Error Message

 	function errorMessage(target) {
 		if(target == $("mostPopContentRecommendations")){
 		  errorHTML = '<div class="errorMessage"><p><b>We don&rsquo;t have any personalized recommendations for you at this time. Please try again later.</b></p></div>';
 		  target.childElements().each(function(el){
        el.setStyle({"display":"none"});
      });
      if($('recommendedFooter')) $('recommendedFooter').setStyle({"display":"block"});
      if(NYTD.MostPop.loggedIn) {
   	    $$('#recommendedFooter .general').invoke('setStyle', {"display":"block"});
 	    } else {
 	      $$('#recommendedFooter .loggedOut').invoke('setStyle', {"display":"block"});
 	    }
 	  } else {
 	    errorHTML = '<div class="errorMessage"><p><b>This article list is not currently available. Please try again later.</b></p></div>';
 	  }
    target.select('.loader').invoke('remove');
    target.select('.errorMessage').invoke('remove');
 		target.insert({ top : errorHTML});
 	}


 	// Inject HTML

 	function populateMostPop(item, target, tracking) {
 		
 		// Build HTML
 		var mostPopHTML = '<table class="leftAlignedMostPop"><tbody>';
    var img = "";
 		for (var i=0; i < item.length; i++) {
 		  if (i >= mostPoplimit) break;
 		  if (NYTD.MostPop.contentType != "Homepage") {
 			  if (item[i].thumbnail != null) { var img = '<td class="mostPopularImg"><a title="Click to go to this article" href="'+item[i].url + tracking +'"><img src="'+item[i].thumbnail.url+'"></a></td>'; } else { var img = "<td></td>"; }
 			}
 			if (item[i].kicker != null) { var kicker = item[i].kicker; } else { var kicker = ""; }
 			mostPopHTML += '<tr>'+ 
 			img +'<td class="listNumber">'+ 
 			(i+1) +'.</td><td class="mostPopularTitle"><h6 class="kicker">' + kicker + '</h6><h4><a title="Click to go to this article" href="'+
 			item[i].url + tracking +'">'+
 			item[i].title+'</a></h4></td></tr>\n';
 		}
 		mostPopHTML += '</tbody></table>';
 		
 		//Clean Up existing stuff
 		var existingTable = target.select('table.leftAlignedMostPop');
 		var isTable = existingTable.length;
 		if (!isTable) {} else { existingTable[0].remove() }
 		var errors = target.select('.errorMessage');
 		var isError = errors.length;
 		if (!isError) {} else { errors[0].remove() }
 		
 		// Print 
 		target.insert({ top : mostPopHTML});
 	}
  
  // New CSS styles
 	var cssStyle = '#mostPopWidget.doubleRule { background:url("'+ NYTD.Hosts.imageHost +'/images/global/borders/aColumnHorizontalBorder.gif") repeat-x scroll 0 16px transparent !important; border-width:0 !important; clear:both; height:auto !important; margin-bottom:0 !important; } \
     #mostPopWidget .kicker{ margin:0; font-size:10px !important; font-family: arial, helvetica, sans-serif; font-weight:normal; text-transform:uppercase;}\
     #mostPopWidget h4{ font-weight: bold }\
     #mostPopWidget ol{display:none;}\
     #mostPopWidget #tabsContainer{position:static; bottom:0; left:0 !important}\
     #mostPopWidget .tabs{padding:0 0 0 6px !important;text-transform:uppercase; margin-bottom: -1px; }\
     #mostPopWidget .tabs li{ width:150px;border-top-width:0 !important;border-right-width:0 !important;border-bottom-width:0 !important;border-left-width:0 !important;background:none;text-align:center;height:24px !important;line-height:2.25em;margin:0 -2px 0 0 !important;padding-top:13px !important ;font-weight:bold;}\
     #mostPopWidget .tabs li.selected{ background:url("'+ NYTD.Hosts.imageHost +'/images/recommendations/plainTab160Tall.gif") no-repeat scroll center bottom !important;border-right:0 none !important;margin:0 0 0 0 !important;height:23px !important;}\
     #mostPopWidget .tabContent{ padding:4px 0 0 0;border:0;border-top:1px solid #cacaca;}\
     #mostPopWidget .tabContent .loader {text-align: center; padding:40px 0; }\
     #mostPopWidget .tabContent .loader img { width:18px; height: 18px; }\
     #mostPopWidget .tabContent table{border-collapse:collapse; width:100%; }\
     #mostPopWidget .tabContent table td{text-align:left !important; font-size:13px !important; height:35px; vertical-align:top; padding:6px 0 4px 0; border-bottom:1px solid #E2E2E2;}\
     #mostPopWidget .tabContent table tr.last td{border-bottom:0px;}\
     #mostPopWidget .tabContent table td.listNumber{padding:6px 10px 4px 3px;font-size:1.3em; text-align:right !important}\
     #mostPopWidget .tabContent table td.mostPopularImg{width:30px; padding: 4px 6px 4px 0; }\
     #mostPopWidget .tabContent table td.mostPopularTitle{padding-top:7px;}\
     #mostPopWidget .tabContent table.leftAlignedMostPop td.mostPopularImg{ padding-right:6px; }\
     #mostPopWidget .tabContent table.rightAlignedMostPop td.mostPopularImg{ padding-right:0px; padding-left:6px; }\
     #mostPopWidget .tabContent td.mostPopularImg img{ width:48px;}\
     #mostPopWidget .tabContent h4{ font-weight:normal; text-align:left !important; text-transform:none !important; font-size:13px !important;line-height:1.15em !important;margin-bottom:3px !important;font-family:georgia,"times new roman",times,serif !important;}\
 		#mostPopWidget .mostFooter {  font-family: arial, helvetica, sans-serif; margin:8px 0 0 0;}\
 		#mostPopWidget .mostFooter p {font-size: 11px;} \
 		#articlesPastMonth { font-size: 34px; margin-right: 9px; float:left; line-height:30px}\
 		#recommendedHeader {border-bottom: 1px solid #E2E2E2; font-size: 1.2em; font-family: arial, helvetica, sans-serif; padding:7px 2px 7px 10px}\
 		#recommendedHeader .element1{ width: 140px  }\
 		#recommendedHeader .element2{ width: 180px  }\
 		#recommendedHeader .element2 img{ height:25px;  }\
 		#recommendedHeader .element2 p{ font-size: 12px; text-align: right  }\
 		#recommendedHeader .element2 a{ white-space: nowrap;  }\
 		#recommendedFooter {font-family: arial, helvetica, sans-serif;}\
 		#recommendedFooter .element1  {margin:13px 0 0 0}\
 		#recommendedFooter p  { font-size: 1.1em}\
 		#recommendedFooter .loggedIn span,\
 		#recommendedFooterActions .element2 span{ font-size:10px; color:#999; } \
 		#recommendedFooter .loggedIn span a,\
 		#recommendedFooterActions .element2 span a{color:#666; text-decoration:underline } \
 		#recommendedFooterActions .horizontalMenu li {padding:0 6px 0 0}\
 		#recommendedFooterActions .element1 {margin: -1px 0 0 0}\
 		#recommendedFooterActions { margin: 12px 0 0 0; }\
 		#recommendedAdContainer { text-align:center}\
 		#recommendedAdContainer iframe { border:0; }\
 		#recommendedAdContainer span {font-size:7px; text-transform: uppercase; color:#999;}\
 		.hideRecommended:hover,\
 		.showRecommended:hover,\
 		#fbLoginButton:hover {cursor: pointer}\
 		#mostPopWidget .tabContent .errorMessage { padding:30px 20px; color: #999; font-family: arial, helvetica, sans-serif; border-bottom: 1px solid #E2E2E2; }\
 		#mostPopWidget .tabContent .errorMessage p{ font-size:11px;  } \
 		\
 		';
    
    // Homepage style
    
    if (NYTD.MostPop.contentType == "Homepage") {
      cssStyle += " \
      #home #mostPopWidget .tabContent table td{ border-bottom: 0 !important; height: auto; padding-bottom: 2px;} \
      #home #mostPopWidget .tabContent table td.mostPopularTitle h4 { font-weight: bold !important; font-size: 12px !important; }\
      #home #mostPopWidget .tabContent table { margin: 4px 0 6px; }\
      #home #recommendedFooter { border-top: 1px solid #E2E2E2 !important; }\
      #home #mostPopWidget .mostFooter { margin:0; padding-top: 8px; border-top: 1px solid #E2E2E2 !important; }\
      #home #recommendedHeader { margin-bottom: 2px }\
      #home #mostPopWidget .tabContent .errorMessage { border-bottom: none;  } \
      ";
    }
    
    
 	if (NYTD.MostPop.contentType == "Opinion") {
       cssStyle += '#mostPopWidget .tabs li.selected {\
       background: #F4F4F4 !important;\
       border-top:1px solid #ccc !important;\
       border-left:1px solid #ccc !important;\
       border-right:1px solid #ccc !important;\
       height:23px !important;\
       margin:0 !important;\
       }\
       #mostPopWidget .tabs li {\
       background: none !important;\
       border:0 none !important;\
       height:23px !important;\
       margin:0 !important;\
       }'; 
   }
   
   if (NYTD.MostPop.contentType == "Error Page") {
        cssStyle += '#mostPopWidget #tabsContainer {\
          display: none;\
          padding-top: 0;\
        }\
        #mostPopWidget.doubleRule {\
        background: none !important;\
        padding-top: 0;\
        }\
        #mostPopWidget .tabContent {\
        border: 0 !important;\
        padding-top: 0;\
        }\
        #mostPopWidget .tabContent h4 {\
          font-family: arial,helvetica,sans-serif !important;\
          font-size: 14px !important;\
        }\
        #mostPopWidget .tabContent table td.mostPopularTitle {\
            padding-top: 6px;\
        }\
        #mostPopWidget .tabContent table td {\
            border-bottom: 0;\
            font-size: 14px !important;\
        }\
        #mostPopWidget .tabContent table td.listNumber {\
            font-weight: bold;\
        }\
        #mostPopWidget .showRecommended {\
          display: none !important;\
        }\
        '; 
    }
   
 	// Load CSS 
 	function appendStyleTag(styleStr) {
         var newNode = document.createElement('style');
         newNode.setAttribute("type", "text/css");
         if (newNode.styleSheet) {
             // IE
             newNode.styleSheet.cssText = styleStr;
         } else {
             newNode.appendChild(document.createTextNode(styleStr));
         }
         $$('head')[0].appendChild(newNode);
 		}
     appendStyleTag(cssStyle);

 	var mostPopShell = '<!-- MOST POPULAR MODULE STARTS -->\
 		         <div id="tabsContainer">\
 		         <ul class="tabs">\
 		            <li id="mostPopTabMostEmailed" class="tab" style="display: none;"><a href="http://www.nytimes.com/gst/mostpopular.html">MOST E-MAILED</a></li>\
 		            <li id="mostPopTabMostViewed" class="tab" style="display: none;"><a href="http://www.nytimes.com/gst/mostpopular.html">MOST VIEWED</a></li>\
 								<li id="mostPopTabRecommendations" class="tab" style="display: none;"><a href="http://www.nytimes.com/recommendations">RECOMMENDED FOR YOU</a></li>\
 		         </ul>\
 		         </div>\
 						\
 						<div id="mostPopContentMostEmailed" class="tabContent" style="display: none;">\
 						  <div class="loader"><img src="'+ NYTD.Hosts.imageHost +'/images/loaders/loading-grey-lines-circle-18.gif" /></div>\
 							<div class="mostFooter opposingFloatControl wrap"><p class="element1"><a href="http://www.nytimes.com/gst/mostpopular.html">Go to Complete List &raquo;</a></p>\
 							<p class="element2"><a class="showRecommended">Show My Recommendations</a></p></div>\
 						</div>\
 						\
 						<div id="mostPopContentMostViewed" class="tabContent" style="display: none;">\
 						  <div class="loader"><img src="'+ NYTD.Hosts.imageHost +'/images/loaders/loading-grey-lines-circle-18.gif" /></div>\
 							<div class="mostFooter opposingFloatControl wrap"><p class="element1"><a href="http://www.nytimes.com/gst/mostpopular.html">Go to Complete List &raquo;</a></p>\
 							<p class="element2"><a class="showRecommended">Show My Recommendations</a></p></div>\
 						</div>\
 						\
 						<div id="mostPopContentRecommendations" class="tabContent" style="display: none;">\
 						  <div class="loader"><img src="'+ NYTD.Hosts.imageHost +'/images/loaders/loading-grey-lines-circle-18.gif" /></div>\
 							\
 							<div id="recommendedFooter">\
 							  <div class="opposingFloatControl wrap"> \
 							    <p class="element1 loggedOut" style="display: none;">Log in to discover more articles<br />\
   								based on what you&lsquo;ve read.</p>\
   								\
 								  <p class="element1 loggedIn" style="display: none;"><a href="http://www.nytimes.com/recommendations">Go to Your Recommendations &raquo;</a><br />\
   								<span><a href="http://www.nytimes.com/content/help/extras/recommendations/recommendations.html">What&rsquo;s This?</a> | <a class="hideRecommended">Don&rsquo;t Show</a></span></p>\
   								\
   								<p class="element1 general" style="display: none;"><a href="http://www.nytimes.com/content/help/extras/recommendations/recommendations.html">What&rsquo;s This?</a> | <a class="hideRecommended">Don&rsquo;t Show</a></p>\
   								<div id="recommendedAdContainer" class="element2">\
   									<span id="presentedBy" style="display: none">PRESENTED BY</span>\
   									<div id="recommendedAd">\
   									  <iframe scrolling="no" frameborder="0" src="http://www.nytimes.com/packages/html/recommendations/ad.html" width="168" height="28"></iframe>\
                     </div>\
   								</div>\
   							</div>\
 								\
 								<div id="recommendedFooterActions" class="opposingFloatControl wrap loggedOut" style="display: none;">\
   								<div class="element1">\
   								  <ul class="flush horizontalMenu">\
     								  <li><a href="/login"><img src="'+ NYTD.Hosts.imageHost +'/images/recommendations/recommendedLogin.png" /></a></li>\
     								  <li><a href="/regi"><img src="'+ NYTD.Hosts.imageHost +'/images/recommendations/recommendedRegister.png" /></a>\
     								  <li><a id="fbLoginButton"><img src="'+ NYTD.Hosts.imageHost +'/images/recommendations/recommendedFacebook.png" /></a></li>\
     								</ul>\
   								</div>\
   								<div class="element2">\
   								  <span><a href="http://www.nytimes.com/content/help/extras/recommendations/recommendations.html">What&rsquo;s This?</a> | <a class="hideRecommended">Don&rsquo;t Show</a></span>\
   								</div>\
   							</div>\
 							</div>\
 							\
 						</div>\
 						\
 		<!-- MOST POPULAR MODULE ENDS -->';
 		
 	  // Init 

   	var init = (function() {

      //Build initial HTML
   	  $('mostPopWidget').insert(mostPopShell);
      
      // Click Handlers

     	$('mostPopTabMostEmailed').observe('click', respondToClickMostEmailed);
       function respondToClickMostEmailed(event) {
         var url = mostEmailedUrl;
         if (NYTD.MostPop.EventLog['mostPopContentMostEmailed'] != "loaded") loadData(url, "mostPopContentMostEmailed");
       }

       $('mostPopTabMostViewed').observe('click', respondToClickMostViewed);
       function respondToClickMostViewed(event) {
         var url = mostViewedUrl;
         if (NYTD.MostPop.EventLog['mostPopContentMostViewed'] != "loaded") loadData(url, "mostPopContentMostViewed");
       } 

       $('mostPopTabRecommendations').observe('click', respondToClickRecommendations);
       function respondToClickRecommendations(event) {
         var url = recommendedUrl;
         if (NYTD.MostPop.EventLog['mostPopContentRecommendations'] != "loaded") loadData(url, "mostPopContentRecommendations");
       }

       // Hide Rec Handler
       $$('.hideRecommended').each(function(el){ 
         el.observe('click', deactivateRecommended);
       });

       // Show Rec Handler
       $$('.showRecommended').each(function(el){ 
         el.observe('click', activateRecommended);
       });

       // fbLogin Handler
       $('fbLoginButton').observe('click', function(){
         NYTD.Facebook.User.login(function(){
           // Reset cache
           NYTD.MostPop.EventLog.mostPopContentRecommendations = "unloaded";
           var url = recommendedUrl;
           window.setTimeout(function(){
             loadData(url, "mostPopContentRecommendations");
           }, 1000);
         });
       });
      
      // Check Reco Cookie
   	  NYTD.MostPop.recCookie = getCookie('nyt-recmod');
 	    if (NYTD.MostPop.contentType != 'Error Page' && (NYTD.MostPop.recCookie == null || NYTD.MostPop.recCookie == 1)) {
   	    // No Cookie or cookie set to true, Show Recommended
     	  activateRecommended();
   	  } else {
   	    // Cookie set to false or Error Page, show most viewed and most emailed.
   	    NYTD.MostPop.autoRecOff = true;
   	    deactivateRecommended();
   	  }
      new Accordian("mostPopWidget");
   	})();	
  
 	
 	// Utils
 	
 	function setCookie(name, value, options) {
 	      var newcookie = [escape(name) + "=" + escape(value)];
 	      if (options) {
 	        if (options.expires) {
 						var date = new Date();
 						date.setTime(date.getTime()+(options.expires*24*60*60*1000));
 						newcookie.push("expires=" + date.toGMTString());
 					}
 	        if (options.path)    newcookie.push("path=" + options.path);
 	        if (options.domain)  newcookie.push("domain=" + options.domain);
 	        if (options.secure)  newcookie.push("secure");
 	      }
 	      document.cookie = newcookie.join('; ');
 	    }
 	function getCookie(name) {
     return new RegExp(name + '=([^;]+)').test(unescape(document.cookie)) ? RegExp.$1 : null;
   }
 })();