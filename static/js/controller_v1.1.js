/*
 * $Id: controller_v1.1.js 71898 2011-07-12 06:19:04Z kiran_narkedamilli $
 * (c) 2006-2010 The New York Times Company
 */

// SET GLOBAL VARS
var nyt_url        = document.URL;
var nyt_domain     = document.domain;
var nyt_path       = window.location.pathname;
var wt_dcsidArray  = {"General":"dcsym57yw10000s1s8g0boozt_9t1x",
                     "Homepage":"dcsa5pgfq10000c9zuysqk0lm_6i8y",
                     "World":"dcspjt2na00000wcnvo8wdaeo_7q9o",
                     "U.S.":"dcsypfq3j00000gsclwfljaeo_6i3w",
                     "Politics":"dcsa23rmv10000wowiejpwx86_4v7j",
                     "N.Y./Region":"dcsj5tb4n100000sl76culaeo_4f3w",
                     "Business":"dcsc32upj10000c58n7kgpaeo_8i3g",
                     "Technology":"dcs591klg00000c97pblfraeo_7p3p",
                     "Science":"dcsaon9rw0000008ifmgqtaeo_2f9c",
                     "Health":"dcsfj6l0t100008ijt0irzaeo_2k8f",
                     "Sports":"dcss4vytr000000kbuy6j8beo_6f7s",
                     "Opinion":"dcs5ydwfq100008me456mabeo_1z2v",
                     "Books":"dcss90tjf00000knzmux6hbeo_8r8y",
                     "Dance":"dcs9ihxq600000w842mebkbeo_9r6q",
                     "Movies":"dcsyoaqvl00000wc34qfambeo_4q3b",
                     "Music":"dcsrioyse100000kjghaqubeo_2d4x",
                     "TV":"dcsghn1j900000gs8yfgfwbeo_3r9l",
                     "Theater":"dcsxl9f4810000oub8mfiybeo_5l8v",
                     "Arts":"dcsnu1k8n00000oi2prv9fbeo_2w5s",
                     "T:Style":"dcs31c2fd10000w8wjmo22ceo_5x6n",
                     "Style":"dcs2dla2i00000431qkl70ceo_3j4r",
                     "Travel":"dcsktwey810000kfp9nsv3ceo_6n1r",
                     "Jobs":"dcsxmnyde100000oerlyk5ceo_6k5k",
                     "Real Estate":"dcsuvvccp000000sdtpzj7ceo_3j2x",
                     "Great Homes":"dcszwassu10000w8cogv42y86_8h8v",
                     "Autos":"dcs3i2ttw0000043xyk839ceo_2v6n",
                     "Classifieds":"dcso5eb2r10000cpz9bq5cceo_3j5e",
                     "Video":"dcs1j460r100008uw7es2eceo_6c4w",
                     "TimesSelect":"dcsqdkcdj100004zt5huzfceo_3b7v",
                     "Times Topics":"dcs3baftr1000008q5oxvjceo_4r9g",
                     "Member Center":"dcst9xior10000wo45l9anceo_4u9e",
                     "Crosswords/Games":"dcsepujaa100000s5bq9bpceo_7w6k",
                     "Sunday Magazine":"dcsrmsj6n10000wok933qrceo_1x8d",
                     "Most Popular":"dcsvmgcs910000o2ubv1z1deo_8b5s",
                     "Learning Network":"dcslh0e4x00000ggzmnn3ldeo_6f8k",
                     "Knowledge Network":"dcs69r7oi100004nscorwmdeo_7r4i",
                     "Week In Review":"dcsvfceih10000o610i65qdeo_7y5r",
                     "Weather":"dcsker4wf10000wszj8b32eeo_4m7u",
                     "News Tracker":"dcsa1h2mn00000oacf4of5eeo_5f2m",
                     "Multimedia":"dcsvs34dy000000chtbmk7eeo_3f9p",
                     "Cartoons / Humor":"dcsc1dh4600000oiajcqd9eeo_9l2m",
                     "Cartoons":"dcsc1dh4600000oiajcqd9eeo_9l2m",
                     "AP/Reuters":"dcs15dnk9100004r7jamfwu0p_3v8n",
                     "Search":"dcsmcntzl00000wwyhty30deo_8o2v",
                     "Blogrunner":"dcs9rqdr610000082j6e7xceo_1c8r",
                     "MyTimes":"dcsctlxlp10000chdjl4jlceo_2d1n",
                     "Times File":"dcs91tz2300000c1p17hs3eeo_4o7e",
                     "Email This":"dcsy6xxc210000g07639fkkvs_7b7o",
                     "Archive":"dcssxc7tw10000ggrcqca1cbr_1v1i",
                     "Olympics":"dcs3oivag100004zd9xgx1mfh_4f9w",
                     "Widget":"dcsoy2de300000ch9g4qg9oct_9j4x",
                     "Self Service":"dcs1tovv3100004rjcdl3h79j_7p9f",
                     "Home Delivery Acquisition":"dcsio1db9100004n4exgb9o0q_6o3k",
                     "Home Delivery":"dcsbnggae10000kbq7blis7nn_6g9j",
                     "Digital Subscription":"dcsv96qcv000008alp4trgo0q_7h8h"};

var wt_cgArray     = {"aponline":"AP/Reuters",
                     "arts":"Arts",
                     "automobiles":"Autos",
                     "books":"Books",
                     "business":"Business",
                     "Business Day":"Business",
                     "crosswords":"Crosswords/Games",
                     "dining":"Style",
                     "education":"U.S.",
                     "fashion":"Style",
                     "garden":"Style",
                     "greathomesanddestinations":"Great Homes",
                     "health":"Health",
                     "jobs":"Jobs",
                     "magazine":"Sunday Magazine",
                     "movies":"Movies",
                     "multimedia":"General",
                     "nyregion":"N.Y./Region",
                     "olympics":"Olympics",
                     "opinion":"Opinion",
                     "podcasts":"General",
                     "publiceditor":"Opinion",
                     "realestate":"Real Estate",
                     "reuters":"AP/Reuters",
                     "science":"Science",
                     "sports":"Sports",
                     "style":"Style",
                     "t-magazine":"T:Style",
                     "technology":"Technology",
                     "theater":"Theater",
                     "timestopics":"Times Topics",
                     "todayspaper":"General",
                     "travel":"Travel",
                     "us":"U.S.",
                     "washington":"U.S.",
                     "weekinreview":"Week in Review",
                     "world":"World"};

