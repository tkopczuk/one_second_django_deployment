/*
$Id: revenuescience.js 58008 2011-02-11 19:17:19Z alex.wallace $ 
*/

function getMetaTag(tagName) {

  var metaTags=document.getElementsByTagName("meta");
  for(var i in metaTags){ 
    if(metaTags[i].name == tagName) {
      return metaTags[i].content;
    }
  }
  return "";
}

function addCategory(category, valueToAppend) {

  if (valueToAppend != "") 
    return category + " > " + valueToAppend;
  else
    return category;
}

function revenuescienceInit() {
    var contentGroup = getMetaTag("WT.cg_n");
    if (contentGroup != "Homepage") {
        var catValue = "NYTimesglobal";
        catValue = addCategory(catValue, contentGroup);
        catValue = addCategory(catValue, getMetaTag("WT.cg_s"));
        DM_cat(catValue);
        DM_tag();
    }
}

if (/MSIE/.test(navigator.userAgent)) {
	// In IE, wrapping this code block in setTimeout is needed because in certain cases,
	// it will execute before other script files needed are fully loaded.
	window.setTimeout(revenuescienceInit, 100);
} else {
	revenuescienceInit();
}