var wt_scgArray    = {"design":"Art and Design",
                     "boxoffice":"Box Office",
                     "autoreviews":"New Cars",
                     "collectibles":"Collectibles",
                     "review":"Sunday Book Review",
                     "bestseller":"Best-Seller Lists",
                     "chapters":"First Chapters",
                     "media":"Media and Advertising",
                     "worldbusiness":"World Business",
                     "smallbusiness":"Small Business",
                     "yourmoney":"Your Money",
                     "research":"Research",
                     "nutrition":"Fitness and Nutrition",
                     "policy":"Money and Policy",
                     "views":"Views",
                     "guide":"Health Guide",
                     "currentreleases":"In Theaters",
                     "homevideo":"On DVD",
                     "criticspicks":"Critics Pick",
                     "thecity":"The City",
                     "nyregionspecial2":"The Region",
                     "nyregionopinions":"NY/Region Opinions",
                     "earth":"Environment",
                     "space":"Space and Cosmos",
                     "baseball":"Baseball",
                     "football":"Pro Football",
                     "ncaafootball":"College Football",
                     "basketball":"Pro Basketball",
                     "ncaabasketball":"College Basketball",
                     "hockey":"Hockey",
                     "soccer":"Soccer",
                     "golf":"Golf",
                     "tennis":"Tennis",
                     "othersports":"Other Sports",
                     "fashion":"Fashion",
                     "dining":"Dining",
                     "garden":"Home and Garden",
                     "weddings":"Weddings",
                     "tmagazine":"T Magazine",
                     "personaltech":"Personal Tech",
                     "broadway":"Broadway",
                     "offbroadway":"Off Broadway",
                     "offoffbroadway":"Off Off Broadway",
                     "london":"London",
                     "reviews":"Reviews",
                     "washington":"Washington",
                     "education":"Education",
                     "africa":"Africa",
                     "americas":"Americas",
                     "asia":"Asia Pacific",
                     "europe":"Europe",
                     "middleeast":"Middle East",
                     "editorials":"Editorials",
                     "contributors":"Contributors",
                     "nyregionopinions":"NY/Region Opinions",
                     "communities":"Communities",
                     "commercial":"Commercial",
                     "podcasts":"Podcasts",
                     "womens-fashion":"Women's Fashion",
                     "mens-fashion":"Men's Fashion",
                     "design":"Design",
                     "travel":"Travel",
                     "food":"Food",
                     "culture":"Culture",
                     "dealbookjobs":"Dealbook Jobs"};

// POPULATE META TAGS
// Get content group
var wt_contentGroup = getMetaTag("WT.cg_n");
var wt_cgTag;
if (wt_contentGroup == "") {
  wt_cgTag = getMetaTag("CG");
  wt_tempcontentGroup = wt_cgArray[wt_cgTag];
  if (wt_tempcontentGroup != undefined) {
    wt_contentGroup = wt_tempcontentGroup;
  } else {
    wt_contentGroup = wt_cgTag;
  }
  if (wt_contentGroup == "") {
    wt_contentGroup = getContentGroup(nyt_url, nyt_domain, nyt_path);
  }
}

// Get subcontent group
wt_scgTag = getMetaTag("SCG");
wt_tempsubcontentGroup = wt_scgArray[wt_scgTag];
if (wt_tempsubcontentGroup != undefined) {
  wt_scgTag = wt_tempsubcontentGroup; 
}
wt_subcontentGroup = wt_scgTag;

// Update content and subcontent groups 
handleCGExceptions();
addMetaTag("WT.cg_n", wt_contentGroup);
addMetaTag("WT.cg_s", wt_subcontentGroup);

// Read generic tags from page
readPageTags();

// Get content specific info
setContentInfo();

// Set referrer info
setReferrerInfo();

// Set Section Front
setSectionFront();

// Set gdcsid (default to General if there is no match)
gdcsid = wt_dcsidArray[wt_contentGroup];
if (gdcsid == undefined) {
  gdcsid = "dcsym57yw10000s1s8g0boozt_9t1x";
}

// Set dcsvid
var dcsvid;
if (dcsvid != undefined && dcsvid != "0") {
  addMetaTag("WT.dcsvid", dcsvid);
}

// Set registration status
var regstatus;
if (regstatus != undefined) {
  addMetaTag("WT.rv", (regstatus == "registered") ? "1" : "0");
}

// Set article information
var metaArticleId = getMetaTag("articleid");
if (metaArticleId != "" && getMetaTag("WT.z_gpst") != "Comments Overflow") {
  setArticleInfo(metaArticleId);
} else {
  setCommentOverflowInfo(metaArticleId);
}

// Set pub date range; NB - this needs to be after setArticleInfo
var pub_date = getMetaTag("WT.z_pud");
if (pub_date != "") {
  setPubDateInfo(pub_date);
}

// Set interactive information
var tomMetaTag = getMetaTag("tom");
if (tomMetaTag == "interactive_graphic" || tomMetaTag == "interactive_feature") {
  setInteractiveGraphicInfo();
}

// Set imagepages 
if (/^\/imagepages/.test(nyt_path)) {
  addMetaTag("PT", "Multimedia");
  addMetaTag("PST", "Image");
}

// Set slideshow information
var tomMetaTag = getMetaTag("tom");
if ((tomMetaTag == "Slideshow") || (/^\/slideshow\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\//.test(nyt_path))) {
  setSlideshowInfo();
}

// Set campaign information
var metaEmailCampId = getQueryParameter("emc");
addMetaTag("WT.mc_id", metaEmailCampId);

var externalCampId = getQueryParameter("excamp");
if (externalCampId != "") {
  addMetaTag("WT.mc_id", externalCampId);
  addMetaTag("WT.srch", "1");
}

if (getMetaTag("WT.mc_id") != "") {
  addMetaTag("WT.mc_ev", "click"); 
}

// Set no_interstitial param
if (queryParameterExists("no_interstitial")) {
  addMetaTag("WT.z_dirlnk", "1");
}

// Set global cookie tracking info
if (/NYT-Global/.test(document.cookie)) {
    addMetaTag("WT.gv", "2");
}
else if (/edition\|GLOBAL/.test(document.cookie)) {
    addMetaTag("WT.gv", "1");
}

// check homepage auto refresh cookie
if (document.cookie.match(/autorefresh=1/)) {
    addMetaTag("WT.z_jog", "1");
    var expTime = new Date();
    expTime.setTime(expTime.getTime() - 60000);
    document.cookie = "autorefresh=0; expires=" + expTime.toGMTString() + "; path=/";
}

// Set the click tracking variable for specific pages
setTrackEvents();

// Set onsite search information
setSearchInfo();

// Set default information
setDefaultTags();

// Include WebTrends wtinit.js
var wtinitFile = js_host+"wtinit.js";
includeFile(wtinitFile);

// Include WebTrends wtbase.js
var wtbaseFile = js_host+"wtbase.js";
includeFile(wtbaseFile);



// FUNCTIONS
function getContentGroup(wt_url, wt_domain, wt_path) {

  var contentGroup = getMetaTag("contentGroup");
  if (contentGroup == "") {

    // homepage
    if(/^http:\/\/(www\.)?(nytimes|times)\.com\/(\/|index\.html|pages\/|pages\/partners\/aol\/homepage\/|yr\/mo\/day\/)?$/.test(wt_url))  {
      contentGroup = "Homepage";

    // world
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/\b(world|international)\b\//.test(wt_path)
            || /^\/international\//.test(wt_path)
            || /\/packages\/html\/\b(world|international)\b\//.test(wt_path)
            || /^\/\b(pages|ref|reuters|aponline|cfr)\b\/world\//.test(wt_path)) {
      contentGroup = "World";

    // politics
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/\b(us\/politics|politics)\b\//.test(wt_path)
            || /\/packages\/html\/politics\//.test(wt_path)
            || /^\/pages\/politics\//.test(wt_path)
            || /^\/yr\/mo\/day\/politics\//.test(wt_path)
            || /^\/politics\//.test(wt_path)
            || /^\/ref\/politics\//.test(wt_path)
            || /^\/ref\/us\/politics\//.test(wt_path)
            || /\/election-guide\//.test(wt_path)) {
      contentGroup = "Politics";

    // us
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/\b(us|education|washington|national)\b\//.test(wt_path)
            || /\/packages\/html\/\b(us|education|washington|national)\b\//.test(wt_path)
            || /^\/pages\/\b(us|education|washington|national)\b\//.test(wt_path)
            || /^\/yr\/mo\/day\/\b(us|education|washington|national)\b\//.test(wt_path)
            || /^\/\b(us|education|washington|national)\b\//.test(wt_path)
            || /^\/aponline\/us\//.test(wt_path)
            || /^\/reuters\/us\//.test(wt_path)
            || /^\/ref\/\b(us|education|washington|national)\b\//.test(wt_path)
            || /^\/cq\//.test(wt_path)) {
      contentGroup = "U.S.";

    // ny region - check this before opinion
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/nyregion\//.test(wt_path)
            || /^\/packages\/khtml\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/nyregion\//.test(wt_path)
            || /\/packages\/html\/nyregion\//.test(wt_path)
            || /^\/pages\/nyregion\//.test(wt_path)) {
      contentGroup = "N.Y./Region";

    // business
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/business\//.test(wt_path)
            || /\/packages\/html\/business\//.test(wt_path)
            || /^\/pages\/business\//.test(wt_path)
            || /^\/yr\/mo\/day\/business\//.test(wt_path)
            || /^\/business\//.test(wt_path)
            || /^\/aponline\/business\//.test(wt_path)
            || /^\/reuters\/business\//.test(wt_path)
            || /^\/ref\/business\//.test(wt_path)
            || /^\/allbusiness\//.test(wt_path)
            || /^\/inc_com\//.test(wt_path)) {
      contentGroup = "Business";

    // technology
    } else if (wt_domain == "tech.nytimes.com"
            || wt_domain == "tech2.nytimes.com"
            || wt_domain == "download.nytimes.com"    
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/technology\//.test(wt_path)
            || /\/packages\/html\/technology\//.test(wt_path)
            || /^\/pages\/technology\//.test(wt_path)
            || /^\/tech\//.test(wt_path)
            || /^\/aponline\/technology\//.test(wt_path)
            || /^\/reuters\/technology\//.test(wt_path)
            || /^\/ref\/technology\//.test(wt_path)
            || /^\/pages\/cnet\//.test(wt_path)
            || /^\/cnet\//.test(wt_path)
            || /^\/paidcontent\//.test(wt_path)
            || /^\/idg\//.test(wt_path)
            || (/^\/gst\/fullpage\.html/.test(wt_path) && getQueryParameter("sec") == "technology")) {
      contentGroup = "Technology";

    // science
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/science\//.test(wt_path)
            || /\/packages\/html\/science\//.test(wt_path)
            || /^\/ref\/science\//.test(wt_path)
            || /^\/pages\/science\//.test(wt_path)) {
      contentGroup = "Science";
  
    // health
    } else if (wt_domain == "health.nytimes.com"
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/health\//.test(wt_path)
            || /\/packages\/html\/health\//.test(wt_path)
            || /^\/pages\/health\//.test(wt_path)
            || /^\/aponline\/health\//.test(wt_path)
            || /^\/reuters\/health\//.test(wt_path)
            || /^\/ref\/health\//.test(wt_path)) {
      contentGroup = "Health";
 
    // sports
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/sports\//.test(wt_path)
            || /\/packages\/html\/sports\//.test(wt_path)
            || /^\/yr\/mo\/day\/sports\//.test(wt_path)
            || /^\/sports\//.test(wt_path)
            || /^\/pages\/sports\//.test(wt_path)
            || /^\/aponline\/sports\//.test(wt_path)
            || /^\/reuters\/sports\//.test(wt_path)) {
      contentGroup = "Sports";
 
    // opinion
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/opinion\//.test(wt_path)
            || /\/packages\/html\/opinion\//.test(wt_path)
            || /^\/pages\/opinion\//.test(wt_path)
            || /^\/pages\/readersopinions\//.test(wt_path)
            || /^\/opinion\//.test(wt_path)
            || /^\/top\/opinion\//.test(wt_path)
            || /^\/ref\/opinion\//.test(wt_path)) {
      contentGroup = "Opinion";
 
    // books
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/books\//.test(wt_path)
            || /\/packages\/html\/books\//.test(wt_path)
            || /^\/pages\/books\//.test(wt_path)
            || /^\/ref\/books\//.test(wt_path)) {
      contentGroup = "Books";

    // dance
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/arts\/dance\//.test(wt_path)
            || /\/packages\/html\/dance\//.test(wt_path)
            || /^\/pages\/arts\/dance\//.test(wt_path)) {
      contentGroup = "Dance";

    // movies
    } else if (wt_domain == "movies.nytimes.com"
            || wt_domain == "movies2.nytimes.com"
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/movies\//.test(wt_path)
            || /\/packages\/html\/movies\//.test(wt_path)
            || /^\/pages\/movies\//.test(wt_path)
            || /^\/ref\/movies\//.test(wt_path)) {
      contentGroup = "Movies";

    // music
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/arts\/music\//.test(wt_path)
            || /\/packages\/html\/music\//.test(wt_path)
            || /^\/pages\/arts\/music\//.test(wt_path)) {
      contentGroup = "Music";

    // television
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/arts\/television\//.test(wt_path)
            || /\/packages\/html\/television\//.test(wt_path)
            || /^\/pages\/arts\/television\//.test(wt_path)) {
      contentGroup = "TV";
 
    // theater
    } else if (wt_domain == "theater.nytimes.com"
            || wt_domain == "theater2.nytimes.com"
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/theater\//.test(wt_path)
            || /\/mem\/theater\//.test(wt_path)
            || /\/mem\/ticketwatch\.html/.test(wt_path)
            || /\/packages\/html\/theater\//.test(wt_path)
            || /^\/pages\/theater\//.test(wt_path)
            || /^\/readersreviews\/theater\//.test(wt_path)) {
      contentGroup = "Theater";

    // art - must appear after its subsections
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/arts\//.test(wt_path)
            || /\/packages\/html\/arts\//.test(wt_path)
            || /^\/aponline\/arts\//.test(wt_path)
            || /^\/reuters\/arts\//.test(wt_path)
            || /^\/pages\/arts\//.test(wt_path)) {
      contentGroup = "Arts";

    // tstyle - check this before style
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/style\/\b(t|tmagazine)\b\//.test(wt_path)
            || /^\/pages\/style\/(t|tmagazine)\//.test(wt_path)) {
      contentGroup = "T:Style";
 
    // style
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/\b(style|fashion|dining|garden)\b\//.test(wt_path)
            || /\/packages\/html\/\b(style|fashion|dining|garden)\b\//.test(wt_path)
            || /^\/pages\/\b(style|fashion|dining|garden)\b\//.test(wt_path)
            || /^\/ref\/fashion\//.test(wt_path)) {
      contentGroup = "Style";

    // travel
    } else if (wt_domain == "travel.nytimes.com"
            || wt_domain == "travel2.nytimes.com"
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/travel\//.test(wt_path)
            || /^\/pages\/travel\//.test(wt_path)
            || /^\/travel\//.test(wt_path)
            || /^\/map\/travel\//.test(wt_path)
            || /^\/packages\/html\/travel\//.test(wt_path)
            || /^\/gst\/travel\/travsearch\.html/.test(wt_path)
            || (/^\/gst\/fullpage\.html/.test(wt_path) && getQueryParameter("sec") == "travel")) {
      contentGroup = "Travel";
 
    // jobs
    } else if (wt_domain == "jobmarket.nytimes.com"
            || wt_domain == "salary.nytimes.com"
            || /\/packages\/html\/jobs\//.test(wt_path)
            || /^\/pages\/jobs\//.test(wt_path)
            || /^\/marketing\/jobmarket\//.test(wt_path)) {
      contentGroup = "Jobs";
    
    // greathomes
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/\b(realestate\/greathomes|greathomesanddestinations)\b\//.test(wt_path)
            || /^\/pages\/great-homes-and-destinations\//.test(wt_path)
            || /^\/pages\/greathomes\//.test(wt_path)
            || /^\/top\/great-homes-and-destinations\//.test(wt_path)) {
      contentGroup = "Real Estate";

    // realestate
    } else if (wt_domain == "realestate.nytimes.com"
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/realestate\//.test(wt_path)
            || /\/packages\/html\/realestate\//.test(wt_path)
            || /^\/pages\/realestate\//.test(wt_path)
            || /^\/ref\/realestate\//.test(wt_path)) {
      contentGroup = "Real Estate";

    // autos
    } else if (wt_domain == "autos.nytimes.com"
            || wt_domain == "collectiblecars.nytimes.com"
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/automobiles\//.test(wt_path)
            || /^\/pages\/automobiles\//.test(wt_path)
            || /^\/ref\/automobiles\//.test(wt_path)
            || /^\/automobiles\//.test(wt_path)
            || /^\/autos\//.test(wt_path)
            || /^\/packages\/html\/automobiles\//.test(wt_path)) {
      contentGroup = "Autos";

    // search 
    } else if (/^\/search\/query/.test(wt_path)) {
      contentGroup = "Search";

    // classifieds
    } else if (wt_domain == "listings.nytimes.com"
            || wt_domain == "placead.nytimes.com"
            || /^\/top\/classifieds\//.test(wt_path)
            || /^\/gst\/personals.html/.test(wt_path)) {
      contentGroup = "Classifieds";

    // video
    } else if (wt_domain == "video.on.nytimes.com") {
      contentGroup = "Video";

    // timestopics
    } else if (/^\/top\/reference\/timestopics\//.test(wt_path)
            || /^\/top\/news\/business\//.test(wt_path)
            || /^\/top\/news\/international\//.test(wt_path)
            || /^\/top\/news\/national\//.test(wt_path)
            || /^\/top\/classifieds\/realestate\//.test(wt_path)) {
      contentGroup = "Times Topics";

    // email this
    } else if (/^\/mem\/emailthis.html/.test(wt_path)) {
      contentGroup = "Email This";

    // newstracker 
    } else if (/^\/mem\/tnt.html/.test(wt_path)) {
      contentGroup = "News Tracker";
   // crosswordsgames
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/crosswords\//.test(wt_path)
            || /^\/pages\/crosswords\//.test(wt_path)
            || /^\/ref\/crosswords\//.test(wt_path)
            || /^\/premium\/xword\//.test(wt_path)
            || /^\/premiumproducts\/crosswords\/index.html/.test(wt_path)) {
      contentGroup = "Crosswords/Games";

    // sundaymagazine
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/magazine\//.test(wt_path)
            || /^\/pages\/magazine\//.test(wt_path)
            || /^\/ref\/magazine\//.test(wt_path)
            || /^\/packages\/html\/magazine\//.test(wt_path)) {
      contentGroup = "Sunday Magazine";

     // mostpopular  
     } else if (/^\/gst\/most(popular|blogged|searched|popularmovies|emailed)\.html/.test(wt_path)) {  
         contentGroup = "Most Popular";  
     }else if (/^\/most-(popular-emailed|popular-viewed)\//.test(wt_path)) {  
           contentGroup = "Most Popular";  

    // learningnetwork
    } else if (/^\/learning\//.test(wt_path)
            || /\/packages\/html\/learning\//.test(wt_path)) {
      contentGroup = "Learning Network";

    // knowledgenetwork
    } else if (wt_domain == "college.nytimes.com"
            || /\/packages\/html\/college\//.test(wt_path)
            || /^\/college\//.test(wt_path)
            || /\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/college\//.test(wt_path)) {
      contentGroup = "Knowledge Network";

    // weekinreview
    } else if (/\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/weekinreview\//.test(wt_path)
            || /\/packages\/html\/weekinreview\//.test(wt_path)
            || /^\/pages\/weekinreview\//.test(wt_path)
            || /^\/weekinreview\//.test(wt_path)) {
      contentGroup = "Week In Review";

    // weather
    } else if (/^\/gst\/weather.html/.test(wt_path)
            || /^\/mem\/weather.html/.test(wt_path)
            || /\/packages\/html\/weather\//.test(wt_path)
            || /^\/weather/.test(wt_path)) {
      contentGroup = "Weather";

    // multimedia
    } else if (/^\/pages\/multimedia\//.test(wt_path)
            || /\/packages\/html\/multimedia\//.test(wt_path)
            || /^\/ref\/multimedia\//.test(wt_path)) {
      contentGroup = "Multimedia";

    // cartoons
    } else if (/^\/pages\/cartoons\//.test(wt_path)
            || /\/packages\/html\/cartoons\//.test(wt_path)) {
      contentGroup = "Cartoons";
 
    // apreuters
    } else if (/^\/pages\/\b(aponline|reuters)\b\//.test(wt_path)) {
      contentGroup = "AP/Reuters";

    // pictures of the day 
    } else if (/^\/slideshow\/[0-9][0-9][0-9][0-9]\/[0-1][0-9]\/[0-3][0-9]\/nytfrontpage\//.test(wt_path)) {
      contentGroup = "Homepage";
		
	// selfservice
    } else if (wt_domain == "nytimes.adready.com") {
      contentGroup = "Self Service";

    // default to General 
    } else {
      contentGroup = "General";
    }

  }

  return contentGroup;

}

function readPageTags() {

  addMetaTag("WT.z_gpt",    getMetaTag("PT"));       // page type
  addMetaTag("WT.z_gpst",   getMetaTag("PST"));      // page subtype
  addMetaTag("WT.z_gpsst",  getMetaTag("PSST"));     // page sub 2 type
  addMetaTag("WT.z_gpssst", getMetaTag("PSSST"));    // page sub 3 type
  addMetaTag("WT.z_pc",     getMetaTag("PC"));       // partner content
  addMetaTag("WT.z_ps",     getMetaTag("PS"));       // partner supplied 
  addMetaTag("WT.z_puv",    getMetaTag("PUV"));      // publish view
  addMetaTag("WT.z_gosst",  getMetaTag("GOOST"));    // global onsite search
  addMetaTag("WT.z_gosst",  getMetaTag("GOSST"));    // global onsite search
  addMetaTag("WT.z_gsac",   getMetaTag("GSAC"));     // global search auto complete
  addMetaTag("WT.z_gtn",    getMetaTag("GTN"));      // global topic name
  addMetaTag("WT.gcom",     getMetaTag("GCOM"));     // global - community page
  addMetaTag("WT.z_clmst",  getMetaTag("CLMST"));    // blogs off About
  addMetaTag("WT.z_bn",     getMetaTag("BN"));       // blogs off About
  addMetaTag("WT.z_pud",    getMetaTag("PUD"));      // blogs off About
  addMetaTag("WT.z_tvt",    getMetaTag("TVT"));      // travel meta tag
  addMetaTag("WT.z_tvn",    getMetaTag("TVN"));      // travel meta tag
  addMetaTag("WT.z_tvid",   getMetaTag("TVID"));     // travel meta tag
  addMetaTag("WT.z_tDest",  getMetaTag("TDES"));     // travel meta tag
  addMetaTag("WT.z_tRegion",getMetaTag("TDREG"));    // travel meta tag
  addMetaTag("WT.cre",      getMetaTag("cre"));      // creator  meta tag
  addMetaTag("WT.z_nyts",   getCookie("NYT-S"));     // NYT-S cookie 
  addMetaTag("WT.z_nytd",   getCookie("nyt-d"));     // nyt-d cookie 
  addMetaTag("WT.z_rmid",   getCookie("RMID"));      // RMID cookie 
  addMetaTag("WT.z_gblc",   getMetaTag("GBLC"));      // global - blogs 
  addMetaTag("WT.z_hpt",    getMetaTag("HPT"));      // home page type - Extra
}

function getCookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function setContentInfo() {

  // read page tags for content groups
  if (wt_contentGroup == "Health") {
 
    addMetaTag("WT.z_hgst",  getMetaTag("HGST"));   // health guide subject type
    addMetaTag("WT.z_hgsn",  getMetaTag("HGSN"));   // health guide subject name
    includeFile(js_host+"googleAnalytics/initialize.js");

  } else if (wt_contentGroup == "Times Topics") {
    addMetaTag("WT.z_gpt",  "Topic");

  } else if (wt_contentGroup == "Books") {
    addMetaTag("WT.z_bper", getMetaTag("per"));
    addMetaTag("WT.z_ebk",  getMetaTag("ttl"));

  } else if (wt_contentGroup == "Real Estate" || wt_contentGroup == "Great Homes") {
    addMetaTag("WT.z_resz",  getMetaTag("RESZ"));   // real estate search zip codes
    addMetaTag("WT.z_res",   getMetaTag("RES"));    // real estate state
    addMetaTag("WT.z_reco",  getMetaTag("RECO"));   // real estate counties
    addMetaTag("WT.z_rer",   getMetaTag("RER"));    // real estate region 

  } else if (wt_contentGroup == "Theater") {
    addMetaTag("WT.z_eplay",  getMetaTag("ttl"));

  } else if (wt_contentGroup == "Travel") {
    includeFile(js_host+"content/travel_v1.1.js");
    includeFile(js_host+"googleAnalytics/initialize.js");

  } else if (wt_contentGroup == "Movies") {
    includeFile(js_host+"content/movies_v1.1.js");

  } else if (wt_contentGroup == "Email This") {
    includeFile(js_host+"content/emailthis_v1.1.js");

  } else if (wt_contentGroup == "Business") {
    includeFile(js_host+"googleAnalytics/initialize.js");

  }
}

function setReferrerInfo() {
  //check for frameset referrer cookie
  var origRefUrl = getCookie("FramesetReferrer");
  var refUrl = origRefUrl || document.referrer;

  if (refUrl != undefined && refUrl != "" ) {
    var refDom = refUrl.match( /:\/\/(www\.)?([^\/:]+)/ ); 
    refDom = refDom[2]?refDom[2]:''; 
    addMetaTag("WT.z_ref", refDom);
    addMetaTag("WT.z_sorg", isSearchEngine(refDom)); 
  }
}

function getReferrerQuery() {

  var refQuery = "";
  var url_parts = document.referrer.split('?');
  if (url_parts[1]){ 
    var url_args = url_parts[1].split('&');
    for(var i=0; i<url_args.length; i++){
      var keyval = url_args[i].split('=');
      if (keyval[0] == 'q'){
        refQuery = keyval[1];
      }
    }
  }
  return refQuery;
}

function isSearchEngine(refDom) {

  var refType = "";
  if((/google\./.test(refDom) && getReferrerQuery() != "") 
   ||(/search\./.test(refDom))
   ||(/ask.com/.test(refDom))
   ||(/altavista.com/.test(refDom))) {
    refType = "1";
  }
  return refType;

}

function handleCGExceptions() {

  // promote to content group
  if (wt_subcontentGroup == "dance") {
    wt_contentGroup = "Dance";
    wt_subcontentGroup = "";
  } else if (wt_subcontentGroup == "music") {
    wt_contentGroup = "Music";
    wt_subcontentGroup = "";
  } else if (wt_subcontentGroup == "television") {
    wt_contentGroup = "TV";
    wt_subcontentGroup = "";
  } else if (wt_subcontentGroup == "olympics") {
    wt_contentGroup = "Olympics";
    wt_subcontentGroup = "";
  } else if (wt_subcontentGroup == "politics") {
    wt_contentGroup = "Politics";
    wt_subcontentGroup = "";
  }

  // demote to subcontent group
  if (wt_cgTag == "education") {
    wt_subcontentGroup = "Education";
  } else if (wt_cgTag == "washington") {
    wt_subcontentGroup = "Washington";
  } else if (wt_cgTag == "fashion") {
    wt_subcontentGroup = "Fashion";
  } else if (wt_cgTag == "dining") {
    wt_subcontentGroup = "Dining";
  } else if (wt_cgTag == "garden") {
    wt_subcontentGroup = "Garden";
  } else if ((wt_cgTag == "Your Money") || (wt_cgTag == "your-money")) {
    if(getMetaTag("PT") == "Article") { addMetaTag("WT.z_gtn", wt_subcontentGroup); }
    wt_contentGroup = "Business";
    wt_subcontentGroup = "Your Money";
  }

  // rewrite content group based on subcontentgroup
  if (wt_scgTag == "Weddings") {
    wt_contentGroup = "Style";
    wt_subcontentGroup = "Weddings";
  }
  if (wt_subcontentGroup == "Dealbook Jobs") {
    wt_contentGroup = "Business";
  }
  
  // rewrite content group
  if (wt_cgTag == "xword") {
    wt_contentGroup = "Crosswords/Games";
  }
}

function setSectionFront() {

  if ( (getMetaTag("WT.z_gpt") == "Section Front") && getMetaTag("WT.cg_s")) {
    tempWTVal = "Subsection Front";
    addMetaTag("WT.z_gpst", "Subsection Front");
  }

}

function setInteractiveGraphicInfo() {

  addMetaTag("WT.z_gpt", "Multimedia");
  addMetaTag("WT.z_gpst", "Flash");
  addMetaTag("WT.z_pud", getMetaTag("pdate"));

}

function setSlideshowInfo() {

  addMetaTag("WT.z_gpt", "Multimedia");
  addMetaTag("WT.z_gpst", "Slideshow");
  addMetaTag("WT.z_pud", getMetaTag("pdate"));
  addMetaTag("WT.z_sssn", getMetaTag("SSSN"));
  addMetaTag("WT.z_ssts", getMetaTag("SSTS"));
  addMetaTag("WT.z_sse", getMetaTag("SSE"));

}

function setArticleInfo(articleID) {

  if (articleID != "") {
    var pubDate = getMetaTag("pdate");
    var pubType = getPubTypeFromDate(pubDate); 

    addMetaTag("WT.z_gpt", "Article");
    addMetaTag("WT.z_gpst", getMetaTag("tom"));
    addMetaTag("WT.z_hdl", getMetaTag("hdl")); 
    if (pubType == "Archive") {
        addMetaTag("WT.z_aid", 'nyta-' + articleID);
    } else {
        addMetaTag("WT.z_aid", articleID);
    }
    addMetaTag("WT.z_pud", pubDate);
	addMetaTag("WT.z_put", pubType);
    addMetaTag("WT.z.gsg", pubType);
    
    if (pubDate.length==8) {
        var tYear = pubDate.substring(0,4);
        if (tYear < 2004) {
        	addMetaTag("WT.ti", "Archive Article from " + tYear);
        	addMetaTag("DCS.dcsuri", "http://www.nytimes.com/archive/"+tYear+".html");
        }     
        if (pubType == "Archive") {
    	    if (tYear >=1987) {
    	    	addMetaTag("WT.z_gat", "1987-Present");
    	    }
    	    else if (tYear >=1981) {
    	    	addMetaTag("WT.z_gat", "1981-1986");
    	    }
    	    else if (tYear >=1923) {
    	    	addMetaTag("WT.z_gat", "1923-1980");
    	    }
    	    else {
    	    	addMetaTag("WT.z_gat", "1851-1922");
    	    }
        } 
    }
	
    addMetaTag("WT.z_pua", "free");

    var bylVal = getMetaTag("byl");
    bylVal = bylVal.replace("&#8217;","'"); 
    if (bylVal.indexOf("By ") != -1) {
      bylVal = bylVal.substring(3);
      bylValInd = bylVal.indexOf(" and ");
      if (bylValInd != -1) {
        bylVal = bylVal.substring(0, bylValInd) + ";" + bylVal.substring(bylValInd+5);
      }
    }
    addMetaTag("WT.z_clmst", bylVal);
    setXTS(bylVal);
    var pageWanted = getQueryParameter("pagewanted");
    if (pageWanted == "") {
      addMetaTag("WT.z_puv", "Normal"); 
    } else {
      addMetaTag("WT.z_puv", pageWanted);
    }
  }
}

function setPubDateInfo(pdate) {
  setPubDateRange(pdate);
  addMetaTag("WT.z_pyr", pdate.substring(0, 4));
}

function setPubDateRange(pdate) {
  var relativePubDate = "No Pub Date";
  var currentDate = new Date();
  var currentDateMs = currentDate.getTime();

  var pubDate = new Date();
  if (pdate.length==8) {
    var tYear = pdate.substring(0,4);
    var tMonth = pdate.substring(4,6);
    var tDay = pdate.substring(6,8);
    pubDate.setFullYear(tYear,tMonth-1,tDay);
  }
  var pubDateMs = pubDate.getTime();

  var publicDomainStartDate = new Date();
  publicDomainStartDate.setYear(1851);
  publicDomainStartDate.setMonth(0);
  publicDomainStartDate.setDate(1);
  var publicDomainStartDateMs = publicDomainStartDate.getTime();

  var payArchiveStartDate = new Date();
  payArchiveStartDate.setYear(1923);
  payArchiveStartDate.setMonth(0);
  payArchiveStartDate.setDate(1);
  var payArchiveStartDateMs = payArchiveStartDate.getTime();

  var payArchiveEndDate = new Date();
  payArchiveEndDate.setYear(1986);
  payArchiveEndDate.setMonth(11);
  payArchiveEndDate.setDate(31);
  var payArchiveEndDateMs = payArchiveEndDate.getTime();

  var dateDiffMs = currentDateMs - pubDateMs;

  if(dateDiffMs < 0) {
    relativePubDate = "Tomorrow";
  } else if(0 <= dateDiffMs && dateDiffMs < 86400000) {
    relativePubDate = "Same Day";
  } else if(86400000 <= dateDiffMs && dateDiffMs < 172800000) {
    relativePubDate = "1 Day";
  } else if(172800000 <= dateDiffMs && dateDiffMs < 259200000) {
    relativePubDate = "2 Day";
  } else if(259200000 <= dateDiffMs && dateDiffMs < 345600000) {
    relativePubDate = "3 Day";
  } else if(345600000 <= dateDiffMs && dateDiffMs < 432000000) {
    relativePubDate = "4 Day";
  } else if(432000000 <= dateDiffMs && dateDiffMs < 518400000) {
    relativePubDate = "5 Day";
  } else if(518400000 <= dateDiffMs && dateDiffMs < 604800000) {
    relativePubDate = "6 Day";
  } else if(604800000 <= dateDiffMs && dateDiffMs < 691200000) {
    relativePubDate = "7 Day";
  } else if(691200000 <= dateDiffMs && dateDiffMs < 2678400000) {
    relativePubDate = "Month";
  } else if(2678400000 <= dateDiffMs && dateDiffMs < 7776000000) {
    relativePubDate = "90 Day";
  } else if(7776000000 <= dateDiffMs && dateDiffMs < 31536000000) {
    relativePubDate = "1 Year";
  } else if(31536000000 <= dateDiffMs && dateDiffMs < 157680000000) {
    relativePubDate = "5 Years";
  } else if(157680000000 <= dateDiffMs && dateDiffMs < 315360000000) {
    relativePubDate = "10 Years";
  } else if(315360000000 <= dateDiffMs && pubDateMs > payArchiveEndDateMs) {
    relativePubDate = "Post 86";
  } else if(315360000000 <= dateDiffMs && (payArchiveStartDateMs <= pubDateMs && pubDateMs <= payArchiveEndDateMs)) {
    relativePubDate = "Pay Archive";
  } else if(315360000000 <= dateDiffMs && (publicDomainStartDateMs <= pubDateMs && pubDateMs <= payArchiveStartDateMs)) {
    relativePubDate = "Public Domain";
  }

  addMetaTag("WT.z_pudr", relativePubDate);

}

function setCommentOverflowInfo(articleID) {

  addMetaTag("WT.z_aid", articleID);
  addMetaTag("WT.z_hdl", getMetaTag("hdl")); 
  if (getMetaTag("WT.z_gpst") == "Comments Overflow") {
    addMetaTag("WT.gcom", "Com"); 
  }
 
  // Set article comment page number 
  addMetaTag("WT.z_acpn", getMetaTag("ACPN"));

  // Set article comment overview sort
  addMetaTag("WT.z_acos", getMetaTag("ACOS"));

}

function getPubTypeFromDate(pdate) {

  if (pdate != undefined && pdate.length == 8) {
    var currentDate = new Date();
    var articleDate = new Date();
    articleDate.setDate(pdate.substring(6));
    articleDate.setMonth(pdate.substring(4,6)-1);
    articleDate.setFullYear(pdate.substring(0,4));

    if (articleDate < currentDate) {
      return "Archive";
    } else {
      return "web";
    }
  } else {
    return "web";
  }

}

function setXTS(clmst) {

  if (/DAVID BROOKS/.test(clmst)
    ||/MAUREEN DOWD/.test(clmst)
    ||/ROGER COHEN/.test(clmst)
    ||/THOMAS L. FRIEDMAN/.test(clmst)
    ||/BOB HERBERT/.test(clmst)
    ||/NICHOLAS D. KRISTOF/.test(clmst)
    ||/PAUL KRUGMAN/.test(clmst)
    ||/FRANK RICH/.test(clmst)
    ||/DAVE ANDERSON/.test(clmst)
    ||/PETER APPLEBOME/.test(clmst)
    ||/HARVEY ARATON/.test(clmst)
    ||/DAN BARRY/.test(clmst)
    ||/JIM DWYER/.test(clmst)
    ||/CLYDE HABERMAN/.test(clmst)
    ||/ADAM LIPTAK/.test(clmst)
    ||/GRETCHEN MORGENSON/.test(clmst)
    ||/JOE NOCERA/.test(clmst)
    ||/JOSEPH NOCERA/.test(clmst)
    ||/FLOYD NORRIS/.test(clmst)
    ||/WILLIAM C. RHODEN/.test(clmst)
    ||/SELENA ROBERTS/.test(clmst)
    ||/GEORGE VECSEY/.test(clmst)
    ||/JOHN VINOCUR/.test(clmst)) {
      addMetaTag("WT.z_gts", "XTS");
  }

}

function setSearchInfo() {

  var searchResults;
  var wt_oss   = "";
  var wt_oss_r = "";
  var wt_gosst = "";
  var ossName  = "";
  var ossrName = "";

  // for global searches
  if (/^\/search\/query/.test(nyt_path)) {
    wt_oss = getQueryParameter("query");
    searchResults = document.getElementById("sortBy");
    wt_gosst = getQueryParameter("srchst");
    ossName = "WT.oss";
    ossrName = "WT.oss_r";
  }

  // for tech search only
  if (/\/gst\/technology\/techsearch.html/.test(nyt_path)) {
    wt_oss = getQueryParameter("query");
    searchResults = getElementsByClass("div", "result_summary");
    ossName = "WT.z_toss";
    ossrName = "WT.z_toss_r";
  }

  // for movie search only
  if (/\/gst\/movies\/msearch.html/.test(nyt_path)) {
    wt_oss = getQueryParameter("query");
    searchResults = document.getElementById("resultsWell");
    ossName = "WT.z_moss";
    ossrName = "WT.z_moss_r";
  }

  // for health search only
  if (/\/gst\/health\/healthsearch.html/.test(nyt_path)) {
    wt_oss = getQueryParameter("query");
    if (wt_oss == "") {
      wt_oss = getQueryParameter("term"); 
    }
    searchResults = document.getElementById("sortBy");
    ossName = "WT.z_hoss";
    ossrName = "WT.z_hoss_r";
  }

  if (null == searchResults) {
    wt_oss_r = "0";
  } else {
    wt_oss_r = "1";
    if (wt_oss == "" ) {
      wt_oss = "No Term";
    }
  }

  if (wt_oss != "") {
    addMetaTag(ossName, wt_oss);
    addMetaTag(ossrName, wt_oss_r);
  }

  if (wt_gosst != "") {
    var wt_osstArray = {"nyt":"Search > Articles 1981-Present",
                        "p":"Search > Articles 1851-1980",
                        "g":"Search > Google Web Results",
                        "m":"Search > Multimedia",
                        "nycks":"Search > NYC Events & Venues",
                        "ref":"Search > Reference",
                        "blog":"Search > Blogs"}
    var searchType = wt_osstArray[wt_gosst];
    if (searchType == undefined) {
      searchType = wt_gosst;
    }
    addMetaTag("WT.z_gosst", searchType);
  }

}

function setTrackEvents() {
  var wt_section = getMetaTag("WT.cg_n");
  var wt_subsection = getMetaTag("WT.cg_s");
  var wt_pagetype = getMetaTag("WT.z_gpt");
  var wt_pagesubtype = getMetaTag("WT.z_gpst");
    if ((wt_pagetype == "Homepage" && wt_pagesubtype != "Times Extra") ||
       (wt_section == "Politics" && wt_pagetype == "Section Front") ||
       (wt_section == "Opinion" && wt_pagetype == "Section Front") ||
       (wt_section == "Business" && wt_pagetype == "Section Front") ||
       (wt_subsection == "Dealbook" && wt_pagesubtype == "Blog Main")) {
    gtrackevents = true;
  }
}

// helper functions used by this and other content javascript files
function addMetaTag(tagName, tagContent) {

  var tempValue = getMetaTag(tagName);
  if (tempValue == "") {
    tempValue = getQueryParameter(tagName);
  }
  if (tempValue == "" && tagContent != "") {
    var newMetaTag = document.createElement('meta');
    newMetaTag.id = tagName;
    newMetaTag.name = tagName;
    newMetaTag.content = tagContent;
    document.getElementsByTagName('head').item(0).appendChild(newMetaTag);
  }

}

function overwriteMetaTag(tagName, tagContent) {

  var newMetaTag = document.createElement('meta');
  newMetaTag.name = tagName;
  newMetaTag.content = tagContent;
  document.getElementsByTagName('head').item(0).appendChild(newMetaTag);

}

function getMetaTag(tagName) {

  var metaTagContent = "";
  var metaTagElement = document.getElementById(tagName);
  var tempString = "";
  if (metaTagElement == null || metaTagElement == undefined) {
    var metaTags = document.getElementsByTagName("meta");
    for(var i=0;i<metaTags.length;i++) {
      if(metaTags[i].name == tagName) {
        metaTagContent = metaTags[i].content;
      }
    }
  } else {
    metaTagContent = metaTagElement.content;
  }

  return metaTagContent;

}

function getQueryParameter(name) {

  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) {
    return "";
  } else {
    return results[1];
  }

}

function queryParameterExists(name) {

  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name;
  var regex = new RegExp( regexS );
  return regex.test( window.location.href );

}

function setDefaultTags() {

  if (getMetaTag("WT.z_gpt") == "") {
    addMetaTag("WT.z_gpt", "Other");
  }

}

function getElementsByClass(tagName, className) {

  var resultArray = new Array();
  var classRegExp = new RegExp('\\b'+className+'\\b');
  var elementsByTag = document.getElementsByTagName(tagName);
  for(var i=0,j=elementsByTag.length; i<j; i++) {
    if(classRegExp.test(elementsByTag[i].className)) {
      resultArray.push(elementsByTag[i]);
    } 
  }
  if (resultArray.length == 0) resultArray = null;
  return resultArray;

}

function includeFile(incFilename) {

  var incFileJS = document.createElement('script');
  incFileJS.setAttribute('language', 'javascriptcontent');
  incFileJS.setAttribute('type', 'text/javascript');
  incFileJS.setAttribute('src', incFilename);
  document.getElementsByTagName('head').item(0).appendChild(incFileJS);

}

s_code_linktrack = s_code_linktrack_classifieds = s_code_linktrack_indiv = function(desc) {
 try { dcsMultiTrack('DCS.dcssip', 'www.nytimes.com', 'DCS.dcsuri', '/' + desc + '.html', 'WT.ti', desc, 'WT.z_dcsm', '1'); }
	  catch(err) { }
};

(function () {
    // anything that should occur after initial dcs.gif is completed should go in this function
    function onAfterDcsGif() {
        // don't want hp refresh tracking in later DCS tracking
        if (typeof WT != "undefined" && WT.z_jog) {
            delete WT.z_jog;
        }
        // clean up meta just in case WT scrapes them again
        var jogMetaTags = document.getElementsByName('WT.z_jog');
        if (jogMetaTags.length > 0) {
            var toRemove = jogMetaTags[0];
            toRemove.parentNode.removeChild(toRemove);
        }
    }

    function pollForDCS(count) {
        var MAX_CHECKS = 20;

        // see if the dcs object exists in the dom and if it has an image list set up
        if (typeof dcsInit === "undefined" || !dcsInit.images) {
            if (count < MAX_CHECKS) {
                setTimeout(function() { pollForDCS(count+1) }, 100);
            }
            else {
                return;
            }
        }
        // dcsInit.images exists, is our dcs.gif in there?
        else {
            var found = false;
            for (var i = 0, len = dcsInit.images.length; i < len; ++i) {
                var cur = dcsInit.images[i];
                if (cur.src && cur.src.match('dcs.gif')) {
                    onAfterDcsGif();
                    found = true;
                    break;
                }
            }
            if (!found) {
                if (count < MAX_CHECKS) {
                    setTimeout(function() { pollForDCS(count+1) }, 100);
                }
                else {
                    return;
                }
            }
        }
    }

    pollForDCS(1);
})();
