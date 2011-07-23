/* AG-develop 12.7.1-48 (2011-07-13 07:11:32 UTC) */
rsinetsegs=[];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable([],'h07707');}/*
$Id: activities.build.js 65714 2011-04-22 15:26:35Z alex.wallace $
(c) 2008 The New York Times Company
*/

/*
Determining page group, type, title and descriptions based on META tags
*/
TimesPeople.Config.Page = {                                                                           
    Group:
    [
        { value: 'articleid', alias: 'article' },
        { value: 'PT' },
        { value: 'WT.z_gpt',  alias: 'article' }
    ],
    Type:
    {
        "article": 
        {
            "tom" :
            [
                { value: "biography"      },
                { value: "editor's note"  },
                { value: "editorial"      },
                { value: "interview"      },
                { value: "recipe"         },
                { value: "special report" },
                { value: "review"         }
            ]
        },
        "topic": 
        {
            "SCG":
            [ 
                { value: "movie pages", alias: "movie guide" },
                { value: "destinations", alias: "destination" }
            ],
            "PST":
            [ 
                { value: "movie details", alias: "movie guide" },
                { value: "health guide" },
                { value: "travel guide" },
                { value: "event detail" }
            ]
        },
        "community":
        {
            "PST":
            [ 
                { value: "comments overflow", alias: "article" },
                { value: "rate-review",       alias: "movie guide" }
            ]
        },
        "multimedia": 
        {
            "SCG":
            [
                { value: "election guide" }
            ],
            "PST":
            [
                { value: "interactive", alias: "interactive graphic" },
                { value: "interactive features", alias: "interactive feature" },
                { value: "image",       alias: "graphic"},
                { value: "video" }
            ],
            "tom":
            [
                { value: "slideshow",  alias: "slide show" }
            ]
        },
        "blogs":
        {
            "PST":
            [
                { value: "blog main",   alias: "blog" },
                { value: "blog post" }
            ]
        },
        "venue": 
        {
            "tom":
            [
                { value: "attraction" },
                { value: "dining",        alias: "restaurant" },
                { value: "accommodation", alias: "hotel"      },
                { value: "shopping",      alias: "attraction" },
                { value: "night life",    alias: "attraction" } 
            ]
        }
    },
    Title:
    {
        "article":
        {
            "default":      [ "meta[name='hdl']", "div.header h1:not(h1.movie)", "div.header h1", "#aColumn #article h1", "title"],
            "article":      [ "meta[name='hdl']", "div.header h1:not(h1.movie)", "div.header h1", "#aColumn #article h1"]
        },
        "topic":
        {
            "default"     : [ "meta[name='name']",    "meta[name='GTN']", "#subHdr h1", "title" ],
            "topic"       : [ "meta[name='name']",    "meta[name='GTN']", "#subHdr h1" ],
            "movie guide" : [ "#header div.title h1", "meta[name='MTI']" ],
            "health guide": [ "meta[name='HGSN']" ],
            "travel guide": [ "h5.fn", "meta[name='name']" ]
        },
        "multimedia":
        {
            "default":      [ "meta[name='hdl']",     "title" ],
            "interactive graphic": [ "meta[name='hdl']" , "title" ],
            "interactive feature": [ "meta[name='hdl']" , "title" ],
            "slide show":   [ "meta[name='hdl']",     "title" ],
            "graphic":      [ "meta[name='dsk']",     "title" ],
            "election guide": [ "h1",                 "#masthead h2 a", "title" ],
            "video":        [ "#libraryPlayerTitleName h1" ]
        },
        "blogs":
        {
            "default":      [ "h2.entry-title", "title" ],
            "blog post":    [ "h2.entry-title" ]
        }   ,
        "venue":
        {
            "default":      [ "meta[name='name']", "title" ],
            "hotel":        [ "meta[name='name']" ],
            "restaurant":   [ "meta[name='name']" ],
            "attraction":   [ "meta[name='name']" ]
        },
        "community":
        {
            "default":      [ "#header div.title h1", "meta[name='MTI']", "title" ],
            "movie guide":  [ "#header div.title h1", "meta[name='MTI']" ]
        }
    },
    Description:
    {
        "article":
        {
            "default":      [ "#aColumn #article p:not(p:empty)", "meta[name='description']", "meta[name='lp']" ],
            "article":      [ "#aColumn #article p:not(p:empty)", "meta[name='description']", "meta[name='lp']" ],
            "editorial":    [ "#aColumn #article p:not(p:empty)", "meta[name='description']", "meta[name='lp']" ]
        },
        "topic":
        {
            "default":      [ "meta[name='description']" ],
            "topic"       : [ "div.companyInformation", "meta[name='description']", "meta[name='summary']" ],
            "movie guide" : [ "p[class='review']",      "meta[name='description']" ],
            "health guide": [ "#definition p",          "meta[name='Description']" ],
            "travel guide": [ "#topStoryHorizontal p",  "meta[name='description']" ]
        },
        "multimedia":
        {
            "default":      [ "meta[name='description']" ],
            "interactive graphic": [ "meta[name='description']" ],
            "interactive feature": [ "meta[name='description']" ],
            "slide show":   [ "div.story", "div[class='caption']", "meta[name='description']" ],
            "graphic":      [ "td font[size='-1']", "meta[name='byl']", "meta[name='description']" ],
            "election guide": [ "meta[name='description']" ],
            "video":        [ "#libraryPlayerDesc p" ]
        },
        "blogs":
        {
            "default":      [ "meta[name='description']" ],
            "blog post":    [ "div.entry-content p", "meta[name='description']" ]
        }   ,
        "venue":
        {
            "default":      [ "meta[name='description']" ],
            "hotel":        [ "p.description", "span.description", "meta[name='description']" ],
            "restaurant":   [ "p.description", "span.description", "meta[name='description']" ],
            "attraction":   [ "p.description", "span.description", "meta[name='description']" ]
        },
        "community":
        {
            "default":      [ "meta[name='description']" ],
            "movie guide" : [ "div.result]",      "meta[name='description']" ]
        }
    }
};

/*
	Config Actions
	- condition to satisfy, location in page, element type, element style, position (first/last), HTML for action within element
*/

TimesPeople.Config.HTML = {
	Recommend:
	{
		standard  : "<a class='timespeople_recommend_link'><span>__LABEL__</span></a>",
		uppercase : "<a class='timespeople_recommend_link' style='cursor:pointer;background-image:url(__ICON__); background-repeat:no-repeat; padding:1px 0 3px 20px; font-size:1em; color:#333333; text-transform:uppercase;'>__LABEL__</a>",
		blog      : "<a class='timespeople_recommend_link'>__LABEL__</a>"
	}
};

TimesPeople.Config.Style = {
	Recommend:
	{
	   slideshow  : "padding-right:10px;border-right:1px solid #CCCCCC;",
		 standard   : "padding-right:10px;border-right:1px solid #CCCCCC;margin-right:10px"
	}
};

/*
	Structure:
		btnConfig = {
			PAGE_GROUP: {
				PAGE_TYPE: { key: IF_THIS_ELM_EXISTS, target: PLACE_HERE, type: TAG, style: CSS, position: first_OR_last, html: BUTTON_HTML }
				...
		where key and target are are prototpe css selectors, and evaluates as $$(IF_THIS_ELM_EXISTS)[0]
*/
TimesPeople.Config.Action = {
	Recommend:
	{
		"article": 
		{
			"article":      { key: "#toolsList", target: "#toolsList", type: "li", style: {}, position: "first", html: TimesPeople.Config.HTML.Recommend.standard },
			"editorial":    { key: "#toolsList", target: "#toolsList", type: "li", style: {}, position: "first", html: TimesPeople.Config.HTML.Recommend.standard },
			"default":      { key: "#toolsList", target: "#toolsList", type: "li", style: {}, position: "first", html: TimesPeople.Config.HTML.Recommend.standard }
		},
		"topic":
		{
			"topic"       : { key: "#tools", target: "#tools", type: "span", style: 'padding-right:10px;border-right:1px solid #CCCCCC;margin-right:10px', position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"movie guide" : { key: "#tools", target: "#menu",  type: "span", style: 'float: right; margin: 5px 0 0 4px; padding-left: 2px;', position: "last", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"destination" : { key: "#tools", target: "#menu",  type: "span", style: 'float: right; margin: 5px 0 0 4px; padding-left: 2px;', position: "last", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"health guide": { key: "#tools", target: "#breadcrumb", type: "span", style: 'float:right;', position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"travel guide": { key: "#tools", target: "#tools", type: "span", style: TimesPeople.Config.Style.Recommend.standard, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"event detail":      { key: "#toolsList", target: "#toolsList", type: "li", style: {}, position: "first", html: TimesPeople.Config.HTML.Recommend.standard },
			"default"     : { key: "#tools", target: "#tools", type: "span", style: 'padding-right:10px;border-right:1px solid #CCCCCC;margin-right:10px', position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase }
		},
		"multimedia":
		{
			"interactive graphic": { key: "#toolsList", target: "#toolsList", type: "li", style: '', position: "first", html: TimesPeople.Config.HTML.Recommend.standard },
			"slide show":     { key: "#toolsList", target: "#toolsList", type: "li",  style: TimesPeople.Config.Style.Recommend.slideshow, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"graphic":        { key: "table", target: "font[size='-2']", type: "div", style: 'padding-top:4px; font-family:Arial,Helvetica;', position: "last", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"election guide": { key: "#toolsList", target: "#toolsList", type: "li",  style: '', position: "first", html: "<a class='timespeople_recommend_link' style='cursor:pointer;color:#333; background-position:4px; font-size:1em; text-transform:uppercase; background-image:url(__ICON__); background-repeat:no-repeat;'>__LABEL__</a>" },
			"default":        { key: "#toolsList", target: "#toolsList", type: "li",  style: TimesPeople.Config.Style.Recommend.standard, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase }
		},
		"blogs":
		{
			"blog post": { key: "#content", target: "ul.entry-tools", type: "li", style: "", position: "last", html: TimesPeople.Config.HTML.Recommend.blog },
			"default"  : { key: "#content", target: "ul.entry-tools", type: "li", style: "", position: "last", html: TimesPeople.Config.HTML.Recommend.blog }
		},
		"venue":
		{
			"hotel":      { key: "#tools", target: "#tools", type: "span", style: TimesPeople.Config.Style.Recommend.standard, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"restaurant": { key: "#tools", target: "#tools", type: "span", style: TimesPeople.Config.Style.Recommend.standard, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"attraction": { key: "#tools", target: "#tools", type: "span", style: TimesPeople.Config.Style.Recommend.standard, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase },
			"default":    { key: "#tools", target: "#tools", type: "span", style: TimesPeople.Config.Style.Recommend.standard, position: "first", html: TimesPeople.Config.HTML.Recommend.uppercase }
		}
	}
};

TimesPeople.Config.bitlyApiKey = "R_554ad67f3555db8156cc911a4c8e37b0";

/*
$Id: activities.build.js 65714 2011-04-22 15:26:35Z alex.wallace $
(c) 2008 The New York Times Company
*/

TimesPeople.Page = {

    initialize: function() {
    /*
        Run standard presets for the current page.
    */
    // FIXME what happens if it's not ready?
        TimesPeople.console.log("Has init. Doing presets");

        this.getType();
        this.section     = this.getSection();
        this.subsection  = this.getSubSection();
        this.title       = this.getTitle();
        this.description = this.getDescription();

        return true;
    },

    isRecommendable: function() {
        if (this.isGetStarted()) {
            return false;
        }
        if (!this.group) this.getType();
        var recommendableGroups = {'article': true, 'topic': true, 'multimedia': true, 'venue': true, 'community': true, 'blogs': true};
        return this.group in recommendableGroups;
    },

    isGetStarted: (function() {
        var pattern = new RegExp(TimesPeople.Config.get_started_uri);
        var result = pattern.test(window.location.href);
        return function(){
            return result;
        };
    })(),

    getSection: function() {
        var section = $$('meta[name="CG"]')[0];
        if (section) {
            return section.getAttribute("content").toLowerCase();
        }
        return '';
    },

    getSubSection: function() {
        if (this.type == "article" || this.type == "multimedia") {
            var subsection = $$('meta[name="SCG"]')[0];
            if (subsection) {
                return subsection.getAttribute("content").toLowerCase();
            }
        }
        return '';
    },

    getType: function() {

        var metaSearch, metaExists;
        var mList, mTagPage;
        var keepGoing = true;
        var pos = 0;
    /*
        Get the top level page type
    */
        while (keepGoing && (pos < TimesPeople.Config.Page.Group.length)) {
            metaSearch = TimesPeople.Config.Page.Group[pos];
            metaExists = $$('meta[name="' + metaSearch.value + '"]')[0];

            if (metaExists != undefined) {
                keepGoing  = false;
                this.group = (metaSearch.alias != undefined) ? metaSearch.alias : metaExists.getAttribute("content").toLowerCase();
                this.type  = this.group; 
                mList      = TimesPeople.Config.Page.Type[TimesPeople.Page.group];

                $H(mList).keys().each(function(key) {
                    mTagPage = $$('meta[name="' + key + '"]')[0];
                    if (mTagPage != undefined) {
                        mList[key].each(function(mItem, index) {
                            if (mItem.value == mTagPage.getAttribute("content").toLowerCase()) {
                                TimesPeople.Page.type = (mItem.alias != undefined) ? mItem.alias : mItem.value;
                                return this.type;
                            }
                        });
                    }
                });
            }
            pos++;
        }
        this.group = this.group || 'article';
        this.type  = this.type  || 'article';
        return this.type;
    },

    getTitle:  function () {
    /*
        Get the standard page title depending on what group and type it belongs to.
    */
        if (this.type == 'video') {
          return decodeURIComponent(getShareHeadline());
        }
        
        var title = '';

        if (TimesPeople.Config.Page.Description[this.group] != undefined) {
            if (TimesPeople.Config.Page.Title[this.group][this.type] != undefined) {
                title = this.getEmbeddedValue(TimesPeople.Config.Page.Title[this.group][this.type]);
            } else {
                title = this.getEmbeddedValue(TimesPeople.Config.Page.Title[this.group]['default']);
            }
        }

    //  Failsafe
        if (title == undefined || title == '') {
            title =  document.title;

            var removeThese = [' - NYTimes.com', ' - The New York Times', ' - New York Times', 
                               ' - NY Times Health Information', ' - NY Times Health' ];

            removeThese.all(function(removeThis) {
                title = title.replace(removeThis, '');
            });
        }

        return title;
    },

    getDescription: function() {
    /*
        Get the standard page description depending on what group and type it belongs to.
    */
        var description = '';

        if (TimesPeople.Config.Page.Description[this.group] != undefined) {
            if (TimesPeople.Config.Page.Description[this.group][this.type] != undefined) {
                description = this.getEmbeddedValue(TimesPeople.Config.Page.Description[this.group][this.type]);
            } else {
                description = this.getEmbeddedValue(TimesPeople.Config.Page.Description[this.group]['default']);
            }
            description = (description == undefined) ? '' : description;
        }   
        return description;
    }, 

    getThumbnail: function() {
        var thumb = '';
        var meta  = $$('meta[name="thumbnail"]')[0] || $$('meta[name="url_thumb"]')[0] || false;

        if (meta) {
            var content = meta.getAttribute('content');
            if (content && !content.startsWith('http')) {
                content = content.replace(/^\//, "");
                thumb = TimesPeople.Config.image_host+'/'+content;
            } else {
                thumb = content;
            }
        }
        return thumb;
    },

    getEmbeddedValue: function(cssSelectorList) {
        var result = '';
        if (cssSelectorList) {
            cssSelectorList.each(function(trySelector){
                var embDesc = $$(trySelector)[0];
                if (embDesc != undefined) {
                    var embValue;
    
                    if (trySelector.indexOf("meta")>-1) {
                        embValue = embDesc.getAttribute("content");
                    } else {
                        embValue = embDesc.innerHTML;
                    }

                    if (embValue != "") {
                        result = embValue.stripTags().replace(/\n/g,'').strip().truncate(250);
                        throw $break;
                    }
                }
            });
        }
        return result;
    },
    
    getUrl: function(src) {
      src = src || 'tp';
      if (this.url) { return this.url; };
      
      if (this.type == 'video' && typeof getShareURL == 'function') {
        return getShareURL();
      }

      var canonical = $$('link[rel=canonical]')[0];
      if (canonical) {
        this.url = canonical.href;
        return this.url + '?src=' + src;
      }

      var preserve_search;

      switch(window.location.hostname) {
        case 'community.nytimes.com':
        case 'query.nytimes.com':
        case 'travel.nytimes.com':
        case 'movies.nytimes.com':
          preserve_search = true;
          break;
        case 'www.nytimes.com':
        default:
          preserve_search = false;
      }

      var search = window.location.search && preserve_search ? window.location.search + '&src=' + src : '?src=' + src;

      this.url = [window.location.protocol, '//', window.location.host, window.location.pathname, search, window.location.hash].join('');
      return this.url;
    }
};
(function(){
  var head = document.getElementsByTagName('head')[0];
  function load(path) {
    var link = document.createElement('link');
    link.href = TimesPeople.Config.css_host + path;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    head.appendChild(link);
    link = null;
  }

  load('/css/0.1/screen/common/modules/twittertool.css');

  (function() {
    if (TimesPeople.Config.is_dark === undefined) {
      setTimeout(arguments.callee, 10);
    } else if (TimesPeople.Config.is_dark) {
      load('/css/0.1/screen/common/modules/twittertool_dark.css');
    }
  })();
  
})();

TimesPeople.TwitterTool = {
  
  user: new TimesPeople.User(),
  
  character_limit: 140,
  
  initialize: function(element, position, x, y, asset) {
    this.asset = asset || TimesPeople.Page;
    this.element = element;
    this.position = position;
    this.x = x ? x + 'px' : '';
    this.y = y ? y + 'px' : '';
    this.label = 'Twitter';
    this.draw();
  },
  
  draw: function() {
    var html = NYTD.Template(this.toolbar_item_html, {label: this.label});
    var insertion = {};
    insertion[this.position] = html;
    this.element.insert(insertion);
    $('twitter_button').observe('click', this.onClick.bind(this));
  },
  
  drawPanel: function() {
    if (this.user.profile.tw_id) {
      this.open();
      this.shortenURL();
    } else {
      this.redirectToRegi();
    }
  },
  
  open: function() {
    if (this.isOpen) return;
    
    // KLUDGE ALERT! keep existing remote ads around because this call is going to nuke them
    if ('adxads' in window ) {
       var existingAds = adxads;
    }

    var adScript = new Element("script", 
      {src:'http://www.nytimes.com/adx/bin/adx_remote.html?type=fastscript&page=www.nytimes.com/yr/mo/day/twitter/'+
            this.asset.getSection()+
           '&posall=Frame6C&query=qstring&keywords=?'
      });
    
    adScript.onload = adScript.onreadystatechange = function(){
      if ('adxpos_Frame6C' in window) {
        $("Frame6C").innerHTML = adxads[adxpos_Frame6C];
        $("twitter_sponsor").show();
        // restore the old ads and get rid of this one
        if (typeof existingAds != 'undefined') {
          adxads = existingAds;
        }
      }
    };
    
    document.getElementsByTagName('head')[0].appendChild(adScript);
    
    this.isOpen = true;
    var item = $('twitter_item');
    item.insert(this.panel_html);
    if (this.x || this.y) {
      $('twitter_panel').setStyle({right:this.x,top:this.y});
    }
    this.textarea = $('twitter_textarea');
    this.form = $('twitter_form');
    this.textarea.observe('keyup', this.onKeyUp.bind(this));
    this.textarea.observe('keydown', this.onKeyDown.bind(this));
    this.form.observe('submit', this.onSubmit.bind(this));
    $('twitter_close').observe('click', this.close.bind(this));
  },
  
  close: function() {
    $('twitter_panel').remove();
    this.isOpen = false;
  },
  
  remove: function() {
    $('twitter_item').remove();
  },
  
  onClick: function(event) {

    if(this.user.isLoaded()) {
      this.drawPanel();
    } else {
      this.user.register(this);
      this.user.load();
    }
  },
  
  shortenURL: function() {
    var url = this.asset.getUrl('tptw');
    var self = this;
    new TimesPeople.Request('/svc/timespeople/toolbar/1.0/url/shorten', {
      method: 'post',
      params: 'long_url=' + encodeURIComponent(url),
      onComplete: function(response) {
        self.onShortenURL(response);
      }
    }
    );
  },
  
  isText: function(keyCode) {
    return ! [Event.KEY_BACKSPACE,
              Event.KEY_TAB,
              Event.KEY_ESC,
              Event.KEY_LEFT,
              Event.KEY_UP,
              Event.KEY_RIGHT,
              Event.KEY_DOWN,
              Event.KEY_DELETE,
              Event.KEY_HOME,
              Event.KEY_END,
              Event.KEY_PAGEUP,
              Event.KEY_PAGEDOWN,
              Event.KEY_INSERT].include(keyCode);
  },
  
  updateCharCount: function() {
    $('twitter_char_count').innerHTML =  this.character_limit - this.textarea.value.length + ' characters left';
    if (this.textarea.value.length > this.character_limit - 10) {
      $('twitter_char_count').style.color = "#A81817";
    } else {
      $('twitter_char_count').style.color = "";
    }
  },
    
  onKeyUp: function(event) {
    if (this.textarea.value.length <= this.character_limit) {
      this.updateCharCount();
    }
  },
  
  onKeyDown: function(event) {
    if (this.textarea.value.length >= this.character_limit && this.isText(event.keyCode)) {
      event.stop();
    }
  },
  
  onShortenURL: function(response) {
    var short_url;
    var spinner = $('twitter_spinner');
    
    switch(response.status) {
      case 200:
        short_url = JSON.parse(response.responseText).short_url;
        break;
      case 500:
        short_url = '';
        break;
      case 401:
      case 403:
        $('twitter_char_count').innerHTML = "Please log in.";
        if (spinner) spinner.hide();
        return;
    }
    
    if (spinner) spinner.hide();
    var headline = this.asset.getTitle();
    this.textarea.disabled = false;
    this.textarea.value = headline + (short_url ? ' - ' + short_url : "");
    this.updateCharCount();
    if (this.textarea.createTextRange) {
        var range = this.textarea.createTextRange();
        range.move('character', headline.length);
        range.select();
    }
    else if (this.textarea.selectionStart) {
      this.textarea.focus();
      this.textarea.setSelectionRange(0, headline.length);
    }
  },
  
  onSubmit: function(event) {
    if (this.disabled) { 
      event.stop();
      return false; 
    };
    var text = this.textarea.value;
    // TODO turn args into object
    TimesPeople.Activity.register(this);
    new TimesPeople.Activity({
      verb: "posted to Twitter",
      object: this.asset.getTitle(),
      object_url: this.asset.getUrl(),
      object_thumbnail_url: this.asset.getThumbnail(),
      object_type: this.asset.getType(),
      object_note: text
    });
    this.disabled = true;
    event.stop();
    
    dcsMultiTrack && dcsMultiTrack('DCS.dcssip','www.nytimes.com','DCS.dcsuri','/Article-Tool-Share-Twitter.html','WT.ti','Article-Tool-Share-Twitter','WT.z_dcsm','1');
  },
  
  update: function(msg) {
    switch(msg.event) {
      case 'action saved':
        this.disabled = false;
        this.close();
        TimesPeople.Activity.unregister(this);
        break;
      case 'error saving action':
        $('twitter_char_count').innerHTML = "Error: Please try again.";
        this.disabled = false;
        this.form.observe('submit', this.onSubmit.bind(this));
        break;
      case 'attributes updated':
        this.drawPanel();
        this.user.unregister(this);
        break;
      case 'no user info':
      case 'user not registered':
        this.redirectToRegi();
    }
  },
  
  redirectToRegi: function() {
    top.location.replace(TimesPeople.Config.get_started_uri + '/twitter?return_url=' + encodeURIComponent(top.location.href));
  },
  
  toolbar_item_html: '\
    <li id="twitter_item">\
      <a id="twitter_button">\
        <span><%= label %></span>\
      </a>\
    </li>\
  ',
  
  panel_html: '\
  <div id="twitter_panel">\
    <div class="opposingFloatControl clearfix" id="twitter_titlebar">\
      <div class="element1" id="twitter_form_title">Post to Twitter</div>\
      <div class="element2" id="twitter_close"><a>Close</a></div>\
    </div>\
    <div class="singleRule"></div>\
    <div id="twitter_spinner">\
      <object width="24" height="24" data="'+TimesPeople.Config.image_host + TimesPeople.Config.image_path+'spinner.swf" type="application/x-shockwave-flash">\
        <param value="'+TimesPeople.Config.image_host + TimesPeople.Config.image_path+'spinner.swf" name="movie"/>\
        <param value="Transparent" name="WMode"/>\
      </object>\
    </div>\
    <div class="clearfix">\
    <form id="twitter_form">\
      <textarea id="twitter_textarea" disabled="disabled"></textarea>\
      <div id="twitter_char_count">140 characters left</div>\
      <button type="submit" class="appButtonSmall altSmall"><span>Post</span></button>\
      <div id="twiiter_follow_nytimes" style="float: left; color: #666666; text-transform: none;">Follow <a href="http://twitter.com/#!/nytimes" style="display: inline; color: #004276;">@nytimes</a> on Twitter</div>\
    </form>\
    </div>\
    <div class="singleRule"></div>\
    <div style="display:none" id="twitter_sponsor">\
    <p class="sponsorLabel">Twitter Tool sponsored by</p>\
    <div id="Frame6C"></div>\
    </div>\
  </div>\
  \
  '
  
};
TimesPeople.RecommendTool = function(element, position, asset) {
  this.asset = asset || TimesPeople.Page;
  this.element = element;
  this.position = position;
  this.label = this.user.isTimesPeopleMember() ? 'Recommend' : 'Sign in to recommend';
};

TimesPeople.RecommendTool.prototype = {
  user: new TimesPeople.User(),

  draw: function() {
    var html = NYTD.Template(this.template, {label: this.label});
    var insertion = {};
    insertion[this.position] = html;
    this.element.insert(insertion);
    this.element.down('.timespeople_recommend_link').observe('click', this.onClick.bind(this));
  },

  onClick: function(event) {
    if (!this.user.isTimesPeopleMember()) {
      top.location = TimesPeople.Config.get_started_uri + '?url=' + encodeURIComponent(top.location.href);
      return;
    }

    var element = event.element();
    element.innerHTML = 'Thanks!';
    new TimesPeople.Activity('recommended', this.asset.getTitle(), this.asset.getDescription(), this.asset.getUrl(), this.asset.getThumbnail(), this.asset.getType());

    window.setTimeout(function(){
      element.innerHTML = 'Recommend';
    }, 3000);
  },

  template: '<li><a style="background:url(/images/apps/timespeople/recommend.gif) no-repeat;padding-left:20px" class="timespeople_recommend_link"><span><%= label %></span></a></li>'

};/*
$Id: activities.build.js 65714 2011-04-22 15:26:35Z alex.wallace $
(c) 2008 The New York Times Company
*/

TimesPeople.ActivityCollectionController = {

    initialize: function() {
      
      var pageLoaded;

      Event.observe(window, 'load', function() {
        var pageLoaded = true;
      });

      this.user = TimesPeople.User.getInstance();
      if(this.user.isLoaded()) {
        this.listen();
      }
      else {
        this.user.register(TimesPeople.ActivityCollectionController);
      }
    },

    update: function(msg) {
      this.listen();
      this.user.unregister(TimesPeople.ActivityCollectionController);
    },

    assign: function(activity, fn) {
      if (Object.isFunction(fn)) {
        fn = fn.wrap(function(proceed){
          new TimesPeople.Activity('recommended', TimesPeople.Page.title, null, null, TimesPeople.Page.getThumbnail());
          proceed();
        });
      }
    },

    listen: function() {
      if (this.listening) return;
      this.listening = true;
      TimesPeople.Page.initialize();
      this.draw();
    },

    draw: function() {
/*
    Common across page groups
*/
        if (TimesPeople.Page.group!=undefined) {

            switch (TimesPeople.Page.group){
                case "article": 
                    this.addComments();
                    break;
                case "topic":
                    if (TimesPeople.Page.section == "business") {
                        this.addRecommend({ key: "#breadcrumbs", target: "#breadcrumbs", type: "span", style: "float:right", position: "first", html: "<a class='timespeople_recommend_link' style='cursor:pointer;color:#333; padding:1px 0 3px 20px; font-size:1em; text-transform:uppercase; background-image:url(__ICON__); background-repeat: no-repeat;'>__LABEL__</a>" });       //  Verifed on Dev for: regular, travel, health (has issues on some + potential ad conflict)
                    } else  {
                        this.addRecommend();
                    }
                    break;
                case "multimedia":
                    this.addRecommend();
                    break;
                case "venue":   
                    this.addRecommend();
                    this.addRate();
                    this.addComments();
                    break;
                case "community":
                    this.addRecommend();
                    this.addRate();
                    this.addComments();
                    break;
                default :
                //  nothing
            }
/*
        Unique to specific pages
*/
            switch (TimesPeople.Page.type) {
                case "blog post":
                    this.addtwitter(TimesPeople.Page.type);
                    this.addComments();
                    break;
                case "travel guide":
                    this.addComments();
                    break;
                case "movie guide":
                    this.addRate();
                    break;
            }

            return true;
        }
        return false;
    },

    addRecommend: function(button) {

        var icon_host    = TimesPeople.Config.image_host + "/images/apps/timespeople/";
        var icon         = TimesPeople.Config.is_dark ? icon_host + "dark/recommend.gif" : icon_host + "recommend.gif";
        var label        = 'Recommend';
        var user         = this.user;
        var btnRecommend;
        var recommended = false;
        
        if (button) {
            btnRecommend = button;
        } else {
            if (TimesPeople.Config.Action.Recommend[TimesPeople.Page.group] != undefined) {
                if (TimesPeople.Config.Action.Recommend[TimesPeople.Page.group][TimesPeople.Page.type] != undefined) {
                    btnRecommend = TimesPeople.Config.Action.Recommend[TimesPeople.Page.group][TimesPeople.Page.type];
                } else  {
                    btnRecommend = TimesPeople.Config.Action.Recommend[TimesPeople.Page.group]['default'];
                }
            }
        }

        TimesPeople.console.log("Trying to add Recommend button");

        if (btnRecommend) {
            if ($$(btnRecommend.key)[0]) {
                var btnTarget = $$(btnRecommend.target)[0];
                if (btnTarget) {
                    var btn = new Element(btnRecommend.type, {style: btnRecommend.style});
                    btn.innerHTML = btnRecommend.html.replace(/__ICON__/g, icon).replace(/__LABEL__/g, label);
                    btn.className = "timespeople_btn_recommend";

                    if (btnRecommend.position == "first") {
                        var first = btnTarget.firstChild;
                        if ($(first).hasClassName('facebook')) {
                          first.insert({after: btn});
                        } else {
                          btnTarget.insert({top:btn});
                        }
                    } else {
                        btnTarget.insert({bottom:btn});
                    }

                    Event.observe(btn, 'click', onClickRecommend, true);
                    btnRecommend.trackingID = btnRecommend.trackingID || 'Box';
                    Event.observe(btn, 'click', function(){
                      dcsMultiTrack && dcsMultiTrack('DCS.dcssip','www.nytimes.com','DCS.dcsuri','/Article-Tool-Share-Recommend-'+btnRecommend.trackingID+'.html','WT.ti','Article-Tool-Share-Recommend-'+btnRecommend.trackingID+' ','WT.z_dcsm','1');
                    }, true);
                    
                }
            }

        }


    /*  Attach events for handling Recommend button */
        function onClickRecommend(e) {
            
            if (!user.isTimesPeopleMember()) {
                window.location = TimesPeople.Config.get_started_uri + '?url=' + encodeURIComponent(window.location.href);
                return;
            }
            
            if (recommended) return;

            var btnTarget = e.target;
            btnTarget.innerHTML = 'Thanks!';
            new TimesPeople.Activity('recommended', TimesPeople.Page.getTitle(), TimesPeople.Page.getDescription(), TimesPeople.Page.getUrl(), TimesPeople.Page.getThumbnail());
            
            
            if (TimesPeople.Page.type=='video') {
                window.setTimeout(restoreRecommend, 10000);
            } else {
                recommended = true;
                window.setTimeout(removeRecommend, 3000);
            }
        }

        function restoreRecommend() {
          var btn = $$('a.timespeople_recommend_link')[0];
          if (btn!=undefined) {
            btn.innerHTML = 'Recommend';
          }
        }

        function removeRecommend() {
            var btns = $$('li.timespeople_btn_recommend', 'a.timespeople_recommend_link').invoke('remove');
        }


        return;
    },

    addRate: function() {
        TimesPeople.console.log("Trying to add Ratings");

        var isRatable  = ($$('div.readerRating')[0]) ? true : false;
        var hasRateDiv = ($$('div.subListB')[0])     ? true : false;

        if (isRatable && hasRateDiv)    {
            var title  = '';
            var review = '';

            if (TimesPeople.Page.section=='movies') {
                switch(TimesPeople.Page.group) {
                    case 'article':
                        title  = TimesPeople.Page.getEmbeddedValue(['div.header h1']);
                        review = TimesPeople.Page.getEmbeddedValue(['p:not(p:empty)']);
                        break;
                    case 'topic':
                        title  = TimesPeople.Page.getEmbeddedValue(["meta[name='MTI']"]);
                        review = TimesPeople.Page.getEmbeddedValue(["p.review"]);
                        break;
                    case 'community':
                        title  = TimesPeople.Page.getEmbeddedValue(["meta[name='MTI']"]);
                        review = TimesPeople.Page.getEmbeddedValue(['div.reviewText']);
                }
            } else if (TimesPeople.Page.section=='travel') {
                title  = TimesPeople.Page.getEmbeddedValue(["div.bColumn h5"]);
                review = TimesPeople.Page.getEmbeddedValue(['div.bColumn p']);
            }

            if (title!='' && review!='') {
                TimesPeople.console.log("Adding events to images");
                var imageList = $$('div.subListB')[0].select('img');
                imageList.each(function(img){
                    Event.observe(img, 'click', function(event) {
                        new TimesPeople.Activity('rated', title, review.stripTags().truncate(250), null, TimesPeople.Page.getThumbnail());
                    });
                }); 
            }
        }
    },

    addComments: function() {

        TimesPeople.console.log("Trying to add for Comments");

        if (TimesPeople.Page.type=="article") {
        //  Comment Overflow page
            var metaPST    = $$("meta[name='PST']")[0];
            if (metaPST != undefined) {

                var contentPST = metaPST.getAttribute('content');
                if (contentPST=="Comments Overflow") {

                //  Article Comments
                    if ($('comment')) {
                        var submitButton = $$('div.submit img');
                        if (submitButton.length>0) {
                            Event.observe(submitButton[0], 'click', function(event) {
                                var comment = $$('#comment textarea')[0].value;
                                new TimesPeople.Activity('commented', decodeURIComponent(getShareHeadline()), comment, null, TimesPeople.Page.getThumbnail());
                            });
                        }
                    }

                //  Recommend an Article Comment
                    var allComments = $$('div.sequence');

                    if (allComments.length>0) {
                        $$('a[href="#"]').each(function(button){
                            if (button.innerHTML.toLowerCase()=="recommend") {
                                var divBody   = button.up('div.body');
                                var comment   = divBody.innerHTML.truncate(140).stripTags();
                                var commentNo = divBody.down('span.feedback').id;
                                var url       = location.href.split('?')[0]+"?permid="+commentNo+"&src=tp#comment"+commentNo;

                                Event.observe(button, 'click', function(event) {
                                    new TimesPeople.Activity('recommended', TimesPeople.Page.title, comment, url, TimesPeople.Page.getThumbnail(), 'comment');
                                });
                            }
                        });
                    }
                } else if (contentPST=="Blog Post") {
                //  Blog: Comments
                    if ($('submit-comment')) {
                        $('submit-comment').observe('click', function(e) {
                            new TimesPeople.Activity('commented', TimesPeople.Page.title, $('comment').value, null, TimesPeople.Page.getThumbnail());
                        }, true);
                    }
                }
            }
        }

        if (TimesPeople.Page.type=="blog post") {
        //  Blog: Comments
            if ($('submit-comment')) {
                $('submit-comment').observe('click', function(e) {
                    new TimesPeople.Activity('commented', TimesPeople.Page.title, $('comment').value, null, TimesPeople.Page.getThumbnail());
                }, true);
            }
        }

//  Check in Travel Topics and on Venues
        if (TimesPeople.Page.group=="topic" || TimesPeople.Page.group=="venue") {
        //  Comment: Travel Topic (aka suggestion)
            TimesPeople.console.log("Adding for " + TimesPeople.Page.group);

            if ($('shareSuggestions')) {
                var form = $$('#shareSuggestions form')[0];
                if (form) {
                    form.observe("submit",  function(e) {
                        if ($F('suggestion')){
                            new TimesPeople.Activity('reviewed', TimesPeople.Page.title, $('suggestion').value.stripTags().truncate(250), null, TimesPeople.Page.getThumbnail());
                        }
                    }, true);
                }
            }
        }

//  Movie Reviews
        if (TimesPeople.Page.group=="community") {
            if ($('submitReviews')) {
                var movieForm = $$('#submitReviews form')[0];
                if (movieForm) {
                    movieForm.observe("submit",  function(e) {
                        var movTitle  = $('reviewtitle').value;
                        var movText   = $('suggestion').value;
                        new TimesPeople.Activity('reviewed', movTitle, movText, null, TimesPeople.Page.getThumbnail());
                    }, true);
                } else {
                    TimesPeople.console.log("Movie Review: No form found");
                }
                return false;
            }
        }
    },
    
    addtwitter: function(pageType) {
      var config, selector, position;
      switch(pageType) {
        case 'article':
        case 'multimedia':
          config = TimesPeople.Config.Action.Recommend[TimesPeople.Page.group][TimesPeople.Page.type] || TimesPeople.Config.Action.Recommend[TimesPeople.Page.group]['default'];
          position = config.position == 'first' ? 'top' : 'bottom';
          selector = config.key;
          if ($$(selector)[0]) {
            var target = $$(config.target)[0];
            var first = target.firstChild;
            if ($(first).hasClassName('facebook')) {
              TimesPeople.TwitterTool.initialize(first, 'after');
            } else {
              TimesPeople.TwitterTool.initialize(target, position);
            }
          }
          break;
        case 'blog post':
          TimesPeople.TwitterTool.initialize($$('.entry-tools')[0], 'bottom', 0, 25);
          break;
      }
    },
    
    
    addOthers:function() {
        // ndy
    }
};

TimesPeople.ActivityCollectionController.initialize();
// Fri Apr 22 11:26:11 EDT 2011
/*1311122835,169938536,JIT Construction: v407899,en_US*/

if(!window.FB)window.FB={_apiKey:null,_session:null,_userStatus:'unknown',_logging:true,_inCanvas:((window.location.search.indexOf('fb_sig_in_iframe=1')>-1)||(window.location.search.indexOf('session=')>-1)||(window.location.search.indexOf('signed_request=')>-1)||(window.name.indexOf('iframe_canvas')>-1)||(window.name.indexOf('app_runner')>-1)),_https:(window.name.indexOf('_fb_https')>-1),_domain:{api:'https://api.facebook.com/',api_read:'https://api-read.facebook.com/',cdn:'http://static.ak.fbcdn.net/',https_cdn:'https://s-static.ak.fbcdn.net/',graph:'https://graph.facebook.com/',staticfb:'http://static.ak.facebook.com/',https_staticfb:'https://s-static.ak.facebook.com/',www:'http://www.facebook.com/',https_www:'https://www.facebook.com/',m:'http://m.facebook.com/',https_m:'https://m.facebook.com/'},_locale:null,_localeIsRtl:false,getDomain:function(a){switch(a){case 'api':return FB._domain.api;case 'api_read':return FB._domain.api_read;case 'cdn':return (window.location.protocol=='https:'||FB._https)?FB._domain.https_cdn:FB._domain.cdn;case 'https_cdn':return FB._domain.https_cdn;case 'graph':return FB._domain.graph;case 'staticfb':return (document.referrer.indexOf('https:')==0||FB._https)?FB._domain.https_staticfb:FB._domain.staticfb;case 'https_staticfb':return FB._domain.https_staticfb;case 'www':return (window.location.protocol=='https:'||FB._https)?FB._domain.https_www:FB._domain.www;case 'https_www':return FB._domain.https_www;case 'm':return (window.location.protocol=='https:'||FB._https)?FB._domain.https_m:FB._domain.m;case 'https_m':return FB._domain.https_m;}},copy:function(d,c,b,e){for(var a in c)if(b||typeof d[a]==='undefined')d[a]=e?e(c[a]):c[a];return d;},create:function(c,h){var e=window.FB,d=c?c.split('.'):[],a=d.length;for(var b=0;b<a;b++){var g=d[b];var f=e[g];if(!f){f=(h&&b+1==a)?h:{};e[g]=f;}e=f;}return e;},provide:function(c,b,a){return FB.copy(typeof c=='string'?FB.create(c):c,b,a);},guid:function(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');},log:function(a){if(FB._logging)if(window.Debug&&window.Debug.writeln){window.Debug.writeln(a);}else if(window.console)window.console.log(a);if(FB.Event)FB.Event.fire('fb.log',a);},$:function(a){return document.getElementById(a);}};
FB.provide('Array',{indexOf:function(a,c){if(a.indexOf)return a.indexOf(c);var d=a.length;if(d)for(var b=0;b<d;b++)if(a[b]===c)return b;return -1;},merge:function(c,b){for(var a=0;a<b.length;a++)if(FB.Array.indexOf(c,b[a])<0)c.push(b[a]);return c;},filter:function(a,c){var b=[];for(var d=0;d<a.length;d++)if(c(a[d]))b.push(a[d]);return b;},keys:function(c,d){var a=[];for(var b in c)if(d||c.hasOwnProperty(b))a.push(b);return a;},map:function(a,d){var c=[];for(var b=0;b<a.length;b++)c.push(d(a[b]));return c;},forEach:function(c,a,f){if(!c)return;if(Object.prototype.toString.apply(c)==='[object Array]'||(!(c instanceof Function)&&typeof c.length=='number')){if(c.forEach){c.forEach(a);}else for(var b=0,e=c.length;b<e;b++)a(c[b],b,c);}else for(var d in c)if(f||c.hasOwnProperty(d))a(c[d],d,c);}});
FB.provide('QS',{encode:function(c,d,a){d=d===undefined?'&':d;a=a===false?function(e){return e;}:encodeURIComponent;var b=[];FB.Array.forEach(c,function(f,e){if(f!==null&&typeof f!='undefined')b.push(a(e)+'='+a(f));});b.sort();return b.join(d);},decode:function(f){var a=decodeURIComponent,d={},e=f.split('&'),b,c;for(b=0;b<e.length;b++){c=e[b].split('=',2);if(c&&c[0])d[a(c[0])]=a(c[1]||'');}return d;}});
FB.provide('Content',{_root:null,_hiddenRoot:null,_callbacks:{},append:function(a,c){if(!c)if(!FB.Content._root){FB.Content._root=c=FB.$('fb-root');if(!c){FB.log('The "fb-root" div has not been created.');return;}else c.className+=' fb_reset';}else c=FB.Content._root;if(typeof a=='string'){var b=document.createElement('div');c.appendChild(b).innerHTML=a;return b;}else return c.appendChild(a);},appendHidden:function(a){if(!FB.Content._hiddenRoot){var b=document.createElement('div'),c=b.style;c.position='absolute';c.top='-10000px';c.width=c.height=0;FB.Content._hiddenRoot=FB.Content.append(b);}return FB.Content.append(a,FB.Content._hiddenRoot);},insertIframe:function(e){e.id=e.id||FB.guid();e.name=e.name||FB.guid();var a=FB.guid(),f=false,d=false;FB.Content._callbacks[a]=function(){if(f&&!d){d=true;e.onload&&e.onload(e.root.firstChild);}};if(FB.UA.mobile()&&!FB.Content._orientationFix){FB.Content._orientationFix=true;orientationFix=function(){if(FB.Dialog._active)FB.Dialog._centerActive(FB.Canvas.getPageInfo());};if("onorientationchange" in window){window.addEventListener("orientationchange",orientationFix);}else window.addEventListener("resize",orientationFix);}if(document.attachEvent){var b=('<iframe'+' id="'+e.id+'"'+' name="'+e.name+'"'+(e.title?' title="'+e.title+'"':'')+(e.className?' class="'+e.className+'"':'')+' style="border:none;'+(e.width?'width:'+e.width+'px;':'')+(e.height?'height:'+e.height+'px;':'')+'"'+' src="'+e.url+'"'+' frameborder="0"'+' scrolling="no"'+' allowtransparency="true"'+' onload="FB.Content._callbacks.'+a+'()"'+'></iframe>');e.root.innerHTML='<iframe src="javascript:false"'+' frameborder="0"'+' scrolling="no"'+' style="height:1px"></iframe>';f=true;window.setTimeout(function(){e.root.innerHTML=b;e.onInsert&&e.onInsert(e.root.firstChild);},0);}else{var c=document.createElement('iframe');c.id=e.id;c.name=e.name;c.onload=FB.Content._callbacks[a];c.scrolling='no';c.style.border='none';c.style.overflow='hidden';if(e.title)c.title=e.title;if(e.className)c.className=e.className;if(e.height)c.style.height=e.height+'px';if(e.width)c.style.width=e.width+'px';e.root.appendChild(c);f=true;c.src=e.url;e.onInsert&&e.onInsert(c);}},submitToTarget:function(c,b){var a=document.createElement('form');a.action=c.url;a.target=c.target;a.method=(b)?'GET':'POST';FB.Content.appendHidden(a);FB.Array.forEach(c.params,function(f,e){if(f!==null&&f!==undefined){var d=document.createElement('input');d.name=e;d.value=f;a.appendChild(d);}});a.submit();a.parentNode.removeChild(a);}});
FB.provide('Flash',{_minVersions:[[9,0,159,0],[10,0,22,87]],_swfPath:'swf/XdComm.swf',_callbacks:[],init:function(){if(FB.Flash._init)return;FB.Flash._init=true;window.FB_OnFlashXdCommReady=function(){FB.Flash._ready=true;for(var a=0,b=FB.Flash._callbacks.length;a<b;a++)FB.Flash._callbacks[a]();FB.Flash._callbacks=[];};FB.Flash.embedSWF('XdComm',FB.getDomain('cdn')+FB.Flash._swfPath);},embedSWF:function(d,e,b){var a=!!document.attachEvent,c=('<object '+'type="application/x-shockwave-flash" '+'id="'+d+'" '+(b?'flashvars="'+b+'" ':'')+(a?'name="'+d+'" ':'')+(a?'':'data="'+e+'" ')+(a?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'')+'allowscriptaccess="always">'+'<param name="movie" value="'+e+'"></param>'+'<param name="allowscriptaccess" value="always"></param>'+'</object>');FB.Content.appendHidden(c);},hasMinVersion:function(){if(typeof FB.Flash._hasMinVersion==='undefined'){var i,a,b,h=[];try{i=new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');}catch(j){if(navigator.mimeTypes.length>0){var mimeType='application/x-shockwave-flash';if(navigator.mimeTypes[mimeType].enabledPlugin){var name='Shockwave Flash';i=(navigator.plugins[name+' 2.0']||navigator.plugins[name]).description;}}}if(i){var f=i.replace(/\D+/g,',').match(/^,?(.+),?$/)[1].split(',');for(a=0,b=f.length;a<b;a++)h.push(parseInt(f[a],10));}FB.Flash._hasMinVersion=false;majorVersion:for(a=0,b=FB.Flash._minVersions.length;a<b;a++){var g=FB.Flash._minVersions[a];if(g[0]!=h[0])continue;for(var c=1,d=g.length,e=h.length;(c<d&&c<e);c++)if(h[c]<g[c]){FB.Flash._hasMinVersion=false;continue majorVersion;}else{FB.Flash._hasMinVersion=true;if(h[c]>g[c])break majorVersion;}};}return FB.Flash._hasMinVersion;},onReady:function(a){FB.Flash.init();if(FB.Flash._ready){window.setTimeout(a,0);}else FB.Flash._callbacks.push(a);}});
if(!this.JSON)this.JSON={};(function(){function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function')value=value.toJSON(key);if(typeof rep==='function')value=rep.call(holder,key,value);switch(typeof value){case 'string':return quote(value);case 'number':return isFinite(value)?String(value):'null';case 'boolean':case 'null':return String(value);case 'object':if(!value)return 'null';gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1)partial[i]=str(i,value)||'null';v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v)partial.push(quote(k)+(gap?': ':':')+v);}}}else for(k in value)if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v)partial.push(quote(k)+(gap?': ':':')+v);}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function')JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1)indent+=' ';}else if(typeof space==='string')indent=space;rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number'))throw new Error('JSON.stringify');return str('',{'':value});};if(typeof JSON.parse!=='function')JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object')for(k in value)if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else delete value[k];}return reviver.call(holder,key,value);}cx.lastIndex=0;if(cx.test(text))text=text.replace(cx,function(a){return '\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}());
FB.provide('JSON',{stringify:function(a){if(window.Prototype&&Object.toJSON){return Object.toJSON(a);}else return JSON.stringify(a);},parse:function(a){return JSON.parse(a);},flatten:function(c){var a={};for(var b in c)if(c.hasOwnProperty(b)){var d=c[b];if(null===d||undefined===d){continue;}else if(typeof d=='string'){a[b]=d;}else a[b]=FB.JSON.stringify(d);}return a;}});
FB.provide('',{api:function(){if(typeof arguments[0]==='string'){FB.ApiServer.graph.apply(FB.ApiServer,arguments);}else FB.ApiServer.rest.apply(FB.ApiServer,arguments);}});FB.provide('ApiServer',{METHODS:['get','post','delete','put'],_callbacks:{},_readOnlyCalls:{fql_query:true,fql_multiquery:true,friends_get:true,notifications_get:true,stream_get:true,users_getinfo:true},graph:function(){var a=Array.prototype.slice.call(arguments),f=a.shift(),d=a.shift(),c,e,b;while(d){var g=typeof d;if(g==='string'&&!c){c=d.toLowerCase();}else if(g==='function'&&!b){b=d;}else if(g==='object'&&!e){e=d;}else{FB.log('Invalid argument passed to FB.api(): '+d);return;}d=a.shift();}c=c||'get';e=e||{};if(f[0]==='/')f=f.substr(1);if(FB.Array.indexOf(FB.ApiServer.METHODS,c)<0){FB.log('Invalid method passed to FB.api(): '+c);return;}FB.ApiServer.oauthRequest('graph',f,c,e,b);},rest:function(e,a){var c=e.method.toLowerCase().replace('.','_');if(FB.Auth&&c==='auth_revokeauthorization'){var d=a;a=function(f){if(f===true)FB.Auth.setSession(null,'notConnected');d&&d(f);};}e.format='json-strings';e.api_key=FB._apiKey;var b=FB.ApiServer._readOnlyCalls[c]?'api_read':'api';FB.ApiServer.oauthRequest(b,'restserver.php','get',e,a);},oauthRequest:function(b,f,c,e,a){if(FB._session&&FB._session.access_token&&!e.access_token)e.access_token=FB._session.access_token;e.sdk='joey';e.pretty=0;var d=a;a=function(h){if(FB.Auth&&h&&FB._session&&FB._session.access_token==e.access_token&&(h.error_code==='190'||(h.error&&(h.error==='invalid_token'||h.error.type==='OAuthException'))))FB.getLoginStatus(null,true);d&&d(h);};try{FB.ApiServer.jsonp(b,f,c,FB.JSON.flatten(e),a);}catch(g){if(FB.Flash.hasMinVersion()){FB.ApiServer.flash(b,f,c,FB.JSON.flatten(e),a);}else throw new Error('Flash is required for this API call.');}},jsonp:function(b,f,d,e,a){var c=FB.guid(),g=document.createElement('script');if(b==='graph'&&d!=='get')e.method=d;e.callback='FB.ApiServer._callbacks.'+c;var h=(FB.getDomain(b)+f+(f.indexOf('?')>-1?'&':'?')+FB.QS.encode(e));if(h.length>2000)throw new Error('JSONP only support a maximum of 2000 bytes of input.');FB.ApiServer._callbacks[c]=function(i){a&&a(i);delete FB.ApiServer._callbacks[c];g.parentNode.removeChild(g);};g.src=h;document.getElementsByTagName('head')[0].appendChild(g);},flash:function(b,e,c,d,a){if(!window.FB_OnXdHttpResult)window.FB_OnXdHttpResult=function(g,f){FB.ApiServer._callbacks[g](decodeURIComponent(f));};FB.Flash.onReady(function(){var h=FB.getDomain(b)+e,f=FB.QS.encode(d);if(c==='get'){if(h.length+f.length>2000){if(b==='graph')d.method='get';c='post';f=FB.QS.encode(d);}else{h+=(h.indexOf('?')>-1?'&':'?')+f;f='';}}else if(c!=='post'){if(b==='graph')d.method=c;c='post';f=FB.QS.encode(d);}var g=document.XdComm.sendXdHttpRequest(c.toUpperCase(),h,f,null);FB.ApiServer._callbacks[g]=function(i){a&&a(FB.JSON.parse(i));delete FB.ApiServer._callbacks[g];};});}});
FB.provide('EventProvider',{subscribers:function(){if(!this._subscribersMap)this._subscribersMap={};return this._subscribersMap;},subscribe:function(b,a){var c=this.subscribers();if(!c[b]){c[b]=[a];}else c[b].push(a);},unsubscribe:function(b,a){var c=this.subscribers()[b];FB.Array.forEach(c,function(e,d){if(e==a)c[d]=null;});},monitor:function(d,a){if(!a()){var b=this,c=function(){if(a.apply(a,arguments))b.unsubscribe(d,c);};this.subscribe(d,c);}},clear:function(a){delete this.subscribers()[a];},fire:function(){var a=Array.prototype.slice.call(arguments),b=a.shift();FB.Array.forEach(this.subscribers()[b],function(c){if(c)c.apply(this,a);});},listen:function(a,event,b){if(a.addEventListener){a.addEventListener(event,b,false);}else if(a.attachEvent)a.attachEvent(event,b);},unlisten:function(a,event,b){if(a.removeEventListener){a.removeEventListener(event,b,false);}else if(a.detachEvent)a.detachEvent(event,b);}});FB.provide('Event',FB.EventProvider);
FB.provide('XD',{_origin:null,_transport:null,_callbacks:{},_forever:{},_xdProxyUrl:'connect/xd_proxy.php',_openerTransport:null,_openerOrigin:null,_nonOpenerOrigin:null,init:function(b){if(FB.XD._origin)return;var d=(window.location.protocol+'//'+window.location.host+'/'+FB.guid());if(window.addEventListener&&!window.attachEvent&&window.postMessage){FB.XD._origin=d;FB.XD.PostMessage.init();FB.XD._transport='postmessage';}else if(!b&&FB.Flash.hasMinVersion()){if(document.getElementById('fb-root')){var c=document.domain;if(c=='facebook.com')c=window.location.host;FB.XD._origin=(window.location.protocol+'//'+c+'/'+FB.guid());FB.XD.Flash.init();FB.XD._transport='flash';}else{if(FB.log)FB.log('missing fb-root, defaulting to fragment-based xdcomm');FB.XD._transport='fragment';FB.XD.Fragment._channelUrl=b||window.location.toString();}}else{FB.XD._transport='fragment';FB.XD.Fragment._channelUrl=b||window.location.toString();}var a=!!window.attachEvent;if(FB.XD._transport!='postmessage'&&a&&window.postMessage){FB.XD._openerTransport=FB.XD._transport;FB.XD._openerOrigin=FB.XD._origin;FB.XD._nonOpenerOrigin=d;}},resolveRelation:function(b){var g,d,f=b.split('.'),e=window;for(var a=0,c=f.length;a<c;a++){g=f[a];if(g==='opener'||g==='parent'||g==='top'){e=e[g];}else if(d=/^frames\[['"]?([a-zA-Z0-9-_]+)['"]?\]$/.exec(g)){e=e.frames[d[1]];}else throw new SyntaxError('Malformed id to resolve: '+b+', pt: '+g);}return e;},handler:function(a,f,c,d,b){if(window.location.toString().indexOf(FB.XD.Fragment._magic)>0)return 'javascript:false;//';var g=FB.getDomain((b?'https_':'')+'cdn')+FB.XD._xdProxyUrl+'#';d=d||FB.guid();f=f||'opener';if(FB.XD._openerTransport)if(f=='opener'){FB.XD._transport=FB.XD._openerTransport;FB.XD._origin=FB.XD._openerOrigin;}else{FB.XD.PostMessage.init();FB.XD._transport='postmessage';FB.XD._origin=FB.XD._nonOpenerOrigin;}if(FB.XD._transport=='fragment'){g=FB.XD.Fragment._channelUrl;var e=g.indexOf('#');if(e>0)g=g.substr(0,e);g+=((g.indexOf('?')<0?'?':'&')+FB.XD.Fragment._magic+'#?=&');}if(c)FB.XD._forever[d]=true;FB.XD._callbacks[d]=a;return g+FB.QS.encode({cb:d,origin:FB.XD._origin,relation:f,transport:FB.XD._transport});},recv:function(b){if(typeof b=='string')try{b=FB.JSON.parse(b);}catch(c){b=FB.QS.decode(b);}var a=FB.XD._callbacks[b.cb];if(!FB.XD._forever[b.cb])delete FB.XD._callbacks[b.cb];a&&a(b);},PostMessage:{_isInitialized:false,init:function(){if(!FB.XD.PostMessage._isInitialized){var a=FB.XD.PostMessage.onMessage;window.addEventListener?window.addEventListener('message',a,false):window.attachEvent('onmessage',a);FB.XD.PostMessage._isInitialized=true;}},onMessage:function(event){FB.XD.recv(event.data);}},WebView:{onMessage:function(a,c,b){FB.XD.recv(b);}},Flash:{init:function(){FB.Flash.onReady(function(){document.XdComm.postMessage_init('FB.XD.Flash.onMessage',FB.XD._openerOrigin?FB.XD._openerOrigin:FB.XD._origin);});},onMessage:function(a){FB.XD.recv(decodeURIComponent(a));}},Fragment:{_magic:'fb_xd_fragment',checkAndDispatch:function(){var b=window.location.toString(),a=b.substr(b.indexOf('#')+1),c=b.indexOf(FB.XD.Fragment._magic);if(c>0){FB.init=FB.getLoginStatus=FB.api=function(){};document.documentElement.style.display='none';FB.XD.resolveRelation(FB.QS.decode(a).relation).FB.XD.recv(a);}}}});FB.XD.Fragment.checkAndDispatch();
FB.provide('UA',{ie:function(){return FB.UA._populate()||this._ie;},firefox:function(){return FB.UA._populate()||this._firefox;},opera:function(){return FB.UA._populate()||this._opera;},safari:function(){return FB.UA._populate()||this._safari;},chrome:function(){return FB.UA._populate()||this._chrome;},windows:function(){return FB.UA._populate()||this._windows;},osx:function(){return FB.UA._populate()||this._osx;},linux:function(){return FB.UA._populate()||this._linux;},ios:function(){return FB.UA._populate()||this._ios;},mobile:function(){return false;},android:function(){return FB.UA._populate()||this._android;},nativeApp:function(){return false;},_populated:false,_populate:function(){if(FB.UA._populated)return;FB.UA._populated=true;var a=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent);var c=/(Mac OS X)|(Windows)|(Linux)/.exec(navigator.userAgent);var b=/\b(iPhone|iP[ao]d)/.exec(navigator.userAgent);FB.UA._android=navigator.userAgent.match(/Android/i);FB.UA._mobile=b||FB.UA._android||navigator.userAgent.match(/Mobile/i);if(a){FB.UA._ie=a[1]?parseFloat(a[1]):NaN;if(FB.UA._ie>=8&&!window.HTMLCollection)FB.UA._ie=7;FB.UA._firefox=a[2]?parseFloat(a[2]):NaN;FB.UA._opera=a[3]?parseFloat(a[3]):NaN;FB.UA._safari=a[4]?parseFloat(a[4]):NaN;if(FB.UA._safari){a=/(?:Chrome\/(\d+\.\d+))/.exec(navigator.userAgent);FB.UA._chrome=a&&a[1]?parseFloat(a[1]):NaN;}else FB.UA._chrome=NaN;}else FB.UA._ie=FB.UA._firefox=FB.UA._opera=FB.UA._chrome=FB.UA._safari=NaN;if(c){FB.UA._osx=!!c[1];FB.UA._windows=!!c[2];FB.UA._linux=!!c[3];}else FB.UA._osx=FB.UA._windows=FB.UA._linux=false;FB.UA._ios=b;}});
FB.provide('Arbiter',{_canvasProxyUrl:'connect/canvas_proxy.php',inform:function(c,e,f,b){if(FB.Canvas.isTabIframe()||(!FB._inCanvas&&FB.UA.mobile()&&window.postMessage)){var d=FB.JSON.stringify({method:c,params:e});if(window.postMessage){FB.XD.resolveRelation(f||'parent').postMessage(d,'*');return;}else try{window.opener.postMessage(d);return;}catch(a){}}var h=(FB.getDomain((b?'https_':'')+'staticfb')+FB.Arbiter._canvasProxyUrl+'#'+FB.QS.encode({method:c,params:FB.JSON.stringify(e||{}),relation:f}));var g=FB.Content.appendHidden('');FB.Content.insertIframe({url:h,root:g,width:1,height:1,onload:function(){setTimeout(function(){g.parentNode.removeChild(g);},10);}});}});
FB.provide('Canvas',{_timer:null,_lastSize:{},_pageInfo:{clientWidth:0,clientHeight:0,scrollLeft:0,scrollTop:0,offsetLeft:0,offsetTop:0},_pageInfoPollInterval:200,init:function(){var d=FB.Dom.getViewportInfo();FB.Canvas._pageInfo.clientWidth=d.width;FB.Canvas._pageInfo.clientHeight=d.height;if(window.name){var c='top.frames['+window.name+']';var a=FB.XD.handler(function(e){if(e.type=='pageInfo.update'){FB.Canvas._pageInfo.clientWidth=e.clientWidth;FB.Canvas._pageInfo.clientHeight=e.clientHeight;FB.Canvas._pageInfo.scrollLeft=e.scrollLeft;FB.Canvas._pageInfo.scrollTop=e.scrollTop;FB.Canvas._pageInfo.offsetLeft=e.offsetLeft;FB.Canvas._pageInfo.offsetTop=e.offsetTop;FB.Event.fire('canvas.pageInfoChange',FB.Canvas._pageInfo);}},c,true);var b={channelUrl:a,frame:window.name,updateInterval:FB.Canvas._pageInfoPollInterval};FB.Arbiter.inform('pollPageInfo',b,'top');}},setSize:function(b){if(typeof b!="object")b={};b=FB.copy(b||{},FB.Canvas._computeContentSize());b=FB.copy(b,{frame:window.name||'iframe_canvas'});if(FB.Canvas._lastSize[b.frame]){var a=FB.Canvas._lastSize[b.frame].height;if(FB.Canvas._lastSize[b.frame].width==b.width&&(b.height<=a&&(Math.abs(a-b.height)<=16)))return false;}FB.Canvas._lastSize[b.frame]=b;FB.Arbiter.inform('setSize',b);return true;},scrollTo:function(a,b){FB.Arbiter.inform('scrollTo',{frame:window.name||'iframe_canvas',x:a,y:b});},setAutoResize:function(b,a){if(a===undefined&&typeof b=="number"){a=b;b=true;}if(b===undefined||b){if(FB.Canvas._timer===null)FB.Canvas._timer=window.setInterval(FB.Canvas.setSize,a||100);FB.Canvas.setSize();}else if(FB.Canvas._timer!==null){window.clearInterval(FB.Canvas._timer);FB.Canvas._timer=null;}},isTabIframe:function(){return (window.name.indexOf('app_runner_')===0);},getPageInfo:function(){return FB.Canvas._pageInfo;},setDoneLoading:function(a){FB.Canvas._passAppTtiMessage(a,'RecordIframeAppTti');},stopTimer:function(a){FB.Canvas._passAppTtiMessage(a,'StopIframeAppTtiTimer');},startTimer:function(){FB.Canvas._passAppTtiMessage(null,'StartIframeAppTtiTimer');},_passAppTtiMessage:function(a,c){var b=null;if(a)b=FB.XD.handler(a,'top.frames['+window.name+']',false);FB.Arbiter.inform(c,{frame:window.name||'iframe_canvas',time:(new Date()).getTime(),appId:parseInt(FB._apiKey,10),channelUrl:b});},_computeContentSize:function(){var a=document.body,c=document.documentElement,d=0,b=Math.max(Math.max(a.offsetHeight,a.scrollHeight)+a.offsetTop,Math.max(c.offsetHeight,c.scrollHeight)+c.offsetTop);if(a.offsetWidth<a.scrollWidth){d=a.scrollWidth+a.offsetLeft;}else FB.Array.forEach(a.childNodes,function(e){var f=e.offsetWidth+e.offsetLeft;if(f>d)d=f;});if(c.clientLeft>0)d+=(c.clientLeft*2);if(c.clientTop>0)b+=(c.clientTop*2);return {height:b,width:d};}});
FB.provide('Intl',{_punctCharClass:('['+'.!?'+'\u3002'+'\uFF01'+'\uFF1F'+'\u0964'+'\u2026'+'\u0EAF'+'\u1801'+'\u0E2F'+'\uFF0E'+']'),_endsInPunct:function(a){if(typeof a!='string')return false;return a.match(new RegExp(FB.Intl._punctCharClass+'['+')"'+"'"+'\u00BB'+'\u0F3B'+'\u0F3D'+'\u2019'+'\u201D'+'\u203A'+'\u3009'+'\u300B'+'\u300D'+'\u300F'+'\u3011'+'\u3015'+'\u3017'+'\u3019'+'\u301B'+'\u301E'+'\u301F'+'\uFD3F'+'\uFF07'+'\uFF09'+'\uFF3D'+'\s'+']*$'));},_tx:function(d,a){if(a!==undefined)if(typeof a!='object'){FB.log('The second arg to FB.Intl._tx() must be an Object for '+'tx('+d+', ...)');}else{var c;for(var b in a)if(a.hasOwnProperty(b)){if(FB.Intl._endsInPunct(a[b])){c=new RegExp('\{'+b+'\}'+FB.Intl._punctCharClass+'*','g');}else c=new RegExp('\{'+b+'\}','g');d=d.replace(c,a[b]);}}return d;},tx:function(b,a){function c(e,d){void(0);}if(!FB.Intl._stringTable)return null;return FBIntern.Intl._tx(FB.Intl._stringTable[b],a);}});
FB.provide('String',{trim:function(a){return a.replace(/^\s*|\s*$/g,'');},format:function(a){if(!FB.String.format._formatRE)FB.String.format._formatRE=/(\{[^\}^\{]+\})/g;var b=arguments;return a.replace(FB.String.format._formatRE,function(e,d){var c=parseInt(d.substr(1),10),f=b[c+1];if(f===null||f===undefined)return '';return f.toString();});},escapeHTML:function(b){var a=document.createElement('div');a.appendChild(document.createTextNode(b));return a.innerHTML.replace(/"/g,'&quot;').replace(/'/g,'&#39;');},quote:function(c){var a=/["\\\x00-\x1f\x7f-\x9f]/g,b={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};return a.test(c)?'"'+c.replace(a,function(d){var e=b[d];if(e)return e;e=d.charCodeAt();return '\\u00'+Math.floor(e/16).toString(16)+(e%16).toString(16);})+'"':'"'+c+'"';}});
FB.provide('Dom',{containsCss:function(c,a){var b=' '+c.className+' ';return b.indexOf(' '+a+' ')>=0;},addCss:function(b,a){if(!FB.Dom.containsCss(b,a))b.className=b.className+' '+a;},removeCss:function(b,a){if(FB.Dom.containsCss(b,a)){b.className=b.className.replace(a,'');FB.Dom.removeCss(b,a);}},getStyle:function(a,c){var d=false,b=a.style;if(a.currentStyle){FB.Array.forEach(c.match(/\-([a-z])/g),function(e){c=c.replace(e,e.substr(1,1).toUpperCase());});d=a.currentStyle[c];}else{FB.Array.forEach(c.match(/[A-Z]/g),function(e){c=c.replace(e,'-'+e.toLowerCase());});if(window.getComputedStyle){d=document.defaultView.getComputedStyle(a,null).getPropertyValue(c);if(c=='background-position-y'||c=='background-position-x')if(d=='top'||d=='left')d='0px';}}if(c=='opacity'){if(a.filters&&a.filters.alpha)return d;return d*100;}return d;},setStyle:function(a,c,d){var b=a.style;if(c=='opacity'){if(d>=100)d=99.999;if(d<0)d=0;b.opacity=d/100;b.MozOpacity=d/100;b.KhtmlOpacity=d/100;if(a.filters)if(a.filters.alpha==undefined){a.filter="alpha(opacity="+d+")";}else a.filters.alpha.opacity=d;}else b[c]=d;},addScript:function(b){var a=document.createElement('script');a.type="text/javascript";a.src=b;return document.getElementsByTagName('head')[0].appendChild(a);},addCssRules:function(e,c){if(!FB.Dom._cssRules)FB.Dom._cssRules={};var a=true;FB.Array.forEach(c,function(f){if(!(f in FB.Dom._cssRules)){a=false;FB.Dom._cssRules[f]=true;}});if(a)return;if(!FB.UA.ie()){var d=document.createElement('style');d.type='text/css';d.textContent=e;document.getElementsByTagName('head')[0].appendChild(d);}else try{document.createStyleSheet().cssText=e;}catch(b){if(document.styleSheets[0])document.styleSheets[0].cssText+=e;}},getViewportInfo:function(){var a=(document.documentElement&&document.compatMode=='CSS1Compat')?document.documentElement:document.body;return {scrollTop:a.scrollTop,scrollLeft:a.scrollLeft,width:self.innerWidth?self.innerWidth:a.clientWidth,height:self.innerHeight?self.innerHeight:a.clientHeight};},ready:function(a){if(FB.Dom._isReady){a&&a();}else FB.Event.subscribe('dom.ready',a);}});(function(){function domReady(){FB.Dom._isReady=true;FB.Event.fire('dom.ready');FB.Event.clear('dom.ready');}if(FB.Dom._isReady||document.readyState=='complete')return domReady();if(document.addEventListener){document.addEventListener('DOMContentLoaded',domReady,false);}else if(document.attachEvent)document.attachEvent('onreadystatechange',domReady);if(FB.UA.ie()&&window===top)(function(){try{document.documentElement.doScroll('left');}catch(error){setTimeout(arguments.callee,0);return;}domReady();})();var oldonload=window.onload;window.onload=function(){domReady();if(oldonload)if(typeof oldonload=='string'){eval(oldonload);}else oldonload();};})();
FB.provide('',{bind:function(){var a=Array.prototype.slice.call(arguments),c=a.shift(),b=a.shift();return function(){return c.apply(b,a.concat(Array.prototype.slice.call(arguments)));};},Class:function(b,a,d){if(FB.CLASSES[b])return FB.CLASSES[b];var c=a||function(){};c.prototype=d;c.prototype.bind=function(e){return FB.bind(e,this);};c.prototype.constructor=c;FB.create(b,c);FB.CLASSES[b]=c;return c;},subclass:function(d,b,c,e){if(FB.CLASSES[d])return FB.CLASSES[d];var a=FB.create(b);FB.copy(e,a.prototype);e._base=a;e._callBase=function(g){var f=Array.prototype.slice.call(arguments,1);return a.prototype[g].apply(this,f);};return FB.Class(d,c?c:function(){if(a.apply)a.apply(this,arguments);},e);},CLASSES:{}});FB.provide('Type',{isType:function(a,b){while(a)if(a.constructor===b||a===b){return true;}else a=a._base;return false;}});
FB.Class('Obj',null,FB.copy({setProperty:function(a,b){if(FB.JSON.stringify(b)!=FB.JSON.stringify(this[a])){this[a]=b;this.fire(a,b);}}},FB.EventProvider));
FB.subclass('Dialog','Obj',function(a){this.id=a;FB.Dialog._dialogs[a]=this;},{});FB.provide('Dialog',{_dialogs:{},_loaderEl:null,_stack:[],_active:null,get:function(a){return FB.Dialog._dialogs[a];},_findRoot:function(a){while(a){if(FB.Dom.containsCss(a,'fb_dialog'))return a;a=a.parentNode;}},_showLoader:function(a,c){if(!FB.Dialog._loaderEl){c=parseInt(c,10);c=c?c:460;FB.Dialog._loaderEl=FB.Dialog._findRoot(FB.Dialog.create({content:('<div class="dialog_title">'+'  <a id="fb_dialog_loader_close">'+'    <div class="fb_dialog_close_icon"></div>'+'  </a>'+'  <span>Facebook</span>'+'  <div style="clear:both;"></div>'+'</div>'+'<div class="dialog_content"></div>'+'<div class="dialog_footer"></div>'),width:c}));}if(!a)a=function(){};var b=FB.$('fb_dialog_loader_close');FB.Dom.removeCss(b,'fb_hidden');b.onclick=function(){FB.Dialog._hideLoader();a();};FB.Dialog._makeActive(FB.Dialog._loaderEl);},_hideLoader:function(){if(FB.Dialog._loaderEl&&FB.Dialog._loaderEl==FB.Dialog._active)FB.Dialog._loaderEl.style.top='-10000px';},_makeActive:function(a){FB.Dialog._lowerActive();FB.Dialog._active=a;FB.Dialog._centerActive(FB.Canvas.getPageInfo());},_lowerActive:function(){if(!FB.Dialog._active)return;FB.Dialog._active.style.top='-10000px';FB.Dialog._active=null;},_removeStacked:function(a){FB.Dialog._stack=FB.Array.filter(FB.Dialog._stack,function(b){return b!=a;});},_centerActive:function(f){var a=FB.Dialog._active;if(!a)return;var h=FB.Dom.getViewportInfo();var i=parseInt(a.offsetWidth,10);var b=parseInt(a.offsetHeight,10);var c=h.scrollLeft+(h.width-i)/2;var e=(h.height-b)/2.5;if(c<e)e=c;var d=h.height-b-e;var g=f.scrollTop-f.offsetTop+(f.clientHeight-b)/2;if(g<e){g=e;}else if(g>d)g=d;g+=h.scrollTop;a.style.left=(c>0?c:0)+'px';a.style.top=(g>0?g:0)+'px';},create:function(e){e=e||{};if(e.loader)FB.Dialog._showLoader(e.onClose,e.loaderWidth);var d=document.createElement('div'),c=document.createElement('div'),a='fb_dialog';if(e.closeIcon&&e.onClose){var b=document.createElement('a');b.className='fb_dialog_close_icon';b.onclick=e.onClose;d.appendChild(b);}if(FB.UA.ie()){a+=' fb_dialog_legacy';FB.Array.forEach(['vert_left','vert_right','horiz_top','horiz_bottom','top_left','top_right','bottom_left','bottom_right'],function(g){var h=document.createElement('span');h.className='fb_dialog_'+g;d.appendChild(h);});}else a+=(FB.UA.mobile())?' fb_dialog_mobile':' fb_dialog_advanced';if(e.content)FB.Content.append(e.content,c);d.className=a;var f=parseInt(e.width,10);if(!isNaN(f))d.style.width=f+'px';c.className='fb_dialog_content';d.appendChild(c);FB.Content.append(d);if(e.visible)FB.Dialog.show(d);return c;},show:function(a){var b=FB.Dialog._findRoot(a);if(b){FB.Dialog._removeStacked(b);FB.Dialog._hideLoader();FB.Dialog._makeActive(b);FB.Dialog._stack.push(b);if('fbCallID' in a)FB.Dialog.get(a.fbCallID).fire('iframe_show');}},hide:function(a){var b=FB.Dialog._findRoot(a);if(b==FB.Dialog._active){FB.Dialog._lowerActive();if('fbCallID' in a)FB.Dialog.get(a.fbCallID).fire('iframe_hide');}},remove:function(a){a=FB.Dialog._findRoot(a);if(a){var b=FB.Dialog._active==a;FB.Dialog._removeStacked(a);FB.Dialog._hideLoader();if(b)if(FB.Dialog._stack.length>0){FB.Dialog.show(FB.Dialog._stack.pop());}else FB.Dialog._lowerActive();window.setTimeout(function(){a.parentNode.removeChild(a);},3000);}}});
FB.provide('',{ui:function(f,b){if(!f.method){FB.log('"method" is a required parameter for FB.ui().');return null;}if(f.method=='permissions.request'&&(f.display=='iframe'||f.display=='dialog')){var h=f.perms.split(',');for(var e=0;e<h.length;e++){var g=h[e].trim();if(!FB.initSitevars.iframePermissions[g.trim()]){f.display='popup';break;}}}var a=FB.UIServer.prepareCall(f,b);if(!a)return null;var d=a.params.display;if(d=='dialog')d='iframe';var c=FB.UIServer[d];if(!c){FB.log('"display" must be one of "popup", "iframe", "touch", "async",'+' or "hidden".');return null;}c(a);return a.dialog;}});FB.provide('UIServer',{Methods:{},_active:{},_defaultCb:{},_resultToken:'"xxRESULTTOKENxx"',_forceHTTPS:false,genericTransform:function(a){if(a.params.display=='dialog'||a.params.display=='iframe'){a.params.display='iframe';a.params.channel=FB.UIServer._xdChannelHandler(a.id,'parent.parent');}return a;},prepareCall:function(h,b){var g=h.method.toLowerCase(),f=FB.copy({},FB.UIServer.Methods[g]),e=FB.guid(),c=(f.noHttps!==true)&&(FB._https||(g!=='auth.status'));FB.UIServer._forceHTTPS=c;FB.copy(h,{api_key:FB._apiKey,app_id:FB._apiKey,locale:FB._locale,sdk:'joey',access_token:c&&FB._session&&FB._session.access_token||undefined});h.display=FB.UIServer.getDisplayMode(f,h);if(!f.url)f.url='dialog/'+g;var a={cb:b,id:e,size:f.size||FB.UIServer.getDefaultSize(),url:FB.getDomain(c?'https_www':'www')+f.url,forceHTTPS:c,params:h,dialog:new FB.Dialog(e)};var j=f.transform?f.transform:FB.UIServer.genericTransform;if(j){a=j(a);if(!a)return;}var d=f.getXdRelation||FB.UIServer.getXdRelation;var i=d(a.params.display);if(!(a.id in FB.UIServer._defaultCb)&&!('next' in a.params))a.params.next=FB.UIServer._xdResult(a.cb,a.id,i,true);if(i==='parent')a.params.channel_url=FB.UIServer._xdChannelHandler(e,'parent.parent');a=FB.UIServer.prepareParams(a);return a;},prepareParams:function(a){var c=a.params.method;if(!FB.Canvas.isTabIframe())delete a.params.method;if(FB.TemplateUI&&FB.TemplateUI.supportsTemplate(c,a)){if(FB.reportTemplates)console.log("Using template for "+c+".");FB.TemplateUI.useCachedUI(c,a);}else{a.params=FB.JSON.flatten(a.params);var b=FB.QS.encode(a.params);if(FB.UIServer.urlTooLongForIE(a.url+b)){a.post=true;}else if(b)a.url+='?'+b;}return a;},urlTooLongForIE:function(a){return a.length>2000;},getDisplayMode:function(a,b){if(b.display==='hidden')return 'hidden';if(FB.Canvas.isTabIframe()&&b.display!=='popup')return 'async';if(FB.UA.mobile()||b.display==='touch')return 'touch';if(!FB._session&&b.display=='dialog'&&!a.loggedOutIframe){FB.log('"dialog" mode can only be used when the user is connected.');return 'popup';}if(a.connectDisplay&&!FB._inCanvas)return a.connectDisplay;return b.display||(FB._session?'dialog':'popup');},getXdRelation:function(a){if(a==='popup'||a==='touch')return 'opener';if(a==='dialog'||a==='iframe'||a==='hidden')return 'parent';if(a==='async')return 'parent.frames['+window.name+']';},popup:function(b){var a=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,i=typeof window.screenY!='undefined'?window.screenY:window.screenTop,g=typeof window.outerWidth!='undefined'?window.outerWidth:document.documentElement.clientWidth,f=typeof window.outerHeight!='undefined'?window.outerHeight:(document.documentElement.clientHeight-22),k=b.size.width,d=b.size.height,h=(a<0)?window.screen.width+a:a,e=parseInt(h+((g-k)/2),10),j=parseInt(i+((f-d)/2.5),10),c=('width='+k+',height='+d+',left='+e+',top='+j+',scrollbars=1');if(b.params&&b.params.method=='permissions.request')c+=',location=1,toolbar=0';if(b.post){FB.UIServer.setActiveNode(b,window.open('about:blank',b.id,c));FB.Content.submitToTarget({url:b.url,target:b.id,params:b.params});}else FB.UIServer.setActiveNode(b,window.open(b.url,b.id,c));if(b.id in FB.UIServer._defaultCb)FB.UIServer._popupMonitor();},setActiveNode:function(a,b){FB.UIServer._active[a.id]=b;b.fbCallID=a.id;},hidden:function(a){a.className='FB_UI_Hidden';a.root=FB.Content.appendHidden('');FB.UIServer._insertIframe(a);},iframe:function(a){if(a.root)return;a.className='FB_UI_Dialog';a.root=FB.Dialog.create({onClose:function(){FB.UIServer._triggerDefault(a.id);},loader:!a.hideLoader,loaderWidth:a.size.width,closeIcon:true});FB.Dom.addCss(a.root,'fb_dialog_iframe');var b=FB.Dialog._findRoot(a.root);FB.Dom.addCss(b,'loading');FB.UIServer._insertIframe(a);},async:function(a){a.frame=window.name;delete a.url;delete a.size;FB.Arbiter.inform('showDialog',a);},getDefaultSize:function(){if(FB.UA.mobile()){var a=window.innerWidth/window.innerHeight>1.2;return {width:window.innerWidth,height:Math.max(window.innerHeight,(a?screen.width:screen.height))};}return {width:575,height:240};},_insertIframe:function(b){FB.UIServer._active[b.id]=false;var a=function(c){if(b.id in FB.UIServer._active)FB.UIServer.setActiveNode(b,c);};if(b.post){FB.Content.insertIframe({url:'about:blank',root:b.root,className:b.className,width:b.size.width,height:b.size.height,onInsert:a,onload:function(c){FB.Content.submitToTarget({url:b.url,target:c.name,params:b.params});}});}else FB.Content.insertIframe({url:b.url,root:b.root,className:b.className,width:b.size.width,height:b.size.height,name:b.frameName,onInsert:a});},_triggerDefault:function(a){FB.UIServer._xdRecv({frame:a},FB.UIServer._defaultCb[a]||function(){});},_popupMonitor:function(){var a;for(var b in FB.UIServer._active)if(FB.UIServer._active.hasOwnProperty(b)&&b in FB.UIServer._defaultCb){var c=FB.UIServer._active[b];try{if(c.tagName)continue;}catch(d){}try{if(c.closed){FB.UIServer._triggerDefault(b);}else a=true;}catch(e){}}if(a&&!FB.UIServer._popupInterval){FB.UIServer._popupInterval=window.setInterval(FB.UIServer._popupMonitor,100);}else if(!a&&FB.UIServer._popupInterval){window.clearInterval(FB.UIServer._popupInterval);FB.UIServer._popupInterval=null;}},_xdChannelHandler:function(a,b){return FB.XD.handler(function(c){var d=FB.UIServer._active[a];if(!d)return;if(c.type=='resize'){if(c.height)d.style.height=c.height+'px';if(c.width)d.style.width=c.width+'px';if(c.ackData&&c.ackData.height)c.ackData.ackData={height:c.ackData.height};FB.Arbiter.inform('resize.ack',c.ackData||{},'parent.frames['+d.name+']',true);FB.Dialog.show(d);}else if(c.type=='hide'){FB.Dialog.hide(d);}else if(c.type=='rendered'){var e=FB.Dialog._findRoot(d);FB.Dialog.show(e);FB.Dom.removeCss(e,'loading');}else if(c.type=='fireevent')FB.Event.fire(c.event);},b,true,null,FB.UIServer._forceHTTPS);},_xdNextHandler:function(a,b,d,c){if(c)FB.UIServer._defaultCb[b]=a;return FB.XD.handler(function(e){FB.UIServer._xdRecv(e,a);},d)+'&frame='+b;},_xdRecv:function(b,a){var c=FB.UIServer._active[b.frame];try{if(FB.Dom.containsCss(c,'FB_UI_Hidden')){window.setTimeout(function(){c.parentNode.parentNode.removeChild(c.parentNode);},3000);}else if(FB.Dom.containsCss(c,'FB_UI_Dialog')){FB.Dialog.remove(c);if(FB.TemplateUI&&FB.UA.mobile())FB.TemplateUI.populateCache();}}catch(d){}try{if(c.close){c.close();FB.UIServer._popupCount--;}}catch(e){}delete FB.UIServer._active[b.frame];delete FB.UIServer._defaultCb[b.frame];a(b);},_xdResult:function(a,b,d,c){return (FB.UIServer._xdNextHandler(function(e){a&&a(e.result&&e.result!=FB.UIServer._resultToken&&FB.JSON.parse(e.result));},b,d,c)+'&result='+encodeURIComponent(FB.UIServer._resultToken));}});
FB.provide('',{getLoginStatus:function(a,b){if(!FB._apiKey){FB.log('FB.getLoginStatus() called before calling FB.init().');return;}if(a)if(!b&&FB.Auth._loadState=='loaded'){a({status:FB._userStatus,session:FB._session});return;}else FB.Event.subscribe('FB.loginStatus',a);if(!b&&FB.Auth._loadState=='loading')return;FB.Auth._loadState='loading';var c=function(d){FB.Auth._loadState='loaded';FB.Event.fire('FB.loginStatus',d);FB.Event.clear('FB.loginStatus');};if(FB.UA.mobile()&&window.postMessage&&window.localStorage){FB.Auth.staticAuthCheck(c);}else FB.ui({method:'auth.status',display:'hidden'},c);},getSession:function(){return FB._session;},login:function(a,b){FB.ui(FB.copy({method:'permissions.request',display:'popup'},b||{}),a);},logout:function(a){FB.ui({method:'auth.logout',display:'hidden'},a);}});FB.provide('Auth',{_callbacks:[],_xdStorePath:'xd_localstorage/',staticAuthCheck:function(b){var a=FB.getDomain('https_staticfb');FB.Content.insertIframe({root:FB.Content.appendHidden(''),className:'FB_UI_Hidden',url:a+FB.Auth._xdStorePath,onload:function(f){var g=frames[f.name];var d=FB.guid();var e=false;var c=function(h){if(!e){e=true;FB.Auth._staticAuthHandler(b,h);}};FB.XD.handler(c,'parent',true,d);setTimeout(c,500);g.postMessage(FB.JSON.stringify({method:'getItem',params:['LoginInfo_'+FB._apiKey],returnCb:d}),a);}});},_staticAuthHandler:function(a,c){if(c&&c.data&&c.data.status&&c.data.status=='connected'){var b=FB.Auth.setSession(c.data.session||null,c.data.status);a&&a(b);}else FB.ui({method:'auth.status',display:'hidden'},a);},setSession:function(e,g){var b=!FB._session&&e,c=FB._session&&!e,a=FB._session&&e&&FB._session.uid!=e.uid,f=b||c||(FB._session&&e&&FB._session.access_token!=e.access_token),h=g!=FB._userStatus;var d={session:e,status:g};FB._session=e;FB._userStatus=g;if(f&&FB.Cookie&&FB.Cookie.getEnabled())FB.Cookie.set(e);if(h)FB.Event.fire('auth.statusChange',d);if(c||a)FB.Event.fire('auth.logout',d);if(b||a)FB.Event.fire('auth.login',d);if(f)FB.Event.fire('auth.sessionChange',d);if(FB.Auth._refreshTimer){window.clearTimeout(FB.Auth._refreshTimer);delete FB.Auth._refreshTimer;}if(FB.Auth._loadState&&e&&e.expires)FB.Auth._refreshTimer=window.setTimeout(function(){FB.getLoginStatus(null,true);},1200000);return d;},xdHandler:function(a,b,f,c,e,d){return FB.UIServer._xdNextHandler(FB.Auth.xdResponseWrapper(a,e,d),b,f,c);},xdResponseWrapper:function(a,c,b){return function(e){try{b=FB.JSON.parse(e.session);}catch(i){}if(b)c='connected';if(e&&e.fb_https&&!FB._https)FB._https=true;var h=FB.Auth.setSession(b||null,c);h.perms=e&&e.perms||null;if(e&&e.required_perms&&FB.UA.nativeApp()){var g=JSON.parse(e.required_perms);var d=[];FB.Array.forEach(g,function(k,j){d=d.concat(k);});var f=d.join(',');FB.login(a,{perms:f});}else a&&a(h);};},_getSessionOrigin:function(){return 1;}});FB.provide('UIServer.Methods',{'permissions.request':{size:{width:627,height:326},transform:function(a){if(!FB._apiKey){FB.log('FB.login() called before calling FB.init().');return;}if(FB._session&&!a.params.perms&&!a.params.auth_type){FB.log('FB.login() called when user is already connected.');a.cb&&a.cb({status:FB._userStatus,session:FB._session});return;}a=FB.UIServer.genericTransform(a);a.cb=FB.Auth.xdResponseWrapper(a.cb,FB._userStatus,FB._session);a.params.method='permissions.request';FB.copy(a.params,{fbconnect:FB._inCanvas?0:1,return_session:1,session_version:3});return a;}},'auth.logout':{url:'logout.php',transform:function(a){if(!FB._apiKey){FB.log('FB.logout() called before calling FB.init().');}else if(!FB._session){FB.log('FB.logout() called without a session.');}else{a.params.next=FB.Auth.xdHandler(a.cb,a.id,'parent',false,'unknown');return a;}}},'auth.status':{url:'extern/login_status.php',transform:function(a){var b=a.cb,c=a.id,d=FB.Auth.xdHandler;delete a.cb;FB.copy(a.params,{no_session:d(b,c,'parent',false,'notConnected'),no_user:d(b,c,'parent',false,'unknown'),ok_session:d(b,c,'parent',false,'connected'),session_version:3,extern:FB._inCanvas?0:2,session_origin:FB.Auth._getSessionOrigin()});return a;}}});
FB.provide('Cookie',{_domain:null,_enabled:false,setEnabled:function(a){FB.Cookie._enabled=a;},getEnabled:function(){return FB.Cookie._enabled;},load:function(){var a=document.cookie.match('\\bfbs_'+FB._apiKey+'="([^;]*)\\b'),b;if(a){b=FB.QS.decode(a[1]);b.expires=parseInt(b.expires,10);FB.Cookie._domain=b.base_domain;}return b;},setRaw:function(c,b,a){document.cookie='fbs_'+FB._apiKey+'="'+c+'"'+(c&&b==0?'':'; expires='+new Date(b*1000).toGMTString())+'; path=/'+(a?'; domain=.'+a:'');FB.Cookie._domain=a;},set:function(a){a?FB.Cookie.setRaw(FB.QS.encode(a),a.expires,a.base_domain):FB.Cookie.clear();},clear:function(){FB.Cookie.setRaw('',0,FB.Cookie._domain);}});
FB.provide('Frictionless',{_allowedRecipients:{},_useFrictionless:false,_updateRecipients:function(){FB.Frictionless._allowedRecipients={};FB.api('/me/apprequestformerrecipients',function(a){if(!a||a.error)return;FB.Array.forEach(a.data,function(b){FB.Frictionless._allowedRecipients[b.recipient_id]=true;},false);});},init:function(){FB.Frictionless._useFrictionless=true;FB.Event.subscribe('auth.login',function(a){if(a.session)FB.Frictionless._updateRecipients();});},_processRequestResponse:function(a){return function(d){var c=d&&typeof d.frictionless_value!=='undefined';var e=d&&d.updated_frictionless;if(FB.Frictionless._useFrictionless&&(e||c)){FB.Frictionless._updateRecipients();if(c){var b=[];FB.Array.forEach(d.request_ids,function(f){b.push(f);},false);d.request_ids=b;}}a&&a(d);};},isAllowed:function(c){if(!c)return false;if(typeof c==='number'||typeof c==='string')return FB.Frictionless._allowedRecipients[c];var a=true;var b=false;FB.Array.forEach(c,function(d){a=a&&FB.Frictionless._allowedRecipients[d];b=true;},false);return a&&b;}});
FB.provide('',{initSitevars:{},init:function(a){a=FB.copy(a||{},{logging:true,status:true});FB._apiKey=a.appId||a.apiKey;if(!a.logging&&window.location.toString().indexOf('fb_debug=1')<0)FB._logging=false;FB.XD.init(a.channelUrl);if(FB.UA.mobile()&&FB.TemplateUI&&a.useCachedDialogs!==false){FB.TemplateUI.init();FB.Event.subscribe('auth.sessionChange',FB.TemplateData.update);}if(a.reportTemplates)FB.reportTemplates=true;if(a.frictionlessRequests)FB.Frictionless.init();if(FB._apiKey){FB.Cookie.setEnabled(a.cookie);a.session=a.session||FB.Cookie.load();FB.Auth.setSession(a.session,a.session?'connected':'unknown');if(a.status)FB.getLoginStatus();}if(FB._inCanvas)FB.Canvas.init();FB.Event.subscribe('xfbml.parse',function(){FB.XFBML.IframeWidget.batchWidgetPipeRequests();});if(a.xfbml)window.setTimeout(function(){if(FB.XFBML)if(FB.initSitevars.parseXFBMLBeforeDomReady){FB.XFBML.parse();var b=window.setInterval(function(){FB.XFBML.parse();},100);FB.Dom.ready(function(){window.clearInterval(b);FB.XFBML.parse();});}else FB.Dom.ready(FB.XFBML.parse);},0);if(FB.Canvas&&FB.Canvas.EarlyFlush)FB.Canvas.EarlyFlush._maybeSample();}});
FB.provide('Canvas.EarlyFlush',{_sampleRate:0,_appIdsBlacklist:[],_links:[],COLLECT_AUTOMATIC:0,COLLECT_MANUAL:1,_collectionMode:0,addResource:function(a){if(!FB._inCanvas||!FB._apiKey)return;FB.Canvas.EarlyFlush._links.push(a);},setCollectionMode:function(a){if(!FB._inCanvas||!FB._apiKey)return false;if(a!=FB.Canvas.EarlyFlush.COLLECT_AUTOMATIC&&a!=FB.Canvas.EarlyFlush.COLLECT_MANUAL)return false;FB.Canvas.EarlyFlush._collectionMode=a;},_maybeSample:function(){if(!FB._inCanvas||!FB._apiKey||!FB.Canvas.EarlyFlush._sampleRate)return;if(window.name.indexOf('_fb_https')>-1)return;var a=Math.random();if(a>1/FB.Canvas.EarlyFlush._sampleRate)return;if(FB.Canvas.EarlyFlush._appIdsBlacklist=='*')return;if(FB.Array.indexOf(FB.Canvas.EarlyFlush._appIdsBlacklist,parseInt(FB._apiKey,10))!=-1)return;window.setTimeout(FB.Canvas.EarlyFlush._sample,30000);},_sample:function(){var b={object:'data',link:'href',script:'src'};if(FB.Canvas.EarlyFlush._collectionMode==FB.Canvas.EarlyFlush.COLLECT_AUTOMATIC)FB.Array.forEach(b,function(c,d){FB.Array.forEach(window.document.getElementsByTagName(d),function(e){if(e[c])FB.Canvas.EarlyFlush._links.push(e[c]);});});var a=FB.JSON.stringify(FB.Canvas.EarlyFlush._links);FB.api(FB._apiKey+'/staticresources','post',{urls:a});FB.Canvas.EarlyFlush._links=[];}});
FB.provide('CanvasInsights',{setDoneLoading:function(a){FB.Canvas.setDoneLoading(a);}});
FB.provide('UIServer.MobileIframableMethod',{transform:function(a){if(a.params.display==='touch'&&a.params.access_token&&window.postMessage){a.params.channel=FB.UIServer._xdChannelHandler(a.id,'parent');a.params.in_iframe=1;return a;}else return FB.UIServer.genericTransform(a);},getXdRelation:function(a){if(a==='touch'&&window.postMessage)return 'parent';return FB.UIServer.getXdRelation(a);}});FB.provide('UIServer.Methods',{'stream.share':{size:{width:575,height:380},url:'sharer.php',transform:function(a){if(!a.params.u)a.params.u=window.location.toString();return a;}},'fbml.dialog':{size:{width:575,height:300},url:'render_fbml.php',loggedOutIframe:true,transform:function(a){return a;}},'auth.logintofacebook':{size:{width:530,height:287},url:'login.php',transform:function(a){a.params.skip_api_login=1;var c=FB.UIServer.getXdRelation(a.params.display);var b=FB.UIServer._xdResult(a.cb,a.id,c,true);a.params.next=FB.getDomain(FB._https?'https_www':'www')+"login.php?"+FB.QS.encode({api_key:FB._apiKey,next:b,skip_api_login:1});return a;}},apprequests:{transform:function(a){a=FB.UIServer.MobileIframableMethod.transform(a);if(FB.Frictionless&&FB.Frictionless._useFrictionless){a.cb=FB.Frictionless._processRequestResponse(a.cb);a.hideLoader=FB.Frictionless.isAllowed(a.params.to);}return a;},getXdRelation:function(a){return FB.UIServer.MobileIframableMethod.getXdRelation(a);}},feed:FB.UIServer.MobileIframableMethod});
FB.provide('',{share:function(a){FB.log('FB.share() has been deprecated. Please use FB.ui() instead.');FB.ui({display:'popup',method:'stream.share',u:a});},publish:function(b,a){FB.log('FB.publish() has been deprecated. Please use FB.ui() instead.');b=b||{};FB.ui(FB.copy({display:'popup',method:'stream.publish',preview:1},b||{}),a);},addFriend:function(b,a){FB.log('FB.addFriend() has been deprecated. Please use FB.ui() instead.');FB.ui({display:'popup',id:b,method:'friend.add'},a);}});FB.UIServer.Methods['auth.login']=FB.UIServer.Methods['permissions.request'];
FB.provide('XFBML',{_renderTimeout:30000,parse:function(d,b){d=d||document.body;var c=1,e=function(){c--;if(c===0){b&&b();FB.Event.fire('xfbml.render');}};var a={};if(FB.XFBML._widgetPipeIsEnabled())FB.Array.forEach(FB.XFBML._tagInfos,function(f){if(f.supportsWidgetPipe){var h=f.xmlns?f.xmlns:'fb';var g=FB.XFBML._getDomElements(d,h,f.localName);a[f.localName]=g;FB.XFBML._widgetPipeEnabledTagCount+=g.length;}});FB.Array.forEach(FB.XFBML._tagInfos,function(g){if(!g.xmlns)g.xmlns='fb';var h;if(a[g.localName]!==undefined){h=a[g.localName];}else h=FB.XFBML._getDomElements(d,g.xmlns,g.localName);for(var f=0;f<h.length;f++){c++;FB.XFBML._processElement(h[f],g,e);}});FB.Event.fire('xfbml.parse');window.setTimeout(function(){if(c>0)FB.log(c+' XFBML tags failed to render in '+FB.XFBML._renderTimeout+'ms.');},FB.XFBML._renderTimeout);e();},registerTag:function(a){FB.XFBML._tagInfos.push(a);},shouldUseWidgetPipe:function(){if(!FB.XFBML._widgetPipeIsEnabled())return false;var a=FB.XFBML._widgetPipeEnabledTagCount>1;return a;},_processElement:function(dom,tagInfo,cb){var element=dom._element;if(element){element.subscribe('render',cb);element.process();}else{var processor=function(){var fn=eval(tagInfo.className);var getBoolAttr=function(attr){var attr=dom.getAttribute(attr);return (attr&&FB.Array.indexOf(['true','1','yes','on'],attr.toLowerCase())>-1);};var isLogin=false;var showFaces=true;var renderInIframe=false;if(tagInfo.className==='FB.XFBML.LoginButton'){addToProfile=(tagInfo.localName=='add-to-profile');renderInIframe=getBoolAttr('render-in-iframe');showFaces=addToProfile||getBoolAttr('show-faces')||getBoolAttr('show_faces');isLogin=addToProfile||renderInIframe||showFaces||getBoolAttr('oneclick');if(isLogin)fn=FB.XFBML.Login;}element=dom._element=new fn(dom);if(isLogin){var extraParams={show_faces:showFaces,add_to_profile:addToProfile};if(addToProfile)extraParams.width=300;var perms=dom.getAttribute('perms');if(perms)extraParams.perms=perms;element.setExtraParams(extraParams);}element.subscribe('render',cb);element.process();};if(FB.CLASSES[tagInfo.className.substr(3)]){processor();}else FB.log('Tag '+tagInfo.className+' was not found.');}},_getDomElements:function(a,e,d){var c=e+':'+d;if(FB.UA.firefox()){return a.getElementsByTagNameNS(document.body.namespaceURI,c);}else if(FB.UA.ie()<9){try{var docNamespaces=document.namespaces;if(docNamespaces&&docNamespaces[e]){var nodes=a.getElementsByTagName(d);if(!document.addEventListener||nodes.length>0)return nodes;}}catch(b){}return a.getElementsByTagName(c);}else return a.getElementsByTagName(c);},_tagInfos:[{localName:'activity',className:'FB.XFBML.Activity'},{localName:'add-profile-tab',className:'FB.XFBML.AddProfileTab'},{localName:'add-to-profile',className:'FB.XFBML.LoginButton'},{localName:'bookmark',className:'FB.XFBML.Bookmark'},{localName:'comments',className:'FB.XFBML.Comments'},{localName:'comments-count',className:'FB.XFBML.CommentsCount'},{localName:'connect-bar',className:'FB.XFBML.ConnectBar'},{localName:'fan',className:'FB.XFBML.Fan'},{localName:'like',className:'FB.XFBML.Like',supportsWidgetPipe:true},{localName:'like-box',className:'FB.XFBML.LikeBox'},{localName:'live-stream',className:'FB.XFBML.LiveStream'},{localName:'login',className:'FB.XFBML.Login'},{localName:'login-button',className:'FB.XFBML.LoginButton'},{localName:'facepile',className:'FB.XFBML.Facepile'},{localName:'friendpile',className:'FB.XFBML.Friendpile'},{localName:'name',className:'FB.XFBML.Name'},{localName:'profile-pic',className:'FB.XFBML.ProfilePic'},{localName:'read',className:'FB.XFBML.Read'},{localName:'recommendations',className:'FB.XFBML.Recommendations'},{localName:'registration',className:'FB.XFBML.Registration'},{localName:'send',className:'FB.XFBML.Send'},{localName:'serverfbml',className:'FB.XFBML.ServerFbml'},{localName:'share-button',className:'FB.XFBML.ShareButton'},{localName:'social-bar',className:'FB.XFBML.SocialBar'}],_widgetPipeEnabledTagCount:0,_widgetPipeIsEnabled:function(){return FB.widgetPipeEnabledApps&&FB.widgetPipeEnabledApps[FB._apiKey]!==undefined;}});(function(){try{if(document.namespaces&&!document.namespaces.item.fb)document.namespaces.add('fb');}catch(a){}}());
FB.provide('XFBML',{set:function(b,c,a){FB.log('FB.XFBML.set() has been deprecated.');b.innerHTML=c;FB.XFBML.parse(b,a);}});
FB.subclass('Waitable','Obj',function(){},{set:function(a){this.setProperty('value',a);},error:function(a){this.fire("error",a);},wait:function(a,b){if(b)this.subscribe('error',b);this.monitor('value',this.bind(function(){if(this.value!==undefined){a(this.value);return true;}}));}});
FB.subclass('Data.Query','Waitable',function(){if(!FB.Data.Query._c)FB.Data.Query._c=1;this.name='v_'+FB.Data.Query._c++;},{parse:function(a){var b=FB.String.format.apply(null,a),d=(/^select (.*?) from (\w+)\s+where (.*)$/i).exec(b);this.fields=this._toFields(d[1]);this.table=d[2];this.where=this._parseWhere(d[3]);for(var c=1;c<a.length;c++)if(FB.Type.isType(a[c],FB.Data.Query))a[c].hasDependency=true;return this;},toFql:function(){var a='select '+this.fields.join(',')+' from '+this.table+' where ';switch(this.where.type){case 'unknown':a+=this.where.value;break;case 'index':a+=this.where.key+'='+this._encode(this.where.value);break;case 'in':if(this.where.value.length==1){a+=this.where.key+'='+this._encode(this.where.value[0]);}else a+=this.where.key+' in ('+FB.Array.map(this.where.value,this._encode).join(',')+')';break;}return a;},_encode:function(a){return typeof(a)=='string'?FB.String.quote(a):a;},toString:function(){return '#'+this.name;},_toFields:function(a){return FB.Array.map(a.split(','),FB.String.trim);},_parseWhere:function(s){var re=(/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(s),result,value,type='unknown';if(re){value=re[2];if(/^(["'])(?:\\?.)*?\1$/.test(value)){value=eval(value);type='index';}else if(/^\d+\.?\d*$/.test(value))type='index';}if(type=='index'){result={type:'index',key:re[1],value:value};}else result={type:'unknown',value:s};return result;}});
FB.provide('Data',{query:function(c,a){var b=new FB.Data.Query().parse(arguments);FB.Data.queue.push(b);FB.Data._waitToProcess();return b;},waitOn:function(dependencies,callback){var result=new FB.Waitable(),count=dependencies.length;if(typeof(callback)=='string'){var s=callback;callback=function(args){return eval(s);};}FB.Array.forEach(dependencies,function(item){item.monitor('value',function(){var done=false;if(FB.Data._getValue(item)!==undefined){count--;done=true;}if(count===0){var value=callback(FB.Array.map(dependencies,FB.Data._getValue));result.set(value!==undefined?value:true);}return done;});});return result;},_getValue:function(a){return FB.Type.isType(a,FB.Waitable)?a.value:a;},_selectByIndex:function(a,d,b,e){var c=new FB.Data.Query();c.fields=a;c.table=d;c.where={type:'index',key:b,value:e};FB.Data.queue.push(c);FB.Data._waitToProcess();return c;},_waitToProcess:function(){if(FB.Data.timer<0)FB.Data.timer=setTimeout(FB.Data._process,10);},_process:function(){FB.Data.timer=-1;var c={},e=FB.Data.queue;FB.Data.queue=[];for(var a=0;a<e.length;a++){var b=e[a];if(b.where.type=='index'&&!b.hasDependency){FB.Data._mergeIndexQuery(b,c);}else c[b.name]=b;}var d={method:'fql.multiquery',queries:{}};FB.copy(d.queries,c,true,function(f){return f.toFql();});d.queries=FB.JSON.stringify(d.queries);FB.api(d,function(f){if(f.error_msg){FB.Array.forEach(c,function(g){g.error(Error(f.error_msg));});}else FB.Array.forEach(f,function(g){c[g.name].set(g.fql_result_set);});});},_mergeIndexQuery:function(a,d){var b=a.where.key,f=a.where.value;var e='index_'+a.table+'_'+b;var c=d[e];if(!c){c=d[e]=new FB.Data.Query();c.fields=[b];c.table=a.table;c.where={type:'in',key:b,value:[]};}FB.Array.merge(c.fields,a.fields);FB.Array.merge(c.where.value,[f]);c.wait(function(g){a.set(FB.Array.filter(g,function(h){return h[b]==f;}));});},timer:-1,queue:[]});
window.setTimeout(function(){var a=/(connect.facebook.net|facebook.com\/assets.php).*?#(.*)/;FB.Array.forEach(document.getElementsByTagName('script'),function(d){if(d.src){var b=a.exec(d.src);if(b){var c=FB.QS.decode(b[2]);FB.Array.forEach(c,function(f,e){if(f=='0')c[e]=0;});FB.init(c);}}});if(window.fbAsyncInit&&!window.fbAsyncInit.hasRun){window.fbAsyncInit.hasRun=true;fbAsyncInit();}},0);
FB.provide('UIServer.Methods',{'pay.prompt':{transform:function(a){var b=FB.XD.handler(function(c){a.cb(FB.JSON.parse(c.response));},'parent.frames['+(window.name||'iframe_canvas')+']');a.params.channel=b;FB.Arbiter.inform('Pay.Prompt',a.params);return false;}}});FB.provide('UIServer.Methods',{pay:{size:{width:555,height:120},noHttps:true,connectDisplay:'popup',transform:function(a){if(!FB._inCanvas){a.params.order_info=FB.JSON.stringify(a.params.order_info);return a;}var b=FB.XD.handler(function(c){a.cb(FB.JSON.parse(c.response));},'parent.frames['+(window.name||'iframe_canvas')+']');a.params.channel=b;a.params.uiserver=true;FB.Arbiter.inform('Pay.Prompt',a.params);return false;}}});
FB.Class('XFBML.Element',function(a){this.dom=a;},FB.copy({getAttribute:function(b,a,c){var d=(this.dom.getAttribute(b)||this.dom.getAttribute(b.replace(/-/g,'_'))||this.dom.getAttribute(b.replace(/-/g,'')));return d?(c?c(d):d):a;},_getBoolAttribute:function(b,a){return this.getAttribute(b,a,function(c){c=c.toLowerCase();return c=='true'||c=='1'||c=='yes'||c=='on';});},_getPxAttribute:function(b,a){return this.getAttribute(b,a,function(c){var d=parseInt(c.replace('px',''),10);if(isNaN(d)){return a;}else return d;});},_getAttributeFromList:function(c,b,a){return this.getAttribute(c,b,function(d){d=d.toLowerCase();if(FB.Array.indexOf(a,d)>-1){return d;}else return b;});},isValid:function(){for(var a=this.dom;a;a=a.parentNode)if(a==document.body)return true;},clear:function(){this.dom.innerHTML='';}},FB.EventProvider));
FB.subclass('XFBML.IframeWidget','XFBML.Element',null,{_iframeName:null,_showLoader:true,_refreshOnAuthChange:false,_allowReProcess:false,_fetchPreCachedLoader:false,_visibleAfter:'load',_widgetPipeEnabled:false,getUrlBits:function(){throw new Error('Inheriting class needs to implement getUrlBits().');},setupAndValidate:function(){return true;},oneTimeSetup:function(){},getSize:function(){},getIframeName:function(){if(!this._iframeName&&this._widgetPipeEnabled&&FB.XFBML.shouldUseWidgetPipe()){this._iframeName=this.generateWidgetPipeIframeName();FB.XFBML.IframeWidget.allWidgetPipeIframes[this._iframeName]=this;if(FB.XFBML.IframeWidget.masterWidgetPipeIframe===null)FB.XFBML.IframeWidget.masterWidgetPipeIframe=this;}return this._iframeName;},getIframeTitle:function(){},getChannelUrl:function(){if(!this._channelUrl){var a=this;this._channelUrl=FB.XD.handler(function(b){a.fire('xd.'+b.type,b);},'parent.parent',true);}return this._channelUrl;},getIframeNode:function(){return this.dom.getElementsByTagName('iframe')[0];},arbiterInform:function(event,a){if(!this.getIframeNode()){this.subscribe('iframe.onload',FB.bind(this.arbiterInform,this,event,a));return;}var b='parent.frames["'+this.getIframeNode().name+'"]';FB.Arbiter.inform(event,a,b,window.location.protocol=='https:');},process:function(a){if(this._done){if(!this._allowReProcess&&!a)return;this.clear();}else this._oneTimeSetup();this._done=true;if(!this.setupAndValidate()){this.fire('render');return;}if(this._showLoader)this._addLoader();FB.Dom.addCss(this.dom,'fb_iframe_widget');if(this._visibleAfter!='immediate'){FB.Dom.addCss(this.dom,'fb_hide_iframes');}else this.subscribe('iframe.onload',FB.bind(this.fire,this,'render'));var b=this.getSize()||{};var c=this.getFullyQualifiedURL();FB.Content.insertIframe({url:c,root:this.dom.appendChild(document.createElement('span')),name:this.getIframeName(),title:this.getIframeTitle(),className:FB._localeIsRtl?'fb_rtl':'fb_ltr',height:b.height,width:b.width,onload:FB.bind(this.fire,this,'iframe.onload')});},generateWidgetPipeIframeName:function(){FB.XFBML.IframeWidget.widgetPipeIframeCount++;return 'fb_iframe_'+FB.XFBML.IframeWidget.widgetPipeIframeCount;},getFullyQualifiedURL:function(){if(FB.XFBML.shouldUseWidgetPipe()&&this._widgetPipeEnabled)return this._getWidgetPipeShell();var b=this._getURL();if(!this._fetchPreCachedLoader)b+='?'+FB.QS.encode(this._getQS());if(b.length>2000){b='about:blank';var a=FB.bind(function(){this._postRequest();this.unsubscribe('iframe.onload',a);},this);this.subscribe('iframe.onload',a);}return b;},_getWidgetPipeShell:function(){return FB.getDomain('www')+'common/widget_pipe_shell.php';},_oneTimeSetup:function(){this.subscribe('xd.resize',FB.bind(this._handleResizeMsg,this));if(FB.getLoginStatus){this.subscribe('xd.refreshLoginStatus',FB.bind(FB.getLoginStatus,FB,function(){},true));this.subscribe('xd.logout',FB.bind(FB.logout,FB,function(){}));}if(this._refreshOnAuthChange)this._setupAuthRefresh();if(this._visibleAfter=='load')this.subscribe('iframe.onload',FB.bind(this._makeVisible,this));this.oneTimeSetup();},_makeVisible:function(){this._removeLoader();FB.Dom.removeCss(this.dom,'fb_hide_iframes');this.fire('render');},_setupAuthRefresh:function(){FB.getLoginStatus(FB.bind(function(b){var a=b.status;FB.Event.subscribe('auth.statusChange',FB.bind(function(c){if(!this.isValid())return;if(a=='unknown'||c.status=='unknown')this.process(true);a=c.status;},this));},this));},_handleResizeMsg:function(b){if(!this.isValid())return;var a=this.getIframeNode();a.style.height=b.height+'px';if(b.width)a.style.width=b.width+'px';a.style.border='none';this._makeVisible();},_addLoader:function(){if(!this._loaderDiv){FB.Dom.addCss(this.dom,'fb_iframe_widget_loader');this._loaderDiv=document.createElement('div');this._loaderDiv.className='FB_Loader';this.dom.appendChild(this._loaderDiv);}},_removeLoader:function(){if(this._loaderDiv){FB.Dom.removeCss(this.dom,'fb_iframe_widget_loader');if(this._loaderDiv.parentNode)this._loaderDiv.parentNode.removeChild(this._loaderDiv);this._loaderDiv=null;}},_getQS:function(){return FB.copy({api_key:FB._apiKey,locale:FB._locale,sdk:'joey',session_key:FB._session&&FB._session.session_key,ref:this.getAttribute('ref')},this.getUrlBits().params);},_getURL:function(){var a='www',b='';if(this._fetchPreCachedLoader){a='cdn';b='static/';}return FB.getDomain(a)+'plugins/'+b+this.getUrlBits().name+'.php';},_postRequest:function(){FB.Content.submitToTarget({url:this._getURL(),target:this.getIframeNode().name,params:this._getQS()});}});FB.provide('XFBML.IframeWidget',{widgetPipeIframeCount:0,masterWidgetPipeIframe:null,allWidgetPipeIframes:{},batchWidgetPipeRequests:function(){if(!FB.XFBML.IframeWidget.masterWidgetPipeIframe)return;var a=FB.XFBML.IframeWidget._groupWidgetPipeDescriptions();var c={widget_pipe:FB.JSON.stringify(a),href:window.location,site:location.hostname,channel:FB.XFBML.IframeWidget.masterWidgetPipeIframe.getChannelUrl(),api_key:FB._apiKey,locale:FB._locale,sdk:'joey',session_key:FB._session&&FB._session.session_key};var b=FB.guid();FB.Content.insertIframe({url:'about:blank',root:document.getElementById('fb-root')||document.body,name:b,className:'fb_hidden',onload:function(){FB.Content.submitToTarget({url:FB._domain.www+'widget_pipe.php',target:b,params:c},true);}});},_groupWidgetPipeDescriptions:function(){var e={};for(var b in FB.XFBML.IframeWidget.allWidgetPipeIframes){var a=FB.XFBML.IframeWidget.allWidgetPipeIframes[b];var c=a.getUrlBits();var d={widget:c.name};FB.copy(d,c.params);e[b]=d;}return e;}});
FB.subclass('XFBML.Activity','XFBML.IframeWidget',null,{_visibleAfter:'load',_refreshOnAuthChange:true,setupAndValidate:function(){this._attr={border_color:this.getAttribute('border-color'),colorscheme:this.getAttribute('color-scheme'),filter:this.getAttribute('filter'),action:this.getAttribute('action'),font:this.getAttribute('font'),header:this._getBoolAttribute('header'),height:this._getPxAttribute('height',300),recommendations:this._getBoolAttribute('recommendations'),site:this.getAttribute('site',location.hostname),width:this._getPxAttribute('width',300)};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'activity',params:this._attr};}});
FB.subclass('XFBML.ButtonElement','XFBML.Element',null,{_allowedSizes:['icon','small','medium','large','xlarge'],onClick:function(){throw new Error('Inheriting class needs to implement onClick().');},setupAndValidate:function(){return true;},getButtonMarkup:function(){return this.getOriginalHTML();},getOriginalHTML:function(){return this._originalHTML;},process:function(){if(!('_originalHTML' in this))this._originalHTML=FB.String.trim(this.dom.innerHTML);if(!this.setupAndValidate()){this.fire('render');return;}var d=this._getAttributeFromList('size','medium',this._allowedSizes),a='',b='';if(d=='icon'){a='fb_button_simple';}else{var c=FB._localeIsRtl?'_rtl':'';b=this.getButtonMarkup();a='fb_button'+c+' fb_button_'+d+c;}this.dom.innerHTML=('<a class="'+a+'">'+'<span class="fb_button_text">'+b+'</span>'+'</a>');this.dom.firstChild.onclick=FB.bind(this.onClick,this);this.fire('render');}});
FB.provide('Helper',{isUser:function(a){return a<2.2e+09||(a>=1e+14&&a<=100099999989999);},getLoggedInUser:function(){return FB._session?FB._session.uid:null;},upperCaseFirstChar:function(a){if(a.length>0){return a.substr(0,1).toUpperCase()+a.substr(1);}else return a;},getProfileLink:function(c,b,a){a=a||(c?FB.getDomain('www')+'profile.php?id='+c.uid:null);if(a)b='<a class="fb_link" href="'+a+'">'+b+'</a>';return b;},invokeHandler:function(handler,scope,args){if(handler)if(typeof handler==='string'){eval(handler);}else if(handler.apply)handler.apply(scope,args||[]);},fireEvent:function(a,b){var c=b._attr.href;b.fire(a,c);FB.Event.fire(a,c,b);},executeFunctionByName:function(d){var a=Array.prototype.slice.call(arguments,1);var f=d.split(".");var c=f.pop();var b=window;for(var e=0;e<f.length;e++)b=b[f[e]];return b[c].apply(this,a);}});
FB.subclass('XFBML.AddProfileTab','XFBML.ButtonElement',null,{getButtonMarkup:function(){return FB.Intl._tx("Add Profile Tab on Facebook");},onClick:function(){FB.ui({method:'profile.addtab'},this.bind(function(a){if(a.tab_added)FB.Helper.invokeHandler(this.getAttribute('on-add'),this);}));}});
FB.subclass('XFBML.Bookmark','XFBML.ButtonElement',null,{getButtonMarkup:function(){return FB.Intl._tx("Bookmark on Facebook");},onClick:function(){FB.ui({method:'bookmark.add'},this.bind(function(a){if(a.bookmarked)FB.Helper.invokeHandler(this.getAttribute('on-add'),this);}));}});
FB.subclass('XFBML.Comments','XFBML.IframeWidget',null,{_visibleAfter:'immediate',_refreshOnAuthChange:true,setupAndValidate:function(){var a={channel_url:this.getChannelUrl(),colorscheme:this.getAttribute('colorscheme'),numposts:this.getAttribute('num-posts',10),width:this._getPxAttribute('width',550),href:this.getAttribute('href'),permalink:this.getAttribute('permalink'),publish_feed:this.getAttribute('publish_feed')};if(!a.href){a.migrated=this.getAttribute('migrated');a.xid=this.getAttribute('xid');a.title=this.getAttribute('title',document.title);a.url=this.getAttribute('url',document.URL);a.quiet=this.getAttribute('quiet');a.reverse=this.getAttribute('reverse');a.simple=this.getAttribute('simple');a.css=this.getAttribute('css');a.notify=this.getAttribute('notify');if(!a.xid){var c=document.URL.indexOf('#');if(c>0){a.xid=encodeURIComponent(document.URL.substring(0,c));}else a.xid=encodeURIComponent(document.URL);}if(a.migrated)a.href='http://www.facebook.com/plugins/comments_v1.php?'+'app_id='+FB._apiKey+'&xid='+encodeURIComponent(a.xid)+'&url='+encodeURIComponent(a.url);}else{var b=this.getAttribute('fb_comment_id');if(!b){b=FB.QS.decode(document.URL.substring(document.URL.indexOf('?')+1)).fb_comment_id;if(b&&b.indexOf('#')>0)b=b.substring(0,b.indexOf('#'));}if(b){a.fb_comment_id=b;this.subscribe('render',FB.bind(function(){window.location.hash=this.getIframeNode().id;},this));}}this._attr=a;return true;},oneTimeSetup:function(){this.subscribe('xd.addComment',FB.bind(this._handleCommentMsg,this));this.subscribe('xd.commentCreated',FB.bind(this._handleCommentCreatedMsg,this));this.subscribe('xd.commentRemoved',FB.bind(this._handleCommentRemovedMsg,this));},getSize:function(){return {width:this._attr.width,height:200};},getUrlBits:function(){return {name:'comments',params:this._attr};},_handleCommentMsg:function(a){if(!this.isValid())return;FB.Event.fire('comments.add',{post:a.post,user:a.user,widget:this});},_handleCommentCreatedMsg:function(b){if(!this.isValid())return;var a={href:b.href,commentID:b.commentID,parentCommentID:b.parentCommentID};FB.Event.fire('comment.create',a);},_handleCommentRemovedMsg:function(b){if(!this.isValid())return;var a={href:b.href,commentID:b.commentID};FB.Event.fire('comment.remove',a);}});
FB.subclass('XFBML.CommentsCount','XFBML.Element',null,{process:function(){this._href=this.getAttribute('href',window.location.href);this._count=FB.Data._selectByIndex(['commentsbox_count'],'link_stat','url',this._href);FB.Dom.addCss(this.dom,'fb_comments_count_zero');this._count.wait(FB.bind(function(){var a=this._count.value[0].commentsbox_count;this.dom.innerHTML=FB.String.format('<span class="fb_comments_count">{0}</span>',a);if(a>0)FB.Dom.removeCss(this.dom,'fb_comments_count_zero');this.fire('render');},this));}});
FB.provide('Anim',{ate:function(c,g,d,b){d=!isNaN(parseFloat(d))&&d>=0?d:750;var e=40,f={},j={},a=null,h=c.style,i=setInterval(FB.bind(function(){if(!a)a=new Date().getTime();var k=1;if(d!=0)k=Math.min((new Date().getTime()-a)/d,1);FB.Array.forEach(g,FB.bind(function(o,m){if(!f[m]){var n=FB.Dom.getStyle(c,m);if(n===false)return;f[m]=this._parseCSS(n+'');}if(!j[m])j[m]=this._parseCSS(o.toString());var l='';FB.Array.forEach(f[m],function(q,p){if(isNaN(j[m][p].numPart)&&j[m][p].textPart=='?'){l=q.numPart+q.textPart;}else if(isNaN(q.numPart)){l=q.textPart;}else l+=(q.numPart+Math.ceil((j[m][p].numPart-q.numPart)*Math.sin(Math.PI/2*k)))+j[m][p].textPart+' ';});FB.Dom.setStyle(c,m,l);},this));if(k==1){clearInterval(i);if(b)b(c);}},this),e);},_parseCSS:function(a){var b=[];FB.Array.forEach(a.split(' '),function(d){var c=parseInt(d,10);b.push({numPart:c,textPart:d.replace(c,'')});});return b;}});
FB.provide('Insights',{impression:function(e,a){var b=FB.guid(),g="//ah8.facebook.com/impression.php/"+b+"/",c=new Image(1,1),f=[];if(!e.api_key&&FB._apiKey)e.api_key=FB._apiKey;for(var d in e)f.push(encodeURIComponent(d)+'='+encodeURIComponent(e[d]));g+='?'+f.join('&');if(a)c.onload=a;c.src=g;}});
FB.subclass('XFBML.ConnectBar','XFBML.Element',null,{_initialHeight:null,_initTopMargin:0,_picFieldName:'pic_square',_page:null,_displayed:false,_notDisplayed:false,_container:null,_animationSpeed:0,process:function(){FB.getLoginStatus(this.bind(function(a){FB.Event.monitor('auth.statusChange',this.bind(function(){if(this.isValid()&&FB._userStatus=='connected'){this._uid=FB.Helper.getLoggedInUser();FB.api({method:'Connect.shouldShowConnectBar'},this.bind(function(b){if(b!=2){this._animationSpeed=(b==0)?750:0;this._showBar();}else this._noRender();}));}else this._noRender();return false;}));}));},_showBar:function(){var a=FB.Data._selectByIndex(['first_name','profile_url',this._picFieldName],'user','uid',this._uid);var b=FB.Data._selectByIndex(['display_name'],'application','api_key',FB._apiKey);FB.Data.waitOn([a,b],FB.bind(function(c){c[0][0].site_name=c[1][0].display_name;if(!this._displayed){this._displayed=true;this._notDisplayed=false;this._renderConnectBar(c[0][0]);this.fire('render');FB.Insights.impression({lid:104,name:'widget_load'});this.fire('connectbar.ondisplay');FB.Event.fire('connectbar.ondisplay',this);FB.Helper.invokeHandler(this.getAttribute('on-display'),this);}},this));},_noRender:function(){if(this._displayed){this._displayed=false;this._closeConnectBar();}if(!this._notDisplayed){this._notDisplayed=true;this.fire('render');this.fire('connectbar.onnotdisplay');FB.Event.fire('connectbar.onnotdisplay',this);FB.Helper.invokeHandler(this.getAttribute('on-not-display'),this);}},_renderConnectBar:function(d){var b=document.createElement('div'),c=document.createElement('div');b.className='fb_connect_bar';c.className='fb_reset fb_connect_bar_container';c.appendChild(b);document.body.appendChild(c);this._container=c;this._initialHeight=Math.round(parseFloat(FB.Dom.getStyle(c,'height'))+parseFloat(FB.Dom.getStyle(c,'borderBottomWidth')));b.innerHTML=FB.String.format('<div class="fb_buttons">'+'<a href="#" class="fb_bar_close">'+'<img src="{1}" alt="{2}" title="{2}"/>'+'</a>'+'</div>'+'<a href="{7}" class="fb_profile" target="_blank">'+'<img src="{3}" alt="{4}" title="{4}"/>'+'</a>'+'{5}'+' <span>'+'<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; '+'<a href="#" class="fb_no_thanks">{0}</a>'+'</span>',FB.Intl._tx("No Thanks"),FB.getDomain('cdn')+FB.XFBML.ConnectBar.imgs.buttonUrl,FB.Intl._tx("Close"),d[this._picFieldName]||FB.getDomain('cdn')+FB.XFBML.ConnectBar.imgs.missingProfileUrl,FB.String.escapeHTML(d.first_name),FB.Intl._tx("Hi {firstName}. \u003cstrong>{siteName}\u003c\/strong> is using Facebook to personalize your experience.",{firstName:FB.String.escapeHTML(d.first_name),siteName:FB.String.escapeHTML(d.site_name)}),FB.Intl._tx("Learn More"),d.profile_url,FB.getDomain('www')+'sitetour/connect.php');var a=this;FB.Array.forEach(b.getElementsByTagName('a'),function(g){g.onclick=FB.bind(a._clickHandler,a);});this._page=document.body;var f=0;if(this._page.parentNode){f=Math.round((parseFloat(FB.Dom.getStyle(this._page.parentNode,'height'))-parseFloat(FB.Dom.getStyle(this._page,'height')))/2);}else f=parseInt(FB.Dom.getStyle(this._page,'marginTop'),10);f=isNaN(f)?0:f;this._initTopMargin=f;if(!window.XMLHttpRequest){c.className+=" fb_connect_bar_container_ie6";}else{c.style.top=(-1*this._initialHeight)+'px';FB.Anim.ate(c,{top:'0px'},this._animationSpeed);}var e={marginTop:this._initTopMargin+this._initialHeight+'px'};if(FB.UA.ie()){e.backgroundPositionY=this._initialHeight+'px';}else e.backgroundPosition='? '+this._initialHeight+'px';FB.Anim.ate(this._page,e,this._animationSpeed);},_clickHandler:function(a){a=a||window.event;var b=a.target||a.srcElement;while(b.nodeName!='A')b=b.parentNode;switch(b.className){case 'fb_bar_close':FB.api({method:'Connect.connectBarMarkAcknowledged'});FB.Insights.impression({lid:104,name:'widget_user_closed'});this._closeConnectBar();break;case 'fb_learn_more':case 'fb_profile':window.open(b.href);break;case 'fb_no_thanks':this._closeConnectBar();FB.api({method:'Connect.connectBarMarkAcknowledged'});FB.Insights.impression({lid:104,name:'widget_user_no_thanks'});FB.api({method:'auth.revokeAuthorization',block:true},this.bind(function(){this.fire('connectbar.ondeauth');FB.Event.fire('connectbar.ondeauth',this);FB.Helper.invokeHandler(this.getAttribute('on-deauth'),this);if(this._getBoolAttribute('auto-refresh',true))window.location.reload();}));break;}return false;},_closeConnectBar:function(){this._notDisplayed=true;var a={marginTop:this._initTopMargin+'px'};if(FB.UA.ie()){a.backgroundPositionY='0px';}else a.backgroundPosition='? 0px';var b=(this._animationSpeed==0)?0:300;FB.Anim.ate(this._page,a,b);FB.Anim.ate(this._container,{top:(-1*this._initialHeight)+'px'},b,function(c){c.parentNode.removeChild(c);});this.fire('connectbar.onclose');FB.Event.fire('connectbar.onclose',this);FB.Helper.invokeHandler(this.getAttribute('on-close'),this);}});FB.provide('XFBML.ConnectBar',{imgs:{buttonUrl:'images/facebook-widgets/close_btn.png',missingProfileUrl:'pics/q_silhouette.gif'}});
FB.subclass('XFBML.Facepile','XFBML.IframeWidget',null,{_visibleAfter:'load',_extraParams:{},setupAndValidate:function(){this._attr={href:this.getAttribute('href'),channel:this.getChannelUrl(),colorscheme:this.getAttribute('colorscheme','light'),max_rows:this.getAttribute('max-rows'),action:this.getAttribute('action','like'),tense:this.getAttribute('tense','past'),width:this._getPxAttribute('width',200),ref:this.getAttribute('ref'),size:this.getAttribute('size','small'),login_text:this.dom.innerHTML};this.clear();for(var a in this._extraParams)this._attr[a]=this._extraParams[a];return true;},setExtraParams:function(a){this._extraParams=a;},oneTimeSetup:function(){var a=FB._userStatus;FB.Event.subscribe('auth.statusChange',FB.bind(function(b){if(a=='connected'||b.status=='connected')this.process(true);a=b.status;},this));},getSize:function(){if(this._attr.size=='large')return {width:this._attr.width,height:90};return {width:this._attr.width,height:70};},getUrlBits:function(){return {name:'facepile',params:this._attr};}});
FB.subclass('XFBML.Fan','XFBML.IframeWidget',null,{_visibleAfter:'load',setupAndValidate:function(){this._attr={api_key:FB._apiKey,connections:this.getAttribute('connections','10'),css:this.getAttribute('css'),height:this._getPxAttribute('height'),id:this.getAttribute('profile-id'),logobar:this._getBoolAttribute('logo-bar'),name:this.getAttribute('name'),stream:this._getBoolAttribute('stream',true),width:this._getPxAttribute('width',300)};if(!this._attr.id&&!this._attr.name){FB.log('<fb:fan> requires one of the "id" or "name" attributes.');return false;}var a=this._attr.height;if(!a)if((!this._attr.connections||this._attr.connections==='0')&&!this._attr.stream){a=65;}else if(!this._attr.connections||this._attr.connections==='0'){a=375;}else if(!this._attr.stream){a=250;}else a=550;if(this._attr.logobar)a+=25;this._attr.height=a;return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'fan',params:this._attr};}});
FB.subclass('XFBML.Friendpile','XFBML.Facepile',null,{});
FB.subclass('XFBML.EdgeCommentWidget','XFBML.IframeWidget',function(a){this._iframeWidth=a.width+1;this._iframeHeight=a.height;this._attr={master_frame_name:a.masterFrameName};this.dom=a.commentNode;this.dom.style.top=a.relativeHeightOffset;if(a.relativeWidthOffset)if(FB._localeIsRtl){this.dom.style.right=a.relativeWidthOffset;}else this.dom.style.left=a.relativeWidthOffset;this.dom.style.zIndex=FB.XFBML.EdgeCommentWidget.NextZIndex++;FB.Dom.addCss(this.dom,'fb_edge_comment_widget');},{_visibleAfter:'load',_showLoader:false,getSize:function(){return {width:this._iframeWidth,height:this._iframeHeight};},getUrlBits:function(){return {name:'comment_widget_shell',params:this._attr};}});FB.provide('XFBML.EdgeCommentWidget',{NextZIndex:10000});
FB.subclass('XFBML.EdgeWidget','XFBML.IframeWidget',null,{_visibleAfter:'immediate',_showLoader:false,setupAndValidate:function(){FB.Dom.addCss(this.dom,'fb_edge_widget_with_comment');this._attr={channel_url:this.getChannelUrl(),debug:this._getBoolAttribute('debug'),href:this.getAttribute('href',window.location.href),is_permalink:this._getBoolAttribute('is-permalink'),node_type:this.getAttribute('node-type','link'),width:this._getWidgetWidth(),font:this.getAttribute('font'),layout:this._getLayout(),colorscheme:this.getAttribute('color-scheme'),action:this.getAttribute('action'),ref:this.getAttribute('ref'),show_faces:this._shouldShowFaces(),no_resize:this._getBoolAttribute('no_resize'),send:this.getAttribute('send'),url_map:this.getAttribute('url_map')};return true;},oneTimeSetup:function(){this.subscribe('xd.authPrompted',FB.bind(this._onAuthPrompt,this));this.subscribe('xd.edgeCreated',FB.bind(this._onEdgeCreate,this));this.subscribe('xd.edgeRemoved',FB.bind(this._onEdgeRemove,this));this.subscribe('xd.presentEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogPresentation,this));this.subscribe('xd.dismissEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogDismissal,this));this.subscribe('xd.hideEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogHide,this));this.subscribe('xd.showEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogShow,this));},getSize:function(){return {width:this._getWidgetWidth(),height:this._getWidgetHeight()};},_getWidgetHeight:function(){var b=this._getLayout();var e=this._shouldShowFaces()?'show':'hide';var d=this.getAttribute('send');var a=65+(d&&d!=='false'?25:0);var c={standard:{show:80,hide:35},box_count:{show:a,hide:a},button_count:{show:21,hide:21},simple:{show:20,hide:20}};return c[b][e];},_getWidgetWidth:function(){var e=this._getLayout();var g=this.getAttribute('send');var h=this._shouldShowFaces()?'show':'hide';var c=(this.getAttribute('action')==='recommend'?130:90)+(g&&g!=='false'?60:0);var b=this.getAttribute('action')==='recommend'?100:55;var i=this.getAttribute('action')==='recommend'?90:50;var f={standard:{show:450,hide:450},box_count:{show:b,hide:b},button_count:{show:c,hide:c},simple:{show:i,hide:i}};var d=f[e][h];var j=this._getPxAttribute('width',d);var a={standard:{min:225,max:900},box_count:{min:b,max:900},button_count:{min:c,max:900},simple:{min:49,max:900}};if(j<a[e].min){j=a[e].min;}else if(j>a[e].max)j=a[e].max;return j;},_getLayout:function(){return this._getAttributeFromList('layout','standard',['standard','button_count','box_count','simple']);},_shouldShowFaces:function(){return this._getLayout()==='standard'&&this._getBoolAttribute('show-faces',true);},_handleEdgeCommentDialogPresentation:function(b){if(!this.isValid())return;var a=document.createElement('span');this._commentSlave=this._createEdgeCommentWidget(b,a);this.dom.appendChild(a);this._commentSlave.process();this._commentWidgetNode=a;},_createEdgeCommentWidget:function(b,a){var c={commentNode:a,externalUrl:b.externalURL,width:400,height:225,masterFrameName:b.masterFrameName,layout:this._getLayout(),relativeHeightOffset:this._getHeightOffset(b),relativeWidthOffset:this._getWidthOffset(b)};return new FB.XFBML.EdgeCommentWidget(c);},_getHeightOffset:function(c){if(c&&c.preComputedHeightOffset)return parseInt(c.preComputedHeightOffset,10)+'px';var a=this._getLayout();var b={standard:'22px',button_count:'19px',box_count:'-5px',simple:'18px'};return b[a];},_getCommonEdgeCommentWidgetOpts:function(c,a,d,b){return {colorscheme:this._attr.colorscheme,commentNode:a,controllerID:c.controllerID,nodeImageURL:c.nodeImageURL,nodeRef:this._attr.ref,nodeTitle:c.nodeTitle,nodeURL:c.nodeURL,nodeSummary:c.nodeSummary,width:400,height:300,relativeHeightOffset:(b?this._getHeightOffset(c):this._getHeightOffset()),relativeWidthOffset:(d?this._getWidthOffset(c):this._getWidthOffset()),error:c.error,siderender:c.siderender};},_getWidthOffset:function(c){if(c&&c.preComputedWidthOffset)return parseInt(c.preComputedWidthOffset,10)+'px';var a=this._getLayout();var b={standard:'0px',box_count:'0px',button_count:'0px',simple:'0px'};return b[a];},_handleEdgeCommentDialogDismissal:function(a){if(this._commentWidgetNode){this.dom.removeChild(this._commentWidgetNode);delete this._commentWidgetNode;}},_handleEdgeCommentDialogHide:function(){if(this._commentWidgetNode)this._commentWidgetNode.style.display="none";},_handleEdgeCommentDialogShow:function(){if(this._commentWidgetNode)this._commentWidgetNode.style.display="block";},_fireEventAndInvokeHandler:function(b,a){FB.Helper.fireEvent(b,this);FB.Helper.invokeHandler(this.getAttribute(a),this,[this._attr.href]);},_onEdgeCreate:function(){this._fireEventAndInvokeHandler('edge.create','on-create');},_onEdgeRemove:function(){this._fireEventAndInvokeHandler('edge.remove','on-remove');},_onAuthPrompt:function(){this._fireEventAndInvokeHandler('auth.prompt','on-prompt');}});
FB.subclass('XFBML.SendButtonFormWidget','XFBML.EdgeCommentWidget',function(a){this._base(a);FB.Dom.addCss(this.dom,'fb_send_button_form_widget');FB.Dom.addCss(this.dom,a.colorscheme);FB.Dom.addCss(this.dom,(typeof a.siderender!='undefined'&&a.siderender)?'siderender':'');this._attr.nodeImageURL=a.nodeImageURL;this._attr.nodeRef=a.nodeRef;this._attr.nodeTitle=a.nodeTitle;this._attr.nodeURL=a.nodeURL;this._attr.nodeSummary=a.nodeSummary;this._attr.channel=this.getChannelUrl();this._attr.controllerID=a.controllerID;this._attr.colorscheme=a.colorscheme;this._attr.error=a.error;this._attr.siderender=a.siderender;},{_showLoader:true,getUrlBits:function(){return {name:'send_button_form_shell',params:this._attr};},oneTimeSetup:function(){this.subscribe('xd.messageSent',FB.bind(this._onMessageSent,this));},_onMessageSent:function(){FB.Event.fire('message.send',this._attr.nodeURL,this);}});
FB.subclass('XFBML.Send','XFBML.EdgeWidget',null,{setupAndValidate:function(){FB.Dom.addCss(this.dom,'fb_edge_widget_with_comment');this._attr={channel:this.getChannelUrl(),api_key:FB._apiKey,font:this.getAttribute('font'),colorscheme:this.getAttribute('colorscheme','light'),href:this.getAttribute('href',window.location.href),ref:this.getAttribute('ref')};return true;},getUrlBits:function(){return {name:'send',params:this._attr};},_createEdgeCommentWidget:function(b,a){var c=this._getCommonEdgeCommentWidgetOpts(b,a);return new FB.XFBML.SendButtonFormWidget(c);},_getHeightOffset:function(){return '21px';},_getWidthOffset:function(){return '0px';},getSize:function(){return {width:FB.XFBML.Send.Dimensions.width,height:FB.XFBML.Send.Dimensions.height};}});FB.provide('XFBML.Send',{Dimensions:{width:56,height:25}});
FB.subclass('XFBML.Like','XFBML.EdgeWidget',null,{_widgetPipeEnabled:true,getUrlBits:function(){return {name:'like',params:this._attr};},_createEdgeCommentWidget:function(b,a){if('send' in this._attr&&'widget_type' in b&&b.widget_type=='send'){var c=this._getCommonEdgeCommentWidgetOpts(b,a,true,true);return new FB.XFBML.SendButtonFormWidget(c);}else return this._callBase("_createEdgeCommentWidget",b,a);},getIframeTitle:function(){return 'Like this content on Facebook.';}});
FB.subclass('XFBML.LikeBox','XFBML.IframeWidget',null,{_visibleAfter:'load',setupAndValidate:function(){this._attr={channel:this.getChannelUrl(),api_key:FB._apiKey,connections:this.getAttribute('connections'),css:this.getAttribute('css'),height:this.getAttribute('height'),id:this.getAttribute('profile-id'),header:this._getBoolAttribute('header',true),name:this.getAttribute('name'),show_faces:this._getBoolAttribute('show-faces',true),stream:this._getBoolAttribute('stream',true),width:this._getPxAttribute('width',300),href:this.getAttribute('href'),colorscheme:this.getAttribute('colorscheme','light'),border_color:this.getAttribute('border_color')};if(this._getBoolAttribute('force_wall',false))this._attr.force_wall=true;if(this._attr.connections==='0'){this._attr.show_faces=false;}else if(this._attr.connections)this._attr.show_faces=true;if(!this._attr.id&&!this._attr.name&&!this._attr.href){FB.log('<fb:like-box> requires one of the "id" or "name" attributes.');return false;}var a=this._attr.height;if(!a)if(!this._attr.show_faces&&!this._attr.stream){a=62;}else{a=95;if(this._attr.show_faces)a+=163;if(this._attr.stream)a+=300;if(this._attr.header&&this._attr.header!=='0')a+=32;}this._attr.height=a;this.subscribe('xd.likeboxLiked',FB.bind(this._onLiked,this));this.subscribe('xd.likeboxUnliked',FB.bind(this._onUnliked,this));return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'likebox',params:this._attr};},_onLiked:function(){FB.Helper.fireEvent('edge.create',this);},_onUnliked:function(){FB.Helper.fireEvent('edge.remove',this);}});
FB.subclass('XFBML.LiveStream','XFBML.IframeWidget',null,{_visibleAfter:'load',setupAndValidate:function(){this._attr={height:this._getPxAttribute('height',500),hideFriendsTab:this.getAttribute('hide-friends-tab'),redesigned:this._getBoolAttribute('redesigned-stream'),width:this._getPxAttribute('width',400),xid:this.getAttribute('xid','default'),always_post_to_friends:this._getBoolAttribute('always-post-to-friends',false),via_url:this.getAttribute('via_url')};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){var a=this._attr.redesigned?'live_stream_box':'livefeed';return {name:a,params:this._attr};}});
FB.subclass('XFBML.Login','XFBML.Facepile',null,{_visibleAfter:'load',getSize:function(){return {width:this._attr.width,height:94};},getUrlBits:function(){return {name:'login',params:this._attr};}});
FB.subclass('XFBML.LoginButton','XFBML.ButtonElement',null,{setupAndValidate:function(){if(this._alreadySetup)return true;this._alreadySetup=true;this._attr={autologoutlink:this._getBoolAttribute('auto-logout-link'),length:this._getAttributeFromList('length','short',['long','short']),onlogin:this.getAttribute('on-login'),perms:this.getAttribute('perms'),registration_url:this.getAttribute('registration-url'),status:'unknown'};if(this._attr.autologoutlink)FB.Event.subscribe('auth.statusChange',FB.bind(this.process,this));if(this._attr.registration_url){FB.Event.subscribe('auth.statusChange',this._saveStatus(this.process,false));FB.getLoginStatus(this._saveStatus(this.process,false));}return true;},getButtonMarkup:function(){var a=this.getOriginalHTML();if(a)return a;if(!this._attr.registration_url){if(FB.getSession()&&this._attr.autologoutlink){return FB.Intl._tx("Facebook Logout");}else return this._getLoginText();}else switch(this._attr.status){case 'unknown':return this._getLoginText();case 'notConnected':return FB.Intl._tx("Register");case 'connected':if(FB.getSession()&&this._attr.autologoutlink)return FB.Intl._tx("Facebook Logout");return this._getLoginText();default:FB.log('Unknown status: '+this.status);return FB.Intl._tx("Log In");}},_getLoginText:function(){return this._attr.length=='short'?FB.Intl._tx("Log In"):FB.Intl._tx("Log In with Facebook");},onClick:function(){if(!this._attr.registration_url){if(!FB.getSession()||!this._attr.autologoutlink){FB.login(FB.bind(this._authCallback,this),{perms:this._attr.perms});}else FB.logout(FB.bind(this._authCallback,this));}else switch(this._attr.status){case 'unknown':FB.ui({method:'auth.logintoFacebook'},FB.bind(function(a){FB.bind(FB.getLoginStatus(this._saveStatus(this._authCallback,true),true),this);},this));break;case 'notConnected':window.top.location=this._attr.registration_url;break;case 'connected':if(!FB.getSession()||!this._attr.autologoutlink){this._authCallback();}else FB.logout(FB.bind(this._authCallback,this));break;default:FB.log('Unknown status: '+this.status);}},_authCallback:function(a){FB.Helper.invokeHandler(this._attr.onlogin,this,[a]);},_saveStatus:function(a,b){return FB.bind(function(c){if(b&&this._attr.registration_url&&this._attr.status=='notConnected'&&c.status=='notConnected')window.top.location=this._attr.registration_url;this._attr.status=c.status;if(a){a=this.bind(a,this);return a(c);}},this);}});
FB.subclass('XFBML.Name','XFBML.Element',null,{process:function(){FB.copy(this,{_uid:this.getAttribute('uid'),_firstnameonly:this._getBoolAttribute('first-name-only'),_lastnameonly:this._getBoolAttribute('last-name-only'),_possessive:this._getBoolAttribute('possessive'),_reflexive:this._getBoolAttribute('reflexive'),_objective:this._getBoolAttribute('objective'),_linked:this._getBoolAttribute('linked',true),_subjectId:this.getAttribute('subject-id')});if(!this._uid){FB.log('"uid" is a required attribute for <fb:name>');this.fire('render');return;}var b=[];if(this._firstnameonly){b.push('first_name');}else if(this._lastnameonly){b.push('last_name');}else b.push('name');if(this._subjectId){b.push('sex');if(this._subjectId==FB.Helper.getLoggedInUser())this._reflexive=true;}var a;FB.Event.monitor('auth.statusChange',this.bind(function(){if(!this.isValid()){this.fire('render');return true;}if(!this._uid||this._uid=='loggedinuser')this._uid=FB.Helper.getLoggedInUser();if(!this._uid)return;if(FB.Helper.isUser(this._uid)){a=FB.Data._selectByIndex(b,'user','uid',this._uid);}else a=FB.Data._selectByIndex(['name','id'],'profile','id',this._uid);a.wait(this.bind(function(c){if(this._subjectId==this._uid){this._renderPronoun(c[0]);}else this._renderOther(c[0]);this.fire('render');}));}));},_renderPronoun:function(b){var c='',a=this._objective;if(this._subjectId){a=true;if(this._subjectId===this._uid)this._reflexive=true;}if(this._uid==FB.Connect.get_loggedInUser()&&this._getBoolAttribute('use-you',true)){if(this._possessive){if(this._reflexive){c='your own';}else c='your';}else if(this._reflexive){c='yourself';}else c='you';}else switch(b.sex){case 'male':if(this._possessive){c=this._reflexive?'his own':'his';}else if(this._reflexive){c='himself';}else if(a){c='him';}else c='he';break;case 'female':if(this._possessive){c=this._reflexive?'her own':'her';}else if(this._reflexive){c='herself';}else if(a){c='her';}else c='she';break;default:if(this._getBoolAttribute('use-they',true)){if(this._possessive){if(this._reflexive){c='their own';}else c='their';}else if(this._reflexive){c='themselves';}else if(a){c='them';}else c='they';}else if(this._possessive){if(this._reflexive){c='his/her own';}else c='his/her';}else if(this._reflexive){c='himself/herself';}else if(a){c='him/her';}else c='he/she';break;}if(this._getBoolAttribute('capitalize',false))c=FB.Helper.upperCaseFirstChar(c);this.dom.innerHTML=c;},_renderOther:function(c){var b='',a='';if(this._uid==FB.Helper.getLoggedInUser()&&this._getBoolAttribute('use-you',true)){if(this._reflexive){if(this._possessive){b='your own';}else b='yourself';}else if(this._possessive){b='your';}else b='you';}else if(c){if(null===c.first_name)c.first_name='';if(null===c.last_name)c.last_name='';if(this._firstnameonly&&c.first_name!==undefined){b=FB.String.escapeHTML(c.first_name);}else if(this._lastnameonly&&c.last_name!==undefined)b=FB.String.escapeHTML(c.last_name);if(!b)b=FB.String.escapeHTML(c.name);if(b!==''&&this._possessive)b+='\'s';}if(!b)b=FB.String.escapeHTML(this.getAttribute('if-cant-see','Facebook User'));if(b){if(this._getBoolAttribute('capitalize',false))b=FB.Helper.upperCaseFirstChar(b);if(c&&this._linked){a=FB.Helper.getProfileLink(c,b,this.getAttribute('href',null));}else a=b;}this.dom.innerHTML=a;}});
FB.subclass('XFBML.ProfilePic','XFBML.Element',null,{process:function(){var d=this.getAttribute('size','thumb'),b=FB.XFBML.ProfilePic._sizeToPicFieldMap[d],g=this._getPxAttribute('width'),a=this._getPxAttribute('height'),e=this.dom.style,f=this.getAttribute('uid');if(this._getBoolAttribute('facebook-logo'))b+='_with_logo';if(g){g=g+'px';e.width=g;}if(a){a=a+'px';e.height=a;}var c=this.bind(function(j){var l=j?j[0]:null,i=l?l[b]:null;if(!i)i=FB.getDomain('cdn')+FB.XFBML.ProfilePic._defPicMap[b];var k=((g?'width:'+g+';':'')+(a?'height:'+g+';':'')),h=FB.String.format('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />',i,l?FB.String.escapeHTML(l.name):'',k,this.dom.className);if(this._getBoolAttribute('linked',true))h=FB.Helper.getProfileLink(l,h,this.getAttribute('href',null));this.dom.innerHTML=h;FB.Dom.addCss(this.dom,'fb_profile_pic_rendered');this.fire('render');});FB.Event.monitor('auth.statusChange',this.bind(function(){if(!this.isValid()){this.fire('render');return true;}if(this.getAttribute('uid',null)=='loggedinuser')f=FB.Helper.getLoggedInUser();if(FB._userStatus&&f){FB.Data._selectByIndex(['name',b],FB.Helper.isUser(f)?'user':'profile',FB.Helper.isUser(f)?'uid':'id',f).wait(c);}else c();}));}});FB.provide('XFBML.ProfilePic',{_defPicMap:{pic:'pics/s_silhouette.jpg',pic_big:'pics/d_silhouette.gif',pic_big_with_logo:'pics/d_silhouette_logo.gif',pic_small:'pics/t_silhouette.jpg',pic_small_with_logo:'pics/t_silhouette_logo.gif',pic_square:'pics/q_silhouette.gif',pic_square_with_logo:'pics/q_silhouette_logo.gif',pic_with_logo:'pics/s_silhouette_logo.gif'},_sizeToPicFieldMap:{n:'pic_big',normal:'pic_big',q:'pic_square',s:'pic',small:'pic',square:'pic_square',t:'pic_small',thumb:'pic_small'}});
FB.subclass('XFBML.Read','XFBML.IframeWidget',null,{getUrlBits:function(){return {name:'read',params:this._attr};},setupAndValidate:function(){function b(h,g){var i=0;var j=null;function k(){g();j=null;i=(new Date()).getTime();}return function(){if(!j){var l=(new Date()).getTime();if(l-i<h){j=window.setTimeout(k,h-(l-i));}else k();}return true;};}function e(h){if(h!='manual'&&h!='onvisible'){var g=this._attr.trigger.match(/^\d+(?:\.\d+)?%$/)?parseInt(this._attr.trigger,10):80;g=Math.min(Math.max(g,0),100);h=g/100;}return h;}this._attr={channel:this.getChannelUrl(),api_key:FB._apiKey,font:this.getAttribute('font'),colorscheme:this.getAttribute('colorscheme','light'),href:this.getAttribute('href',window.location.href),ref:this.getAttribute('ref'),trigger:e(this.getAttribute('trigger')),mintime:parseInt(this.getAttribute('mintime'),10)||30};this._showLoader=false;this.subscribe('iframe.onload',FB.bind(function(){var g=this.dom.firstElementChild;g.style.position="fixed";g.style.bottom="0";g.style.right="10px";},this));var a=FB.bind(function(){FB.Event.unlisten(window,'scroll',a);FB.Event.unlisten(document.documentElement,'click',a);FB.Event.unlisten(document.documentElement,'mousemove',a);window.setTimeout(FB.bind(this.arbiterInform,this,'platform/plugins/read/action'),this._attr.mintime*1000);return true;},this);FB.Event.listen(window,'scroll',a);FB.Event.listen(document.documentElement,'click',a);FB.Event.listen(document.documentElement,'mousemove',a);if(this._attr.trigger=="manual"){var c=FB.bind(function(g){if(g==this._attr.href){FB.Event.unsubscribe('xfbml.read.read',c);this.arbiterInform('platform/plugins/read/trigger');}return true;},this);FB.Event.subscribe('xfbml.read.read',c);}else{var d=b(500,FB.bind(function(){if(this.calculateVisibility()){FB.Event.unlisten(window,'scroll',d);FB.Event.unlisten(window,'resize',d);this.arbiterInform('platform/plugins/read/trigger');}return true;},this));FB.Event.listen(window,'scroll',d);FB.Event.listen(window,'resize',d);d();}this.visible=false;var f=b(500,FB.bind(function(){if(!this.visible&&this.calculateVisibility()){this.visible=true;this.arbiterInform('platform/plugins/read/visible');}else if(this.visible&&!this.calculateVisibility()){this.visible=false;this.arbiterInform('platform/plugins/read/invisible');}return true;},this));FB.Event.listen(window,'scroll',f);FB.Event.listen(window,'resize',f);f();return true;},getSize:function(){return {height:24,width:300};},calculateVisibility:function(){var b=document.documentElement.clientHeight;switch(this._attr.trigger){case "manual":return false;case "onvisible":var a=this.dom.getBoundingClientRect().top;return a<=b;default:var d=window.scrollY+b;var c=document.documentElement.scrollHeight;return d/c>=this._attr.trigger;}}});FB.XFBML.Read.markRead=function(a){FB.Event.fire('xfbml.read.read',a||window.location.href);};
FB.subclass('XFBML.Recommendations','XFBML.IframeWidget',null,{_visibleAfter:'load',_refreshOnAuthChange:true,setupAndValidate:function(){this._attr={border_color:this.getAttribute('border-color'),colorscheme:this.getAttribute('color-scheme'),filter:this.getAttribute('filter'),font:this.getAttribute('font'),action:this.getAttribute('action'),header:this._getBoolAttribute('header'),height:this._getPxAttribute('height',300),site:this.getAttribute('site',location.hostname),width:this._getPxAttribute('width',300)};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'recommendations',params:this._attr};}});
FB.subclass('XFBML.Registration','XFBML.IframeWidget',null,{_visibleAfter:'immediate',_baseHeight:167,_fieldHeight:28,_skinnyWidth:520,_skinnyBaseHeight:173,_skinnyFieldHeight:52,setupAndValidate:function(){this._attr={action:this.getAttribute('action'),border_color:this.getAttribute('border-color'),channel_url:this.getChannelUrl(),client_id:FB._apiKey,fb_only:this._getBoolAttribute('fb-only',false),fb_register:this._getBoolAttribute('fb-register',false),fields:this.getAttribute('fields'),height:this._getPxAttribute('height'),redirect_uri:this.getAttribute('redirect-uri',window.location.href),no_footer:this._getBoolAttribute('no-footer'),no_header:this._getBoolAttribute('no-header'),onvalidate:this.getAttribute('onvalidate'),width:this._getPxAttribute('width',600)};if(this._attr.onvalidate)this.subscribe('xd.validate',this.bind(function(b){var d=FB.JSON.parse(b.value);var a=this.bind(function(e){FB.Arbiter.inform('Registration.Validation',{errors:e,id:b.id},'parent.frames["'+this.getIframeNode().name+'"]',window.location.protocol=='https:');});var c=FB.Helper.executeFunctionByName(this._attr.onvalidate,d,a);if(c)a(c);}));this.subscribe('xd.authLogin',FB.bind(this._onAuthLogin,this));this.subscribe('xd.authLogout',FB.bind(this._onAuthLogout,this));return true;},getSize:function(){return {width:this._attr.width,height:this._getHeight()};},_getHeight:function(){if(this._attr.height)return this._attr.height;var b;if(!this._attr.fields){b=['name'];}else try{b=FB.JSON.parse(this._attr.fields);}catch(a){b=this._attr.fields.split(/,/);}if(this._attr.width<this._skinnyWidth){return this._skinnyBaseHeight+b.length*this._skinnyFieldHeight;}else return this._baseHeight+b.length*this._fieldHeight;},getUrlBits:function(){return {name:'registration',params:this._attr};},_onAuthLogin:function(){if(!FB.getSession())FB.getLoginStatus();FB.Helper.fireEvent('auth.login',this);},_onAuthLogout:function(){if(!FB.getSession())FB.getLoginStatus();FB.Helper.fireEvent('auth.logout',this);}});
FB.subclass('XFBML.ServerFbml','XFBML.IframeWidget',null,{_visibleAfter:'resize',setupAndValidate:function(){this._attr={channel_url:this.getChannelUrl(),fbml:this.getAttribute('fbml'),width:this._getPxAttribute('width')};if(!this._attr.fbml){var a=this.dom.getElementsByTagName('script')[0];if(a&&a.type==='text/fbml')this._attr.fbml=a.innerHTML;}if(!this._attr.fbml){FB.log('<fb:serverfbml> requires the "fbml" attribute.');return false;}return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'serverfbml',params:this._attr};}});
FB.subclass('XFBML.ShareButton','XFBML.Element',null,{process:function(){this._href=this.getAttribute('href',window.location.href);this._type=this.getAttribute('type','icon_link');FB.Dom.addCss(this.dom,'fb_share_count_hidden');this._renderButton(true);},_renderButton:function(h){if(!this.isValid()){this.fire('render');return;}var d='',e='',f='',c='',g=FB.Intl._tx("Share"),i='';switch(this._type){case 'icon':case 'icon_link':c='fb_button_simple';d=('<span class="fb_button_text">'+(this._type=='icon_link'?g:'&nbsp;')+'</span>');h=false;break;case 'link':d=FB.Intl._tx("Share on Facebook");h=false;break;case 'button':d='<span class="fb_button_text">'+g+'</span>';c='fb_button fb_button_small';h=false;break;case 'button_count':d='<span class="fb_button_text">'+g+'</span>';e=('<span class="fb_share_count_nub_right">&nbsp;</span>'+'<span class="fb_share_count fb_share_count_right">'+this._getCounterMarkup()+'</span>');c='fb_button fb_button_small';break;default:d='<span class="fb_button_text">'+g+'</span>';f=('<span class="fb_share_count_nub_top">&nbsp;</span>'+'<span class="fb_share_count fb_share_count_top">'+this._getCounterMarkup()+'</span>');c='fb_button fb_button_small';i='fb_share_count_wrapper';}var b=FB.guid();this.dom.innerHTML=FB.String.format('<span class="{0}">{4}<a id="{1}" class="{2}" '+'target="_blank">{3}</a>{5}</span>',i,b,c,d,f,e);var a=document.getElementById(b);a.href=this._href;a.onclick=function(){FB.ui({method:'stream.share',u:this._href});return false;};if(!h)this.fire('render');},_getCounterMarkup:function(){if(!this._count)this._count=FB.Data._selectByIndex(['total_count'],'link_stat','url',this._href);var b='0';if(this._count.value!==undefined){if(this._count.value.length>0){var a=this._count.value[0].total_count;if(a>3){FB.Dom.removeCss(this.dom,'fb_share_count_hidden');b=a>=1e+07?Math.round(a/1e+06)+'M':(a>=10000?Math.round(a/1000)+'K':a);}}}else this._count.wait(FB.bind(this._renderButton,this,false));return '<span class="fb_share_count_inner">'+b+'</span>';}});
FB.subclass('XFBML.SocialBar','XFBML.EdgeWidget',function(a){if(FB.XFBML.SocialBar.oInstance)return FB.XFBML.SocialBar.oInstance;this.dom=a;FB.XFBML.SocialBar.oInstance=this;return this;},{_fetchPreCachedLoader:false,_showLoader:false,_initialWidth:860,_initialHeight:34,_barIframe:null,_currentZ:0,_refreshOnAuthChange:true,_visibleAfter:'load',_getPageWidth:function(){var a=this._barIframe;var b=parseInt(FB.Dom.getStyle(a.parentNode,'width'),10);if(isNaN(b))b=parseInt(a.parentNode.offsetWidth,10);return b;},_minimizeToolbar:function(c){var a=this._barIframe;c.resetWidth=false;var d=300;if(c.width=='100%'){c.resetWidth=true;c.width=this._getPageWidth();}if(a.offsetWidth!=c.width){FB.Anim.ate(a,{width:c.width+'px'},d,function(e){if(c.resetWidth)FB.Dom.setStyle(e,'width','100%');});var b=this.dom.getElementsByTagName('iframe');FB.Array.forEach(b,function(e){if(e.parentNode.id=='fb_social_bar_container')return;if(!e._isHidden){e._origHeight=parseInt(FB.Dom.getStyle(e,'height'),10);e._origWidth=parseInt(FB.Dom.getStyle(e,'width'),10);e._origRight=parseInt(FB.Dom.getStyle(e,'right'),10);e._origLeft=parseInt(FB.Dom.getStyle(e,'left'),10);e._isHidden=true;FB.Anim.ate(e,{height:'0px',width:'0px',right:c.width+'px',left:(a.offsetWidth-c.width)+'px',opacity:0},d);}else{FB.Anim.ate(e,{height:e._isClosed?'0px':e._origHeight+'px',width:e._origWidth+'px',right:e._origRight+'px',left:e._origLeft+'px',opacity:100},d);e._isHidden=false;}});}},_spawnChild:function(f){var d=this._barIframe,i,g,h=document.createElement('i');if(!f.position||f.position!='left'){g=parseInt(FB.Dom.getStyle(d.parentNode,'paddingRight'),10)+(f.position?0:parseInt(f.minimizeWidth,10));i='right';}else{g=parseInt(FB.Dom.getStyle(d.parentNode,'paddingLeft'),10)+parseInt(f.offsetLeft?f.offsetLeft:0,10);i='left';}if(f.name in window.frames){var e=this.dom.getElementsByTagName?this.dom.getElementsByTagName('iframe'):document.getElementsByTagName('iframe');for(var c=0;c<e.length;c++){var b=e[c];if(b.name==f.name){b.style.width=f.width;b._isClosed=false;FB.Anim.ate(b,{height:f.height,opacity:100});}}}else{d.parentNode.appendChild(h);var a=this;FB.Content.insertIframe({root:h,name:f.name,url:f.src,className:'fb_social_bar_iframe',width:parseInt(f.width,10),height:0,onload:function(j){j.style.position='absolute';j.style[a._attr.position]=a._initialHeight+'px';j.style.height='0px';j.style[i]=g+'px';j.style.zIndex=++a._currentZ;FB.Dom.setStyle(j,'opacity',0);FB.Anim.ate(j,{height:f.height,opacity:100});j._isClosed=false;}});}FB.Array.forEach(document.getElementsByTagName('object'),function(j){FB.Dom.setStyle(j,'visibility','hidden');});},_closeChild:function(c){var b=this.dom.getElementsByTagName?this.dom.getElementsByTagName('iframe'):document.getElementsByTagName('iframe');var d=function(e){if(c.remove)e.parentNode.parentNode.removeChild(e.parentNode);};for(var a=0;a<b.length;a++)if(b[a].name==c.name){b[a]._isClosed=true;FB.Anim.ate(b[a],{height:'0px',opacity:0},300,d);}FB.Array.forEach(document.getElementsByTagName('object'),function(e){FB.Dom.setStyle(e,'visibility','');});},_expand:function(){FB.Dom.setStyle(this._barIframe,'height','100%');FB.Dom.setStyle(this._barIframe.parentNode,'height','100%');},_shrink:function(){FB.Dom.setStyle(this._barIframe,'height','34px');FB.Dom.setStyle(this._barIframe.parentNode,'height','34px');},_iframeOnload:function(c){this._barIframe=c;var b=c.parentNode;var d=true;b.id='fb_social_bar_container';if(d){FB.Dom.setStyle(c,'width','100%');}else FB.Dom.setStyle(c,'width','35px');this._currentZ+=parseInt(FB.Dom.getStyle(c,'zIndex'),10);if(isNaN(this._currentZ))this._currentZ=99999;FB.Dom.setStyle(c,'opacity',100);c.className='fb_social_bar_iframe';if(!window.XMLHttpRequest){FB.Dom.setStyle(b,'position','absolute');b.className='fb_social_bar_iframe_'+this._attr.position+'_ie6';b.parentNode.removeChild(b);document.body.appendChild(b);}else FB.Dom.setStyle(b,this._attr.position,'0px');FB.Dom.setStyle(this.dom,'display','inline');function a(){this.widgets={};}FB.copy(a.prototype,{addWidget:function(e,g,f){this.widgets[e]=FB.copy({widget:g},f);return this;},send:function(e){var f=FB.guid();var g=FB.copy({widget_pipe:FB.JSON.stringify(this.widgets)},e);FB.Content.insertIframe({url:'about:blank',root:document.getElementById('fb-root')||document.body,name:f,className:'fb_hidden',onload:function(){FB.Content.submitToTarget({url:FB._domain.www+'widget_pipe.php',target:f,params:g},true);}});},addSocialBarWidgets:function(e,g){for(var f=0;f<g.length;f++)this.addWidget(e+':'+g[f],g[f]);return this;}});new a().addSocialBarWidgets(c.name,['social_bar_controls','social_bar_profile','social_bar_like','social_bar_activity','social_bar_jewels']).send({href:window.location,site:this.getAttribute('site',location.hostname),channel:this.getChannelUrl(),api_key:FB._apiKey,locale:FB._locale,sdk:'joey',session_key:FB._session&&FB._session.session_key});},oneTimeSetup:function(){FB.Dom.setStyle(this.dom,'display','none');this.subscribe('xd.minimizeToolbar',FB.bind(this._minimizeToolbar,this));this.subscribe('xd.spawnChild',FB.bind(this._spawnChild,this));this.subscribe('xd.closeChild',FB.bind(this._closeChild,this));this.subscribe('xd.logoutSocialBar',FB.logout);this.subscribe('xd.loginSocialBar',FB.login);this.subscribe('iframe.onload',FB.bind(this._iframeOnload,this));this.subscribe('xd.presentEdgeCommentDialog',FB.bind(this._onEdgeCreate,this));this.subscribe('xd.presentEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogPresentation,this));this.subscribe('xd.dismissEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogDismissal,this));this.subscribe('xd.hideEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogHide,this));this.subscribe('xd.showEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogShow,this));this.subscribe('xd.expandBar',FB.bind(this._expand,this));this.subscribe('xd.shrinkBar',FB.bind(this._shrink,this));},_handleEdgeCommentDialogPresentation:function(c){if(!this.isValid())return;var a=document.createElement('i');var d={commentNode:a,externalUrl:c.externalURL,width:330,height:200,masterFrameName:c.masterFrameName,relativeHeightOffset:'0px'};this._commentSlave=new FB.XFBML.EdgeCommentWidget(d);var b=parseInt(FB.Dom.getStyle(this._barIframe.parentNode,'paddingLeft'),10)+parseInt(c.left,10);FB.Dom.setStyle(a,'position','absolute');FB.Dom.removeCss(a,'fb_iframe_widget');FB.Dom.setStyle(a,'top','');FB.Dom.setStyle(a,this._attr.position,this._initialHeight-1+'px');FB.Dom.setStyle(a,'left',b+'px');FB.Dom.setStyle(a,'zIndex',++this._currentZ);FB.Dom.setStyle(a,'opacity',0);this.dom.parentNode.appendChild(a);this._commentSlave.process();this._commentWidgetNode=a;},_handleEdgeCommentDialogHide:function(){if(this._commentWidgetNode){FB.Dom.removeCss(this._commentWidgetNode,'hidden_elem');FB.Anim.ate(this._commentWidgetNode,{opacity:0},300,FB.bind(function(){this._commentWidgetNode.style.display="none";},this));}},_handleEdgeCommentDialogShow:function(){if(this._commentWidgetNode){this._commentWidgetNode.style.display="block";FB.Anim.ate(this._commentWidgetNode,{opacity:100},500);}},_handleEdgeCommentDialogDismissal:function(a){if(this._commentWidgetNode){this._commentWidgetNode.parentNode.removeChild(this._commentWidgetNode);delete this._commentWidgetNode;}},getUrlBits:function(){return {name:'social_bar',params:this._attr};},getSize:function(){return {width:this._initialWidth,height:this._initialHeight};},getIframeName:function(){return 'fb_social_bar_iframe';},setupAndValidate:function(){this._attr={like:this._getBoolAttribute('like'),precache:this._getBoolAttribute('precache'),send:this._getBoolAttribute('send'),activity:this._getBoolAttribute('activity'),chat:this._getBoolAttribute('chat'),position:this._getAttributeFromList('position','bottom',['top','bottom']),href:window.location,site:this.getAttribute('site',location.hostname),channel:this.getChannelUrl()};return true;}});
void(0);


FB.provide("", {"_domain":{"api":"https:\/\/api.facebook.com\/","api_read":"https:\/\/api-read.facebook.com\/","cdn":"http:\/\/static.ak.fbcdn.net\/","graph":"https:\/\/graph.facebook.com\/","https_cdn":"https:\/\/s-static.ak.fbcdn.net\/","https_staticfb":"https:\/\/s-static.ak.facebook.com\/","https_www":"https:\/\/www.facebook.com\/","staticfb":"http:\/\/static.ak.facebook.com\/","www":"http:\/\/www.facebook.com\/","m":"http:\/\/m.facebook.com\/","https_m":"https:\/\/m.facebook.com\/"},"_locale":"en_US","_localeIsRtl":false}, true);
FB.provide("Flash", {"_minVersions":[[10,0,22,87]],"_swfPath":"rsrc.php\/v1\/yx\/r\/WFg56j28XFs.swf"}, true);
FB.provide("XD", {"_xdProxyUrl":"connect\/xd_proxy.php?version=3"}, true);
FB.provide("Arbiter", {"_canvasProxyUrl":"connect\/canvas_proxy.php?version=3"}, true);
FB.provide('Auth', {"_xdStorePath":"xd_localstorage\/"}, true);
FB.initSitevars = {"parseXFBMLBeforeDomReady":false,"iframePermissions":{"read_stream":false,"manage_mailbox":false,"manage_friendlists":false,"read_mailbox":false,"publish_checkins":true,"status_update":true,"photo_upload":true,"video_upload":true,"sms":false,"create_event":true,"rsvp_event":true,"offline_access":true,"email":true,"xmpp_login":false,"create_note":true,"share_item":true,"export_stream":false,"publish_stream":true,"publish_likes":true,"ads_management":false,"contact_email":true,"access_private_data":false,"read_insights":false,"read_requests":false,"read_friendlists":true,"manage_pages":false,"physical_login":false,"manage_groups":false,"read_deals":false}}; FB.widgetPipeEnabledApps = {"111476658864976":1,"cca6477272fc5cb805f85a84f20fca1d":1,"179150165472010":1}; FB.widgetPipeTagCountThreshold = 4;
FB.provide("Canvas.EarlyFlush", {"_appIdsBlacklist":[],"_sampleRate":500}, true);
FB.provide("XFBML.ConnectBar", {"imgs":{"buttonUrl":"rsrc.php\/v1\/yY\/r\/h_Y6u1wrZPW.png","missingProfileUrl":"rsrc.php\/v1\/yo\/r\/UlIqmHJn-SK.gif"}}, true);
FB.provide("XFBML.ProfilePic", {"_defPicMap":{"pic":"rsrc.php\/v1\/yh\/r\/C5yt7Cqf3zU.jpg","pic_big":"rsrc.php\/v1\/yL\/r\/HsTZSDw4avx.gif","pic_big_with_logo":"rsrc.php\/v1\/y5\/r\/SRDCaeCL7hM.gif","pic_small":"rsrc.php\/v1\/yi\/r\/odA9sNLrE86.jpg","pic_small_with_logo":"rsrc.php\/v1\/yD\/r\/k1xiRXKnlGd.gif","pic_square":"rsrc.php\/v1\/yo\/r\/UlIqmHJn-SK.gif","pic_square_with_logo":"rsrc.php\/v1\/yX\/r\/9dYJBPDHXwZ.gif","pic_with_logo":"rsrc.php\/v1\/yu\/r\/fPPR9f2FJ3t.gif"}}, true);
if (FB.Dom && FB.Dom.addCssRules) { FB.Dom.addCssRules(".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size: 11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px;top:8px\\9;right:7px\\9}\n.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}\n.fb_dialog_close_icon:hover{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_close_icon:active{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zL\/r\/s816eWC-2sl.gif)}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size: 24px;padding:20px}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n.fb_dialog_top_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ze\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}\n.fb_dialog_top_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ze\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}\n.fb_dialog_bottom_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ze\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n.fb_dialog_bottom_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/ze\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100\u0025}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100\u0025;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_dialog.loading.fb_dialog_mobile .fb_dialog_iframe{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zQ\/r\/pQebR9nCkAT.gif) no-repeat 50\u0025 50\u0025}\n.fb_dialog.loading.fb_dialog_mobile iframe{visibility:hidden}\n.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size: 14px;font-weight:bold;margin:0}\n.fb_dialog_content .dialog_title > span{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}\n.fb_dialog_content .dialog_content{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/z9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}\n.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}\n#fb_dialog_loader_close{float:right}\n.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_dialog.loading.fb_dialog_mobile .fb_dialog_close_icon{visibility:visible}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:relative;vertical-align:text-bottom}\n.fb_iframe_widget span{position:relative}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/z9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zH\/r\/eIpbnVKI9lR.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zL\/r\/FGFbc80dUKj.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zL\/r\/FGFbc80dUKj.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:\"lucida grande\",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size: 24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size: 13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size: 11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size: 10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size: 10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size: 22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zU\/r\/bSOHtKbCGYI.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/zX\/r\/i_oIVTKMYsL.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size: 10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size: 11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size: 13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size: 13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size: 11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget iframe.fb_ltr{left:-4px}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget iframe.fb_rtl{left:2px}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget{left:0;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget .FB_Loader{left:0;top:1px;margin-top:6px;margin-left:0;background-position:50\u0025 50\u0025;background-color:#fff;height:150px;width:394px;border:1px #666 solid;border-bottom:2px solid #283e6c;z-index:1}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.dark .FB_Loader{background-color:#000;border-bottom:2px solid #ccc}\n.fb_edge_widget_with_comment span.fb_send_button_form_widget.siderender\n.FB_Loader{margin-top:0}\n#fb_social_bar_container{position:fixed;left:0;right:0;height:34px;padding:0 25px;z-index:999999999}\n.fb_social_bar_iframe{position:relative;float:right;opacity:0;-moz-opacity:0;filter:alpha(opacity=0)}\n.fb_social_bar_iframe_bottom_ie6{bottom:auto;top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)))}\n.fb_social_bar_iframe_top_ie6{bottom:auto;top:expression(eval(document.documentElement.scrollTop-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)))}\n", ["fb.css.base","fb.css.dialog","fb.css.iframewidget","fb.css.button","fb.css.sharebutton","fb.css.connectbarwidget","fb.css.edgecommentwidget","fb.css.sendbuttonformwidget","fb.css.socialbarwidget"]); }if(typeof COMSCORE=="undefined"){window.COMSCORE={}}if(typeof COMSCORE.Beacon=="undefined"){COMSCORE.Beacon={}}if(typeof _comscore!="object"){window._comscore=[]}COMSCORE.beacon=function(j){try{if(!j){return}var h=2.2,g=j.options||{},u={doc:g.doc||document,nav:g.nav||navigator,win:g.win||window},b=512,m=64,w="scorecardresearch",n=2147483647,f=(new Date()).getTime(),t=function(z){var A=encodeURIComponent||escape;return A(z)},p=function(e,z){if(z){e=e.substr(0,z)}return e},s=function(){return u.doc.location.protocol=="https:"},d=function(e){return typeof e=="undefined"},o=function(e,z){if(e==null){return""}return p(t(e),z)},a=function(e,z,B,A){return z!=null&&z.toString().length>0?[e,"=",A?p(z,B):o(z,B),"&"].join(""):""},v=function(e){return Math.round(Math.random()*(e||n))},y=function(){if(+j.c1!=2){return}if(/msie\s[^0-6]|firefox|chrome/i.test(u.nav.userAgent)){return}var e=k(w);if(g.fpc_optout){if(e){q(w,e,u.doc.domain,-1)}return"optout"}if(!u.nav.cookieEnabled){return"disabled"}if(!e){e=(function(){var D=function(G,F,E){F=G&&G[F]?G[F]:"-";return E?D(F,E):F},A=[D(u.win,"navigator","userAgent"),D(u.win,"screen","width"),D(u.win,"screen","height"),D(u.doc,"cookie"),D(u.doc,"referrer"),D(u.loc,"href"),D(u.win,"history","length")].join("-");var C=2166136261;for(var B=0,z=A.length;B<z;B++){C^=A.charCodeAt(B);C*=16777619}return[v()^C&n,v(),f].join("-")})();q(w,e,u.doc.domain);e=k(w)}return e},k=function(e){if(d(u.doc.cookie)||d(u.doc.cookie.match)){return}var z=u.doc.cookie.match("(?:^|;)\\s*"+e+"=([^;]*)");return z?z[1]:null},q=function(e,A,z,B){if(!A){return}B=B!=null?B:730;B*=86400000;u.doc.cookie=e+"="+A+"; domain=."+z+"; path=/; expires="+(new Date(f+B)).toGMTString()},c=function(e){if(+j.c1!=2){return}if(!e){return}if(g.force_script_extension||(e.width==2&&e.height>v(100))){var A=u.doc.createElement("script"),z=u.doc.getElementsByTagName("script")[0],B=[l.script_extension_url,"?",a("c2",j.c2)];B=B.join("").replace(/&$/,"");if(z){A.src=B;A.async=true;z.parentNode.insertBefore(A,z)}else{u.doc.write(unescape("%3Cscript src='"+B+"'%3E%3C/script%3E"))}}},l={beacon_url:(s()?"https://sb":"http://b")+".scorecardresearch.com/",script_extension_url:(s()?"https":"http")+"://app.scorecardresearch.com/s2e/invite"};if(g.dest){l.beacon_url=g.dest.beacon_url||l.beacon_url;l.script_extension_url=g.dest.script_extension_url||l.script_extension_url}var i=[l.beacon_url,"b?",a("c1",j.c1),a("c2",j.c2),a("rn",v()),a("c12",y()),a("c7",(function(){if(g.filter_urls){return}var e=u.doc.location.href,z=b;if(g.url_append){z=b-t(["?",g.url_append].join("")).length;e=o(e,z)+t([/\?/.test(e)?"&":"?",g.url_append].join(""))}else{e=o(e,b)}return e})(),b,true),a("c3",j.c3),a("c4",j.c4,b),a("c5",j.c5),a("c6",j.c6),a("c10",j.c10),a("c11",j.c11),a("c15",j.c15),a("c16",j.c16),a("c8",u.doc.title,m),a("c9",!g.filter_urls?u.doc.referrer:"",b),a("cv",h),a("cs","js"),a("r",j.r,b)];i=i.join("").replace(/&$/,"");i=i.length>2080?i.substr(0,2075)+"&ct=1":i;if(/(BlackBerry.*?\/([1-3]\.|4\.[0-5]))|OpenWeb/.test(u.nav.userAgent)){i=i.replace(/\/b\?/,"/p?");u.doc.write("<img src='"+i+"' />")}else{var x=new Image();x.onload=function(){c(this)};x.onerror=function(){c(this)};x.src=i}if(typeof g.subscribe=="function"){g.subscribe(i)}return i}catch(r){}};COMSCORE.purge=function(a){try{var c=[],f,b;a=a||_comscore;for(b=a.length-1;b>=0;b--){f=COMSCORE.beacon(a[b]);a.splice(b,1);if(f){c.push(f)}}return c}catch(d){}};COMSCORE.purge();







String.prototype.parseColor=function(){var color="#";if(this.slice(0,4)=="rgb("){var cols=this.slice(4,this.length-1).split(",");var i=0;do{color+=parseInt(cols[i]).toColorPart();}while(++i<3);}else{if(this.slice(0,1)=="#"){if(this.length==4){for(var i=1;i<4;i++){color+=(this.charAt(i)+this.charAt(i)).toLowerCase();}}if(this.length==7){color=this.toLowerCase();}}}return(color.length==7?color:(arguments[0]||this));};Element.collectTextNodes=function(element){return $A($(element).childNodes).collect(function(node){return(node.nodeType==3?node.nodeValue:(node.hasChildNodes()?Element.collectTextNodes(node):""));}).flatten().join("");};Element.collectTextNodesIgnoreClass=function(element,className){return $A($(element).childNodes).collect(function(node){return(node.nodeType==3?node.nodeValue:((node.hasChildNodes()&&!Element.hasClassName(node,className))?Element.collectTextNodesIgnoreClass(node,className):""));}).flatten().join("");};Element.setContentZoom=function(element,percent){element=$(element);element.setStyle({fontSize:(percent/100)+"em"});if(Prototype.Browser.WebKit){window.scrollBy(0,0);}return element;};Element.getInlineOpacity=function(element){return $(element).style.opacity||"";};Element.forceRerendering=function(element){try{element=$(element);var n=document.createTextNode(" ");element.appendChild(n);element.removeChild(n);}catch(e){}};var Effect={_elementDoesNotExistError:{name:"ElementDoesNotExistError",message:"The specified DOM element does not exist, but is required for this effect to operate"},Transitions:{linear:Prototype.K,sinoidal:function(pos){return(-Math.cos(pos*Math.PI)/2)+0.5;},reverse:function(pos){return 1-pos;},flicker:function(pos){var pos=((-Math.cos(pos*Math.PI)/4)+0.75)+Math.random()/4;return pos>1?1:pos;},wobble:function(pos){return(-Math.cos(pos*Math.PI*(9*pos))/2)+0.5;},pulse:function(pos,pulses){pulses=pulses||5;return(((pos%(1/pulses))*pulses).round()==0?((pos*pulses*2)-(pos*pulses*2).floor()):1-((pos*pulses*2)-(pos*pulses*2).floor()));},spring:function(pos){return 1-(Math.cos(pos*4.5*Math.PI)*Math.exp(-pos*6));},none:function(pos){return 0;},full:function(pos){return 1;}},DefaultOptions:{duration:1,fps:100,sync:false,from:0,to:1,delay:0,queue:"parallel"},tagifyText:function(element){var tagifyStyle="position:relative";if(Prototype.Browser.IE){tagifyStyle+=";zoom:1";}element=$(element);$A(element.childNodes).each(function(child){if(child.nodeType==3){child.nodeValue.toArray().each(function(character){element.insertBefore(new Element("span",{style:tagifyStyle}).update(character==" "?String.fromCharCode(160):character),child);});Element.remove(child);}});},multiple:function(element,effect){var elements;if(((typeof element=="object")||Object.isFunction(element))&&(element.length)){elements=element;}else{elements=$(element).childNodes;}var options=Object.extend({speed:0.1,delay:0},arguments[2]||{});var masterDelay=options.delay;$A(elements).each(function(element,index){new effect(element,Object.extend(options,{delay:index*options.speed+masterDelay}));});},PAIRS:{"slide":["SlideDown","SlideUp"],"blind":["BlindDown","BlindUp"],"appear":["Appear","Fade"]},toggle:function(element,effect){element=$(element);effect=(effect||"appear").toLowerCase();var options=Object.extend({queue:{position:"end",scope:(element.id||"global"),limit:1}},arguments[2]||{});Effect[element.visible()?Effect.PAIRS[effect][1]:Effect.PAIRS[effect][0]](element,options);}};Effect.DefaultOptions.transition=Effect.Transitions.sinoidal;Effect.ScopedQueue=Class.create(Enumerable,{initialize:function(){this.effects=[];this.interval=null;},_each:function(iterator){this.effects._each(iterator);},add:function(effect){var timestamp=new Date().getTime();var position=Object.isString(effect.options.queue)?effect.options.queue:effect.options.queue.position;switch(position){case"front":this.effects.findAll(function(e){return e.state=="idle";}).each(function(e){e.startOn+=effect.finishOn;e.finishOn+=effect.finishOn;});break;case"with-last":timestamp=this.effects.pluck("startOn").max()||timestamp;break;case"end":timestamp=this.effects.pluck("finishOn").max()||timestamp;break;}effect.startOn+=timestamp;effect.finishOn+=timestamp;if(!effect.options.queue.limit||(this.effects.length<effect.options.queue.limit)){this.effects.push(effect);}if(!this.interval){this.interval=setInterval(this.loop.bind(this),15);}},remove:function(effect){this.effects=this.effects.reject(function(e){return e==effect;});if(this.effects.length==0){clearInterval(this.interval);this.interval=null;}},loop:function(){var timePos=new Date().getTime();for(var i=0,len=this.effects.length;i<len;i++){this.effects[i]&&this.effects[i].loop(timePos);}}});Effect.Queues={instances:$H(),get:function(queueName){if(!Object.isString(queueName)){return queueName;}return this.instances.get(queueName)||this.instances.set(queueName,new Effect.ScopedQueue());}};Effect.Queue=Effect.Queues.get("global");Effect.Base=Class.create({position:null,start:function(options){function codeForEvent(options,eventName){return((options[eventName+"Internal"]?"this.options."+eventName+"Internal(this);":"")+(options[eventName]?"this.options."+eventName+"(this);":""));}if(options&&options.transition===false){options.transition=Effect.Transitions.linear;}this.options=Object.extend(Object.extend({},Effect.DefaultOptions),options||{});this.currentFrame=0;this.state="idle";this.startOn=this.options.delay*1000;this.finishOn=this.startOn+(this.options.duration*1000);this.fromToDelta=this.options.to-this.options.from;this.totalTime=this.finishOn-this.startOn;this.totalFrames=this.options.fps*this.options.duration;eval("this.render = function(pos){ "+'if (this.state=="idle"){this.state="running";'+codeForEvent(this.options,"beforeSetup")+(this.setup?"this.setup();":"")+codeForEvent(this.options,"afterSetup")+'};if (this.state=="running"){'+"pos=this.options.transition(pos)*"+this.fromToDelta+"+"+this.options.from+";"+"this.position=pos;"+codeForEvent(this.options,"beforeUpdate")+(this.update?"this.update(pos);":"")+codeForEvent(this.options,"afterUpdate")+"}}");this.event("beforeStart");if(!this.options.sync){Effect.Queues.get(Object.isString(this.options.queue)?"global":this.options.queue.scope).add(this);}},loop:function(timePos){if(timePos>=this.startOn){if(timePos>=this.finishOn){this.render(1);this.cancel();this.event("beforeFinish");if(this.finish){this.finish();}this.event("afterFinish");return;}var pos=(timePos-this.startOn)/this.totalTime,frame=(pos*this.totalFrames).round();if(frame>this.currentFrame){this.render(pos);this.currentFrame=frame;}}},cancel:function(){if(!this.options.sync){Effect.Queues.get(Object.isString(this.options.queue)?"global":this.options.queue.scope).remove(this);}this.state="finished";},event:function(eventName){if(this.options[eventName+"Internal"]){this.options[eventName+"Internal"](this);}if(this.options[eventName]){this.options[eventName](this);}},inspect:function(){var data=$H();for(property in this){if(!Object.isFunction(this[property])){data.set(property,this[property]);}}return"#<Effect:"+data.inspect()+",options:"+$H(this.options).inspect()+">";}});Effect.Parallel=Class.create(Effect.Base,{initialize:function(effects){this.effects=effects||[];this.start(arguments[1]);},update:function(position){this.effects.invoke("render",position);},finish:function(position){this.effects.each(function(effect){effect.render(1);effect.cancel();effect.event("beforeFinish");if(effect.finish){effect.finish(position);}effect.event("afterFinish");});}});Effect.Tween=Class.create(Effect.Base,{initialize:function(object,from,to){object=Object.isString(object)?$(object):object;var args=$A(arguments),method=args.last(),options=args.length==5?args[3]:null;this.method=Object.isFunction(method)?method.bind(object):Object.isFunction(object[method])?object[method].bind(object):function(value){object[method]=value;};this.start(Object.extend({from:from,to:to},options||{}));},update:function(position){this.method(position);}});Effect.Event=Class.create(Effect.Base,{initialize:function(){this.start(Object.extend({duration:0},arguments[0]||{}));},update:Prototype.emptyFunction});Effect.Opacity=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element){throw (Effect._elementDoesNotExistError);}if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout)){this.element.setStyle({zoom:1});}var options=Object.extend({from:this.element.getOpacity()||0,to:1},arguments[1]||{});this.start(options);},update:function(position){this.element.setOpacity(position);}});Effect.Move=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element){throw (Effect._elementDoesNotExistError);}var options=Object.extend({x:0,y:0,mode:"relative"},arguments[1]||{});this.start(options);},setup:function(){this.element.makePositioned();this.originalLeft=parseFloat(this.element.getStyle("left")||"0");this.originalTop=parseFloat(this.element.getStyle("top")||"0");if(this.options.mode=="absolute"){this.options.x=this.options.x-this.originalLeft;this.options.y=this.options.y-this.originalTop;}},update:function(position){this.element.setStyle({left:(this.options.x*position+this.originalLeft).round()+"px",top:(this.options.y*position+this.originalTop).round()+"px"});}});Effect.MoveBy=function(element,toTop,toLeft){return new Effect.Move(element,Object.extend({x:toLeft,y:toTop},arguments[3]||{}));};Effect.Scale=Class.create(Effect.Base,{initialize:function(element,percent){this.element=$(element);if(!this.element){throw (Effect._elementDoesNotExistError);}var options=Object.extend({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:percent},arguments[2]||{});this.start(options);},setup:function(){this.restoreAfterFinish=this.options.restoreAfterFinish||false;this.elementPositioning=this.element.getStyle("position");this.originalStyle={};["top","left","width","height","fontSize"].each(function(k){this.originalStyle[k]=this.element.style[k];}.bind(this));this.originalTop=this.element.offsetTop;this.originalLeft=this.element.offsetLeft;var fontSize=this.element.getStyle("font-size")||"100%";["em","px","%","pt"].each(function(fontSizeType){if(fontSize.indexOf(fontSizeType)>0){this.fontSize=parseFloat(fontSize);this.fontSizeType=fontSizeType;}}.bind(this));this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;this.dims=null;if(this.options.scaleMode=="box"){this.dims=[this.element.offsetHeight,this.element.offsetWidth];}if(/^content/.test(this.options.scaleMode)){this.dims=[this.element.scrollHeight,this.element.scrollWidth];}if(!this.dims){this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];}},update:function(position){var currentScale=(this.options.scaleFrom/100)+(this.factor*position);if(this.options.scaleContent&&this.fontSize){this.element.setStyle({fontSize:this.fontSize*currentScale+this.fontSizeType});}this.setDimensions(this.dims[0]*currentScale,this.dims[1]*currentScale);},finish:function(position){if(this.restoreAfterFinish){this.element.setStyle(this.originalStyle);}},setDimensions:function(height,width){var d={};if(this.options.scaleX){d.width=width.round()+"px";}if(this.options.scaleY){d.height=height.round()+"px";}if(this.options.scaleFromCenter){var topd=(height-this.dims[0])/2;var leftd=(width-this.dims[1])/2;if(this.elementPositioning=="absolute"){if(this.options.scaleY){d.top=this.originalTop-topd+"px";}if(this.options.scaleX){d.left=this.originalLeft-leftd+"px";}}else{if(this.options.scaleY){d.top=-topd+"px";}if(this.options.scaleX){d.left=-leftd+"px";}}}this.element.setStyle(d);}});Effect.Highlight=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element){throw (Effect._elementDoesNotExistError);}var options=Object.extend({startcolor:"#ffff99"},arguments[1]||{});this.start(options);},setup:function(){if(this.element.getStyle("display")=="none"){this.cancel();return;}this.oldStyle={};if(!this.options.keepBackgroundImage){this.oldStyle.backgroundImage=this.element.getStyle("background-image");this.element.setStyle({backgroundImage:"none"});}if(!this.options.endcolor){this.options.endcolor=this.element.getStyle("background-color").parseColor("#ffffff");}if(!this.options.restorecolor){this.options.restorecolor=this.element.getStyle("background-color");}this._base=$R(0,2).map(function(i){return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16);}.bind(this));this._delta=$R(0,2).map(function(i){return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i];}.bind(this));},update:function(position){this.element.setStyle({backgroundColor:$R(0,2).inject("#",function(m,v,i){return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart());}.bind(this))});},finish:function(){this.element.setStyle(Object.extend(this.oldStyle,{backgroundColor:this.options.restorecolor}));}});Effect.ScrollTo=function(element){var options=arguments[1]||{},scrollOffsets=document.viewport.getScrollOffsets(),elementOffsets=$(element).cumulativeOffset(),max=(window.height||document.body.scrollHeight)-document.viewport.getHeight();if(options.offset){elementOffsets[1]+=options.offset;}return new Effect.Tween(null,scrollOffsets.top,elementOffsets[1]>max?max:elementOffsets[1],options,function(p){scrollTo(scrollOffsets.left,p.round());});};Effect.Fade=function(element){element=$(element);var oldOpacity=element.getInlineOpacity();var options=Object.extend({from:element.getOpacity()||1,to:0,afterFinishInternal:function(effect){if(effect.options.to!=0){return;}effect.element.hide().setStyle({opacity:oldOpacity});}},arguments[1]||{});return new Effect.Opacity(element,options);};Effect.Appear=function(element){element=$(element);var options=Object.extend({from:(element.getStyle("display")=="none"?0:element.getOpacity()||0),to:1,afterFinishInternal:function(effect){effect.element.forceRerendering();},beforeSetup:function(effect){effect.element.setOpacity(effect.options.from).show();}},arguments[1]||{});return new Effect.Opacity(element,options);};Effect.Puff=function(element){element=$(element);var oldStyle={opacity:element.getInlineOpacity(),position:element.getStyle("position"),top:element.style.top,left:element.style.left,width:element.style.width,height:element.style.height};return new Effect.Parallel([new Effect.Scale(element,200,{sync:true,scaleFromCenter:true,scaleContent:true,restoreAfterFinish:true}),new Effect.Opacity(element,{sync:true,to:0})],Object.extend({duration:1,beforeSetupInternal:function(effect){Position.absolutize(effect.effects[0].element);},afterFinishInternal:function(effect){effect.effects[0].element.hide().setStyle(oldStyle);}},arguments[1]||{}));};Effect.BlindUp=function(element){element=$(element);element.makeClipping();return new Effect.Scale(element,0,Object.extend({scaleContent:false,scaleX:false,restoreAfterFinish:true,afterFinishInternal:function(effect){effect.element.hide().undoClipping();}},arguments[1]||{}));};Effect.BlindDown=function(element){element=$(element);var elementDimensions=element.getDimensions();return new Effect.Scale(element,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},restoreAfterFinish:true,afterSetup:function(effect){effect.element.makeClipping().setStyle({height:"0px"}).show();},afterFinishInternal:function(effect){effect.element.undoClipping();}},arguments[1]||{}));};Effect.SwitchOff=function(element){element=$(element);var oldOpacity=element.getInlineOpacity();return new Effect.Appear(element,Object.extend({duration:0.4,from:0,transition:Effect.Transitions.flicker,afterFinishInternal:function(effect){new Effect.Scale(effect.element,1,{duration:0.3,scaleFromCenter:true,scaleX:false,scaleContent:false,restoreAfterFinish:true,beforeSetup:function(effect){effect.element.makePositioned().makeClipping();},afterFinishInternal:function(effect){effect.element.hide().undoClipping().undoPositioned().setStyle({opacity:oldOpacity});}});}},arguments[1]||{}));};Effect.DropOut=function(element){element=$(element);var oldStyle={top:element.getStyle("top"),left:element.getStyle("left"),opacity:element.getInlineOpacity()};return new Effect.Parallel([new Effect.Move(element,{x:0,y:100,sync:true}),new Effect.Opacity(element,{sync:true,to:0})],Object.extend({duration:0.5,beforeSetup:function(effect){effect.effects[0].element.makePositioned();},afterFinishInternal:function(effect){effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);}},arguments[1]||{}));};Effect.Shake=function(element){element=$(element);var options=Object.extend({distance:20,duration:0.5},arguments[1]||{});var distance=parseFloat(options.distance);var split=parseFloat(options.duration)/10;var oldStyle={top:element.getStyle("top"),left:element.getStyle("left")};return new Effect.Move(element,{x:distance,y:0,duration:split,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:-distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:-distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:-distance,y:0,duration:split,afterFinishInternal:function(effect){effect.element.undoPositioned().setStyle(oldStyle);}});}});}});}});}});}});};Effect.SlideDown=function(element){element=$(element).cleanWhitespace();var oldInnerBottom=element.down().getStyle("bottom");var elementDimensions=element.getDimensions();return new Effect.Scale(element,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:window.opera?0:1,scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},restoreAfterFinish:true,afterSetup:function(effect){effect.element.makePositioned();effect.element.down().makePositioned();if(window.opera){effect.element.setStyle({top:""});}effect.element.makeClipping().setStyle({height:"0px"}).show();},afterUpdateInternal:function(effect){effect.element.down().setStyle({bottom:(effect.dims[0]-effect.element.clientHeight)+"px"});},afterFinishInternal:function(effect){effect.element.undoClipping().undoPositioned();effect.element.down().undoPositioned().setStyle({bottom:oldInnerBottom});}},arguments[1]||{}));};Effect.SlideUp=function(element){element=$(element).cleanWhitespace();var oldInnerBottom=element.down().getStyle("bottom");var elementDimensions=element.getDimensions();return new Effect.Scale(element,window.opera?0:1,Object.extend({scaleContent:false,scaleX:false,scaleMode:"box",scaleFrom:100,scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},restoreAfterFinish:true,afterSetup:function(effect){effect.element.makePositioned();effect.element.down().makePositioned();if(window.opera){effect.element.setStyle({top:""});}effect.element.makeClipping().show();},afterUpdateInternal:function(effect){effect.element.down().setStyle({bottom:(effect.dims[0]-effect.element.clientHeight)+"px"});},afterFinishInternal:function(effect){effect.element.hide().undoClipping().undoPositioned();effect.element.down().undoPositioned().setStyle({bottom:oldInnerBottom});}},arguments[1]||{}));};Effect.Squish=function(element){return new Effect.Scale(element,window.opera?1:0,{restoreAfterFinish:true,beforeSetup:function(effect){effect.element.makeClipping();},afterFinishInternal:function(effect){effect.element.hide().undoClipping();}});};Effect.Grow=function(element){element=$(element);var options=Object.extend({direction:"center",moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.full},arguments[1]||{});var oldStyle={top:element.style.top,left:element.style.left,height:element.style.height,width:element.style.width,opacity:element.getInlineOpacity()};var dims=element.getDimensions();var initialMoveX,initialMoveY;var moveX,moveY;switch(options.direction){case"top-left":initialMoveX=initialMoveY=moveX=moveY=0;break;case"top-right":initialMoveX=dims.width;initialMoveY=moveY=0;moveX=-dims.width;break;case"bottom-left":initialMoveX=moveX=0;initialMoveY=dims.height;moveY=-dims.height;break;case"bottom-right":initialMoveX=dims.width;initialMoveY=dims.height;moveX=-dims.width;moveY=-dims.height;break;case"center":initialMoveX=dims.width/2;initialMoveY=dims.height/2;moveX=-dims.width/2;moveY=-dims.height/2;break;}return new Effect.Move(element,{x:initialMoveX,y:initialMoveY,duration:0.01,beforeSetup:function(effect){effect.element.hide().makeClipping().makePositioned();},afterFinishInternal:function(effect){new Effect.Parallel([new Effect.Opacity(effect.element,{sync:true,to:1,from:0,transition:options.opacityTransition}),new Effect.Move(effect.element,{x:moveX,y:moveY,sync:true,transition:options.moveTransition}),new Effect.Scale(effect.element,100,{scaleMode:{originalHeight:dims.height,originalWidth:dims.width},sync:true,scaleFrom:window.opera?1:0,transition:options.scaleTransition,restoreAfterFinish:true})],Object.extend({beforeSetup:function(effect){effect.effects[0].element.setStyle({height:"0px"}).show();},afterFinishInternal:function(effect){effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);}},options));}});};Effect.Shrink=function(element){element=$(element);var options=Object.extend({direction:"center",moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.none},arguments[1]||{});var oldStyle={top:element.style.top,left:element.style.left,height:element.style.height,width:element.style.width,opacity:element.getInlineOpacity()};var dims=element.getDimensions();var moveX,moveY;switch(options.direction){case"top-left":moveX=moveY=0;break;case"top-right":moveX=dims.width;moveY=0;break;case"bottom-left":moveX=0;moveY=dims.height;break;case"bottom-right":moveX=dims.width;moveY=dims.height;break;case"center":moveX=dims.width/2;moveY=dims.height/2;break;}return new Effect.Parallel([new Effect.Opacity(element,{sync:true,to:0,from:1,transition:options.opacityTransition}),new Effect.Scale(element,window.opera?1:0,{sync:true,transition:options.scaleTransition,restoreAfterFinish:true}),new Effect.Move(element,{x:moveX,y:moveY,sync:true,transition:options.moveTransition})],Object.extend({beforeStartInternal:function(effect){effect.effects[0].element.makePositioned().makeClipping();},afterFinishInternal:function(effect){effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle);}},options));};Effect.Pulsate=function(element){element=$(element);var options=arguments[1]||{};var oldOpacity=element.getInlineOpacity();var transition=options.transition||Effect.Transitions.sinoidal;var reverser=function(pos){return transition(1-Effect.Transitions.pulse(pos,options.pulses));};reverser.bind(transition);return new Effect.Opacity(element,Object.extend(Object.extend({duration:2,from:0,afterFinishInternal:function(effect){effect.element.setStyle({opacity:oldOpacity});}},options),{transition:reverser}));};Effect.Fold=function(element){element=$(element);var oldStyle={top:element.style.top,left:element.style.left,width:element.style.width,height:element.style.height};element.makeClipping();return new Effect.Scale(element,5,Object.extend({scaleContent:false,scaleX:false,afterFinishInternal:function(effect){new Effect.Scale(element,1,{scaleContent:false,scaleY:false,afterFinishInternal:function(effect){effect.element.hide().undoClipping().setStyle(oldStyle);}});}},arguments[1]||{}));};Effect.Morph=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element){throw (Effect._elementDoesNotExistError);}var options=Object.extend({style:{}},arguments[1]||{});if(!Object.isString(options.style)){this.style=$H(options.style);}else{if(options.style.include(":")){this.style=options.style.parseStyle();}else{this.element.addClassName(options.style);this.style=$H(this.element.getStyles());this.element.removeClassName(options.style);var css=this.element.getStyles();this.style=this.style.reject(function(style){return style.value==css[style.key];});options.afterFinishInternal=function(effect){effect.element.addClassName(effect.options.style);effect.transforms.each(function(transform){effect.element.style[transform.style]="";});};}}this.start(options);},setup:function(){function parseColor(color){if(!color||["rgba(0, 0, 0, 0)","transparent"].include(color)){color="#ffffff";}color=color.parseColor();return $R(0,2).map(function(i){return parseInt(color.slice(i*2+1,i*2+3),16);});}this.transforms=this.style.map(function(pair){var property=pair[0],value=pair[1],unit=null;if(value.parseColor("#zzzzzz")!="#zzzzzz"){value=value.parseColor();unit="color";}else{if(property=="opacity"){value=parseFloat(value);if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout)){this.element.setStyle({zoom:1});}}else{if(Element.CSS_LENGTH.test(value)){var components=value.match(/^([\+\-]?[0-9\.]+)(.*)$/);value=parseFloat(components[1]);unit=(components.length==3)?components[2]:null;}}}var originalValue=this.element.getStyle(property);return{style:property.camelize(),originalValue:unit=="color"?parseColor(originalValue):parseFloat(originalValue||0),targetValue:unit=="color"?parseColor(value):value,unit:unit};}.bind(this)).reject(function(transform){return((transform.originalValue==transform.targetValue)||(transform.unit!="color"&&(isNaN(transform.originalValue)||isNaN(transform.targetValue))));});},update:function(position){var style={},transform,i=this.transforms.length;while(i--){style[(transform=this.transforms[i]).style]=transform.unit=="color"?"#"+(Math.round(transform.originalValue[0]+(transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart()+(Math.round(transform.originalValue[1]+(transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart()+(Math.round(transform.originalValue[2]+(transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart():(transform.originalValue+(transform.targetValue-transform.originalValue)*position).toFixed(3)+(transform.unit===null?"":transform.unit);}this.element.setStyle(style,true);}});Effect.Transform=Class.create({initialize:function(tracks){this.tracks=[];this.options=arguments[1]||{};this.addTracks(tracks);},addTracks:function(tracks){tracks.each(function(track){track=$H(track);var data=track.values().first();this.tracks.push($H({ids:track.keys().first(),effect:Effect.Morph,options:{style:data}}));}.bind(this));return this;},play:function(){return new Effect.Parallel(this.tracks.map(function(track){var ids=track.get("ids"),effect=track.get("effect"),options=track.get("options");var elements=[$(ids)||$$(ids)].flatten();return elements.map(function(e){return new effect(e,Object.extend({sync:true},options));});}).flatten(),this.options);}});Element.CSS_PROPERTIES=$w("backgroundColor backgroundPosition borderBottomColor borderBottomStyle "+"borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth "+"borderRightColor borderRightStyle borderRightWidth borderSpacing "+"borderTopColor borderTopStyle borderTopWidth bottom clip color "+"fontSize fontWeight height left letterSpacing lineHeight "+"marginBottom marginLeft marginRight marginTop markerOffset maxHeight "+"maxWidth minHeight minWidth opacity outlineColor outlineOffset "+"outlineWidth paddingBottom paddingLeft paddingRight paddingTop "+"right textIndent top width wordSpacing zIndex");Element.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;String.__parseStyleElement=document.createElement("div");String.prototype.parseStyle=function(){var style,styleRules=$H();if(Prototype.Browser.WebKit){style=new Element("div",{style:this}).style;}else{String.__parseStyleElement.innerHTML='<div style="'+this+'"></div>';style=String.__parseStyleElement.childNodes[0].style;}Element.CSS_PROPERTIES.each(function(property){if(style[property]){styleRules.set(property,style[property]);}});if(Prototype.Browser.IE&&this.include("opacity")){styleRules.set("opacity",this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);}return styleRules;};if(document.defaultView&&document.defaultView.getComputedStyle){Element.getStyles=function(element){var css=document.defaultView.getComputedStyle($(element),null);return Element.CSS_PROPERTIES.inject({},function(styles,property){styles[property]=css[property];return styles;});};}else{Element.getStyles=function(element){element=$(element);var css=element.currentStyle,styles;styles=Element.CSS_PROPERTIES.inject({},function(results,property){results[property]=css[property];return results;});if(!styles.opacity){styles.opacity=element.getOpacity();}return styles;};}Effect.Methods={morph:function(element,style){element=$(element);new Effect.Morph(element,Object.extend({style:style},arguments[2]||{}));return element;},visualEffect:function(element,effect,options){element=$(element);var s=effect.dasherize().camelize(),klass=s.charAt(0).toUpperCase()+s.substring(1);new Effect[klass](element,options);return element;},highlight:function(element,options){element=$(element);new Effect.Highlight(element,options);return element;}};$w("fade appear grow shrink fold blindUp blindDown slideUp slideDown "+"pulsate shake puff squish switchOff dropOut").each(function(effect){Effect.Methods[effect]=function(element,options){element=$(element);Effect[effect.charAt(0).toUpperCase()+effect.substring(1)](element,options);return element;};});$w("getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles").each(function(f){Effect.Methods[f]=Element[f];});Element.addMethods(Effect.Methods);Effect.Scroll=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);var options=Object.extend({x:0,y:0,mode:"absolute"},arguments[1]||{});this.start(options);},setup:function(){if(this.options.continuous&&!this.element._ext){this.element.cleanWhitespace();this.element._ext=true;this.element.appendChild(this.element.firstChild);}this.originalLeft=this.element.scrollLeft;this.originalTop=this.element.scrollTop;if(this.options.mode=="absolute"){this.options.x-=this.originalLeft;this.options.y-=this.originalTop;}else{}},update:function(position){this.element.scrollLeft=this.options.x*position+this.originalLeft;this.element.scrollTop=this.options.y*position+this.originalTop;}});(function(){function l(p,n){var q=this,o;q.element=typeof p=="object"?p:document.getElementById(p);q.wrapper=q.element.parentNode;q.element.style.webkitTransitionProperty="-webkit-transform";q.element.style.webkitTransitionTimingFunction="cubic-bezier(0,0,0.25,1)";q.element.style.webkitTransitionDuration="0";q.element.style.webkitTransform=j+"0,0"+b;q.options={bounce:f,momentum:f,checkDOMChanges:true,topOnDOMChanges:false,hScrollbar:f,vScrollbar:f,fadeScrollbar:c||d||!a,shrinkScrollbar:c||d||!a,desktopCompatibility:false,overflow:"hidden",snap:false};if(typeof n=="object"){for(o in n){q.options[o]=n[o];}}if(q.options.desktopCompatibility){q.options.overflow="hidden";}q.wrapper.style.overflow=q.options.overflow;q.refresh();window.addEventListener("onorientationchange" in window?"orientationchange":"resize",q,false);if(a||q.options.desktopCompatibility){q.element.addEventListener(h,q,false);q.element.addEventListener(k,q,false);q.element.addEventListener(g,q,false);}if(q.options.checkDOMChanges){q.element.addEventListener("DOMSubtreeModified",q,false);}}l.prototype={x:0,y:0,enabled:true,handleEvent:function(o){var n=this;switch(o.type){case h:n.touchStart(o);break;case k:n.touchMove(o);break;case g:n.touchEnd(o);break;case"webkitTransitionEnd":n.transitionEnd();break;case"orientationchange":case"resize":n.refresh();break;case"DOMSubtreeModified":n.onDOMModified(o);break;}},onDOMModified:function(o){var n=this;if(o.target.parentNode!=n.element){return;}setTimeout(function(){n.refresh();},0);if(n.options.topOnDOMChanges&&(n.x!=0||n.y!=0)){n.scrollTo(0,0,"0");}},refresh:function(){var o=this,q=this.x,p=this.y,n;o.scrollWidth=o.wrapper.clientWidth;o.scrollHeight=o.wrapper.clientHeight;o.scrollerWidth=o.element.offsetWidth;o.scrollerHeight=o.element.offsetHeight;o.maxScrollX=o.scrollWidth-o.scrollerWidth;o.maxScrollY=o.scrollHeight-o.scrollerHeight;o.directionX=0;o.directionY=0;if(o.scrollX){if(o.maxScrollX>=0){q=0;}else{if(o.x<o.maxScrollX){q=o.maxScrollX;}}}if(o.scrollY){if(o.maxScrollY>=0){p=0;}else{if(o.y<o.maxScrollY){p=o.maxScrollY;}}}if(o.options.snap){o.maxPageX=-Math.floor(o.maxScrollX/o.scrollWidth);o.maxPageY=-Math.floor(o.maxScrollY/o.scrollHeight);n=o.snap(q,p);q=n.x;p=n.y;}if(q!=o.x||p!=o.y){o.setTransitionTime("0");o.setPosition(q,p,true);}o.scrollX=o.scrollerWidth>o.scrollWidth;o.scrollY=!o.scrollX||o.scrollerHeight>o.scrollHeight;if(o.options.hScrollbar&&o.scrollX){o.scrollBarX=o.scrollBarX||new m("horizontal",o.wrapper,o.options.fadeScrollbar,o.options.shrinkScrollbar);o.scrollBarX.init(o.scrollWidth,o.scrollerWidth);}else{if(o.scrollBarX){o.scrollBarX=o.scrollBarX.remove();}}if(o.options.vScrollbar&&o.scrollY&&o.scrollerHeight>o.scrollHeight){o.scrollBarY=o.scrollBarY||new m("vertical",o.wrapper,o.options.fadeScrollbar,o.options.shrinkScrollbar);o.scrollBarY.init(o.scrollHeight,o.scrollerHeight);}else{if(o.scrollBarY){o.scrollBarY=o.scrollBarY.remove();}}},setPosition:function(n,q,p){var o=this;o.x=n;o.y=q;o.element.style.webkitTransform=j+o.x+"px,"+o.y+"px"+b;if(!p){if(o.scrollBarX){o.scrollBarX.setPosition(o.x);}if(o.scrollBarY){o.scrollBarY.setPosition(o.y);}}},setTransitionTime:function(o){var n=this;o=o||"0";n.element.style.webkitTransitionDuration=o;if(n.scrollBarX){n.scrollBarX.bar.style.webkitTransitionDuration=o;n.scrollBarX.wrapper.style.webkitTransitionDuration=f&&n.options.fadeScrollbar?"300ms":"0";}if(n.scrollBarY){n.scrollBarY.bar.style.webkitTransitionDuration=o;n.scrollBarY.wrapper.style.webkitTransitionDuration=f&&n.options.fadeScrollbar?"300ms":"0";}},touchStart:function(p){var o=this,n;p.preventDefault();p.stopPropagation();if(!o.enabled){return;}o.scrolling=true;o.moved=false;o.dist=0;o.setTransitionTime("0");if(o.options.momentum||o.options.snap){n=new WebKitCSSMatrix(window.getComputedStyle(o.element).webkitTransform);if(n.e!=o.x||n.f!=o.y){document.removeEventListener("webkitTransitionEnd",o,false);o.setPosition(n.e,n.f);o.moved=true;}}o.touchStartX=a?p.changedTouches[0].pageX:p.pageX;o.scrollStartX=o.x;o.touchStartY=a?p.changedTouches[0].pageY:p.pageY;o.scrollStartY=o.y;o.scrollStartTime=p.timeStamp;o.directionX=0;o.directionY=0;},touchMove:function(t){var r=this,q=a?t.changedTouches[0].pageX:t.pageX,p=a?t.changedTouches[0].pageY:t.pageY,o=r.scrollX?q-r.touchStartX:0,n=r.scrollY?p-r.touchStartY:0,u=r.x+o,s=r.y+n;if(!r.scrolling){return;}t.stopPropagation();r.touchStartX=q;r.touchStartY=p;if(u>=0||u<r.maxScrollX){u=r.options.bounce?Math.round(r.x+o/3):(u>=0||r.maxScrollX>=0)?0:r.maxScrollX;}if(s>=0||s<r.maxScrollY){s=r.options.bounce?Math.round(r.y+n/3):(s>=0||r.maxScrollY>=0)?0:r.maxScrollY;}if(r.dist>5){r.setPosition(u,s);r.moved=true;r.directionX=o>0?-1:1;r.directionY=n>0?-1:1;}else{r.dist+=Math.abs(o)+Math.abs(n);}},touchEnd:function(v){var u=this,q=v.timeStamp-u.scrollStartTime,y=a?v.changedTouches[0]:v,w,x,p,n,o=0,t=u.x,s=u.y,r;if(!u.scrolling){return;}u.scrolling=false;if(!u.moved){u.resetPosition();if(a){w=y.target;while(w.nodeType!=1){w=w.parentNode;}w.style.pointerEvents="auto";x=document.createEvent("MouseEvents");x.initMouseEvent("click",true,true,v.view,1,y.screenX,y.screenY,y.clientX,y.clientY,v.ctrlKey,v.altKey,v.shiftKey,v.metaKey,0,null);x._fake=true;w.dispatchEvent(x);}return;}if(!u.options.snap&&q>250){u.resetPosition();return;}if(u.options.momentum){p=u.scrollX===true?u.momentum(u.x-u.scrollStartX,q,u.options.bounce?-u.x+u.scrollWidth/5:-u.x,u.options.bounce?u.x+u.scrollerWidth-u.scrollWidth+u.scrollWidth/5:u.x+u.scrollerWidth-u.scrollWidth):{dist:0,time:0};n=u.scrollY===true?u.momentum(u.y-u.scrollStartY,q,u.options.bounce?-u.y+u.scrollHeight/5:-u.y,u.options.bounce?(u.maxScrollY<0?u.y+u.scrollerHeight-u.scrollHeight:0)+u.scrollHeight/5:u.y+u.scrollerHeight-u.scrollHeight):{dist:0,time:0};o=Math.max(Math.max(p.time,n.time),1);t=u.x+p.dist;s=u.y+n.dist;}if(u.options.snap){r=u.snap(t,s);t=r.x;s=r.y;o=Math.max(r.time,o);}u.scrollTo(t,s,o+"ms");},transitionEnd:function(){var n=this;document.removeEventListener("webkitTransitionEnd",n,false);n.resetPosition();},resetPosition:function(){var n=this,p=n.x,o=n.y;if(n.x>=0){p=0;}else{if(n.x<n.maxScrollX){p=n.maxScrollX;}}if(n.y>=0||n.maxScrollY>0){o=0;}else{if(n.y<n.maxScrollY){o=n.maxScrollY;}}if(p!=n.x||o!=n.y){n.scrollTo(p,o);}else{if(n.moved){n.onScrollEnd();n.moved=false;}if(n.scrollBarX){n.scrollBarX.hide();}if(n.scrollBarY){n.scrollBarY.hide();}}},snap:function(n,q){var o=this,p;if(o.directionX>0){n=Math.floor(n/o.scrollWidth);}else{if(o.directionX<0){n=Math.ceil(n/o.scrollWidth);}else{n=Math.round(n/o.scrollWidth);}}o.pageX=-n;n=n*o.scrollWidth;if(n>0){n=o.pageX=0;}else{if(n<o.maxScrollX){o.pageX=o.maxPageX;n=o.maxScrollX;}}if(o.directionY>0){q=Math.floor(q/o.scrollHeight);}else{if(o.directionY<0){q=Math.ceil(q/o.scrollHeight);}else{q=Math.round(q/o.scrollHeight);}}o.pageY=-q;q=q*o.scrollHeight;if(q>0){q=o.pageY=0;}else{if(q<o.maxScrollY){o.pageY=o.maxPageY;q=o.maxScrollY;}}p=Math.round(Math.max(Math.abs(o.x-n)/o.scrollWidth*500,Math.abs(o.y-q)/o.scrollHeight*500));return{x:n,y:q,time:p};},scrollTo:function(o,n,q){var p=this;if(p.x==o&&p.y==n){p.resetPosition();return;}p.moved=true;p.setTransitionTime(q||"350ms");p.setPosition(o,n);if(q==="0"||q=="0s"||q=="0ms"){p.resetPosition();}else{document.addEventListener("webkitTransitionEnd",p,false);}},scrollToPage:function(p,o,r){var q=this,n;if(!q.options.snap){q.pageX=-Math.round(q.x/q.scrollWidth);q.pageY=-Math.round(q.y/q.scrollHeight);}if(p=="next"){p=++q.pageX;}else{if(p=="prev"){p=--q.pageX;}}if(o=="next"){o=++q.pageY;}else{if(o=="prev"){o=--q.pageY;}}p=-p*q.scrollWidth;o=-o*q.scrollHeight;n=q.snap(p,o);p=n.x;o=n.y;q.scrollTo(p,o,r||"500ms");},scrollToElement:function(o,q){o=typeof o=="object"?o:this.element.querySelector(o);if(!o){return;}var p=this,n=p.scrollX?-o.offsetLeft:0,r=p.scrollY?-o.offsetTop:0;if(n>=0){n=0;}else{if(n<p.maxScrollX){n=p.maxScrollX;}}if(r>=0){r=0;}else{if(r<p.maxScrollY){r=p.maxScrollY;}}p.scrollTo(n,r,q);},momentum:function(u,o,s,n){var r=2.5,t=1.2,p=Math.abs(u)/o*1000,q=p*p/r/1000,v=0;if(u>0&&q>s){p=p*s/q/r;q=s;}else{if(u<0&&q>n){p=p*n/q/r;q=n;}}q=q*(u<0?-1:1);v=p/t;return{dist:Math.round(q),time:Math.round(v)};},onScrollEnd:function(){},destroy:function(n){var o=this;window.removeEventListener("onorientationchange" in window?"orientationchange":"resize",o,false);o.element.removeEventListener(h,o,false);o.element.removeEventListener(k,o,false);o.element.removeEventListener(g,o,false);document.removeEventListener("webkitTransitionEnd",o,false);if(o.options.checkDOMChanges){o.element.removeEventListener("DOMSubtreeModified",o,false);}if(o.scrollBarX){o.scrollBarX=o.scrollBarX.remove();}if(o.scrollBarY){o.scrollBarY=o.scrollBarY.remove();}if(n){o.wrapper.parentNode.removeChild(o.wrapper);}return null;}};function m(n,s,r,o){var q=this,p;q.dir=n;q.fade=r;q.shrink=o;q.uid=++e;q.bar=document.createElement("div");p="position:absolute;top:0;left:0;-webkit-transition-timing-function:cubic-bezier(0,0,0.25,1);pointer-events:none;-webkit-transition-duration:0;-webkit-transition-delay:0;-webkit-transition-property:-webkit-transform;z-index:10;background:rgba(0,0,0,0.5);-webkit-transform:"+j+"0,0"+b+";"+(n=="horizontal"?"-webkit-border-radius:3px 2px;min-width:6px;min-height:5px":"-webkit-border-radius:2px 3px;min-width:5px;min-height:6px");q.bar.setAttribute("style",p);q.wrapper=document.createElement("div");p="-webkit-mask:-webkit-canvas(scrollbar"+q.uid+q.dir+");position:absolute;z-index:10;pointer-events:none;overflow:hidden;opacity:0;-webkit-transition-duration:"+(r?"300ms":"0")+";-webkit-transition-delay:0;-webkit-transition-property:opacity;"+(q.dir=="horizontal"?"bottom:2px;left:2px;right:7px;height:5px":"top:2px;right:2px;bottom:7px;width:5px;");q.wrapper.setAttribute("style",p);q.wrapper.appendChild(q.bar);s.appendChild(q.wrapper);}m.prototype={init:function(n,p){var q=this,o;if(q.dir=="horizontal"){if(q.maxSize!=q.wrapper.offsetWidth){q.maxSize=q.wrapper.offsetWidth;o=document.getCSSCanvasContext("2d","scrollbar"+q.uid+q.dir,q.maxSize,5);o.fillStyle="rgb(0,0,0)";o.beginPath();o.arc(2.5,2.5,2.5,Math.PI/2,-Math.PI/2,false);o.lineTo(q.maxSize-2.5,0);o.arc(q.maxSize-2.5,2.5,2.5,-Math.PI/2,Math.PI/2,false);o.closePath();o.fill();}}else{if(q.maxSize!=q.wrapper.offsetHeight){q.maxSize=q.wrapper.offsetHeight;o=document.getCSSCanvasContext("2d","scrollbar"+q.uid+q.dir,5,q.maxSize);o.fillStyle="rgb(0,0,0)";o.beginPath();o.arc(2.5,2.5,2.5,Math.PI,0,false);o.lineTo(5,q.maxSize-2.5);o.arc(2.5,q.maxSize-2.5,2.5,0,Math.PI,false);o.closePath();o.fill();}}q.size=Math.max(Math.round(q.maxSize*q.maxSize/p),6);q.maxScroll=q.maxSize-q.size;q.toWrapperProp=q.maxScroll/(n-p);q.bar.style[q.dir=="horizontal"?"width":"height"]=q.size+"px";},setPosition:function(o){var n=this;if(n.wrapper.style.opacity!="1"){n.show();}o=Math.round(n.toWrapperProp*o);if(o<0){o=n.shrink?o+o*3:0;if(n.size+o<7){o=-n.size+6;}}else{if(o>n.maxScroll){o=n.shrink?o+(o-n.maxScroll)*3:n.maxScroll;if(n.size+n.maxScroll-o<7){o=n.size+n.maxScroll-6;}}}o=n.dir=="horizontal"?j+o+"px,0"+b:j+"0,"+o+"px"+b;n.bar.style.webkitTransform=o;},show:function(){if(f){this.wrapper.style.webkitTransitionDelay="0";}this.wrapper.style.opacity="1";},hide:function(){if(f){this.wrapper.style.webkitTransitionDelay="350ms";}this.wrapper.style.opacity="0";},remove:function(){this.wrapper.parentNode.removeChild(this.wrapper);return null;}};var f=("WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix()),c=(/iphone/gi).test(navigator.appVersion),d=(/ipad/gi).test(navigator.appVersion),i=(/android/gi).test(navigator.appVersion),a=c||d||i,h=a?"touchstart":"mousedown",k=a?"touchmove":"mousemove",g=a?"touchend":"mouseup",j="translate"+(f?"3d(":"("),b=f?",0)":")",e=0;window.iScroll=l;})();NYTD.MOTH=function(mothContainerId,visibleAtOnce,scrollIncrementAmount,alternateImageSource){if(window.browser&&(window.browser instanceof InsideNYTimesBrowser)){return;}var totalColumns,imagesLoaded=false,firstRowCells=$$("#"+mothContainerId+" tr:first-child td"),allCells=$$("#"+mothContainerId+" td");var itemIndex=0;var imgSrc=alternateImageSource||"http://graphics8.nytimes.com/images/global/buttons/";var distance=$$("#insideNYTimesBrowser td").first().offsetWidth+1;var images={leftOff:"moth_reverse_off.gif",leftOn:"moth_reverse.gif",rightOff:"moth_forward_off.gif",rightOn:"moth_forward.gif"};var isTouch=(typeof document.ontouchmove=="object")||location.hash.indexOf("isTouch")>0;this.load=function(){allCells.invoke("removeClassName","hidden");totalColumns=firstRowCells.length;if(isTouch){this.addSwipe();}else{this.activateButtons();this.showButtons();}$("insideNYTimesScrollWrapper").scrollLeft=0;};function tooFarRight(){return itemIndex+visibleAtOnce>=totalColumns;}function tooFarLeft(){return itemIndex==0;}function loadUnloadedImages(){if(imagesLoaded){return;}$$("#"+mothContainerId+" td").each(function(td){var span=td.select("span.img[src]")[0];if(span){var image=new Element("img",{src:span.getAttribute("src"),alt:span.getAttribute("alt"),height:span.getAttribute("height"),width:span.getAttribute("width")});span.up("a").insert(image);}if(isTouch){td.removeClassName("hidden");}});imagesLoaded=true;}this.activateButtons=function(){var reverse=$("mothReverse"),forward=$("mothForward");if(reverse&&forward){reverse.observe("click",this.goLeft.bind(this));forward.observe("click",this.goRight.bind(this));}};this.disableButtons=function(){var reverse=$("mothReverse"),forward=$("mothForward");if(reverse&&forward){reverse.stopObserving("click");forward.stopObserving("click");}};this.showButtons=function(){var reverse=$("mothReverse"),forward=$("mothForward");if(reverse&&forward){reverse.src=tooFarLeft()?imgSrc+images.leftOff:imgSrc+images.leftOn;forward.src=tooFarRight()?imgSrc+images.rightOff:imgSrc+images.rightOn;}};this.goRight=function(){if(tooFarRight()){return;}this.disableButtons();itemIndex+=scrollIncrementAmount;this.update("right");};this.goLeft=function(){if(tooFarLeft()){return;}this.disableButtons();itemIndex-=scrollIncrementAmount;this.update("left");};this.update=function(direction){loadUnloadedImages();var incrementAmount=(direction=="right")?distance:-distance;var that=this;new Effect.Scroll($("insideNYTimesScrollWrapper"),{x:incrementAmount,y:0,mode:"relative",duration:0.4,afterFinish:function(){that.activateButtons();}});this.showButtons();};this.addSwipe=function(){var nav=$("insideNYTimesHeader").select(".navigation")[0];if(nav){nav.remove();}var moth=$(mothContainerId);moth.style.width=moth.getWidth()+"px";loadUnloadedImages();var sc=new iScroll(mothContainerId,{scrollbarClass:"mothTouchScroll",vScrollBar:false,hScrollBar:true,checkDOMChanges:false});};};Event.observe(window,"load",function(){var insideNYT=$("insideNYTimesBrowser");if(insideNYT){var count=insideNYT.down(1).select("td").select(function(cell){return cell.getStyle("display")!="none";}).length;var moth=new NYTD.MOTH("insideNYTimesBrowser",count,1).load();}});(function(){var Wire={init:function(){this.est=this.checkTimeZone();this.element=$("wireContent");if(this.element){this.timestamps=this.element.select("li span");this.updateTimesStamps();new PeriodicalExecuter(this.updateTimesStamps.bind(this),30);}},checkTimeZone:function(){var n=new Date();var d1=new Date(n.getFullYear(),0,1,0,0,0,0);var d2=new Date(n.getFullYear(),6,1,0,0,0,0);var tm=d1.toGMTString();var d3=new Date(tm.substring(0,tm.lastIndexOf(" ")-1));var tm=d2.toGMTString();var d4=new Date(tm.substring(0,tm.lastIndexOf(" ")-1));var hDiffStd=(d1-d3)/(1000*60*60);var hDiffDST=(d2-d4)/(1000*60*60);return((n.getTimezoneOffset()/60)+hDiffStd);},updateTimesStamps:function(){for(var i=0,span,gmt;span=this.timestamps[i];++i){gmt=span.getAttribute("data-gmt");if(gmt){span.innerHTML=this.readableTimestampFromGMT(gmt);}else{span.innerHTML=this.readableTimestampFromET(span.title)||span.title;}}},readableTimestampFromGMT:function(gmtTimestamp){var now=+new Date()/1000;gmtTimestamp=parseInt(gmtTimestamp,10);var diff=now-gmtTimestamp;var time=new Date(gmtTimestamp);return this.readableTimestamp(time,diff);},readableTimestampFromET:function(timestamp){var tsFull=this.timestampToDate(timestamp)||0;var now=new Date();now.setHours(now.getHours()+this.est);var dif=(now.getTime()-tsFull.getTime())/1000;return this.readableTimestamp(tsFull,dif);},readableTimestamp:function(time,diff){switch(true){case (diff<60):return"Moments ago";case (diff<120):return"1 minute ago";case (diff<3600):return Math.round(diff/60)+" minutes ago";break;default:var tsHour=time.getHours();var tsMin=time.getMinutes();tsMin=(tsMin<10)?"0"+tsMin:tsMin;var tsText=((tsHour==0)?"12":((tsHour>12)?(tsHour-12):tsHour))+":"+tsMin+" "+((time.getHours()>11)?"PM":"AM")+" ET";return tsText;}return"";},timestampToDate:function(ts){if(ts!=undefined){return new Date(ts.replace(/-/g,"/"));}else{return new Date();}}};Wire.init();})();ArticleCommentCounts=(function(){var that={};that.apply=function(){getLinkFields().each(addLink);getCountFields().each(addCount);};function getCountFields(){return $$(".commentCountText");}function getLinkFields(){return $$(".commentCountLink");}function addLink(node){var articleId=getArticleId(node);if(nodeIsBlank(node)){if(commentInfoExistsFor(articleId)){addContent(node,getPostCommentLink);addContent(node,getDivider);addContent(node,getReadAllCommentsLink);}else{if(hasOverflowUrlInAttribute(node)){addContent(node,getBailOutPostCommentLink);}}}}function addCount(node){if(nodeIsBlank(node)){addContent(node,getCountNode);}}function getPostCommentLink(data,node){return(data.commentsEnabled)?link(getOverflowUrl(node)+"#postComment","Post a Comment"):emptyNode();}function getBailOutPostCommentLink(data,node){return link(getOverflowUrl(node),"Comments");}function getReadCommentsLinkText(data){return(data.commentsEnabled)?"Read ":"Read Comments ";}function getReadAllCommentsLink(data,node){return hasComments(data)?link(getOverflowUrl(node),getReadCommentsLinkText(data)+getCountText(data)):emptyNode();}function getDivider(data){return(data.commentsEnabled&&hasComments(data))?document.createTextNode(" | "):emptyNode();}function getCountNode(data){return document.createTextNode(getCountText(data));}function getArticleId(node){return node.getAttribute("articleid").strip();}function getCommentData(articleId){if(commentInfoExistsFor(articleId)){return NYTArticleCommentCounts[articleId];}}function commentInfoExistsFor(articleId){return(articleId&&NYTArticleCommentCounts&&NYTArticleCommentCounts[articleId]);}function hasOverflowUrlInAttribute(node){return !!node.getAttribute("overflowurl");}function getOverflowUrl(node){return node.getAttribute("overflowurl");}function getCountText(data){return hasComments(data)?"("+data.count+")":"";}function addContent(parent,childBuilder){var articleId=getArticleId(parent);parent.appendChild(childBuilder(getCommentData(articleId),parent));}function hasComments(data){return typeof data!="undefined"&&typeof data.count!="undefined"&&data.count>0;}function nodeIsBlank(node){return(node.innerHTML=="");}function link(url,text){return new Element("a",{href:url}).update(text);}function emptyNode(){return document.createTextNode("");}return that;})();if(window["console"]===undefined){window.console={log:function(){}};}NYTD.SearchSuggest={config:{SearchForm:"searchForm",Wrapper:"toolbarSearch",SearchInput:"hpSearchQuery",ResultsContainer:"homepageAutosuggest",ActiveSearchClass:"toolbarSearchActive",RemoteAd:"HPSiteSearch",RemoteAdPage:"homepage.nytimes.com/search",ServiceURL:"/suggest",SearchURL:"http://query.nytimes.com/search/sitesearch",SuggestionTemplate:new Template('<li><a href="#{url}?query=#{suggestion_query}" title="#{suggestion_title}">#{suggestion}</a></li>')},initialize:function(){var config=NYTD.SearchSuggest.config;var input=$(config.SearchInput);if(!input){return;}var formElem=document.getElementById(config.SearchForm);formElem.parentNode.innerHTML+='<div id="toolbarAutosuggest" style="display:none"><ul id="toolbarAutosuggestions" class="flush">< /ul></div>';this.searchForm=$(config.SearchForm);this.wrapper=$(config.Wrapper);this.element=$(config.SearchInput);this.container=$("toolbarAutosuggest");this.suggestionsContainer=$("toolbarAutosuggestions");this.suggestionTemplate=config.SuggestionTemplate;this.activeClass=config.ActiveSearchClass;this.url=config.ServiceURL;this.searchURL=config.SearchURL;this.urls=[];this.selectedIndex=null;this.entryCount=4;this.shadow=null;this.adShow=$("toolbarSearchContainer").hasClassName("toolbarSearchContainer-withad");this.adSpot=$(config.RemoteAd);this.element.setAttribute("autocomplete","off");this.searchForm.setAttribute("autocomplete","off");this.element.observe("keydown",this.onKeyPress.bindAsEventListener(this));this.element.observe("blur",this.hide.bindAsEventListener(this));this.searchForm.observe("mousedown",this.raiseSearchDisplay.bindAsEventListener(this));},onKeyPress:function(event){if(!this.wrapper.hasClassName(this.activeClass)){this.raiseSearchDisplay();}switch(event.keyCode){case Event.KEY_TAB:case Event.KEY_RETURN:this.selectEntry(event);case Event.KEY_ESC:this.hide();case 16:case 17:case 18:case 224:case Event.KEY_LEFT:case Event.KEY_RIGHT:return;case Event.KEY_UP:case Event.KEY_DOWN:if(this.container.visible()){this.markSelected(event.keyCode==Event.KEY_UP);Event.stop(event);}return;}if(this.observer){clearTimeout(this.observer);}this.observer=setTimeout(this.updateResults.bind(this),10);},onHover:function(event){if(this.selectedIndex!=null){this.suggestionsContainer.childNodes[this.selectedIndex].removeClassName("selected");}var selected=Event.findElement(event,"LI");if(!selected){return;}this.selectedIndex=selected.autocompleteIndex;this.suggestionsContainer.childNodes[this.selectedIndex].addClassName("selected");},onMouseout:function(event){if(this.selectedIndex!=null){this.suggestionsContainer.childNodes[this.selectedIndex].removeClassName("selected");this.selectedIndex=null;}},selectEntry:function(event){if(this.selectedIndex!=null){window.location.href=this.urls[this.selectedIndex];Event.stop(event);}},markSelected:function(markUp){var items=this.suggestionsContainer.select("li");if(this.selectedIndex==null||this.selectedIndex==undefined){this.selectedIndex=0;}else{items[this.selectedIndex].removeClassName("selected");this.selectedIndex=(markUp)?(this.selectedIndex==0)?this.entryCount-1:this.selectedIndex-1:(this.selectedIndex==this.entryCount-1)?0:this.selectedIndex+1;}if(items&&items[this.selectedIndex]!=undefined){items[this.selectedIndex].addClassName("selected");}},show:function(){this.container.appear({duration:0.2});this.showAd();},hide:function(event){var event=event;var that=this;this.selectedIndex=null;if(!this.container.visible()){if(typeof event!="undefined"){this.lowerSearchDisplay();}return;}this.container.fade({duration:0.2,afterFinish:function(){if(typeof event!="undefined"){that.lowerSearchDisplay();}}});this.hideAd();},updateResults:function(){if(this.element.value.length<2){this.hide();return;}new Ajax.Request(this.url,{method:"get",parameters:{query:this.element.value},onComplete:this.buildResults.bind(this),onCreate:this.createLoadingView.bind(this),onSuccess:this.removeLoadingView.bind(this),onFailure:this.removeLoadingView.bind(this)});},createLoadingView:function(){this.element.addClassName("loading");},removeLoadingView:function(){this.element.removeClassName("loading");},refreshAd:function(){if(!this.adShow){return;}var raScript=new Element("script",{"src":"http://www.nytimes.com/adx/bin/adx_remote.html?type=fastscript"+"&page="+this.config.RemoteAdPage+"&posall=HPSiteSearch,ADX_CLIENTSIDE"+"&query=qstring&keywords=?"});$$("head")[0].appendChild(raScript);if(typeof adxpos_HPSiteSearch!="undefined"){this.adSpot.innerHTML=(adxads[adxpos_HPSiteSearch]);}else{var that=this;window.setTimeout(function(){if(typeof adxpos_HPSiteSearch!="undefined"){that.adSpot.innerHTML=(adxads[adxpos_HPSiteSearch]);}},900);}},hideAd:function(){if(!this.adShow){return;}this.adSpot.fade({duration:0.2});},showAd:function(){if(!this.adShow){return;}this.adSpot.appear({duration:0.2});},raiseSearchDisplay:function(){this.wrapper.addClassName(this.activeClass);},lowerSearchDisplay:function(event){this.wrapper.removeClassName(this.activeClass);},buildResults:function(response){var json=response.responseText.evalJSON()||false;if(!json){this.hide();return;}var suggestions=json[0];var suggestionsCount=(suggestions)?suggestions.length:0;if(suggestionsCount>this.entryCount){suggestionsCount=this.entryCount;}if(!suggestions||suggestionsCount==0){this.hide();return;}var re=new RegExp("("+this.element.value+")","i");if(suggestionsCount>0){var html=[];var template=this.suggestionTemplate;var suggestionQuery;this.urls=[];this.selectedIndex==null;this.refreshAd();for(var i=0;i<suggestionsCount;i++){suggestionQuery=encodeURI(suggestions[i]);suqqestionURL=this.searchURL+"?query="+suggestionQuery;this.urls.push(suqqestionURL);html.push(template.evaluate({url:this.searchURL,suggestion_query:suggestionQuery,suggestion_title:suggestions[i],suggestion:suggestions[i].replace(re,"<strong>$1</strong>")}));}this.suggestionsContainer.show().update(html.join(""));var that=this;this.suggestionsContainer.select("a").each(function(link){link.observe("click",function(){that.element.value=link.getAttribute("title");});link.observe("mouseover",function(){this.up("li").addClassName("selected");});link.observe("mouseout",function(){this.up("li").removeClassName("selected");});});}else{this.suggestionsContainer.hide();}this.show();}};NYTD.SearchSuggest.initialize();Event.observe(window,"load",function(){var mobile=new RegExp("nyt-mobile=([^;]+)").test(unescape(document.cookie))?RegExp.$1:null;if(mobile==0){var body=document.getElementsByTagName("body")[0];var ft=document.createElement("div");ft.id="mobileFooter";ft.innerHTML="<span>Go to the NYTimes.com Mobile Site &raquo;</span>";ft.addEventListener("click",function(){document.cookie="nyt-mobile=;path=/;domain=.nytimes.com;expires=Sat, 01-Jan-2000 00:00:00 GMT";window.location="http://mobile.nytimes.com/";},false);body.style.paddingBottom=0;body.appendChild(ft);}});(function(){ArticleCommentCounts.apply();}());
if(brightcove==undefined){var brightcove={};brightcove.getExperience=function(){alert("Please import APIModules_all.js in order to use the API.");};}
if(brightcove.experiences==undefined){brightcove.servicesURL='http://c.brightcove.com/services';brightcove.cdnURL='http://admin.brightcove.com';brightcove.secureCDNURL='https://sadmin.brightcove.com';brightcove.secureServicesURL='https://secure.brightcove.com/services';brightcove.pubHost='c.$pubcode$.$zoneprefix$$zone$';brightcove.pubSecureHost='secure.$pubcode$.$zoneprefix$$zone$';brightcove.pubSubdomain='ariessaucetown.local';brightcove.experiences={};brightcove.experienceObjects={};brightcove.timeouts={};brightcove.flashTimeoutInterval=5000;brightcove.htmlTimeoutInterval=10000;brightcove.experienceNum=0;brightcove.majorVersion=9;brightcove.majorRevision=0;brightcove.minorRevision=28;brightcove.servlet={AS3:"federated_f9",HTML:"htmlFederated"};brightcove.playerType={FLASH:"flash",HTML:"html",INSTALLER:"installer",NO_SUPPORT:"nosupport"};brightcove.errorCodes={UNKNOWN:0,DOMAIN_RESTRICTED:1,GEO_RESTRICTED:2,INVALID_ID:3,NO_CONTENT:4,UNAVAILABLE_CONTENT:5,UPGRADE_REQUIRED_FOR_VIDEO:6,UPGRADE_REQUIRED_FOR_PLAYER:7,SERVICE_UNAVAILABLE:8};brightcove.defaultParam={};brightcove.defaultParam.width='100%';brightcove.defaultParam.height='100%';brightcove.defaultFlashParam={};brightcove.defaultFlashParam.allowScriptAccess='always';brightcove.defaultFlashParam.allowFullScreen='true';brightcove.defaultFlashParam.seamlessTabbing=false;brightcove.defaultFlashParam.swliveconnect=true;brightcove.defaultFlashParam.wmode='window';brightcove.defaultFlashParam.quality='high';brightcove.defaultFlashParam.bgcolor='#999999';brightcove.isIE=(window.ActiveXObject!=undefined);brightcove.userAgent=navigator.userAgent;var brightcoveJS=brightcove;brightcove.createExperiences=function(pEvent,pElementID){var experiences=[];var params;var experience;var requestedMinorRevision;var requestedMajorVersion;var flashSupport=brightcove.checkFlashSupport();var htmlSupport=brightcove.checkHtmlSupport();if(pElementID!=null){experiences.push(document.getElementById(pElementID));}else{experiences=brightcove.collectExperiences();}
if(brightcove.isIE){params=document.getElementsByTagName('param');}
var urlParams=brightcove.cacheUrlParams();var numExperiences=experiences.length;for(var i=0;i<numExperiences;i++){experience=experiences[i];experience=brightcove.copyDefaultParams(experience);experience=brightcove.copySnippetParams(experience,params);experience=brightcove.copyUrlParams(experience,urlParams,numExperiences);var playerType=brightcove.determinePlayerType(experience,flashSupport,htmlSupport);var secureConnections=(experience.params.secureConnections=="true");if(playerType==brightcove.playerType.HTML){secureConnections=false;}
if(playerType==brightcove.playerType.NO_SUPPORT){brightcove.renderInstallGif(experience,secureConnections);brightcove.reportUpgradeRequired(experience);continue;}
if(playerType==brightcove.playerType.HTML){delete experience.params.linkBaseURL;}
var file=brightcove.generateRequestUrl(experience,playerType,secureConnections);brightcove.renderExperience(experience,file,playerType,secureConnections);}};brightcove.collectExperiences=function(){var experiences=[];var allObjects=document.getElementsByTagName('object');var numObjects=allObjects.length;for(var i=0;i<numObjects;i++){if(/\bBrightcoveExperience\b/.test(allObjects[i].className)){if(allObjects[i].type!='application/x-shockwave-flash'){experiences.push(allObjects[i]);}}}
return experiences;};brightcove.cacheUrlParams=function(){var urlParams={};urlParams.playerKey=brightcove.getParameter("bckey");urlParams.escapedPlayerKey=urlParams.playerKey;if(urlParams.playerKey){urlParams.escapedPlayerKey=urlParams.playerKey.split(",");for(var k in urlParams.escapedPlayerKey){urlParams.escapedPlayerKey[k]=brightcove.encode(urlParams.escapedPlayerKey[k]);}
urlParams.escapedPlayerKey=urlParams.escapedPlayerKey.join(",");}
urlParams.playerID=brightcove.getParameter("bcpid");urlParams.titleID=brightcove.getParameter("bctid");urlParams.lineupID=brightcove.getParameter("bclid");urlParams.autoStart=brightcove.getParameter("autoStart");urlParams.debuggerID=brightcove.getParameter("debuggerID");return urlParams;};brightcove.copyDefaultParams=function(experience){if(!experience.params)experience.params={};if(!experience.flashParams)experience.flashParams={};for(var i in brightcove.defaultParam){experience.params[i]=brightcove.defaultParam[i];}
for(var j in brightcove.defaultFlashParam){experience.flashParams[j]=brightcove.defaultFlashParam[j];}
if(experience.id.length>0){experience.params.flashID=experience.id;}else{experience.id=experience.params.flashID='bcExperienceObj'+(brightcove.experienceNum++);}
return experience;};brightcove.copySnippetParams=function(experience,params){if(!brightcove.isIE){params=experience.getElementsByTagName('param');}
var numParams=params.length;var param;for(var j=0;j<numParams;j++){param=params[j];if(brightcove.isIE&&param.parentNode.id!=experience.id){continue;}
experience.params[param.name]=param.value;}
if(experience.params.bgcolor!=undefined)experience.flashParams.bgcolor=experience.params.bgcolor;if(experience.params.wmode!=undefined)experience.flashParams.wmode=experience.params.wmode;if(experience.params.seamlessTabbing!=undefined)experience.flashParams.seamlessTabbing=experience.params.seamlessTabbing;return experience;};brightcove.copyUrlParams=function(experience,urlParams,numExperiences){if(experience.params.autoStart==undefined&&urlParams.autoStart!=undefined){experience.params.autoStart=urlParams.autoStart;}
if(urlParams.debuggerID!=undefined){experience.params.debuggerID=urlParams.debuggerID;}
var overrideContent=(urlParams.playerID.length<1&&urlParams.playerKey.length<1)||(urlParams.playerID==experience.params.playerID)||(urlParams.playerKey==experience.params.playerKey)||(urlParams.escapedPlayerKey==experience.params.playerKey);if(overrideContent){if(urlParams.titleID.length>0){experience.params.videoID=urlParams.titleID;experience.params["@videoPlayer"]=urlParams.titleID;experience.params.autoStart=(experience.params.autoStart!="false"&&urlParams.autoStart!="false");}
if(urlParams.lineupID.length>0){experience.params.lineupID=urlParams.lineupID;}}
return experience;};brightcove.determinePlayerType=function(experience,flashSupport,htmlSupport){if(flashSupport==null&&htmlSupport==false){return brightcove.playerType.NO_SUPPORT;}
if(experience.params.forceHTML5){return brightcove.playerType.HTML;}
if(flashSupport!=null){if(brightcove.isFlashVersionSufficient(experience,flashSupport)){return brightcove.playerType.FLASH;}else{return brightcove.playerType.INSTALLER;}}
if(htmlSupport){return brightcove.playerType.HTML;}
return brightcove.playerType.NO_SUPPORT;};brightcove.isFlashVersionSufficient=function(experience,flashSupport){if(flashSupport==null)return false;var setMajorVersion=false;var requestedMajorVersion;var requestedMajorRevision;var requestedMinorRevision;if(experience.params.majorVersion!=undefined){requestedMajorVersion=parseInt(experience.params.majorVersion,10);setMajorVersion=true;}else{requestedMajorVersion=brightcove.majorVersion;}
if(experience.params.majorRevision!=undefined){requestedMajorRevision=parseInt(experience.params.majorRevision,10);}else{if(setMajorVersion){requestedMajorRevision=0;}else{requestedMajorRevision=brightcove.majorRevision;}}
if(experience.params.minorRevision!=undefined){requestedMinorRevision=parseInt(experience.params.minorRevision,10);}else{if(setMajorVersion){requestedMinorRevision=0;}else{requestedMinorRevision=brightcove.minorRevision;}}
if(flashSupport.majorVersion>requestedMajorVersion||(flashSupport.majorVersion==requestedMajorVersion&&flashSupport.majorRevision>requestedMajorRevision)||(flashSupport.majorVersion==requestedMajorVersion&&flashSupport.majorRevision==requestedMajorRevision&&flashSupport.minorRevision>=requestedMinorRevision)){return true;}
return false;};brightcove.generateRequestUrl=function(experience,playerType,secureConnections){var file;if(playerType==brightcove.playerType.INSTALLER){file=brightcove.cdnURL+"/viewer/playerProductInstall.swf";var MMPlayerType=brightcove.isIE?"ActiveX":"PlugIn";document.title=document.title.slice(0,47)+" - Flash Player Installation";var MMdoctitle=document.title;file+="?&MMredirectURL="+window.location+'&MMplayerType='+MMPlayerType+'&MMdoctitle='+MMdoctitle;brightcove.reportUpgradeRequired(experience);}else{if(secureConnections){file=brightcove.getPubURL(brightcove.secureServicesURL,brightcove.pubSecureHost,experience.params.pubCode);}else{file=brightcove.getPubURL(brightcove.servicesURL,brightcove.pubHost,experience.params.pubCode);}
var servlet=(playerType==brightcove.playerType.HTML)?brightcove.servlet.HTML:brightcove.servlet.AS3;file+=('/viewer/'+servlet+'?'+brightcove.getOverrides());for(var config in experience.params){file+='&'+encodeURIComponent(config)+'='+encodeURIComponent(experience.params[config]);}}
return file;};brightcove.renderInstallGif=function(experience,secureConnections){var containerID='_container'+experience.id;var container=brightcove.createElement('span');if(experience.params.height.charAt(experience.params.height.length-1)=="%"){container.style.display='block';}else{container.style.display='inline-block';}
container.id=containerID;var cdnURL=secureConnections?brightcove.secureCDNURL:brightcove.cdnURL;var linkHTML="<a href='http://www.adobe.com/go/getflash/' target='_blank'><img src='"+cdnURL+"/viewer/upgrade_flash_player2.gif' alt='Get Flash Player' width='314' height='200' border='0'></a>";experience.parentNode.replaceChild(container,experience);document.getElementById(containerID).innerHTML=linkHTML;};brightcove.renderExperience=function(experience,file,playerType,secureConnections){var experienceElement;var experienceID=experience.id;var container;var containerID='_container'+experienceID;var timeout=brightcove.flashTimeoutInterval;if(experience.params.playerKey||experience.params.playerID||experience.params.playerId||experience.params.playerid){brightcove.experienceObjects[experienceID]=experience;if(playerType==brightcove.playerType.HTML){timeout=brightcove.htmlTimeoutInterval;file+="&startTime="+new Date().getTime();file+="&refURL="+(window.document.referrer?window.document.referrer:'not available');if(brightcove.getParameter("unminified")=="true"){file+="&unminified=true";}
experienceElement=brightcove.createElement('iframe');experienceElement.width=experience.params.width;experienceElement.height=experience.params.height;experienceElement.className=experience.className;experienceElement.frameborder=0;experienceElement.scrolling="no";experienceElement.style.borderStyle="none";experience.parentNode.replaceChild(experienceElement,experience);brightcove.experiences[experienceID]=experienceElement;experience.element=experienceElement;if(experience.params.videoID){file+="&"+encodeURIComponent("@videoPlayer")+"="+encodeURIComponent(experience.params.videoID);}
experienceElement.src=file;}else{if(brightcove.isIE){container=brightcove.createElement('span');if(experience.params.height.charAt(experience.params.height.length-1)=="%"){container.style.display='block';}else{container.style.display='inline-block';}
container.id=containerID;experience.flashParams.movie=file;var options='';for(var pOption in experience.flashParams){options+='<param name="'+pOption+'" value="'+experience.flashParams[pOption]+'" />';}
var protocol=secureConnections?"https":"http";var experienceHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
+' codebase="'+protocol+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+brightcove.majorVersion+','+brightcove.majorRevision+','+brightcove.minorRevision+',0"'
+' id="'+experienceID+'"'
+' width="'+experience.params.width+'"'
+' height="'+experience.params.height+'"'
+' type="application/x-shockwave-flash"'
+' class="BrightcoveExperience">'
+options
+'</object>';experience.parentNode.replaceChild(container,experience);document.getElementById(containerID).innerHTML=experienceHTML;brightcove.experiences[experienceID]=container;}else{experienceElement=brightcove.createElement('object');experienceElement.type='application/x-shockwave-flash';experienceElement.data=file;experienceElement.id=experience.params.flashID;experienceElement.width=experience.params.width;experienceElement.height=experience.params.height;experienceElement.className=experience.className;experienceElement.setAttribute("seamlesstabbing",experience.flashParams.seamlessTabbing);var tempParam;for(var config in experience.flashParams){tempParam=brightcove.createElement('param');tempParam.name=config;tempParam.value=experience.flashParams[config];experienceElement.appendChild(tempParam);}
experience.parentNode.replaceChild(experienceElement,experience);brightcove.experiences[experienceID]=experienceElement;}}
brightcove.timeouts[experience.id]=setTimeout(function(){brightcove.handleExperienceTimeout(experienceID);},timeout);}};brightcove.handleExperienceTimeout=function(pID){brightcove.executeErrorHandlerForExperience(brightcove.experienceObjects[pID],{type:"templateError",errorType:"serviceUnavailable",code:brightcove.errorCodes.SERVICE_UNAVAILABLE,info:pID});};brightcove.reportPlayerLoad=function(pID){var timeout=brightcove.timeouts[pID];if(timeout){clearTimeout(timeout);}};brightcove.reportUpgradeRequired=function(pExperience){brightcove.executeErrorHandlerForExperience(pExperience,{type:"templateError",errorType:"upgradeRequiredForPlayer",code:brightcove.errorCodes.UPGRADE_REQUIRED_FOR_PLAYER,info:pExperience.id});};brightcove.checkFlashSupport=function(){var isIE=(window.ActiveXObject!=undefined);var versions=(isIE)?brightcove.checkFlashSupportIE():brightcove.checkFlashSupportStandard();return versions;};brightcove.checkFlashSupportIE=function(){var versions;try{var flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");var version=flash.GetVariable('$version');versions=/ ([0-9]+),([0-9]+),([0-9]+),/.exec(version);}catch(exception){return null;}
return{majorVersion:versions[1],majorRevision:versions[2],minorRevision:versions[3]};};brightcove.checkFlashSupportStandard=function(){var versions;var majorVersion;var majorRevision;var minorRevision;try{if(typeof navigator.plugins!='undefined'&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swfVersion=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var description=navigator.plugins["Shockwave Flash"+swfVersion].description;var filename=navigator.plugins["Shockwave Flash"+swfVersion].filename;if(filename.match){if(filename.toLowerCase().match(/lite/)){throw new Error();}}
versions=description.split(" ");majorVersion=versions[2].split(".")[0];majorRevision=versions[2].split(".")[1];minorRevision=versions[3];if(minorRevision==""){minorRevision=versions[4];}
if(minorRevision[0]=="d"){minorRevision=minorRevision.substring(1);}else if(minorRevision[0]=="r"){minorRevision=minorRevision.substring(1);if(minorRevision.indexOf("d")>0){minorRevision=minorRevision.substring(0,minorRevision.indexOf("d"));}}}else{throw new Error();}}else{return null;}}catch(exception){return null;}
return{majorVersion:majorVersion,majorRevision:majorRevision,minorRevision:minorRevision};};brightcove.checkHtmlSupport=function(){var v=brightcove.createElement('video');var c=brightcove.createElement('canvas');var videoSupport=true;if(!brightcove.userAgent.match(new RegExp("android","i"))){videoSupport=!!(v.canPlayType&&v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,''));}
var canvasSupport=!!brightcove.createElement('canvas').getContext;return videoSupport&&canvasSupport&&brightcove.isSupportedHTML5Device();};brightcove.isSupportedHTML5Device=function(pUAString){var types=["iPad","iPhone","iPod","android"];var numTypes=types.length;var uaString=pUAString||brightcove.userAgent;for(var i=0;i<numTypes;i++){if(uaString.match(new RegExp(types[i],"i"))){return true;}}
return false;};brightcove.getTechnology=function(pExperienceId){for(var id in brightcove.experiences){if(pExperienceId==id){return(brightcove.experiences[id].tagName=="object")?brightcove.playerType.FLASH:brightcove.playerType.HTML;}}
return brightcove.playerType.NO_SUPPORT;};brightcove.respondToMessages=function(pMessage){if(brightcove.verifyMessage(pMessage)){var messageParts=pMessage.data.split("::");var type=messageParts[1];var messageJson=messageParts[2];var messageDataObject;if(window.JSON){messageDataObject=window.JSON.parse(messageJson);}else{messageDataObject=brightcove.json_parse(messageJson);}
switch(type){case"error":brightcove.executeMessageCallback(messageDataObject,brightcove.executeErrorHandlerForExperience);break;case"api":brightcove.handleAPICallForHTML5(messageDataObject);break;case"handler":window[messageDataObject.handler](messageDataObject.event);break;}}};brightcove.verifyMessage=function(pMessage){return pMessage.data.match(/brightcove.player/);};brightcove.handleAPICallForHTML5=function(pMessageObject){var experience=brightcove.experienceObjects[pMessageObject.id];if(experience==null){return;}
var id=experience.id;var method=pMessageObject.method;switch(method){case"initializeBridge":brightcove.reportPlayerLoad(id);if(pMessageObject.arguments[0]&&window["setAPICallback"]!=null){setAPICallback(id,null,pMessageObject.arguments[1]);if(window["onTemplateLoaded"]!=null){onTemplateLoaded(id);}
brightcove.callHandlerForPlayer(experience,"templateLoadHandler",id);}
break;case"callTemplateReady":var event=pMessageObject.arguments;brightcove.callHandlerForPlayer(experience,"templateReadyHandler",event);break;}};brightcove.callHandlerForPlayer=function(pExperience,pHandler,pArgument){if(pExperience&&pExperience.params&&pExperience.params[pHandler]){var namespaceArray=pExperience.params[pHandler].split(".");var namespaces;if((namespaces=namespaceArray.length)>1){var trace=window;for(var i=0;i<namespaces;i++){trace=trace[namespaceArray[i]];}
if(typeof trace==="function"){trace(pArgument);}}else{window[pExperience.params[pHandler]](pArgument);}}};brightcove.executeErrorHandlerForExperience=function(pExperience,pErrorObject){brightcove.callHandlerForPlayer(pExperience,"templateErrorHandler",pErrorObject);};brightcove.executeMessageCallback=function(pMessageDataObject,pCallback){var experience;for(var experienceKey in brightcove.experienceObjects){experience=brightcove.experienceObjects[experienceKey];if(experience.element.src===pMessageDataObject.__srcUrl){delete pMessageDataObject.__srcUrl;pCallback(experience,pMessageDataObject);break;}}};brightcove.createExperience=function(pElement,pParentOrSibling,pAppend){if(!pElement.id||pElement.id.length<1){pElement.id='bcExperienceObj'+(brightcove.experienceNum++);}
if(pAppend){pParentOrSibling.appendChild(pElement);}else{pParentOrSibling.parentNode.insertBefore(pElement,pParentOrSibling);}
brightcove.createExperiences(null,pElement.id);};brightcove.removeExperience=function(pID){if(brightcove.experiences[pID]!=null){brightcove.experiences[pID].parentNode.removeChild(brightcove.experiences[pID]);}};brightcove.getURL=function(){var url;if(typeof window.location.search!='undefined'){url=window.location.search;}else{url=/(\?.*)$/.exec(document.location.href);}
return url;};brightcove.getOverrides=function(){var url=brightcove.getURL();var query=new RegExp('@[\\w\\.]+=[^&]+','g');var value=query.exec(url);var overrides="";while(value!=null){overrides+="&"+value;value=query.exec(url);}
return overrides;};brightcove.getParameter=function(pName,pDefaultValue){if(pDefaultValue==null)pDefaultValue="";var url=brightcove.getURL();var query=new RegExp(pName+'=([^&]*)');var value=query.exec(url);if(value!=null){return value[1];}else{return pDefaultValue;}};brightcove.createElement=function(el){if(document.createElementNS){return document.createElementNS('http://www.w3.org/1999/xhtml',el);}else{return document.createElement(el);}};brightcove.i18n={'BROWSER_TOO_OLD':'The browser you are using is too old. Please upgrade to the latest version of your browser.'};brightcove.removeListeners=function(){if(/KHTML/i.test(navigator.userAgent)){clearInterval(checkLoad);document.removeEventListener('load',brightcove.createExperiences,false);}
if(typeof document.addEventListener!='undefined'){document.removeEventListener('DOMContentLoaded',brightcove.createExperiences,false);document.removeEventListener('load',brightcove.createExperiences,false);}else if(typeof window.attachEvent!='undefined'){window.detachEvent('onload',brightcove.createExperiences);}};brightcove.getPubURL=function(source,host,pubCode){if(!pubCode||pubCode=="")return source;var re=/^([htps]{4,5}\:\/\/)([^\/\:]+)/i;host=host.replace("$pubcode$",pubCode).replace("$zoneprefix$$zone$",brightcove.pubSubdomain);return source.replace(re,"$1"+host);};brightcove.createExperiencesPostLoad=function(){brightcove.removeListeners();brightcove.createExperiences();};brightcove.encode=function(string){string=escape(string);string=string.replace(/\+/g,"%2B");string=string.replace(/\-/g,"%2D");string=string.replace(/\*/g,"%2A");string=string.replace(/\//g,"%2F");string=string.replace(/\./g,"%2E");string=string.replace(/_/g,"%5F");string=string.replace(/@/g,"%40");return string;};if(/KHTML/i.test(navigator.userAgent)){var checkLoad=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(checkLoad);brightcove.createExperiencesPostLoad();}},70);document.addEventListener('load',brightcove.createExperiencesPostLoad,false);}
if(typeof document.addEventListener!='undefined'){document.addEventListener('DOMContentLoaded',brightcove.createExperiencesPostLoad,false);document.addEventListener('load',brightcove.createExperiencesPostLoad,false);window.addEventListener("message",brightcove.respondToMessages,false);}else if(typeof window.attachEvent!='undefined'){window.attachEvent('onload',brightcove.createExperiencesPostLoad);}else{alert(brightcove.i18n.BROWSER_TOO_OLD);}}
brightcove.json_parse=(function(){"use strict";var state,stack,container,key,value,escapes={'\\':'\\','"':'"','/':'/','t':'\t','n':'\n','r':'\r','f':'\f','b':'\b'},string={go:function(){state='ok';},firstokey:function(){key=value;state='colon';},okey:function(){key=value;state='colon';},ovalue:function(){state='ocomma';},firstavalue:function(){state='acomma';},avalue:function(){state='acomma';}},number={go:function(){state='ok';},ovalue:function(){state='ocomma';},firstavalue:function(){state='acomma';},avalue:function(){state='acomma';}},action={'{':{go:function(){stack.push({state:'ok'});container={};state='firstokey';},ovalue:function(){stack.push({container:container,state:'ocomma',key:key});container={};state='firstokey';},firstavalue:function(){stack.push({container:container,state:'acomma'});container={};state='firstokey';},avalue:function(){stack.push({container:container,state:'acomma'});container={};state='firstokey';}},'}':{firstokey:function(){var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},ocomma:function(){var pop=stack.pop();container[key]=value;value=container;container=pop.container;key=pop.key;state=pop.state;}},'[':{go:function(){stack.push({state:'ok'});container=[];state='firstavalue';},ovalue:function(){stack.push({container:container,state:'ocomma',key:key});container=[];state='firstavalue';},firstavalue:function(){stack.push({container:container,state:'acomma'});container=[];state='firstavalue';},avalue:function(){stack.push({container:container,state:'acomma'});container=[];state='firstavalue';}},']':{firstavalue:function(){var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},acomma:function(){var pop=stack.pop();container.push(value);value=container;container=pop.container;key=pop.key;state=pop.state;}},':':{colon:function(){if(Object.hasOwnProperty.call(container,key)){throw new SyntaxError('Duplicate key "'+key+'"');}
state='ovalue';}},',':{ocomma:function(){container[key]=value;state='okey';},acomma:function(){container.push(value);state='avalue';}},'true':{go:function(){value=true;state='ok';},ovalue:function(){value=true;state='ocomma';},firstavalue:function(){value=true;state='acomma';},avalue:function(){value=true;state='acomma';}},'false':{go:function(){value=false;state='ok';},ovalue:function(){value=false;state='ocomma';},firstavalue:function(){value=false;state='acomma';},avalue:function(){value=false;state='acomma';}},'null':{go:function(){value=null;state='ok';},ovalue:function(){value=null;state='ocomma';},firstavalue:function(){value=null;state='acomma';},avalue:function(){value=null;state='acomma';}}};function debackslashify(text){return text.replace(/\\(?:u(.{4})|([^u]))/g,function(a,b,c){return b?String.fromCharCode(parseInt(b,16)):escapes[c];});}
return function(source,reviver){var r,tx=/^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;state='go';stack=[];try{for(;;){r=tx.exec(source);if(!r){break;}
if(r[1]){action[r[1]][state]();}else if(r[2]){value=+r[2];number[state]();}else{value=debackslashify(r[3]);string[state]();}
source=source.slice(r[0].length);}}catch(e){state=e;}
if(state!=='ok'||(/[^\x20\t\n\r]/).test(source)){throw state instanceof SyntaxError?state:new SyntaxError('JSON');}
return typeof reviver==='function'?(function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}({'':value},'')):value;};}());var APIModules={};APIModules.EXPERIENCE="experience";APIModules.CONTENT="content";APIModules.VIDEO_PLAYER="videoPlayer";APIModules.SOCIAL="social";APIModules.SEARCH="search";APIModules.CUE_POINTS="cuePoints";APIModules.ADVERTISING="advertising";APIModules.MENU="menu";APIModules.EFFECTS="effects";APIModules.CONVIVA="conviva";APIModules.CAPTIONS="captions";APIModules.HTML5="_html5";if(brightcove==undefined){var brightcove={playerType:{FLASH:"flash",HTML:"html",INSTALLER:"installer",NO_SUPPORT:"nosupport"}};}
brightcove.instances={};brightcove.modules={};brightcove.ID_DELIM="|||";var bcPlayer=brightcove;brightcove.getExperience=function(pExperience){if(this.instances[pExperience]==null){if(window.console){console.log("Experience '"+pExperience+"' not found. Please ensure the name is correct and the API for the player is enabled.");}}
return this.instances[pExperience];};brightcove.getPlayer=brightcove.getExperience;brightcove.stringify=function(pObject){var type=typeof pObject;if(type=="function"||pObject==undefined){return"\"\"";}else if(type=="string"){return"\""+pObject.replace(/"/g,"\\\"")+"\"";}else if(pObject instanceof Array){var json="[";for(var i in pObject){if(typeof pObject[i]=="function"){json+=("\"\",");}else{json+=(this.stringify(pObject[i])+",");}}
if(json.substr(-1)==","){json=json.substr(0,json.length-1);}
return json+"]";}else if(type=="object"){var json="{";var i;var props=pObject.enumerableProperties;if(props){for(i in props){json+=("\""+props[i]+"\":"+this.stringify(pObject[props[i]])+",");}}else{for(i in pObject){if(typeof pObject[i]!="function"&&i!="__proto__"){json+=("\""+i+"\":"+this.stringify(pObject[i])+",");}}}
if(json.substr(-1)==","){json=json.substr(0,json.length-1);}
return json+"}";}else{return pObject;}}
function setAPICallback(pID,pCallback,pURL){brightcove.instances[pID]=new BrightcoveExperience(pCallback,pID,pURL);}
function BrightcoveExperience(pCallback,pID,pURL){if(pCallback==null){this.type=brightcove.playerType.HTML;this.playerURL=pURL;this.callback=brightcove.experiences[pID].contentWindow;}else{this.type=brightcove.playerType.FLASH;this.callback=pCallback;}
this.modules={};}
BrightcoveExperience.prototype.getModule=function(pModule){if(this.type==brightcove.playerType.HTML){pModule+=APIModules.HTML5;}
if(this.modules[pModule]==null&&brightcove.modules[pModule]){var module=new brightcove.modules[pModule](this);module.playerURL=this.playerURL;if(module.isPlayerDefined!=null){if(!module.isPlayerDefined()){return null;}}
this.modules[pModule]=module;}
return this.modules[pModule];};function APIModule(){this.handlers=[];}
APIModule.handlerCount=0;APIModule.getHandler=function(){return"bc_handler"+(APIModule.handlerCount++);};APIModule.callFlash=function(pCallback,pParams){var pCallbackArray=pCallback.split(brightcove.ID_DELIM);if(pCallbackArray.length<2)return;if(pCallbackArray[0].length<1)return;var pFlashId=pCallbackArray[0];var pCallback=pCallbackArray[1];var pExperience=document.getElementById(pFlashId);if(pExperience[pCallback]!=null){return pExperience[pCallback](BCXML.convertToXML(pParams,"js2flash"));}};APIModule.prototype.name="APIModule";APIModule.prototype.addEventListener=function(pEvent,pHandler,pPriority){var pNewHandler=APIModule.getHandler();this.handlers.push({handler:pHandler,bcHandler:pNewHandler,event:pEvent});window[pNewHandler]=pHandler;return this.callMethod("addEventListener",[pEvent,pNewHandler,pPriority]);};APIModule.prototype.removeEventListener=function(pEvent,pHandler){var pNum=this.handlers.length;for(var i=0;i<pNum;i++){if(this.handlers[i].event==pEvent&&this.handlers[i].handler==pHandler){var pBCHandler=this.handlers[i].bcHandler;this.handlers.splice(i,1);break;}}
if(pBCHandler==undefined)return;return this.callMethod("removeEventListener",[pEvent,pBCHandler]);};APIModule.prototype.callPlayer=function(pCallback,pParams){if(this.playerURL!=undefined){return this.callHTML5(pParams);}else{return APIModule.callFlash(pCallback,pParams);}};APIModule.prototype.callMethod=function(pMethod,pArguments){var pArgs=[];for(var i=0;i<pArguments.length;i++)pArgs.push(pArguments[i]);return this.callPlayer(this.callback,{module:this.name,method:pMethod,params:pArgs});};APIModule.prototype.callHTML5=function(pParams){if(!this.callback.postMessage){return null;}
var json;if(window.JSON){json=window.JSON.stringify(pParams);}else{json=brightcove.stringify(pParams);}
if(json){this.callback.postMessage(json,this.playerURL);}
return null;};var BCXML={};BCXML.convertToXML=function(pObj,pNodeName){if(pObj instanceof Function)return"";var pType=BCXML.getType(pObj);var pXML="<"+pType.name+pNodeName+">";if(pType.name=="obj"){for(var i in pObj){pXML+=BCXML.convertToXML(pObj[i],i);}}else if(pType.name=="arr"){for(var j=0;j<pObj.length;j++){pXML+=BCXML.convertToXML(pObj[j],j);}}else if(pType.name=="str"){pObj=BCXML.replaceEntities(pObj);pXML+=pObj;}else{pXML+=pObj;}
pXML+="</"+pType.name+pNodeName+">";return pXML;};BCXML.replaceEntities=function(pObj){pObj=pObj.replace(new RegExp("&","g"),"&amp;");pObj=pObj.replace(new RegExp("<","g"),"&lt;");pObj=pObj.replace(new RegExp(">","g"),"&gt;");return pObj;};BCXML.getType=function(pObj){switch(typeof(pObj)){case"boolean":return{name:"boo",type:Boolean};case"string":return{name:"str",type:String};case"number":return{name:"num",type:Number};default:if(pObj instanceof Array){return{name:"arr",type:Array};}else{return{name:"obj",type:Object};}}};BCAdvertisingEvent={}
BCAdvertisingEvent.AD_COMPLETE="adComplete";BCAdvertisingEvent.AD_POSTROLLS_COMPLETE="adPostRollsComplete";BCAdvertisingEvent.AD_PAUSE="adPause";BCAdvertisingEvent.AD_PROGRESS="adProgress";BCAdvertisingEvent.AD_RESUME="adResume";BCAdvertisingEvent.AD_RECEIVED="adReceived";BCAdvertisingEvent.AD_START="adStart";BCAdvertisingEvent.AD_CLICK="adClick";BCAdvertisingEvent.EXTERNAL_AD="externalAd";BCAdvertisingEvent.AD_RULES_READY="adRulesReady";brightcove.modules[APIModules.ADVERTISING]=AdvertisingAPI;function AdvertisingAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.ADVERTISING;}
var pttp=AdvertisingAPI.prototype=new APIModule();pttp.showAd=function(){return this.callMethod("showAd",arguments);};pttp.resumeAfterExternalAd=function(){return this.callMethod("resumeAfterExternalAd",arguments);};pttp.getEnabledAdFormats=function(){return this.callMethod("getEnabledAdFormats",arguments);};pttp.enableAdFormats=function(){return this.callMethod("enableAdFormats",arguments);};pttp.enableExternalAds=function(){return this.callMethod("enableExternalAds",arguments);};pttp.enableOverrideAds=function(){return this.callMethod("enableOverrideAds",arguments);};pttp.getExternalAdsEnabled=function(){return this.callMethod("getExternalAdsEnabled",arguments);};pttp.getOverrideAdsEnabled=function(){return this.callMethod("getOverrideAdsEnabled",arguments);};pttp.disableForExternalAd=function(){return this.callMethod("disableForExternalAd",arguments);};pttp.getCurrentAdProperties=function(){return this.callMethod("getCurrentAdProperties",arguments);};pttp.showSponsorMessage=function(){return this.callMethod("showSponsorMessage",arguments);};pttp.getShowSponsorMessage=function(){return this.callMethod("getShowSponsorMessage",arguments);};pttp.allowThirdPartyControl=function(){return this.callMethod("allowThirdPartyControl",arguments);};pttp.setThirdPartyTime=function(){return this.callMethod("setThirdPartyTime",arguments);};pttp.getThirdPartyTime=function(){return this.callMethod("getThirdPartyTime",arguments);};pttp.getAdPolicy=function(){return this.callMethod("getAdPolicy",arguments);};pttp.setAdPolicy=function(){return this.callMethod("setAdPolicy",arguments);};pttp.requestAd=function(){return this.callMethod("requestAd",arguments);};pttp.getStayInFullScreen=function(){return this.callMethod("getStayInFullScreen",arguments);};pttp.setStayInFullScreen=function(){return this.callMethod("setStayInFullScreen",arguments);};BCCaptionsEvent={}
BCCaptionsEvent.DFXP_LOAD_SUCCESS="dfxpLoadSuccess";BCCaptionsEvent.DFXP_LOAD_ERROR="dfxpLoadError";brightcove.modules[APIModules.CAPTIONS]=CaptionsAPI;function CaptionsAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.CAPTIONS;}
var pttp=CaptionsAPI.prototype=new APIModule();pttp.loadDFXP=function(){return this.callMethod("loadDFXP",arguments);};pttp.setLanguage=function(){return this.callMethod("setLanguage",arguments);};pttp.getLanguages=function(){return this.callMethod("getLanguages",arguments);};BCContentEvent={}
BCContentEvent.VIDEO_LOAD="videoLoad";BCContentEvent.PLAYLIST_LOAD="playlistLoad";BCContentEvent.MEDIA_LOAD="mediaLoad";BCContentEvent.MEDIA_COLLECTION_LOAD="mediaCollectionLoad";brightcove.modules[APIModules.CONTENT]=ContentAPI;function ContentAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.CONTENT;}
var pttp=ContentAPI.prototype=new APIModule();pttp.getAllMediaCollections=function(){return this.callMethod("getAllMediaCollections",arguments);};pttp.getAllMediaCollectionIDs=function(){return this.callMethod("getAllMediaCollectionIDs",arguments);};pttp.getAllPlaylists=function(){return this.callMethod("getAllPlaylists",arguments);};pttp.getAllPlaylistIDs=function(){return this.callMethod("getAllPlaylistIDs",arguments);};pttp.getMediaCollection=function(){return this.callMethod("getMediaCollection",arguments);};pttp.getMediaCollectionAsynch=function(){return this.callMethod("getMediaCollectionAsynch",arguments);};pttp.getPlaylist=function(){return this.callMethod("getPlaylist",arguments);};pttp.getPlaylistAsynch=function(){return this.callMethod("getPlaylistAsynch",arguments);};pttp.getMedia=function(){return this.callMethod("getMedia",arguments);};pttp.getMediaAsynch=function(){return this.callMethod("getMediaAsynch",arguments);};pttp.getVideo=function(){return this.callMethod("getVideo",arguments);};pttp.getVideoAsynch=function(){return this.callMethod("getVideoAsynch",arguments);};pttp.purgeAllContent=function(){return this.callMethod("purgeAllContent",arguments);};pttp.purgeMediaCollections=function(){return this.callMethod("purgeMediaCollections",arguments);};pttp.purgeMedia=function(){return this.callMethod("purgeMedia",arguments);};pttp.purgePlaylist=function(){return this.callMethod("purgePlaylist",arguments);};pttp.purgePlaylists=function(){return this.callMethod("purgePlaylists",arguments);};pttp.purgeVideo=function(){return this.callMethod("purgeVideo",arguments);};pttp.purgeVideos=function(){return this.callMethod("purgeVideos",arguments);};pttp.getMediaInGroupAsynch=function(){return this.callMethod("getMediaInGroupAsynch",arguments);};pttp.createRuntimeMediaCollection=function(){return this.callMethod("createRuntimeMediaCollection",arguments);};pttp.updateMedia=function(){return this.callMethod("updateMedia",arguments);};pttp.appendArgsToMediaRequest=function(){return this.callMethod("appendArgsToMediaRequest",arguments);};brightcove.modules[APIModules.CONVIVA]=ConvivaAPI;function ConvivaAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.CONVIVA;}
var pttp=ConvivaAPI.prototype=new APIModule();pttp.sendEvent=function(){return this.callMethod("sendEvent",arguments);};BCCuePointEvent={}
BCCuePointEvent.CUE="cuePoint";brightcove.modules[APIModules.CUE_POINTS]=CuePointsAPI;function CuePointsAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.CUE_POINTS;}
var pttp=CuePointsAPI.prototype=new APIModule();pttp.addCuePoints=function(){return this.callMethod("addCuePoints",arguments);};pttp.clearCodeCuePoints=function(){return this.callMethod("clearCodeCuePoints",arguments);};pttp.removeCodeCuePointsAtTime=function(){return this.callMethod("removeCodeCuePointsAtTime",arguments);};pttp.getCuePoints=function(){return this.callMethod("getCuePoints",arguments);};pttp.clearAdCuePoints=function(){return this.callMethod("clearAdCuePoints",arguments);};pttp.removeAdCuePointsAtTime=function(){return this.callMethod("removeAdCuePointsAtTime",arguments);};BCEffectsEvent={};BCEffectsEvent.BEGIN="animationBegin";BCEffectsEvent.COMPLETE="animationComplete";BCEffectsEvent.CHANGE="animationChange";brightcove.modules[APIModules.EFFECTS]=EffectsAPI;function EffectsAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.EFFECTS;}
EffectsAPI.animations={};var pttp=EffectsAPI.prototype=new APIModule();pttp.createAnimation=function(){var pID=this.callMethod("createAnimationJS",arguments);return this.getAnimation(pID);};pttp.getAnimation=function(){var pID=this.callMethod("getAnimationJS",arguments);if(pID){return this.getAnimationWrapper(pID);}
return null;};pttp.getAnimationWrapper=function(pID){var pAnimation=EffectsAPI.animations[pID];if(pAnimation==undefined){pAnimation=new EffectsAPIAnimation(pID,this.callback);EffectsAPI.animations[pID]=pAnimation;}
return pAnimation;};function EffectsAPIAnimation(pID,pCallback){this.id=pID;this.name=APIModules.EFFECTS;this.callback=pCallback;}
pttp=EffectsAPIAnimation.prototype=new APIModule();pttp.id=-1;pttp.callMethod=function(pMethod,pArguments){if(pArguments==undefined)pArguments=[];var pArgs=[this.id];for(var i=0;i<pArguments.length;i++)pArgs.push(pArguments[i]);return APIModule.callFlash(this.callback,{module:this.name,method:pMethod,params:pArgs});};pttp.start=function(){return this.callMethod("startJS",arguments);};pttp.stop=function(){return this.callMethod("stopJS",arguments);};pttp.apply=function(target){var targetID=target.getID();if(targetID){return this.callMethod("applyJS",[targetID]);}};pttp.addEventListener=function(pEvent,pHandler){var pNewHandler=APIModule.getHandler();this.handlers.push({handler:pHandler,bcHandler:pNewHandler,event:pEvent});window[pNewHandler]=pHandler;return this.callMethod("addEventListenerJS",[pEvent,pNewHandler]);};pttp.removeEventListener=function(pEvent,pHandler){var pNum=this.handlers.length;for(var i=0;i<pNum;i++){if(this.handlers[i].event==pEvent&&this.handlers[i].handler==pHandler){var pBCHandler=this.handlers[i].bcHandler;this.handlers.splice(i,1);break;}}
if(pBCHandler==undefined)return;return this.callMethod("removeEventListenerJS",[pEvent,pBCHandler]);};BCExperienceEvent={}
BCExperienceEvent.CONTENT_LOAD="contentLoad";BCExperienceEvent.USER_MESSAGE="userMessage";BCExperienceEvent.TEMPLATE_READY="templateReady";BCExperienceEvent.ENTER_FULLSCREEN="enterFullScreen";BCExperienceEvent.EXIT_FULLSCREEN="exitFullScreen";brightcove.modules[APIModules.EXPERIENCE]=ExperienceAPI;BCComponentModules={};function ExperienceAPI(pExperience){this.experience=pExperience;if(pExperience){this.callback=pExperience.callback;}
this.name=APIModules.EXPERIENCE;}
var pttp=ExperienceAPI.prototype=new APIModule();pttp.setSize=function(){return this.callMethod("setSize",arguments);};pttp.getPlayerName=function(){return this.callMethod("getPlayerName",arguments);};pttp.getReady=function(){return this.callMethod("getReady",arguments);};pttp.getWidth=function(){return this.callMethod("getWidth",arguments);};pttp.getHeight=function(){return this.callMethod("getHeight",arguments);};pttp.getAdEnabled=function(){return this.callMethod("getAdEnabled",arguments);};pttp.getEnabled=function(){return this.callMethod("getEnabled",arguments);};pttp.setEnabled=function(){return this.callMethod("setEnabled",arguments);};pttp.loadExperience=function(){return this.callMethod("loadExperience",arguments);};pttp.getLayout=function(){return this.callMethod("getLayout",arguments);};pttp.getAffiliateID=function(){return this.callMethod("getAffiliateID",arguments);};pttp.getExperienceID=function(){return this.callMethod("getExperienceID",arguments);};pttp.getPublisherID=function(){return this.callMethod("getPublisherID",arguments);};pttp.getExperienceURL=function(){return this.callMethod("getExperienceURL",arguments);};pttp.getReferrerURL=function(){return this.callMethod("getReferrerURL",arguments);};pttp.getConfiguredPropertiesForID=function(){return this.callMethod("getConfiguredPropertiesForID",arguments);};pttp.getPlayerParameter=function(){return this.callMethod("getPlayerParameter",arguments);};pttp.getLayoutRoot=function(){var pObj=this.callMethod("getLayoutRootJS",arguments);if(pObj!=null){if(BCComponentModules[pObj.elementName]!=null){return new BCComponentModules[pObj.elementName](this.experience,this.callback,pObj.elementID);}}
return null;};pttp.getElementByID=function(){var pNodeName=this.callMethod("getJSElementByID",arguments);if(pNodeName!=null){if(pNodeName=="VideoPlayer"||pNodeName=="VideoDisplay"){var pPlayerAPI=this.experience.getModule(APIModules.VIDEO_PLAYER);if(pPlayerAPI){pPlayerAPI.initializeComponentAPI();return pPlayerAPI;}}else if(BCComponentModules[pNodeName]!=null){return new BCComponentModules[pNodeName](this.experience,this.callback,arguments[0]);}}
return null;};pttp.getElementsByType=function(){var pIDs=this.callMethod("getJSElementsByType",arguments);var pElements=[];var pElement;for(var i in pIDs){if(typeof(pIDs[i])!="function"){pElement=this.getElementByID(pIDs[i]);if(pElement)pElements.push(pElement);}}
return pElements;};pttp.getModules=function(){return this.callMethod("getModules",arguments);};pttp.unload=function(){return this.callMethod("unload",arguments);};pttp.debug=function(){return this.callMethod("debug",arguments);};pttp.getUserCountry=function(){return this.callMethod("getUserCountry",arguments);};pttp.getTranslation=function(){return this.callMethod("getTranslation",arguments);};brightcove.modules[APIModules.EXPERIENCE+APIModules.HTML5]=ExperienceAPI_html5;function ExperienceAPI_html5(pExperience){this.experience=pExperience;if(pExperience){this.callback=pExperience.callback;this.playerURL=pExperience.playerURL;}
this.name=APIModules.EXPERIENCE;}
var pttp=ExperienceAPI_html5.prototype=new ExperienceAPI();BCMenuEvent={}
BCMenuPage={}
BCMenuAdditionalMedia={}
BCMenuEvent.MENU_PAGE_OPEN="menuPageOpen";BCMenuEvent.MENU_PAGE_CLOSE="menuPageClose";BCMenuEvent.OVERLAY_MENU_OPEN="overlayMenuOpen";BCMenuEvent.OVERLAY_MENU_CLOSE="overlayMenuClose";BCMenuEvent.OVERLAY_MENU_PLAY_CLICK="overlayMenuPlayClick";BCMenuEvent.ICON_MENU_OPEN="iconMenuOpen";BCMenuEvent.ICON_MENU_CLOSE="iconMenuClose";BCMenuEvent.SEND_EMAIL_CLICK="sendEmailClick";BCMenuEvent.BLOG_POST_CLICK="blogPostClick";BCMenuEvent.COPY_LINK="copyLink";BCMenuEvent.COPY_CODE="copyCode";BCMenuEvent.VIDEO_REQUEST="videoRequest";BCMenuPage.EMAIL="Email";BCMenuPage.SHARE="Share";BCMenuPage.LINK="Link";BCMenuPage.CODE="Embed";BCMenuPage.INFO="Info";BCMenuAdditionalMedia.RELATED_VIDEOS="related videos";BCMenuAdditionalMedia.NEWEST_VIDEOS="newest videos";BCMenuAdditionalMedia.MOST_VIEWED_VIDEOS="most viewed videos";brightcove.modules[APIModules.MENU]=MenuAPI;function MenuAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.MENU;}
var pttp=MenuAPI.prototype=new APIModule();pttp.showIconMenu=function(){return this.callMethod("showIconMenu",arguments);};pttp.isIconMenuShowing=function(){return this.callMethod("isIconMenuShowing",arguments);};pttp.showMenuPage=function(){return this.callMethod("showMenuPage",arguments);};pttp.closeMenuPage=function(){return this.callMethod("closeMenuPage",arguments);};pttp.isMenuPageShowing=function(){return this.callMethod("isMenuPageShowing",arguments);};pttp.isOverlayMenuShowing=function(){return this.callMethod("isOverlayMenuShowing",arguments);};pttp.removeOverlayMenu=function(){return this.callMethod("removeOverlayMenu",arguments);};pttp.getCurrentMenuPage=function(){return this.callMethod("getCurrentMenuPage",arguments);};pttp.setOverlayMenuVisible=function(){return this.callMethod("setOverlayMenuVisible",arguments);};pttp.getOverlayMenuVisible=function(){return this.callMethod("getOverlayMenuVisible",arguments);};pttp.setAdditionalMediaForType=function(){return this.callMethod("setAdditionalMediaForType",arguments);};pttp.getAdditionalMediaForType=function(){return this.callMethod("getAdditionalMediaForType",arguments);};var bcAdditionalMediaCallback;pttp.setAdditionalMediaCallback=function(pCallback,pTypes){bcAdditionalMediaCallback=pCallback;return this.callMethod("setAdditionalMediaCallbackJS",["bcCallAdditionalMediaCallback",pTypes]);};function bcCallAdditionalMediaCallback(pType,pMedia){return bcAdditionalMediaCallback(pType,pMedia);};BCSearchEvent={};BCSearchEvent.RESULT="searchResult";BCSearchEvent.ERROR="searchError";brightcove.modules[APIModules.SEARCH]=SearchAPI;SortOrderType={ASC:"ASC",DESC:"DESC"};SortByType={PUBLISH_DATE:"PUBLISH_DATE",CREATION_DATE:"CREATION_DATE",MODIFIED_DATE:"MODIFIED_DATE",PLAYS_TOTAL:"PLAYS_TOTAL",PLAYS_TRAILING_WEEK:"PLAYS_TRAILING_WEEK"};function SearchAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.SEARCH;}
SearchAPI.searches={};var pttp=SearchAPI.prototype=new APIModule();pttp.findRelatedVideos=function(){var pID=this.callMethod("findRelatedVideosJS",arguments);return this.getVideoSearch(pID);};pttp.findVideosByText=function(){var pID=this.callMethod("findVideosByTextJS",arguments);return this.getVideoSearch(pID);};pttp.findVideosByTags=function(){var pID=this.callMethod("findVideosByTagsJS",arguments);return this.getVideoSearch(pID);};pttp.findAllVideos=function(){var pID=this.callMethod("findAllVideosJS",arguments);return this.getVideoSearch(pID);};pttp.getVideoSearch=function(pID){var pSearch=SearchAPI.searches[pID];if(pSearch==undefined){pSearch=new VideoSearch(pID,this.callback);SearchAPI.searches[pID]=pSearch;}
return pSearch;};pttp.getMaxItemsInMemory=function(){return this.callMethod("getMaxItemsInMemory",arguments);};pttp.setMaxItemsInMemory=function(){return this.callMethod("setMaxItemsInMemory",arguments);};function VideoSearch(pID,pCallback){this.id=pID;this.name=APIModules.SEARCH;this.callback=pCallback;}
pttp=VideoSearch.prototype=new APIModule();pttp.id=-1;pttp.callMethod=function(pMethod,pArguments){if(pArguments==undefined)pArguments=[];var pArgs=[this.id];for(var i=0;i<pArguments.length;i++)pArgs.push(pArguments[i]);return APIModule.callFlash(this.callback,{module:this.name,method:pMethod,params:pArgs});};pttp.getItems=function(){return this.callMethod("getItems",arguments);};pttp.getPage=function(){return this.callMethod("getPage",arguments);};pttp.getPageAsynch=function(){this.pageNumber=this.callMethod("getPageNumber");return this.callMethod("getPageAsynch",arguments);};pttp.getNextPage=function(){return this.callMethod("getNextPage",arguments);};pttp.getNextPageAsynch=function(){return this.callMethod("getNextPageAsynch",arguments);};pttp.getPreviousPage=function(){return this.callMethod("getPreviousPage",arguments);};pttp.getPreviousPageAsynch=function(){return this.callMethod("getPreviousPageAsynch",arguments);};pttp.getRow=function(){return this.callMethod("getRow",arguments);};pttp.getRowOnPage=function(){return this.callMethod("getRowOnPage",arguments);};pttp.purgeAll=function(){return this.callMethod("purgeAll",arguments);};pttp.purgePage=function(){return this.callMethod("purgePage",arguments);};pttp.getTotalRows=function(){return this.callMethod("getTotalRows",arguments);};pttp.getTotalPages=function(){return this.callMethod("getTotalPages",arguments);};pttp.getPageNumber=function(){return this.callMethod("getPageNumber",arguments);};pttp.getPageSize=function(){return this.callMethod("getPageSize",arguments);};pttp.getMaxPagesInMemory=function(){return this.callMethod("getMaxPagesInMemory",arguments);};pttp.setMaxPagesInMemory=function(){return this.callMethod("setMaxPagesInMemory",arguments);};BCSocialEvent={}
BCSocialEvent.EMBED_CODE_RETRIEVED="embedCodeRetrieved";BCSocialEvent.LINK_GENERATED="linkGenerated";brightcove.modules[APIModules.SOCIAL]=SocialAPI;function SocialAPI(pExperience){this.experience=pExperience;this.callback=pExperience.callback;this.name=APIModules.SOCIAL;}
var pttp=SocialAPI.prototype=new APIModule();pttp.shareVideoViaEmail=function(){return this.callMethod("shareVideoViaEmail",arguments);};pttp.getEmbedCode=function(){return this.callMethod("getEmbedCode",arguments);};pttp.setEmbedCode=function(){return this.callMethod("setEmbedCode",arguments);};pttp.setLink=function(){return this.callMethod("setLink",arguments);};pttp.getLink=function(){return this.callMethod("getLink",arguments);};pttp.isURLShortenedForMedia=function(){return this.callMethod("isURLShortenedForMedia",arguments);};pttp.getRSS=function(){return this.callMethod("getRSS",arguments);};pttp.enableBlogging=function(){return this.callMethod("enableBlogging",arguments);};if(BCMediaEvent==undefined){var BCMediaEvent={}
BCMediaEvent.BEGIN="mediaBegin";BCMediaEvent.BUFFER_BEGIN="mediaBufferBegin";BCMediaEvent.BUFFER_COMPLETE="mediaBufferComplete";BCMediaEvent.CHANGE="mediaChange";BCMediaEvent.COMPLETE="mediaComplete";BCMediaEvent.ERROR="mediaError";BCMediaEvent.MUTE_CHANGE="mediaMuteChange";BCMediaEvent.PLAY="mediaPlay";BCMediaEvent.PROGRESS="mediaProgress";BCMediaEvent.SEEK="mediaSeek";BCMediaEvent.STOP="mediaStop";BCMediaEvent.VOLUME_CHANGE="mediaVolumeChange";}
var BCVideoEvent={}
BCVideoEvent.END_BUFFER="endBuffering";BCVideoEvent.RENDITION_CHANGE="renditionChange";BCVideoEvent.VIDEO_CHANGE="videoChange";BCVideoEvent.VIDEO_COMPLETE="videoComplete";BCVideoEvent.VIDEO_CONNECT="videoConnect";BCVideoEvent.VIDEO_LOAD="videoLoad";BCVideoEvent.VIDEO_PROGRESS="videoProgress";BCVideoEvent.VIDEO_START="videoStart";BCVideoEvent.VIDEO_STOP="videoStop";BCVideoEvent.VIDEO_MUTE="ui_mute";BCVideoEvent.VIDEO_SEEK="seek";BCVideoEvent.START_BUFFER="startBuffering";BCVideoEvent.STREAM_START="streamStart";BCVideoEvent.VOLUME_CHANGE="volumeChange";brightcove.modules[APIModules.VIDEO_PLAYER]=VideoPlayerAPI;function VideoPlayerAPI(pExperience){this.experience=pExperience;if(pExperience){this.callback=pExperience.callback;}
this.name=APIModules.VIDEO_PLAYER;}
var pttp=VideoPlayerAPI.prototype=new APIModule();pttp.initializeComponentAPI=function(){return this.callMethod("initializeComponentAPI",arguments);};pttp.getComponentAPI=function(pElementName,pElementID){if(pElementName!=null){if(pElementName=="VideoPlayer"||pElementName=="VideoDisplay"){var pPlayerAPI=this.experience.getModule(APIModules.VIDEO_PLAYER);pPlayerAPI.initializeComponentAPI();return pPlayerAPI;}else if(BCComponentModules[pElementName]!=null){return new BCComponentModules[pElementName](this.experience,this.callback,pElementID);}}
return null;};pttp.isPlayerDefined=function(){return this.callMethod("isPlayerDefined",arguments);};pttp.setVideoFilter=function(){return this.callMethod("setVideoFilter",arguments);};pttp.getCurrentVideo=function(){return this.callMethod("getCurrentVideo",arguments);};pttp.getCurrentRendition=function(){return this.callMethod("getCurrentRendition",arguments);};pttp.loadVideo=function(){return this.callMethod("loadVideo",arguments);};pttp.cueVideo=function(){return this.callMethod("cueVideo",arguments);};pttp.play=function(){return this.callMethod("play",arguments);};pttp.stop=function(){return this.callMethod("stop",arguments);};pttp.pause=function(){return this.callMethod("pause",arguments);};pttp.seek=function(){return this.callMethod("seek",arguments);};pttp.mute=function(){return this.callMethod("mute",arguments);};pttp.setVolume=function(){return this.callMethod("setVolume",arguments);};pttp.getVolume=function(){return this.callMethod("getVolume",arguments);};pttp.showVolumeControls=function(){return this.callMethod("showVolumeControls",arguments);};pttp.getVideoPosition=function(){return this.callMethod("getVideoPosition",arguments);};pttp.getVideoDuration=function(){return this.callMethod("getVideoDuration",arguments);};pttp.getVideoBytesLoaded=function(){return this.callMethod("getVideoBytesLoaded",arguments);};pttp.getVideoBytesTotal=function(){return this.callMethod("getVideoBytesTotal",arguments);};pttp.isPlaying=function(){return this.callMethod("isPlaying",arguments);};pttp.isMuted=function(){return this.callMethod("isMuted",arguments);};pttp.getContentTypeDisplayed=function(){return this.callMethod("getContentTypeDisplayed",arguments);};pttp.setSize=function(){return this.callMethod("setSize",arguments);};pttp.move=function(){return this.callMethod("move",arguments);};pttp.getX=function(){return this.callMethod("getX",arguments);};pttp.getY=function(){return this.callMethod("getY",arguments);};pttp.getDefinition=function(){return this.callMethod("getDefinition",arguments);};pttp.getID=function(){return this.callMethod("getID",arguments);};pttp.getWidth=function(){return this.callMethod("getWidth",arguments);};pttp.getHeight=function(){return this.callMethod("getHeight",arguments);};pttp.getDisplayWidth=function(){return this.callMethod("getDisplayWidth",arguments);};pttp.getDisplayHeight=function(){return this.callMethod("getDisplayHeight",arguments);};pttp.getEnabled=function(){return this.callMethod("getEnabled",arguments);};pttp.setStyles=function(){return this.callMethod("setStyles",arguments);};pttp.setEnabled=function(){return this.callMethod("setEnabled",arguments);};pttp.getVisible=function(){return this.callMethod("getVisible",arguments);};pttp.setVisible=function(){return this.callMethod("setVisible",arguments);};pttp.getAlpha=function(){return this.callMethod("getAlpha",arguments);};pttp.setAlpha=function(){return this.callMethod("setAlpha",arguments);};pttp.getBlendMode=function(){return this.callMethod("getBlendMode",arguments);};pttp.setBlendMode=function(){return this.callMethod("setBlendMode",arguments);};pttp.getRotation=function(){return this.callMethod("getRotation",arguments);};pttp.setRotation=function(){return this.callMethod("setRotation",arguments);};pttp.getIndex=function(){return this.callMethod("getIndex",arguments);};pttp.toggleVolumeControls=function(){return this.callMethod("toggleVolumeControls",arguments);};pttp.toggleMenuPage=function(){return this.callMethod("toggleMenuPage",arguments);};pttp.getContainer=function(){var pObj=this.callMethod("getContainerJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};pttp.getNextSibling=function(){var pObj=this.callMethod("getNextSiblingJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};pttp.getPreviousSibling=function(){var pObj=this.callMethod("getPreviousSiblingJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};pttp.getCSS=function(){return this.callMethod("getCSS",arguments);};pttp.mediaIsLive=function(){return this.callMethod("mediaIsLive",arguments);};pttp.setDynamicDeliveryParameters=function(){return this.callMethod("setDynamicDeliveryParameters",arguments);};pttp.removeUserMessage=function(){return this.callMethod("removeUserMessage",arguments);};pttp.enableInitialBandwidthDetection=function(){return this.callMethod("enableInitialBandwidthDetection",arguments);};pttp.getInitialBandwidthDetectionEnabled=function(){return this.callMethod("getInitialBandwidthDetectionEnabled",arguments);};pttp.setDefaultBufferTime=function(){return this.callMethod("setDefaultBufferTime",arguments);};pttp.getDefaultBufferTime=function(){return this.callMethod("getDefaultBufferTime",arguments);};pttp.setConnectOnLoad=function(){return this.callMethod("setConnectOnLoad",arguments);};var bcRenditionSelectionCallback;pttp.setRenditionSelectionCallback=function(pSelector){bcRenditionSelectionCallback=pSelector;return this.callMethod("setRenditionSelectionCallbackJS",["bcCallRenditionSelectionCallback"]);};function bcCallRenditionSelectionCallback(pContext){return bcRenditionSelectionCallback(pContext);};brightcove.modules[APIModules.VIDEO_PLAYER+APIModules.HTML5]=VideoPlayerAPI_html5;function VideoPlayerAPI_html5(pExperience){this.experience=pExperience;if(pExperience){this.callback=pExperience.callback;this.playerURL=pExperience.playerURL;}
this.name=APIModules.VIDEO_PLAYER;this.playing=false;this.setUpListeners();}
var pttp=VideoPlayerAPI_html5.prototype=new VideoPlayerAPI();pttp.setUpListeners=function(){var videoPlayerAPI=this;this.addEventListener("videoChangeDump",function(pEvent){var data=pEvent.data;videoPlayerAPI.video=data.video;videoPlayerAPI.rendition=data.rendition;videoPlayerAPI.position=0;videoPlayerAPI.duration=data.video.length/1000;});this.addEventListener(BCMediaEvent.PROGRESS,function(pEvent){videoPlayerAPI.position=pEvent.position;});this.addEventListener(BCMediaEvent.PLAY,function(pEvent){videoPlayerAPI.playing=true;});this.addEventListener(BCMediaEvent.STOP,function(pEvent){videoPlayerAPI.playing=false;});}
pttp.isPlayerDefined=function(){return true;};pttp.isPlaying=function(){return this.playing;};pttp.getCurrentVideo=function(){return this.video;};pttp.getCurrentRendition=function(){return this.rendition;};pttp.getVideoPosition=function(pFormat){var position=Math.max(0,this.position)
if(pFormat===true){return this.convertToTimeCode(position);}
return position;};pttp.getVideoDuration=function(pFormat){if(pFormat===true){return this.convertToTimeCode(this.duration);}
return this.duration;};pttp.convertToTimeCode=function(pTime){if(isNaN(pTime)||pTime==0)return"00:00";var hours=Math.floor(pTime/3600);var remainder=pTime%3600;var minutes=Math.floor(remainder/60);remainder%=60;var seconds=Math.round(remainder);if(seconds==60){seconds=0;if(++minutes==60){minutes=0;hours++;}}
var bufferWithZero=function(pString,pLength){pString=String(pString);while(pString.length<pLength){pString="0"+pString;}
return pString;};var time;if(hours<1){time=(bufferWithZero(minutes,2)+":"
+bufferWithZero(seconds,2));}else{time=(bufferWithZero(hours,1)+":"
+bufferWithZero(minutes,2)+":"
+bufferWithZero(seconds,2));}
return time;};function ComponentAPI(){this.name=APIModules.EXPERIENCE;}
var pttp=ComponentAPI.prototype=new APIModule();pttp.callMethod=function(pMethod,pArguments){var pArgs=[];for(var i=0;i<pArguments.length;i++)pArgs.push(pArguments[i]);return APIModule.callFlash(this.callback,{module:this.name,element:this.elementID,method:"getComponentAPI",componentMethod:pMethod,params:pArgs});};pttp.getComponentAPI=function(pElementName,pElementID){if(pElementName!=null){if(pElementName=="VideoPlayer"||pElementName=="VideoDisplay"){var pPlayerAPI=this.experience.getModule(APIModules.VIDEO_PLAYER);pPlayerAPI.initializeComponentAPI();return pPlayerAPI;}else if(BCComponentModules[pElementName]!=null){return new BCComponentModules[pElementName](this.experience,this.callback,pElementID);}}
return null;};pttp.setSize=function(){return this.callMethod("setSize",arguments);};pttp.move=function(){return this.callMethod("move",arguments);};pttp.getX=function(){return this.callMethod("getX",arguments);};pttp.getY=function(){return this.callMethod("getY",arguments);};pttp.getVisible=function(){return this.callMethod("getVisible",arguments);};pttp.setVisible=function(){return this.callMethod("setVisible",arguments);};pttp.getIncludeInLayout=function(){return this.callMethod("getIncludeInLayout",arguments);};pttp.setIncludeInLayout=function(){return this.callMethod("setIncludeInLayout",arguments);};pttp.getAlpha=function(){return this.callMethod("getAlpha",arguments);};pttp.setAlpha=function(){return this.callMethod("setAlpha",arguments);};pttp.getDefinition=function(){return this.callMethod("getDefinition",arguments);};pttp.getID=function(){return this.callMethod("getID",arguments);};pttp.getWidth=function(){return this.callMethod("getWidth",arguments);};pttp.getHeight=function(){return this.callMethod("getHeight",arguments);};pttp.getIndex=function(){return this.callMethod("getIndex",arguments);};pttp.getContainer=function(){var pObj=this.callMethod("getContainerJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};pttp.getNextSibling=function(){var pObj=this.callMethod("getNextSiblingJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};pttp.getPreviousSibling=function(){var pObj=this.callMethod("getPreviousSiblingJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};function UIObjectAPI(pCallback,pElementID){this.callback=pCallback;this.elementID=pElementID;}
var pttp=UIObjectAPI.prototype=new ComponentAPI();pttp.getEnabled=function(){return this.callMethod("getEnabled",arguments);};pttp.setEnabled=function(){return this.callMethod("setEnabled",arguments);};pttp.getBlendMode=function(){return this.callMethod("getBlendMode",arguments);};pttp.setBlendMode=function(){return this.callMethod("setBlendMode",arguments);};pttp.getRotation=function(){return this.callMethod("getRotation",arguments);};pttp.setRotation=function(){return this.callMethod("setRotation",arguments);};pttp.setStyles=function(){return this.callMethod("setStyles",arguments);};pttp.getCSS=function(){return this.callMethod("getCSS",arguments);};if(BCMediaEvent==undefined){var BCMediaEvent={}
BCMediaEvent.BEGIN="mediaBegin";BCMediaEvent.BUFFER_BEGIN="mediaBufferBegin";BCMediaEvent.BUFFER_COMPLETE="mediaBufferComplete";BCMediaEvent.CHANGE="mediaChange";BCMediaEvent.COMPLETE="mediaComplete";BCMediaEvent.ERROR="mediaError";BCMediaEvent.MUTE_CHANGE="mediaMuteChange";BCMediaEvent.PLAY="mediaPlay";BCMediaEvent.PROGRESS="mediaProgress";BCMediaEvent.SEEK="mediaSeek";BCMediaEvent.STOP="mediaStop";BCMediaEvent.VOLUME_CHANGE="mediaVolumeChange";}
BCComponentModules["AudioPlayer"]=AudioPlayerAPI;function AudioPlayerAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=AudioPlayerAPI.prototype=new ComponentAPI();pttp.play=function(){return this.callMethod("play",arguments);};pttp.pause=function(){return this.callMethod("pause",arguments);};pttp.stop=function(){return this.callMethod("stop",arguments);};pttp.seek=function(){return this.callMethod("seek",arguments);};pttp.mute=function(){return this.callMethod("mute",arguments);};pttp.setVolume=function(){return this.callMethod("setVolume",arguments);};pttp.getVolume=function(){return this.callMethod("getVolume",arguments);};pttp.isPlaying=function(){return this.callMethod("isPlaying",arguments);};pttp.isMuted=function(){return this.callMethod("isMuted",arguments);};pttp.getMediaBytesLoaded=function(){return this.callMethod("getMediaBytesLoaded",arguments);};pttp.getMediaBytesTotal=function(){return this.callMethod("getMediaBytesTotal",arguments);};pttp.getMediaDuration=function(){return this.callMethod("getMediaDuration",arguments);};pttp.getMediaPosition=function(){return this.callMethod("getMediaPosition",arguments);};pttp.getCurrentMedia=function(){return this.callMethod("getCurrentMedia",arguments);};pttp.cueMedia=function(){return this.callMethod("cueMedia",arguments);};pttp.loadMedia=function(){return this.callMethod("loadMedia",arguments);};BCComponentModules["Banner"]=BannerAPI;function BannerAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=BannerAPI.prototype=new UIObjectAPI();BCComponentModules["Button"]=ButtonAPI;function ButtonAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ButtonAPI.prototype=new UIObjectAPI();pttp.getLabel=function(){return this.callMethod("getLabel",arguments);};pttp.setLabel=function(){return this.callMethod("setLabel",arguments);};pttp.setFont=function(){return this.callMethod("setFont",arguments);};pttp.getFont=function(){return this.callMethod("getFont",arguments);};pttp.setLabelSize=function(){return this.callMethod("setLabelSize",arguments);};pttp.getLabelSize=function(){return this.callMethod("getLabelSize",arguments);};pttp.getAutoSize=function(){return this.callMethod("getAutoSize",arguments);};pttp.setAutoSize=function(){return this.callMethod("setAutoSize",arguments);};pttp.getTruncateLabel=function(){return this.callMethod("getTruncateLabel",arguments);};pttp.setTruncateLabel=function(){return this.callMethod("setTruncateLabel",arguments);};pttp.getMultiline=function(){return this.callMethod("getMultiline",arguments);};pttp.setMultiline=function(){return this.callMethod("setMultiline",arguments);};pttp.getIsTruncated=function(){return this.callMethod("getIsTruncated",arguments);};pttp.getLabelWidth=function(){return this.callMethod("getLabelWidth",arguments);};pttp.getShowBack=function(){return this.callMethod("getShowBack",arguments);};pttp.setShowBack=function(){return this.callMethod("setShowBack",arguments);};pttp.getTooltip=function(){return this.callMethod("getTooltip",arguments);};pttp.setTooltip=function(){return this.callMethod("setTooltip",arguments);};pttp.getIconScale=function(){return this.callMethod("getIconScale",arguments);};pttp.setIconScale=function(){return this.callMethod("setIconScale",arguments);};pttp.getIconOffsetX=function(){return this.callMethod("getIconOffsetX",arguments);};pttp.setIconOffsetX=function(){return this.callMethod("setIconOffsetX",arguments);};pttp.getIconOffsetY=function(){return this.callMethod("getIconOffsetY",arguments);};pttp.setIconOffsetY=function(){return this.callMethod("setIconOffsetY",arguments);};pttp.getLabelOffsetX=function(){return this.callMethod("getLabelOffsetX",arguments);};pttp.setLabelOffsetX=function(){return this.callMethod("setLabelOffsetX",arguments);};pttp.getLabelOffsetY=function(){return this.callMethod("getLabelOffsetY",arguments);};pttp.setLabelOffsetY=function(){return this.callMethod("setLabelOffsetY",arguments);};pttp.getLabelBuffer=function(){return this.callMethod("getLabelBuffer",arguments);};pttp.setLabelBuffer=function(){return this.callMethod("setLabelBuffer",arguments);};pttp.getIconAlignmentH=function(){return this.callMethod("getIconAlignmentH",arguments);};pttp.setIconAlignmentH=function(){return this.callMethod("setIconAlignmentH",arguments);};pttp.getIconAlignmentV=function(){return this.callMethod("getIconAlignmentV",arguments);};pttp.setIconAlignmentV=function(){return this.callMethod("setIconAlignmentV",arguments);};pttp.getLabelAlignmentH=function(){return this.callMethod("getLabelAlignmentH",arguments);};pttp.setLabelAlignmentH=function(){return this.callMethod("setLabelAlignmentH",arguments);};pttp.getLabelAlignmentV=function(){return this.callMethod("getLabelAlignmentV",arguments);};pttp.setLabelAlignmentV=function(){return this.callMethod("setLabelAlignmentV",arguments);};pttp.getIconName=function(){return this.callMethod("getIconName",arguments);};pttp.setIconName=function(){return this.callMethod("setIconName",arguments);};BCComponentModules["ChromelessVideoPlayer"]=ChromelessVideoPlayerAPI;function ChromelessVideoPlayerAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;this.initializeComponentAPI();}
var pttp=ChromelessVideoPlayerAPI.prototype=new VideoPlayerAPI();pttp.callChromelessComponentMethod=function(pMethod,pArguments){var args=[];for(var i=0;i<pArguments.length;i++)args.push(pArguments[i]);return APIModule.callFlash(this.callback,{module:APIModules.EXPERIENCE,element:this.elementID,method:"getComponentAPI",componentMethod:pMethod,params:args});};pttp.getControls=function(){var controls=this.callChromelessComponentMethod("getControlsJS",arguments);if(controls){return this.getComponentAPI(controls.elementName,controls.elementID);}
return null;};pttp.showControls=function(){return this.callChromelessComponentMethod("showControls",arguments);};pttp.getControlsVisible=function(){return this.callChromelessComponentMethod("getControlsVisible",arguments);};pttp.getIncludeInLayout=function(){return this.callChromelessComponentMethod("getIncludeInLayout",arguments);};pttp.setIncludeInLayout=function(){return this.callChromelessComponentMethod("setIncludeInLayout",arguments);};BCComponentModules["ComboBox"]=ComboBoxAPI;function ComboBoxAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ComboBoxAPI.prototype=new UIObjectAPI();pttp.setSelectedIndex=function(){return this.callMethod("setSelectedIndex",arguments);};pttp.getSelectedIndex=function(){return this.callMethod("getSelectedIndex",arguments);};pttp.getSelectedData=function(){return this.callMethod("getSelectedData",arguments);};pttp.getDataAtIndex=function(){return this.callMethod("getDataAtIndex",arguments);};pttp.getData=function(){return this.callMethod("getData",arguments);};pttp.setData=function(){return this.callMethod("setData",arguments);};pttp.getNumItems=function(){return this.callMethod("getNumItems",arguments);};pttp.getScrollerWidth=function(){return this.callMethod("getScrollerWidth",arguments);};pttp.setScrollerWidth=function(){return this.callMethod("setScrollerWidth",arguments);};pttp.getScrollerInset=function(){return this.callMethod("getScrollerInset",arguments);};pttp.setScrollerInset=function(){return this.callMethod("setScrollerInset",arguments);};pttp.getItemLeading=function(){return this.callMethod("getItemLeading",arguments);};pttp.setItemLeading=function(){return this.callMethod("setItemLeading",arguments);};pttp.getItemInsetH=function(){return this.callMethod("getItemInsetH",arguments);};pttp.setItemInsetH=function(){return this.callMethod("setItemInsetH",arguments);};pttp.getItemInsetV=function(){return this.callMethod("getItemInsetV",arguments);};pttp.setItemInsetV=function(){return this.callMethod("setItemInsetV",arguments);};pttp.getRowHeight=function(){return this.callMethod("getRowHeight",arguments);};pttp.setRowHeight=function(){return this.callMethod("setRowHeight",arguments);};pttp.getLabelBufferLeft=function(){return this.callMethod("getLabelBufferLeft",arguments);};pttp.setLabelBufferLeft=function(){return this.callMethod("setLabelBufferLeft",arguments);};pttp.getLabelBufferRight=function(){return this.callMethod("getLabelBufferRight",arguments);};pttp.setLabelBufferRight=function(){return this.callMethod("setLabelBufferRight",arguments);};pttp.getLabelBufferTop=function(){return this.callMethod("getLabelBufferTop",arguments);};pttp.setLabelBufferTop=function(){return this.callMethod("setLabelBufferTop",arguments);};pttp.getAnimated=function(){return this.callMethod("getAnimated",arguments);};pttp.setAnimated=function(){return this.callMethod("setAnimated",arguments);};pttp.getLabelField=function(){return this.callMethod("getLabelField",arguments);};pttp.setLabelField=function(){return this.callMethod("setLabelField",arguments);};pttp.getLabel=function(){return this.callMethod("getLabel",arguments);};pttp.setLabel=function(){return this.callMethod("setLabel",arguments);};function ContainerAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ContainerAPI.prototype=new UIObjectAPI();pttp.getHAlign=function(){return this.callMethod("getHAlign",arguments);};pttp.setHAlign=function(){return this.callMethod("setHAlign",arguments);};pttp.getVAlign=function(){return this.callMethod("getVAlign",arguments);};pttp.setVAlign=function(){return this.callMethod("setVAlign",arguments);};pttp.getBackgroundColor=function(){return this.callMethod("getBackgroundColor",arguments);};pttp.setBackgroundColor=function(){return this.callMethod("setBackgroundColor",arguments);};pttp.getBackgroundImage=function(){return this.callMethod("getBackgroundImage",arguments);};pttp.setBackgroundImage=function(){return this.callMethod("setBackgroundImage",arguments);};pttp.getGutter=function(){return this.callMethod("getGutter",arguments);};pttp.setGutter=function(){return this.callMethod("setGutter",arguments);};pttp.getPadding=function(){return this.callMethod("getPadding",arguments);};pttp.setPadding=function(){return this.callMethod("setPadding",arguments);};pttp.appendChild=function(){return this.callMethod("appendChild",arguments);};pttp.insertChildAt=function(){return this.callMethod("insertChildAt",arguments);};pttp.removeChildByID=function(){return this.callMethod("removeChildByID",arguments);};pttp.getNumChildren=function(){return this.callMethod("getNumChildren",arguments);};pttp.removeChildAt=function(){return this.callMethod("removeChildAt",arguments);};pttp.getChildAt=function(){var pObj=this.callMethod("getChildAtJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};BCComponentModules["ExpandingBanner"]=ExpandingBannerAPI;function ExpandingBannerAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ExpandingBannerAPI.prototype=new UIObjectAPI();pttp.expand=function(){return this.callMethod("expand",arguments);};pttp.contract=function(){return this.callMethod("contract",arguments);};pttp.getExpanded=function(){return this.callMethod("getExpanded",arguments);};pttp.synchBannerWithExternal=function(){return this.callMethod("synchBannerWithExternal",arguments);};BCComponentModules["GraphicBlock"]=GraphicBlockAPI;function GraphicBlockAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=GraphicBlockAPI.prototype=new UIObjectAPI();BCComponentModules["Image"]=ImageAPI;function ImageAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ImageAPI.prototype=new UIObjectAPI();pttp.setSource=function(){return this.callMethod("setSource",arguments);};pttp.getSource=function(){return this.callMethod("getSource",arguments);};pttp.getScaleMode=function(){return this.callMethod("getScaleMode",arguments);};pttp.setScaleMode=function(){return this.callMethod("setScaleMode",arguments);};pttp.getHAlign=function(){return this.callMethod("getHAlign",arguments);};pttp.setHAlign=function(){return this.callMethod("setHAlign",arguments);};pttp.getVAlign=function(){return this.callMethod("getVAlign",arguments);};pttp.setVAlign=function(){return this.callMethod("setVAlign",arguments);};pttp.getURL=function(){return this.callMethod("getURL",arguments);};pttp.setURL=function(){return this.callMethod("setURL",arguments);};pttp.getTooltip=function(){return this.callMethod("getTooltip",arguments);};pttp.setTooltip=function(){return this.callMethod("setTooltip",arguments);};pttp.getInset=function(){return this.callMethod("getInset",arguments);};pttp.setInset=function(){return this.callMethod("setInset",arguments);};pttp.getContentWidth=function(){return this.callMethod("getContentWidth",arguments);};pttp.getContentHeight=function(){return this.callMethod("getContentHeight",arguments);};BCComponentModules["Label"]=LabelAPI;function LabelAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=LabelAPI.prototype=new UIObjectAPI();pttp.setText=function(){return this.callMethod("setText",arguments);};pttp.getText=function(){return this.callMethod("getText",arguments);};pttp.setType=function(){return this.callMethod("setType",arguments);};pttp.getType=function(){return this.callMethod("getType",arguments);};pttp.setFont=function(){return this.callMethod("setFont",arguments);};pttp.getFont=function(){return this.callMethod("getFont",arguments);};pttp.setColor=function(){return this.callMethod("setColor",arguments);};pttp.getColor=function(){return this.callMethod("getColor",arguments);};pttp.setTextSize=function(){return this.callMethod("setTextSize",arguments);};pttp.getTextSize=function(){return this.callMethod("getTextSize",arguments);};pttp.getHAlign=function(){return this.callMethod("getHAlign",arguments);};pttp.setHAlign=function(){return this.callMethod("setHAlign",arguments);};pttp.getVAlign=function(){return this.callMethod("getVAlign",arguments);};pttp.setVAlign=function(){return this.callMethod("setVAlign",arguments);};pttp.setUnderline=function(){return this.callMethod("setUnderline",arguments);};pttp.getUnderline=function(){return this.callMethod("getUnderline",arguments);};pttp.setHTMLEnabled=function(){return this.callMethod("setHTMLEnabled",arguments);};pttp.getHTMLEnabled=function(){return this.callMethod("getHTMLEnabled",arguments);};pttp.setAutoSize=function(){return this.callMethod("setAutoSize",arguments);};pttp.getAutoSize=function(){return this.callMethod("getAutoSize",arguments);};pttp.setTruncate=function(){return this.callMethod("setTruncate",arguments);};pttp.getTruncate=function(){return this.callMethod("getTruncate",arguments);};pttp.setMultiline=function(){return this.callMethod("setMultiline",arguments);};pttp.getMultiline=function(){return this.callMethod("getMultiline",arguments);};pttp.getIsTruncated=function(){return this.callMethod("getIsTruncated",arguments);};pttp.getTextWidth=function(){return this.callMethod("getTextWidth",arguments);};pttp.getTextHeight=function(){return this.callMethod("getTextHeight",arguments);};BCComponentModules["LayoutBox"]=LayoutBoxAPI;function LayoutBoxAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=LayoutBoxAPI.prototype=new ComponentAPI();pttp.getHAlign=function(){return this.callMethod("getHAlign",arguments);};pttp.setHAlign=function(){return this.callMethod("setHAlign",arguments);};pttp.getVAlign=function(){return this.callMethod("getVAlign",arguments);};pttp.setVAlign=function(){return this.callMethod("setVAlign",arguments);};pttp.getBackgroundColor=function(){return this.callMethod("getBackgroundColor",arguments);};pttp.setBackgroundColor=function(){return this.callMethod("setBackgroundColor",arguments);};pttp.getBackgroundImage=function(){return this.callMethod("getBackgroundImage",arguments);};pttp.setBackgroundImage=function(){return this.callMethod("setBackgroundImage",arguments);};pttp.getGutter=function(){return this.callMethod("getGutter",arguments);};pttp.setGutter=function(){return this.callMethod("setGutter",arguments);};pttp.getPadding=function(){return this.callMethod("getPadding",arguments);};pttp.setPadding=function(){return this.callMethod("setPadding",arguments);};pttp.appendChild=function(){return this.callMethod("appendChild",arguments);};pttp.insertChildAt=function(){return this.callMethod("insertChildAt",arguments);};pttp.removeChildByID=function(){return this.callMethod("removeChildByID",arguments);};pttp.getNumChildren=function(){return this.callMethod("getNumChildren",arguments);};pttp.removeChildAt=function(){return this.callMethod("removeChildAt",arguments);};pttp.getChildAt=function(){var pObj=this.callMethod("getChildAtJS",arguments);if(pObj){return this.getComponentAPI(pObj.elementName,pObj.elementID);}
return null;};BCComponentModules["Link"]=LinkAPI;function LinkAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=LinkAPI.prototype=new UIObjectAPI();pttp.setText=function(){return this.callMethod("setText",arguments);};pttp.getText=function(){return this.callMethod("getText",arguments);};pttp.setAutoSize=function(){return this.callMethod("setAutoSize",arguments);};pttp.getAutoSize=function(){return this.callMethod("getAutoSize",arguments);};pttp.setFont=function(){return this.callMethod("setFont",arguments);};pttp.getFont=function(){return this.callMethod("getFont",arguments);};pttp.setTextSize=function(){return this.callMethod("setTextSize",arguments);};pttp.getTextSize=function(){return this.callMethod("getTextSize",arguments);};pttp.getHAlign=function(){return this.callMethod("getHAlign",arguments);};pttp.setHAlign=function(){return this.callMethod("setHAlign",arguments);};pttp.getVAlign=function(){return this.callMethod("getVAlign",arguments);};pttp.setVAlign=function(){return this.callMethod("setVAlign",arguments);};pttp.setMultiline=function(){return this.callMethod("setMultiline",arguments);};pttp.getMultiline=function(){return this.callMethod("getMultiline",arguments);};pttp.getURL=function(){return this.callMethod("getURL",arguments);};pttp.setURL=function(){return this.callMethod("setURL",arguments);};pttp.getTooltip=function(){return this.callMethod("getTooltip",arguments);};pttp.setTooltip=function(){return this.callMethod("setTooltip",arguments);};BCComponentModules["List"]=ListAPI;function ListAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ListAPI.prototype=new UIObjectAPI();pttp.setSelectedIndex=function(){return this.callMethod("setSelectedIndex",arguments);};pttp.getSelectedIndex=function(){return this.callMethod("getSelectedIndex",arguments);};pttp.previous=function(){return this.callMethod("previous",arguments);};pttp.next=function(){return this.callMethod("next",arguments);};pttp.scrollTo=function(){return this.callMethod("scrollTo",arguments);};pttp.getSelectedData=function(){return this.callMethod("getSelectedData",arguments);};pttp.getDataAtIndex=function(){return this.callMethod("getDataAtIndex",arguments);};pttp.getData=function(){return this.callMethod("getData",arguments);};pttp.setData=function(){return this.callMethod("setData",arguments);};pttp.showPlaylist=function(){return this.callMethod("showPlaylist",arguments);};pttp.getNumItems=function(){return this.callMethod("getNumItems",arguments);};pttp.getAutomaticAdvance=function(){return this.callMethod("getAutomaticAdvance",arguments);};pttp.setAutomaticAdvance=function(){return this.callMethod("setAutomaticAdvance",arguments);};pttp.getScrollerWidth=function(){return this.callMethod("getScrollerWidth",arguments);};pttp.setScrollerWidth=function(){return this.callMethod("setScrollerWidth",arguments);};pttp.getScrollerInset=function(){return this.callMethod("getScrollerInset",arguments);};pttp.setScrollerInset=function(){return this.callMethod("setScrollerInset",arguments);};pttp.getItemLeading=function(){return this.callMethod("getItemLeading",arguments);};pttp.setItemLeading=function(){return this.callMethod("setItemLeading",arguments);};pttp.getItemInsetH=function(){return this.callMethod("getItemInsetH",arguments);};pttp.setItemInsetH=function(){return this.callMethod("setItemInsetH",arguments);};pttp.getItemInsetV=function(){return this.callMethod("getItemInsetV",arguments);};pttp.setItemInsetV=function(){return this.callMethod("setItemInsetV",arguments);};pttp.getRowHeight=function(){return this.callMethod("getRowHeight",arguments);};pttp.setRowHeight=function(){return this.callMethod("setRowHeight",arguments);};BCComponentModules["LiveButton"]=ButtonAPI;BCComponentModules["Mask"]=MaskAPI;function MaskAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=MaskAPI.prototype=new UIObjectAPI();BCComponentModules["MediaControls"]=MediaControlsAPI;function MediaControlsAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=MediaControlsAPI.prototype=new ContainerAPI();BCComponentModules["Playhead"]=PlayheadAPI;function PlayheadAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=PlayheadAPI.prototype=new UIObjectAPI();pttp.getSliderWidth=function(){return this.callMethod("getSliderWidth",arguments);};pttp.setSliderWidth=function(){return this.callMethod("setSliderWidth",arguments);};pttp.getAutohideSlider=function(){return this.callMethod("getAutohideSlider",arguments);};pttp.setAutohideSlider=function(){return this.callMethod("setAutohideSlider",arguments);};if(BCLoaderEvent==undefined){var BCLoaderEvent={};BCLoaderEvent.PROGRESS="loaderProgress";BCLoaderEvent.INIT="loaderInit";BCLoaderEvent.COMPLETE="loaderComplete";BCLoaderEvent.ERROR="loaderError";}
if(BCLoaderState==undefined){var BCLoaderState={};BCLoaderState.DEFAULT="default";BCLoaderState.LOADING="loading";BCLoaderState.LOADED="loaded";BCLoaderState.ERROR="error";}
BCComponentModules["SWFLoader"]=SWFLoaderAPI;function SWFLoaderAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=SWFLoaderAPI.prototype=new UIObjectAPI();pttp.getState=function(){return this.callMethod("getState",arguments);}
pttp.setSource=function(){return this.callMethod("setSource",arguments);};pttp.getSource=function(){return this.callMethod("getSource",arguments);};pttp.callSWFMethod=function(){return this.callMethod("callSWFMethod",arguments);};BCComponentModules["TabBar"]=TabBarAPI;function TabBarAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=TabBarAPI.prototype=new UIObjectAPI();pttp.setSelectedIndex=function(){return this.callMethod("setSelectedIndex",arguments);};pttp.getSelectedIndex=function(){return this.callMethod("getSelectedIndex",arguments);};pttp.getSelectedData=function(){return this.callMethod("getSelectedData",arguments);};pttp.getDataAtIndex=function(){return this.callMethod("getDataAtIndex",arguments);};pttp.getData=function(){return this.callMethod("getData",arguments);};pttp.setData=function(){return this.callMethod("setData",arguments);};pttp.getNumItems=function(){return this.callMethod("getNumItems",arguments);};pttp.getAutoSizeTabs=function(){return this.callMethod("getAutoSizeTabs",arguments);};pttp.setAutoSizeTabs=function(){return this.callMethod("setAutoSizeTabs",arguments);};pttp.getTabWidth=function(){return this.callMethod("getTabWidth",arguments);};pttp.setTabWidth=function(){return this.callMethod("setTabWidth",arguments);};pttp.getLabelBuffer=function(){return this.callMethod("getLabelBuffer",arguments);};pttp.setLabelBuffer=function(){return this.callMethod("setLabelBuffer",arguments);};pttp.getLabelField=function(){return this.callMethod("getLabelField",arguments);};pttp.setLabelField=function(){return this.callMethod("setLabelField",arguments);};pttp.getTabPadding=function(){return this.callMethod("getTabPadding",arguments);};pttp.setTabPadding=function(){return this.callMethod("setTabPadding",arguments);};pttp.getTabAlign=function(){return this.callMethod("getTabAlign",arguments);};pttp.setTabAlign=function(){return this.callMethod("setTabAlign",arguments);};pttp.getIncludeMenu=function(){return this.callMethod("getIncludeMenu",arguments);};pttp.setIncludeMenu=function(){return this.callMethod("setIncludeMenu",arguments);};pttp.getMenuWidth=function(){return this.callMethod("getMenuWidth",arguments);};pttp.setMenuWidth=function(){return this.callMethod("setMenuWidth",arguments);};pttp.getMenuRowHeight=function(){return this.callMethod("getMenuRowHeight",arguments);};pttp.setMenuRowHeight=function(){return this.callMethod("setMenuRowHeight",arguments);};pttp.getMenuItemInset=function(){return this.callMethod("getMenuItemInset",arguments);};pttp.setMenuItemInset=function(){return this.callMethod("setMenuItemInset",arguments);};pttp.getMaxMenuRows=function(){return this.callMethod("getMaxMenuRows",arguments);};pttp.setMaxMenuRows=function(){return this.callMethod("setMaxMenuRows",arguments);};pttp.getHideSingleTab=function(){return this.callMethod("getHideSingleTab",arguments);};pttp.setHideSingleTab=function(){return this.callMethod("setHideSingleTab",arguments);};pttp.appendTab=function(){return this.callMethod("appendTab",arguments);};pttp.insertTabAt=function(){return this.callMethod("insertTabAt",arguments);};pttp.replaceTabAt=function(){return this.callMethod("replaceTabAt",arguments);};pttp.removeTabAt=function(){return this.callMethod("removeTabAt",arguments);};BCComponentModules["TextRegion"]=TextRegionAPI;function TextRegionAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=TextRegionAPI.prototype=new ContainerAPI();BCComponentModules["TileList"]=TileListAPI;function TileListAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=TileListAPI.prototype=new UIObjectAPI();pttp.setSelectedIndex=function(){return this.callMethod("setSelectedIndex",arguments);};pttp.getSelectedIndex=function(){return this.callMethod("getSelectedIndex",arguments);};pttp.getSelectedData=function(){return this.callMethod("getSelectedData",arguments);};pttp.getDataAtIndex=function(){return this.callMethod("getDataAtIndex",arguments);};pttp.getData=function(){return this.callMethod("getData",arguments);};pttp.setData=function(){return this.callMethod("setData",arguments);};pttp.showPlaylist=function(){return this.callMethod("showPlaylist",arguments);};pttp.previous=function(){return this.callMethod("previous",arguments);};pttp.next=function(){return this.callMethod("next",arguments);};pttp.getNumItems=function(){return this.callMethod("getNumItems",arguments);};pttp.getAutomaticAdvance=function(){return this.callMethod("getAutomaticAdvance",arguments);};pttp.setAutomaticAdvance=function(){return this.callMethod("setAutomaticAdvance",arguments);};pttp.getButtonOffsetX=function(){return this.callMethod("getButtonOffsetX",arguments);};pttp.setButtonOffsetX=function(){return this.callMethod("setButtonOffsetX",arguments);};pttp.getButtonOffsetY=function(){return this.callMethod("getButtonOffsetY",arguments);};pttp.setButtonOffsetY=function(){return this.callMethod("setButtonOffsetY",arguments);};pttp.getButtonSize=function(){return this.callMethod("getButtonSize",arguments);};pttp.setButtonSize=function(){return this.callMethod("setButtonSize",arguments);};pttp.getNumRows=function(){return this.callMethod("getNumRows",arguments);};pttp.setNumRows=function(){return this.callMethod("setNumRows",arguments);};pttp.getNumColumns=function(){return this.callMethod("getNumColumns",arguments);};pttp.setNumColumns=function(){return this.callMethod("setNumColumns",arguments);};pttp.getRowHeight=function(){return this.callMethod("getRowHeight",arguments);};pttp.setRowHeight=function(){return this.callMethod("setRowHeight",arguments);};pttp.getColumnWidth=function(){return this.callMethod("getColumnWidth",arguments);};pttp.setColumnWidth=function(){return this.callMethod("setColumnWidth",arguments);};pttp.getColumnGutter=function(){return this.callMethod("getColumnGutter",arguments);};pttp.setColumnGutter=function(){return this.callMethod("setColumnGutter",arguments);};pttp.getRowGutter=function(){return this.callMethod("getRowGutter",arguments);};pttp.setRowGutter=function(){return this.callMethod("setRowGutter",arguments);};pttp.getContentInsetV=function(){return this.callMethod("getContentInsetV",arguments);};pttp.setContentInsetV=function(){return this.callMethod("setContentInsetV",arguments);};pttp.getContentInsetH=function(){return this.callMethod("getContentInsetH",arguments);};pttp.setContentInsetH=function(){return this.callMethod("setContentInsetH",arguments);};pttp.setScrollDirection=function(){return this.callMethod("setScrollDirection",arguments);};pttp.getScrollDirection=function(){return this.callMethod("getScrollDirection",arguments);};pttp.getAnimationType=function(){return this.callMethod("getAnimationType",arguments);};pttp.setAnimationType=function(){return this.callMethod("setAnimationType",arguments);};pttp.getUseBlur=function(){return this.callMethod("getUseBlur",arguments);};pttp.setUseBlur=function(){return this.callMethod("setUseBlur",arguments);};pttp.showPage=function(){return this.callMethod("showPage",arguments);};pttp.showNextPage=function(){return this.callMethod("showNextPage",arguments);};pttp.showPreviousPage=function(){return this.callMethod("showPreviousPage",arguments);};pttp.getPageIndex=function(){return this.callMethod("getPageIndex",arguments);};pttp.getNumPages=function(){return this.callMethod("getNumPages",arguments);};pttp.getCenterContent=function(){return this.callMethod("getCenterContent",arguments);};pttp.setCenterContent=function(){return this.callMethod("setCenterContent",arguments);};pttp.getColumnCount=function(){return this.callMethod("getColumnCount",arguments);};pttp.getRowCount=function(){return this.callMethod("getRowCount",arguments);};BCComponentModules["TitleLabel"]=TitleLabelAPI;function TitleLabelAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=TitleLabelAPI.prototype=new UIObjectAPI();pttp.setText=function(){return this.callMethod("setText",arguments);};pttp.getText=function(){return this.callMethod("getText",arguments);};pttp.setFont=function(){return this.callMethod("setFont",arguments);};pttp.getFont=function(){return this.callMethod("getFont",arguments);};pttp.setTextSize=function(){return this.callMethod("setTextSize",arguments);};pttp.getTextSize=function(){return this.callMethod("getTextSize",arguments);};pttp.getHAlign=function(){return this.callMethod("getHAlign",arguments);};pttp.setHAlign=function(){return this.callMethod("setHAlign",arguments);};pttp.getVAlign=function(){return this.callMethod("getVAlign",arguments);};pttp.setVAlign=function(){return this.callMethod("setVAlign",arguments);};pttp.setAutoSize=function(){return this.callMethod("setAutoSize",arguments);};pttp.getAutoSize=function(){return this.callMethod("getAutoSize",arguments);};pttp.setTruncate=function(){return this.callMethod("setTruncate",arguments);};pttp.getTruncate=function(){return this.callMethod("getTruncate",arguments);};pttp.setMultiline=function(){return this.callMethod("setMultiline",arguments);};pttp.getMultiline=function(){return this.callMethod("getMultiline",arguments);};pttp.getIsTruncated=function(){return this.callMethod("getIsTruncated",arguments);};pttp.getTextWidth=function(){return this.callMethod("getTextWidth",arguments);};pttp.getSelected=function(){return this.callMethod("getSelected",arguments);};pttp.setSelected=function(){return this.callMethod("setSelected",arguments);};BCComponentModules["ToggleButton"]=ToggleButtonAPI;function ToggleButtonAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ToggleButtonAPI.prototype=new ButtonAPI();pttp.getToggledLabel=function(){return this.callMethod("getToggledLabel",arguments);};pttp.setToggledLabel=function(){return this.callMethod("setToggledLabel",arguments);};pttp.getToggledTooltip=function(){return this.callMethod("getToggledTooltip",arguments);};pttp.setToggledTooltip=function(){return this.callMethod("setToggledTooltip",arguments);};pttp.getToggledIconName=function(){return this.callMethod("getToggledIconName",arguments);};pttp.setToggledIconName=function(){return this.callMethod("setToggledIconName",arguments);};pttp.getIsToggled=function(){return this.callMethod("getIsToggled",arguments);};pttp.setIsToggled=function(){return this.callMethod("setIsToggled",arguments);};BCComponentModules["ViewStack"]=ViewStackAPI;function ViewStackAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=ViewStackAPI.prototype=new LayoutBoxAPI();pttp.getSelectedIndex=function(){return this.callMethod("getSelectedIndex",arguments);};pttp.setSelectedIndex=function(){return this.callMethod("setSelectedIndex",arguments);};pttp.getSelectedItemID=function(){return this.callMethod("getSelectedItemID",arguments);};pttp.setSelectedItemID=function(){return this.callMethod("setSelectedItemID",arguments);};BCComponentModules["VolumeControl"]=VolumeControlAPI;function VolumeControlAPI(pExperience,pCallback,pElementID){this.experience=pExperience;this.callback=pCallback;this.elementID=pElementID;}
var pttp=VolumeControlAPI.prototype=new UIObjectAPI();pttp.getShowBack=function(){return this.callMethod("getShowBack",arguments);};pttp.setShowBack=function(){return this.callMethod("setShowBack",arguments);};pttp.getTooltip=function(){return this.callMethod("getTooltip",arguments);};pttp.setTooltip=function(){return this.callMethod("setTooltip",arguments);};pttp.getIconScale=function(){return this.callMethod("getIconScale",arguments);};pttp.setIconScale=function(){return this.callMethod("setIconScale",arguments);};pttp.getIconOffsetX=function(){return this.callMethod("getIconOffsetX",arguments);};pttp.setIconOffsetX=function(){return this.callMethod("setIconOffsetX",arguments);};pttp.getIconOffsetY=function(){return this.callMethod("getIconOffsetY",arguments);};pttp.setIconOffsetY=function(){return this.callMethod("setIconOffsetY",arguments);};pttp.getIconAlignmentH=function(){return this.callMethod("getIconAlignmentH",arguments);};pttp.setIconAlignmentH=function(){return this.callMethod("setIconAlignmentH",arguments);};pttp.getIconAlignmentV=function(){return this.callMethod("getIconAlignmentV",arguments);};pttp.setIconAlignmentV=function(){return this.callMethod("setIconAlignmentV",arguments);};pttp.getIconName=function(){return this.callMethod("getIconName",arguments);};pttp.setIconName=function(){return this.callMethod("setIconName",arguments);};pttp.getMutedTooltip=function(){return this.callMethod("getMutedTooltip",arguments);};pttp.setMutedTooltip=function(){return this.callMethod("setMutedTooltip",arguments);};pttp.getMutedIconName=function(){return this.callMethod("getMutedIconName",arguments);};pttp.setMutedIconName=function(){return this.callMethod("setMutedIconName",arguments);};pttp.getIsToggled=function(){return this.callMethod("getIsToggled",arguments);};pttp.setIsToggled=function(){return this.callMethod("setIsToggled",arguments);};pttp.getSliderHeight=function(){return this.callMethod("getSliderHeight",arguments);};pttp.setSliderHeight=function(){return this.callMethod("setSliderHeight",arguments);};pttp.getPopupHeight=function(){return this.callMethod("getPopupHeight",arguments);};pttp.setPopupHeight=function(){return this.callMethod("setPopupHeight",arguments);};pttp.getHorizontalPadding=function(){return this.callMethod("getHorizontalPadding",arguments);};pttp.setHorizontalPadding=function(){return this.callMethod("setHorizontalPadding",arguments);};pttp.getVerticalPadding=function(){return this.callMethod("getVerticalPadding",arguments);};pttp.setVerticalPadding=function(){return this.callMethod("setVerticalPadding",arguments);};pttp.getDirection=function(){return this.callMethod("getDirection",arguments);};pttp.setDirection=function(){return this.callMethod("setDirection",arguments);};pttp.getAnimated=function(){return this.callMethod("getAnimated",arguments);};pttp.setAnimated=function(){return this.callMethod("setAnimated",arguments);};(function(){function f(){this.a=window._sf_async_config||{};this.v=i(this,this.z);this.e=[]}function i(a,c){return function(){c.apply(a,arguments)}}function j(){var a,c,b;a="";for(b=0;b<16;b++){c=Math.floor(Math.random()*36).toString(36);a+=c}return a}function l(a,c,b){a.a[c]=a.a[c]||b}
function m(a){if(!n("_SUPERFLY_nosample"))if(a.w)a.l();else{a.w=true;if(window._sf_async_config)a.l();else{a=i(a,a.l);if(typeof window.addEventListener!="undefined")window.addEventListener("load",a,false);else if(typeof document.addEventListener!="undefined")document.addEventListener("load",a,false);else typeof window.attachEvent!="undefined"&&window.attachEvent("onload",a)}}}
function o(a){a.h=0;a.k=0;a.s=p();a.m=true;a.i=null;a.o=72E5;for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++)if(c[b].src.match(/(chartbeat|chartbeatdev|chartbeat_raw).js/)){var d=c[b];break}if(d){b=d.src.split("?")[1];c={};if(b){if(b.charAt(0)=="?")b=b.substring(1);b=b.replace("+"," ");b=b.split(/[&;]/g);for(d=0;d<b.length;d++){var e=b[d].split("=");c[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}}l(a,"uid",c.uid);l(a,"domain",c.domain)}c=window.location;l(a,"pingServer",
"ping.chartbeat.net");l(a,"title",document.title);l(a,"domain",c.host);a:{b=null;if(a.a.useCanonical){b=null;d=document.getElementsByTagName("link");for(e=0;e<d.length;++e)if(d[e].rel=="canonical"){b=d[e].href;b=b.substring(b.indexOf("/",9))}if(b=b){b=b;break a}}e=window.location;b=e.pathname+(e.search||"");b=b.replace(/PHPSESSID=[^&]+/,"");d=/&utm_[^=]+=[^&]+/ig;if(e=d.exec(e.search))b=b.replace(d,"");d=/\?utm_[^=]+=[^&]+(.*)/i;if(e=d.exec(b))b=b.replace(d,e[1]!=""?"?"+e[1]:"");b=b}l(a,"path",b);
b=parseInt(a.a.sessionLength,10);if(!isNaN(b))a.o=b*60*1E3;a.A=j(a);a.n=c.host;a.n=a.n.replace(/^www\./,"");a.a.domain=a.a.domain.replace(/^www\./,"");a.f=n("_chartbeat2");a.q=0;if(!a.f){a.f=n("_chartbeat");if(a.f)n("_chartbeat")&&q("_chartbeat","",-1);else{a.q=1;a.f=j(a)}}q("_chartbeat2",a.f,30);if(a.c)r(a.c);else a.c=new s}f.prototype.B=function(a,c){this.t=window.location.protocol+"//"+this.a.domain+this.a.path;this.a.path=a;if(c)this.a.title=c;window.clearInterval(this.j);o(this);m(this)};
f.prototype.u=function(a){this.i=a};f.prototype.l=function(){var a=window._sf_startpt,c=window._sf_endpt;if(typeof a=="number")this.r=typeof c=="number"?c-a:p()-a;this.j=window.setInterval(i(this,this.p),15E3);this.p()};f.prototype.z=function(){this.e.push(1);for(var a=0,c=0;c<this.e.length;++c)a+=this.e[c];if(a<3){this.m=true;t(this)}else{clearInterval(this.j);q("_SUPERFLY_nosample","1",0.0070)}};function t(a){var c=a.h;c=c?Math.min(c*2,16):1;a.h=c}
f.prototype.p=function(){var a;a:{a=this.c;for(var c=0;c<a.g.length;c++)if(a.b[a.d][a.g[c]]){a=true;break a}a=false}u(this.c);if(this.k<this.h&&!a)this.k++;else{if(a)this.h=0;else t(this);this.k=0;a=v(this);var b=c=0,d=0;if(w(this.c,"onkeydown"))b=1;else if(w(this.c,"onmousemove")||w(this.c,"onscroll"))c=1;else d=1;var e=this.a,g="",h="",k=window.location;if(this.m){this.m=false;if(this.t){g=this.t;h=true}else{g=document.referrer||"";h=g.indexOf("://"+k.host+"/")!=-1}g=(h?"&v=":"&r=")+encodeURIComponent(g);
h=e.title.slice(0,100);h="&i="+encodeURIComponent(h)}var z=this.r?"&b="+this.r:"",A=this.i?"&A="+this.i:"",B=e.sections?"&g0="+encodeURIComponent(e.sections):"",C=e.authors?"&g1="+encodeURIComponent(e.authors):"";this.e.push(0);this.e.length>18&&this.e.shift();var D=(k.protocol||"http:")+"//"+e.pingServer+"/ping?h="+encodeURIComponent(e.domain)+"&p="+encodeURIComponent(e.path)+"&u="+this.f+"&d=";k=k.host.replace(/^www\./,"");a=D+encodeURIComponent(k)+"&g="+e.uid+B+C+"&n="+this.q+"&c="+Math.round((p()-
this.s)/600)/100+"&x="+a+"&y="+(document.body.scrollHeight||0)+"&w="+(window.innerHeight||document.body.offsetHeight||0)+"&j="+Math.round((this.h+2)*15E3/1E3)+"&R="+c+"&W="+b+"&I="+d+g+z+A+"&t="+this.A+h+"&_";c=new Image(1,1);c.onerror=this.v;c.src=a;p()-this.s>=this.o&&window.clearInterval(this.j)}};
function v(){var a=window,c=document.body,b=document.documentElement;if(typeof a.pageYOffset=="number")return a.pageYOffset;else if(c&&c.scrollTop)return c.scrollTop;else if(b&&b.scrollTop)return b.scrollTop;return 0}function s(){this.g=[];x(this,window,"onscroll");x(this,document.body,"onkeydown");x(this,document.body,"onmousemove");r(this)}function r(a){a.b=[{},{},{},{}];a.d=0;u(a)}
function x(a,c,b){var d=c[b]||function(){};a.g.push(b);c[b]=function(e){d.apply(this,arguments);if(e&&b=="onkeydown"){var g=e.keyCode?e.keyCode:e.which;if(g==32||g>36&&g<41){a.b[a.d].onscroll++;return}}a.b[a.d][b]++}}function w(a,c){for(var b=0,d=0;d<a.b.length;d++)b+=a.b[d][c]||0;return b}function u(a){a.d=(a.d+1)%a.b.length;for(var c=0;c<a.g.length;c++)a.b[a.d][a.g[c]]=0}
function n(a){a=a+"=";for(var c=document.cookie.split(";"),b=0;b<c.length;b++){for(var d=c[b];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)==0)return d.substring(a.length,d.length)}return null}function q(a,c,b){var d=new Date;d.setTime(p()+b*864E5);document.cookie=a+"="+c+("; expires="+d.toGMTString())+"; path=/"}function p(){return(new Date).getTime()}var y=new f;o(y);window.pSUPERFLY=y;f.prototype.virtualPage=f.prototype.B;f.prototype.activity=f.prototype.u;m(y);})();
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
var plugin = 0;

if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
    if (navigator.plugins && navigator.plugins["Shockwave Flash"]) plugin = 1;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
    document.write('<SCRIPT LANGUAGE=VBScript\> \n');
    document.write('on error resume next \n');
    document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4")))\n');
    document.write('if ( plugin <= 0 ) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5")))\n');
    document.write('<\/SCRIPT\> \n');
}

if ( plugin ) {
    document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
    document.write(' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width=' + movieWidth + ' height=' + movieHeight + ' ID="Flash">\n');
    document.write(' <param name=movie value="' + swfSrc + '">\n');
    document.write(' <param name=wmode value=opaque>\n');
    document.write(' <param name=quality value=high>\n');
    document.write(' <param name=loop value=true>\n');
    document.write(' <embed src="' + swfSrc + '" quality=high loop=true wmode=opaque pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width=' + movieWidth + ' height=' + movieHeight + '>\n');
    document.write(' </EMBED>\n');
    document.write(' </OBJECT>\n');
} else {
    document.write('<A HREF="' + altClickThru + '"><IMG SRC="' + altSrc + '" WIDTH=' + movieWidth + ' HEIGHT=' + movieHeight + ' BORDER=0 alt=""  TARGET="_blank"></a>\n');
}/*
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
}n1311246422402({"hitPaywall":false,"counted":false,"loggedIn":false,"hash":"5D615D2BD2CD75735CBB8B4162C3032F"});
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
// code for embedding NYTInline audio player

//var playerURL = "http://graphics8.nytimes.com/packages/flash/multimedia/INLINE_PLAYER/NYTInline.swf";
var playerURL = "http://graphics8.nytimes.com/packages/flash/multimedia/INLINE_PLAYER/NYTInlineAudioPlayer.swf";
//var loaderURL = "http://www.nytimes.com/packages/flash/multimedia/swfs/multiloader.swf";
var loaderURL = "http://www.nytimes.com/packages/flash/multimedia/swfs/AS3Multiloader.swf";

var mm = new Object();


// vars needed for this function should already be declared
function writePlayer() {
				
				// in case of multiple embedded players
				var pID = Math.round(Math.random()*1000000);
				 
        		var HTML_anchorOpenStart = "<a href=\"";
        		var HTML_anchorOpenEnd = "\" target=\"new\" style=\"display:inline\">";
        		var HTML_iconImageTag = "<img src=\"http://graphics8.nytimes.com/images/multimedia/icons/audio_icon.gif\" height=\"10\" width=\"13\">";
        		var HTML_anchorClose = "</a>";
        		var HTML_beforeMP3 = "&nbsp;(";
        		var HTML_MP3 = "mp3";
        		var HTML_afterMP3 = ")";
        		var HTML_br = "<br/>"
				
				//var htmlStr = "\<script src=\"http://graphics8.nytimes.com/packages/html/multimedia/js/swfobject.js\"\>\</script\>\n"; 
				
				var htmlStr = "<style type='text/css'>.refer .inlinePlayer .refer{font-size:1em}</style>";
				
				//htmlStr += "<style type=\"text/css\">\n";
				//htmlStr += "html>body .outerInlinePlayer, html>body .inlinePlayer { display: inline-block; }\n";
				//htmlStr += "body:first-of-type .outerInlinePlayer, body:first-of-type .inlinePlayer { display: block; }\n";
				//htmlStr += ".inlinePlayer { overflow: auto; }\n";
				//htmlStr += "</style>\n";
				
				
				//htmlStr += "\<div class=\"outerInlinePlayer\" style=\"padding:0; margin:0;\"\>"
				htmlStr += "\<div class=\"inlinePlayer box\"\>"
				
				
				if(mm.IU != "") {
					htmlStr += "<div class=\"story\"><div class=\"callout\"><img src=\"";
          			htmlStr += mm.IU;
          			htmlStr += "\" alt=\"\"></div></div>";
        		}

				htmlStr += "<div class='refer'>";
				
				if((mm.DI == true) || (mm.DI == "true")) {
            
						// we are.  See if we are linking it to the audio.
            			if((mm.LI == true) || (mm.LI == "true")) {
                
								// add link begin
				
                				htmlStr += HTML_anchorOpenStart;

                // add URL
                				htmlStr += mm.AU;

                // add link end
                				htmlStr += HTML_anchorOpenEnd;

                // add icon image
                				htmlStr += HTML_iconImageTag;

                // add close of link
                				htmlStr += HTML_anchorClose;
            			} else {
                
							htmlStr += HTML_iconImageTag;
            			}

            		// add a space after the image
            		htmlStr += "&nbsp;";
        		}

        		// if there is a headline, add it.
        		if((mm.AH != null) && (mm.AH != "")) {
            
						// add the headline.
            			htmlStr += mm.AH;
						
						if((mm.LI == true) || (mm.LI == "true")) {
						
							// add the "(mp3)" with the "mp3" linked to the audio file.
							htmlStr += HTML_beforeMP3;
							htmlStr += HTML_anchorOpenStart;
							htmlStr += mm.AU;
							htmlStr += HTML_anchorOpenEnd;
							htmlStr += HTML_MP3;
							htmlStr += HTML_anchorClose;
							htmlStr += HTML_afterMP3;
						}
        		}
				
				htmlStr+="\</div>";
				if(mm.ID == null || mm.ID == "") {
					htmlStr+="\<div id=\"p"+pID+"\" style=\"margin:0;padding:0;width:100%;height:25;\">\</div\>\n";
				}
				htmlStr+="\</div\>\n";
				
				//htmlStr+="\<script src=\"http://graphics8.nytimes.com/packages/html/multimedia/js/NYTInlineEmbed.js\" \>\</script\>\n";
				//htmlStr+="\<script\>embedNYTInline(\""+audioURL+"\",\""+audioDuration+"\",\"p"+pID+"\");\</script\>";
				
				
				htmlStr+="\<script\>\n";
				htmlStr+="var so = new SWFObject(\""+loaderURL+"\", \"p"+pID+"\", \"100%\", \"25\", \"8\", \"#FFFFFF\");\n";
				
				htmlStr+="so.addVariable(\"mp3\",\""+mm.AU+"\")\n";
				htmlStr+="so.addVariable(\"duration\",\""+mm.AD+"\")\n";
				htmlStr+="so.addVariable(\"contentPath\",\""+playerURL+"\")\n";
				htmlStr+="so.addParam(\"allowScriptAccess\", \"always\");\n";
				htmlStr+="so.addParam(\"wmode\", \"opaque\");\n";
			
				if(mm.ID == null || mm.ID == "") {
					htmlStr+="so.write(\"p"+pID+"\");\n\</script\>";
				} else {
					htmlStr+="so.write(\""+mm.ID+"\");\n\</script\>";
				}
		
				//tf.value = htmlStr;
				if(!(document.location.search=="?noflash")) { document.write(htmlStr); }
		}/*
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
 })();/*
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

(function(){var g=null,h=(new Date).getTime();var i=this,aa=function(a,b){var c=a.split("."),d=i;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==void 0?d[e]=b:d=d[e]?d[e]:d[e]={}},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}else return function(){return a.apply(b,
arguments)}},j=function(a,b,c){j=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ba:ca;return j.apply(g,arguments)};var ea=/&/g,fa=/</g,ga=/>/g,ha=/\"/g,k={"\x00":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"},p={"'":"\\'"},ja=function(a){for(var b=0,c=String(ia).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,a.length),e=0;b==0&&e<d;e++){var f=c[e]||"",oa=a[e]||"",r=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=r.exec(f)||["","",""],n=l.exec(oa)||["",
"",""];if(m[0].length==0&&n[0].length==0)break;b=q(m[1].length==0?0:parseInt(m[1],10),n[1].length==0?0:parseInt(n[1],10))||q(m[2].length==0,n[2].length==0)||q(m[2],n[2])}while(b==0)}return b},q=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var ka=document,s=window;var t=function(a){a=parseFloat(a);return isNaN(a)||a>1||a<0?0:a},w=function(a){return a=="true"?!0:a=="false"?!1:!1},la=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,x=function(a){return!a?"pagead2.googlesyndication.com":(a=a.match(la))?a[0]:"pagead2.googlesyndication.com"};var ma=t("0"),na=t("0"),pa=t("0");var qa=w("false"),ra=w("false"),sa=w("false");var ta=function(){return x("")};var y,z,B,C,ua=function(){return i.navigator?i.navigator.userAgent:g};C=B=z=y=!1;var D;if(D=ua()){var va=i.navigator;y=D.indexOf("Opera")==0;z=!y&&D.indexOf("MSIE")!=-1;B=!y&&D.indexOf("WebKit")!=-1;C=!y&&!B&&va.product=="Gecko"}var E=z,F=C,wa=B,G;
a:{var H="",I;if(y&&i.opera)var J=i.opera.version,H=typeof J=="function"?J():J;else if(F?I=/rv\:([^\);]+)(\)|;)/:E?I=/MSIE\s+([^\);]+)(\)|;)/:wa&&(I=/WebKit\/(\S+)/),I)var xa=I.exec(ua()),H=xa?xa[1]:"";if(E){var K,ya=i.document;K=ya?ya.documentMode:void 0;if(K>parseFloat(H)){G=String(K);break a}}G=H}var ia=G,L={},za={},Aa=function(){return za[9]||(za[9]=E&&document.documentMode&&document.documentMode>=9)};!E||Aa();if(F||E)if(!E||!Aa())F&&(L["1.9.1"]||(L["1.9.1"]=ja("1.9.1")>=0));E&&(L["9"]||(L["9"]=ja("9")>=0));x("");var N=function(a){return!!a&&typeof a=="function"&&!!a.call},Ba=function(a,b){if(!(arguments.length<2))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])};function O(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function Ca(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)};aa("google_protectAndRun",function(a,b,c){a=j(b,i,a);b=window.onerror;window.onerror=a;try{c()}catch(d){var c=d.toString(),e="";d.fileName&&(e=d.fileName);var f=-1;if(d.lineNumber)f=d.lineNumber;if(!a(c,e,f))throw d;}window.onerror=b});
aa("google_handleError",function(a,b,c,d){if(Math.random()<0.01)a=["http://",ta(),"/pagead/gen_204","?id=jserror","&jscb=",qa?1:0,"&jscd=",ra?1:0,"&context=",O(a),"&msg=",O(b),"&file=",O(c),"&line=",O(d.toString()),"&url=",O(ka.URL.substring(0,512)),"&ref=",O(ka.referrer.substring(0,512))],a.push(["&client=",O(s.google_ad_client),"&format=",O(s.google_ad_format),"&slotname=",O(s.google_ad_slot),"&output=",O(s.google_ad_output),"&ad_type=",O(s.google_ad_type)].join("")),a=a.join(""),s.google_image_requests||
(s.google_image_requests=[]),b=new Image,b.src=a,s.google_image_requests.push(b);return!sa});var Da=function(a){try{var b=a.google_test;a.google_test=!b;if(a.google_test===!b)return a.google_test=b,!0}catch(c){}return!1},P=g,Ea=function(){if(!P){for(var a=window;a!=a.parent&&Da(a.parent);)a=a.parent;P=a}return P};var Q,R=function(a){this.c=[];this.a=a||window;this.b=0;this.d=g},Fa=function(a,b){this.l=a;this.i=b};R.prototype.n=function(a,b){this.b==0&&this.c.length==0&&(!b||b==window)?(this.b=2,this.g(new Fa(a,window))):this.h(a,b)};R.prototype.h=function(a,b){this.c.push(new Fa(a,b||this.a));S(this)};R.prototype.o=function(a){this.b=1;if(a)this.d=this.a.setTimeout(j(this.f,this),a)};R.prototype.f=function(){if(this.b==1){if(this.d!=g)this.a.clearTimeout(this.d),this.d=g;this.b=0}S(this)};R.prototype.p=function(){return!0};
R.prototype.nq=R.prototype.n;R.prototype.nqa=R.prototype.h;R.prototype.al=R.prototype.o;R.prototype.rl=R.prototype.f;R.prototype.sz=R.prototype.p;var S=function(a){a.a.setTimeout(j(a.m,a),0)};R.prototype.m=function(){if(this.b==0&&this.c.length){var a=this.c.shift();this.b=2;a.i.setTimeout(j(this.g,this,a),0);S(this)}};R.prototype.g=function(a){this.b=0;a.l()};
var Ga=function(a){try{return a.sz()}catch(b){return!1}},Ia=function(a){return!!a&&(typeof a=="object"||typeof a=="function")&&Ga(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},Ja=function(){if(Q&&Ga(Q))return Q;var a=Ea(),b=a.google_jobrunner;return Ia(b)?Q=b:a.google_jobrunner=Q=new R(a)},Ka=function(a,b){Ja().nq(a,b)},La=function(a,b){Ja().nqa(a,b)};var Ma=/MSIE [2-7]|PlayStation|Gecko\/20090226/i,Na=/Android|Opera/,Oa=function(){var a=T,b=U.google_ad_width,c=U.google_ad_height,d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Ba(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Pa=function(){},Ra=function(a,b,c){switch(typeof b){case "string":Qa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==g){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Ra(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],typeof f!="function"&&(c.push(d),Qa(e,c),c.push(":"),Ra(a,f,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Sa={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Qa=function(a,b){b.push('"');b.push(a.replace(Ta,function(a){if(a in Sa)return Sa[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return Sa[a]=e+b.toString(16)}));b.push('"')};var V="google_ad_block,google_ad_channel,google_ad_client,google_ad_format,google_ad_height,google_ad_host,google_ad_host_channel,google_ad_host_tier_id,google_ad_output,google_ad_override,google_ad_region,google_ad_section,google_ad_slot,google_ad_type,google_ad_width,google_adtest,google_allow_expandable_ads,google_alternate_ad_url,google_alternate_color,google_analytics_domain_name,google_analytics_uacct,google_bid,google_city,google_color_bg,google_color_border,google_color_line,google_color_link,google_color_text,google_color_url,google_container_id,google_contents,google_country,google_cpm,google_ctr_threshold,google_cust_age,google_cust_ch,google_cust_gender,google_cust_id,google_cust_interests,google_cust_job,google_cust_l,google_cust_lh,google_cust_u_url,google_disable_video_autoplay,google_ed,google_eids,google_enable_osd,google_enable_ose,google_encoding,google_font_face,google_font_size,google_frame_id,google_gl,google_hints,google_image_size,google_kw,google_kw_type,google_language,google_max_num_ads,google_max_radlink_len,google_num_radlinks,google_num_radlinks_per_unit,google_num_slots_to_rotate,google_only_ads_with_video,google_only_pyv_ads,google_only_userchoice_ads,google_override_format,google_page_url,google_referrer_url,google_region,google_reuse_colors,google_rl_dest_url,google_rl_filtering,google_rl_mode,google_rt,google_safe,google_scs,google_skip,google_tag_info,google_targeting,google_ui_features,google_ui_version,google_video_doc_id,google_video_product_type,google_with_pyv_ads".split(",");var W=function(a){this.a=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],img:Math.random()<0.01?[]:g});this.e=a.google_iframe_oncopy;a.setTimeout(j(this.k,this),3E4)},Ua;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
/[&<>\"]/.test(X)&&(X.indexOf("&")!=-1&&(X=X.replace(ea,"&amp;")),X.indexOf("<")!=-1&&(X=X.replace(fa,"&lt;")),X.indexOf(">")!=-1&&(X=X.replace(ga,"&gt;")),X.indexOf('"')!=-1&&(X=X.replace(ha,"&quot;")));Ua=X;W.prototype.set=function(a,b){this.e.handlers[a]=b;this.a.addEventListener&&this.a.addEventListener("load",j(this.j,this,a),!1)};W.prototype.j=function(a){var a=this.a.document.getElementById(a),b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};
W.prototype.k=function(){if(this.e.img){var a=this.e.log,b=this.a.document;if(a.length)b=["http://",ta(),"/pagead/gen_204?id=iframecopy&log=",O(a.join("-")),"&url=",O(b.URL.substring(0,512)),"&ref=",O(b.referrer.substring(0,512))].join(""),a.length=0,a=new Image,this.e.img.push(a),a.src=b}};var Va=function(){var a="script";return["<",a,' src="http://',x(""),'/pagead/js/r20110713/r20110719/show_ads_impl.js"></',a,">"].join("")},Wa=function(a,b,c,d){return function(){var e=!1;d&&Ja().al(3E4);try{var f;try{f=!!a.document.getElementById(b).contentWindow.document}catch(oa){f=!1}if(f){var r=a.document.getElementById(b).contentWindow,
l=r.document;if(!l.body||!l.body.firstChild)l.open(),r.google_async_iframe_close=!0,l.write(c)}else{var m=a.document.getElementById(b).contentWindow,n;f=c;f=String(f);if(f.quote)n=f.quote();else{r=['"'];for(l=0;l<f.length;l++){var M=f.charAt(l),Ha=M.charCodeAt(0),pb=r,qb=l+1,da;if(!(da=k[M])){var A;if(Ha>31&&Ha<127)A=M;else{var o=M;if(o in p)A=p[o];else if(o in k)A=p[o]=k[o];else{var u=o,v=o.charCodeAt(0);if(v>31&&v<127)u=o;else{if(v<256){if(u="\\x",v<16||v>256)u+="0"}else u="\\u",v<4096&&(u+="0");
u+=v.toString(16).toUpperCase()}A=p[o]=u}}da=A}pb[qb]=da}r.push('"');n=r.join("")}m.location.replace("javascript:"+n)}e=!0}catch(xb){m=Ea().google_jobrunner,Ia(m)&&m.rl()}e&&(new W(a)).set(b,Wa(a,b,c,!1))}},Xa=function(){return ma&&na/ma||typeof window.google_hash_ratio=="number"&&window.google_hash_ratio||g};window.google_loader_used=!0;(function(a){if(!("google_onload_fired"in a))a.google_onload_fired=!1,Ca(a,function(){a.google_onload_fired=!0})})(window);if(!window.google_loader_experiment){var Ya;a:{var Za=["async_bad_black","block_bad_black"];if(!(Math.random()<1.0E-4)){var $a=Math.random();if($a<pa){Ya=Za[Math.floor($a/pa*Za.length)];break a}}Ya=""}window.google_loader_experiment=Ya||"launch"}var ab;
a:{try{if(window.google_enable_async!==!0&&window.google_loader_experiment=="blockodd"&&window.top.location.hostname.length%2==1){ab=!1;break a}}catch(bb){}ab=!0}var cb;if(cb=ab){var db;if(window.google_enable_async===!1)db=0;else{var eb=navigator.userAgent,fb=window.google_loader_experiment;db=(Ma.test(eb)?!1:Na.test(eb)?fb=="async_bad_black":!0)&&!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html")}cb=db}
if(cb){var gb=window;gb.google_unique_id?++gb.google_unique_id:gb.google_unique_id=1;for(var Y=window,_script$$inline_161="script",Z,U=Y,T={allowtransparency:'"true"',frameborder:'"0"',height:'"'+Y.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+Ua+'"',scrolling:'"no"',vspace:'"0"',width:'"'+Y.google_ad_width+'"'},hb=U.document,$=T.id,ib=0;!$||U.document.getElementById($);)$="aswift_"+ib++;T.id=$;T.name=$;hb.write(Oa());Z=$;var jb;Y.google_page_url&&(Y.google_page_url=
String(Y.google_page_url));for(var kb=[],lb=0,mb=V.length;lb<mb;lb++){var nb=V[lb];if(Y[nb]!=g){var ob;try{var rb=[];Ra(new Pa,Y[nb],rb);ob=rb.join("")}catch(sb){}ob&&Ba(kb,nb,"=",ob,";")}}jb=kb.join("");for(var tb=0,ub=V.length;tb<ub;tb++)Y[V[tb]]=g;var vb=(new Date).getTime(),wb=Xa(),yb=window.google_loader_experiment,zb=["<!doctype html><html><body><",_script$$inline_161,">",jb,"google_show_ads_impl=true;google_unique_id=",Y.google_unique_id,';google_async_iframe_id="',Z,'";google_start_time=',
h,";",wb?"google_hash_ratio="+wb+";":"",yb?'google_loader_experiment="'+yb+'";':"","google_bpp=",vb>h?vb-h:1,";</",_script$$inline_161,">",Va(),"</body></html>"].join("");(Y.document.getElementById(Z)?Ka:La)(Wa(Y,Z,zb,!0))}else window.google_start_time=h,window.google_hash_ratio=Xa(),document.write(Va());})();
var _sf_startpt=(new Date()).getTime();function nameIt(){window.name="nytimesmain";if((navigator.appName=="Microsoft Internet Explorer")&&(document.all.globalsearchform)){document.all.globalsearchform.style.visibility="visible";}}function pop_me_up(pURL,features){var new_window=window.open(pURL,"popup_window",features);new_window.focus();}function pop_me_up2(pURL,name,features){var new_window=window.open(pURL,name,features);new_window.focus();}function changeImage(image_name,image_src){document.images[image_name].src=image_src;}function goToURL(obj){var f=(obj.section)?obj:obj.form;var selected=f.section.selectedIndex;var URL=f.section.options[selected].value;if(URL!==""){document.location=URL;}return false;}function goToURL2(sel){var selected=sel.selectedIndex;var url=sel.options[selected].value;if(url!==""){document.location=url;}return false;}(function(){if(window.self!=window.top&&!document.referrer.match(/^https?:\/\/[^?\/]+\.nytimes\.com\//)){var expTime=new Date();expTime.setTime(expTime.getTime()+60000);document.cookie="FramesetReferrer="+document.referrer+"; expires="+expTime.toGMTString()+"; path=/";top.location.replace(window.location.pathname);}})();function writeFlashSlideShow(xmlFile){var swfFile="/slideshow/swf/slideshow.swf?XMLfile=/slideshow/xml/travel/"+xmlFile;var HTMLstr="";HTMLstr+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="390" height="300" id="slideshow" align="middle">';HTMLstr+='<param name="allowScriptAccess" value="sameDomain" />';HTMLstr+='<param name="movie" value="'+swfFile+'" />';HTMLstr+='<param name="quality" value="high" />';HTMLstr+='<param name="wmode" value="transparent" />';HTMLstr+='<embed src="'+swfFile+'" wmode="transparent" quality="high" width="390" height="300" name="slideshow" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';HTMLstr+="</object>";return HTMLstr;}function showFirstSlide(imgName,photoCredit,photoCaption){var HTMLstr="";HTMLstr+="<!-- begin photo -->";HTMLstr+='<img src="http://graphics.nytimes.com/images/section/travel/slideshow/'+imgName+'" width="390" height="200" alt="photo" border="0">';HTMLstr+="<!-- end photo -->";HTMLstr+='<div align="right" class="photocredit">'+photoCredit+"</div>";HTMLstr+='<div class="photocaption">'+photoCaption+"</div>";return HTMLstr;}function writeEmbeddedFlashSlideShow(xmlFile){var swfFile="/slideshow/swf/slideshow.swf?XMLfile=/slideshow/xml/"+xmlFile;var HTMLstr="";HTMLstr+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="390" height="300" id="slideshow" align="middle">';HTMLstr+='<param name="allowScriptAccess" value="sameDomain" />';HTMLstr+='<param name="movie" value="'+swfFile+'" />';HTMLstr+='<param name="quality" value="high" />';HTMLstr+='<param name="wmode" value="transparent" />';HTMLstr+='<embed src="'+swfFile+'" wmode="transparent" qualityaigh" width="390" height="300" name="slideshow" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';HTMLstr+="</object>";return HTMLstr;}function showFirstEmbeddedSlide(imgName,photoCredit,photoCaption){var HTMLstr="";HTMLstr+="<!-- begin photo -->";HTMLstr+='<img src="'+imgName+'" width="390" height="200" alt="photo" border="0">';HTMLstr+="<!-- end photo -->";HTMLstr+='<div align="right" class="photocredit">'+photoCredit+"</div>";HTMLstr+='<div class="photocaption">'+photoCaption+"</div>";return HTMLstr;}function preloadNavImages(imageNames,imagePath){var loadedImages=[];if(document.images){for(var i=0;i<imageNames.length;i++){loadedImages[i]=new Image();loadedImages[i].src=imagePath+"nav_"+imageNames[i]+"_off.gif";}}}function readCookie(value){var allCookieVals=document.cookie.split(";");for(var i=0;i<allCookieVals.length;i++){if(allCookieVals[i].indexOf(value)!=-1){var cookieVal=allCookieVals[i].split("=");return cookieVal[1];}}}function expandMultimediaWindow(){if(window.resizeTo&&window.moveTo){window.resizeTo(screen.availWidth,screen.availHeight);window.moveTo(0,0);}}function shrinkMultimediaWindow(w,h){if(window.resizeTo){window.resizeTo(w,h);}if(window.moveTo){var winX=((screen.availWidth/2)-(w/2));var winY=((screen.availHeight/2)-(h/2));window.moveTo(winX,winY);}}function ieXLiquidWidth(){if(document.body.clientWidth<774){return"768px";}else{if(document.body.clientWidth>984){return"980px";}else{return"auto";}}}function setClientSizeCookies(){var client_w=document.body.clientWidth;var path="/";var domain="nytimes.com";document.cookie="client_w="+client_w+"; path= "+path+"; domain="+domain;}function Accordian(target){this.element=typeof target=="object"?target:document.getElementById(target);if(!this.element){return false;}this.ul=this.element.getElementsByTagName("ul")[0];this.tabs=this.ul.getElementsByTagName("li");this.tabContent=this.getTabContent();this.bind();}Accordian.prototype.getTabContent=function(){var tabContent=[];this.divs=this.element.getElementsByTagName("div");for(var i=0;i<this.divs.length;i++){if(/tabContent/i.test(this.divs[i].className)){tabContent.push(this.divs[i]);}}return tabContent;};Accordian.prototype.bind=function(){var o=this;var clickHandler=function(){if(this.className!="selected"){o.open(this);return false;}};for(var i=0;i<this.tabs.length;i++){this.tabs[i].onclick=clickHandler;}};Accordian.prototype.open=function(caller){for(var i=0;i<this.tabs.length;i++){var tab=this.tabs[i];if(tab==caller){this.collapse();tab.className="selected";this.tabContent[i].style.display="block";}}};Accordian.prototype.collapse=function(){for(var i=0;i<this.tabs.length;i++){this.tabs[i].className="";this.tabContent[i].style.display="none";}};function linkbox(url,winName){window.open(url,winName,"location=yes,directories=yes,menubar=yes,toolbar=yes,status=yes,resizable=yes,scrollbars=yes");}function enhanceAccordians(){var divs=document.getElementsByTagName("div");for(var i=0;i<divs.length;i++){var element=divs[i];if(/accordian/i.test(element.className)){var instance=new Accordian(element);}}}var getMetaTagValue=function(name){if(document.getElementsByTagName){var meta=document.getElementsByTagName("meta");for(var i=0;i<meta.length;i++){if(meta[i].name==name){return meta[i].content;}}}};var NYTD=NYTD||{};NYTD.env="production";NYTD.Hosts=NYTD.Hosts||(function(){return{imageHost:"http://i1.nyt.com",jsHost:"http://js.nyt.com",cssHost:"http://css.nyt.com",jsonHost:"http://json8.nytimes.com"};})();(function(){var windowLoaded=false;var document_scripts;if(window.addEventListener){window.addEventListener("load",function(){windowLoaded=true;},false);}else{if(window.attachEvent){window.attachEvent("onload",function(){windowLoaded=true;});}}function scriptLoaded(src){document_scripts=document_scripts||{};if(document_scripts[src]){return true;}else{var script_tags=document.getElementsByTagName("script");for(var i=0,script;script=script_tags[i];i++){if(script.src){document_scripts[script.src]=1;}}if(document_scripts[src]){return true;}else{return false;}}}NYTD.require=function(file,callback){if(windowLoaded){throw ("Cannot require file, document is already loaded");}var url=/^\/[^\/]/.test(file)?NYTD.Hosts.jsHost+file:file;var force=arguments[arguments.length-1]===true;var needsCallbackScriptTag;if(force||!scriptLoaded(url)){document.write('<script src="'+url+'" type="text/javascript" charset="utf-8" onerror="throw(\'NYTD.require: An error occured: \' + this.src)"><\/script>');document_scripts[url]=1;needsCallbackScriptTag=true;}if(typeof callback=="function"){if(document.addEventListener&&!Prototype.Browser.IE){if(needsCallbackScriptTag){document.write('<script type="text/javascript" charset="utf-8">('+callback.toString()+")();<\/script>");}else{window.setTimeout(function(){callback();},0);}}else{NYTD.require.callbacks=NYTD.require.callbacks||[];NYTD.require.callbacks.push(callback);NYTD.require.callbacks.count=(++NYTD.require.callbacks.count)||0;document.write("<script id=__onAfterRequire"+NYTD.require.callbacks.count+" src=//:><\/script>");document.getElementById("__onAfterRequire"+NYTD.require.callbacks.count).onreadystatechange=function(){if(this.readyState=="complete"){this.onreadystatechange=null;(NYTD.require.callbacks.pop())();this.parentNode.removeChild(this);}};}}};})();NYTD.asyncLoad=function(file,callback){var url=/^\/[^\/]/.test(file)?NYTD.Hosts.jsHost+file:file;var scriptTag=document.createElement("script");scriptTag.type="text/javascript";scriptTag.src=url;if(typeof callback==="function"){scriptTag.onload=function(e){callback();};scriptTag.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){callback();}};}document.getElementsByTagName("head")[0].appendChild(scriptTag);};NYTD.require("/js/mtr.js");if("external" in window&&"msIsSiteMode" in window.external){NYTD.require("/js/app/ie/pinned_site.js");}var Prototype={Version:"1.7",Browser:(function(){var ua=navigator.userAgent;var isOpera=Object.prototype.toString.call(window.opera)=="[object Opera]";return{IE:!!window.attachEvent&&!isOpera,Opera:isOpera,WebKit:ua.indexOf("AppleWebKit/")>-1,Gecko:ua.indexOf("Gecko")>-1&&ua.indexOf("KHTML")===-1,MobileSafari:/Apple.*Mobile/.test(ua)};})(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:(function(){var constructor=window.Element||window.HTMLElement;return !!(constructor&&constructor.prototype);})(),SpecificElementExtensions:(function(){if(typeof window.HTMLDivElement!=="undefined"){return true;}var div=document.createElement("div"),form=document.createElement("form"),isSupported=false;if(div["__proto__"]&&(div["__proto__"]!==form["__proto__"])){isSupported=true;}div=form=null;return isSupported;})()},ScriptFragment:"<script[^>]*>([\\S\\s]*?)<\/script>",JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(x){return x;}};if(Prototype.Browser.MobileSafari){Prototype.BrowserFeatures.SpecificElementExtensions=false;}var Abstract={};var Try={these:function(){var returnValue;for(var i=0,length=arguments.length;i<length;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}return returnValue;}};var Class=(function(){var IS_DONTENUM_BUGGY=(function(){for(var p in {toString:1}){if(p==="toString"){return false;}}return true;})();function subclass(){}function create(){var parent=null,properties=$A(arguments);if(Object.isFunction(properties[0])){parent=properties.shift();}function klass(){this.initialize.apply(this,arguments);}Object.extend(klass,Class.Methods);klass.superclass=parent;klass.subclasses=[];if(parent){subclass.prototype=parent.prototype;klass.prototype=new subclass;parent.subclasses.push(klass);}for(var i=0,length=properties.length;i<length;i++){klass.addMethods(properties[i]);}if(!klass.prototype.initialize){klass.prototype.initialize=Prototype.emptyFunction;}klass.prototype.constructor=klass;return klass;}function addMethods(source){var ancestor=this.superclass&&this.superclass.prototype,properties=Object.keys(source);if(IS_DONTENUM_BUGGY){if(source.toString!=Object.prototype.toString){properties.push("toString");}if(source.valueOf!=Object.prototype.valueOf){properties.push("valueOf");}}for(var i=0,length=properties.length;i<length;i++){var property=properties[i],value=source[property];if(ancestor&&Object.isFunction(value)&&value.argumentNames()[0]=="$super"){var method=value;value=(function(m){return function(){return ancestor[m].apply(this,arguments);};})(property).wrap(method);value.valueOf=method.valueOf.bind(method);value.toString=method.toString.bind(method);}this.prototype[property]=value;}return this;}return{create:create,Methods:{addMethods:addMethods}};})();(function(){var _toString=Object.prototype.toString,NULL_TYPE="Null",UNDEFINED_TYPE="Undefined",BOOLEAN_TYPE="Boolean",NUMBER_TYPE="Number",STRING_TYPE="String",OBJECT_TYPE="Object",FUNCTION_CLASS="[object Function]",BOOLEAN_CLASS="[object Boolean]",NUMBER_CLASS="[object Number]",STRING_CLASS="[object String]",ARRAY_CLASS="[object Array]",DATE_CLASS="[object Date]",NATIVE_JSON_STRINGIFY_SUPPORT=window.JSON&&typeof JSON.stringify==="function"&&JSON.stringify(0)==="0"&&typeof JSON.stringify(Prototype.K)==="undefined";function Type(o){switch(o){case null:return NULL_TYPE;case (void 0):return UNDEFINED_TYPE;}var type=typeof o;switch(type){case"boolean":return BOOLEAN_TYPE;case"number":return NUMBER_TYPE;case"string":return STRING_TYPE;}return OBJECT_TYPE;}function extend(destination,source){for(var property in source){destination[property]=source[property];}return destination;}function inspect(object){try{if(isUndefined(object)){return"undefined";}if(object===null){return"null";}return object.inspect?object.inspect():String(object);}catch(e){if(e instanceof RangeError){return"...";}throw e;}}function toJSON(value){return Str("",{"":value},[]);}function Str(key,holder,stack){var value=holder[key],type=typeof value;if(Type(value)===OBJECT_TYPE&&typeof value.toJSON==="function"){value=value.toJSON(key);}var _class=_toString.call(value);switch(_class){case NUMBER_CLASS:case BOOLEAN_CLASS:case STRING_CLASS:value=value.valueOf();}switch(value){case null:return"null";case true:return"true";case false:return"false";}type=typeof value;switch(type){case"string":return value.inspect(true);case"number":return isFinite(value)?String(value):"null";case"object":for(var i=0,length=stack.length;i<length;i++){if(stack[i]===value){throw new TypeError();}}stack.push(value);var partial=[];if(_class===ARRAY_CLASS){for(var i=0,length=value.length;i<length;i++){var str=Str(i,value,stack);partial.push(typeof str==="undefined"?"null":str);}partial="["+partial.join(",")+"]";}else{var keys=Object.keys(value);for(var i=0,length=keys.length;i<length;i++){var key=keys[i],str=Str(key,value,stack);if(typeof str!=="undefined"){partial.push(key.inspect(true)+":"+str);}}partial="{"+partial.join(",")+"}";}stack.pop();return partial;}}function stringify(object){return JSON.stringify(object);}function toQueryString(object){return $H(object).toQueryString();}function toHTML(object){return object&&object.toHTML?object.toHTML():String.interpret(object);}function keys(object){if(Type(object)!==OBJECT_TYPE){throw new TypeError();}var results=[];for(var property in object){if(object.hasOwnProperty(property)){results.push(property);}}return results;}function values(object){var results=[];for(var property in object){results.push(object[property]);}return results;}function clone(object){return extend({},object);}function isElement(object){return !!(object&&object.nodeType==1);}function isArray(object){return _toString.call(object)===ARRAY_CLASS;}var hasNativeIsArray=(typeof Array.isArray=="function")&&Array.isArray([])&&!Array.isArray({});if(hasNativeIsArray){isArray=Array.isArray;}function isHash(object){return object instanceof Hash;}function isFunction(object){return _toString.call(object)===FUNCTION_CLASS;}function isString(object){return _toString.call(object)===STRING_CLASS;}function isNumber(object){return _toString.call(object)===NUMBER_CLASS;}function isDate(object){return _toString.call(object)===DATE_CLASS;}function isUndefined(object){return typeof object==="undefined";}extend(Object,{extend:extend,inspect:inspect,toJSON:NATIVE_JSON_STRINGIFY_SUPPORT?stringify:toJSON,toQueryString:toQueryString,toHTML:toHTML,keys:Object.keys||keys,values:values,clone:clone,isElement:isElement,isArray:isArray,isHash:isHash,isFunction:isFunction,isString:isString,isNumber:isNumber,isDate:isDate,isUndefined:isUndefined});})();Object.extend(Function.prototype,(function(){var slice=Array.prototype.slice;function update(array,args){var arrayLength=array.length,length=args.length;while(length--){array[arrayLength+length]=args[length];}return array;}function merge(array,args){array=slice.call(array,0);return update(array,args);}function argumentNames(){var names=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return names.length==1&&!names[0]?[]:names;}function bind(context){if(arguments.length<2&&Object.isUndefined(arguments[0])){return this;}var __method=this,args=slice.call(arguments,1);return function(){var a=merge(args,arguments);return __method.apply(context,a);};}function bindAsEventListener(context){var __method=this,args=slice.call(arguments,1);return function(event){var a=update([event||window.event],args);return __method.apply(context,a);};}function curry(){if(!arguments.length){return this;}var __method=this,args=slice.call(arguments,0);return function(){var a=merge(args,arguments);return __method.apply(this,a);};}function delay(timeout){var __method=this,args=slice.call(arguments,1);timeout=timeout*1000;return window.setTimeout(function(){return __method.apply(__method,args);},timeout);}function defer(){var args=update([0.01],arguments);return this.delay.apply(this,args);}function wrap(wrapper){var __method=this;return function(){var a=update([__method.bind(this)],arguments);return wrapper.apply(this,a);};}function methodize(){if(this._methodized){return this._methodized;}var __method=this;return this._methodized=function(){var a=update([this],arguments);return __method.apply(null,a);};}return{argumentNames:argumentNames,bind:bind,bindAsEventListener:bindAsEventListener,curry:curry,delay:delay,defer:defer,wrap:wrap,methodize:methodize};})());(function(proto){function toISOString(){return this.getUTCFullYear()+"-"+(this.getUTCMonth()+1).toPaddedString(2)+"-"+this.getUTCDate().toPaddedString(2)+"T"+this.getUTCHours().toPaddedString(2)+":"+this.getUTCMinutes().toPaddedString(2)+":"+this.getUTCSeconds().toPaddedString(2)+"Z";}function toJSON(){return this.toISOString();}if(!proto.toISOString){proto.toISOString=toISOString;}if(!proto.toJSON){proto.toJSON=toJSON;}})(Date.prototype);RegExp.prototype.match=RegExp.prototype.test;RegExp.escape=function(str){return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1");};var PeriodicalExecuter=Class.create({initialize:function(callback,frequency){this.callback=callback;this.frequency=frequency;this.currentlyExecuting=false;this.registerCallback();},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000);},execute:function(){this.callback(this);},stop:function(){if(!this.timer){return;}clearInterval(this.timer);this.timer=null;},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.execute();this.currentlyExecuting=false;}catch(e){this.currentlyExecuting=false;throw e;}}}});Object.extend(String,{interpret:function(value){return value==null?"":String(value);},specialChar:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\\":"\\\\"}});Object.extend(String.prototype,(function(){var NATIVE_JSON_PARSE_SUPPORT=window.JSON&&typeof JSON.parse==="function"&&JSON.parse('{"test": true}').test;function prepareReplacement(replacement){if(Object.isFunction(replacement)){return replacement;}var template=new Template(replacement);return function(match){return template.evaluate(match);};}function gsub(pattern,replacement){var result="",source=this,match;replacement=prepareReplacement(replacement);if(Object.isString(pattern)){pattern=RegExp.escape(pattern);}if(!(pattern.length||pattern.source)){replacement=replacement("");return replacement+source.split("").join(replacement)+replacement;}while(source.length>0){if(match=source.match(pattern)){result+=source.slice(0,match.index);result+=String.interpret(replacement(match));source=source.slice(match.index+match[0].length);}else{result+=source,source="";}}return result;}function sub(pattern,replacement,count){replacement=prepareReplacement(replacement);count=Object.isUndefined(count)?1:count;return this.gsub(pattern,function(match){if(--count<0){return match[0];}return replacement(match);});}function scan(pattern,iterator){this.gsub(pattern,iterator);return String(this);}function truncate(length,truncation){length=length||30;truncation=Object.isUndefined(truncation)?"...":truncation;return this.length>length?this.slice(0,length-truncation.length)+truncation:String(this);}function strip(){return this.replace(/^\s+/,"").replace(/\s+$/,"");}function stripTags(){return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"");}function stripScripts(){return this.replace(new RegExp(Prototype.ScriptFragment,"img"),"");}function extractScripts(){var matchAll=new RegExp(Prototype.ScriptFragment,"img"),matchOne=new RegExp(Prototype.ScriptFragment,"im");return(this.match(matchAll)||[]).map(function(scriptTag){return(scriptTag.match(matchOne)||["",""])[1];});}function evalScripts(){return this.extractScripts().map(function(script){return eval(script);});}function escapeHTML(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}function unescapeHTML(){return this.stripTags().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");}function toQueryParams(separator){var match=this.strip().match(/([^?#]*)(#.*)?$/);if(!match){return{};}return match[1].split(separator||"&").inject({},function(hash,pair){if((pair=pair.split("="))[0]){var key=decodeURIComponent(pair.shift()),value=pair.length>1?pair.join("="):pair[0];if(value!=undefined){value=decodeURIComponent(value);}if(key in hash){if(!Object.isArray(hash[key])){hash[key]=[hash[key]];}hash[key].push(value);}else{hash[key]=value;}}return hash;});}function toArray(){return this.split("");}function succ(){return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1);}function times(count){return count<1?"":new Array(count+1).join(this);}function camelize(){return this.replace(/-+(.)?/g,function(match,chr){return chr?chr.toUpperCase():"";});}function capitalize(){return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase();}function underscore(){return this.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/-/g,"_").toLowerCase();}function dasherize(){return this.replace(/_/g,"-");}function inspect(useDoubleQuotes){var escapedString=this.replace(/[\x00-\x1f\\]/g,function(character){if(character in String.specialChar){return String.specialChar[character];}return"\\u00"+character.charCodeAt().toPaddedString(2,16);});if(useDoubleQuotes){return'"'+escapedString.replace(/"/g,'\\"')+'"';}return"'"+escapedString.replace(/'/g,"\\'")+"'";}function unfilterJSON(filter){return this.replace(filter||Prototype.JSONFilter,"$1");}function isJSON(){var str=this;if(str.blank()){return false;}str=str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@");str=str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");str=str.replace(/(?:^|:|,)(?:\s*\[)+/g,"");return(/^[\],:{}\s]*$/).test(str);}function evalJSON(sanitize){var json=this.unfilterJSON(),cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if(cx.test(json)){json=json.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}try{if(!sanitize||json.isJSON()){return eval("("+json+")");}}catch(e){}throw new SyntaxError("Badly formed JSON string: "+this.inspect());}function parseJSON(){var json=this.unfilterJSON();return JSON.parse(json);}function include(pattern){return this.indexOf(pattern)>-1;}function startsWith(pattern){return this.lastIndexOf(pattern,0)===0;}function endsWith(pattern){var d=this.length-pattern.length;return d>=0&&this.indexOf(pattern,d)===d;}function empty(){return this=="";}function blank(){return/^\s*$/.test(this);}function interpolate(object,pattern){return new Template(this,pattern).evaluate(object);}return{gsub:gsub,sub:sub,scan:scan,truncate:truncate,strip:String.prototype.trim||strip,stripTags:stripTags,stripScripts:stripScripts,extractScripts:extractScripts,evalScripts:evalScripts,escapeHTML:escapeHTML,unescapeHTML:unescapeHTML,toQueryParams:toQueryParams,parseQuery:toQueryParams,toArray:toArray,succ:succ,times:times,camelize:camelize,capitalize:capitalize,underscore:underscore,dasherize:dasherize,inspect:inspect,unfilterJSON:unfilterJSON,isJSON:isJSON,evalJSON:NATIVE_JSON_PARSE_SUPPORT?parseJSON:evalJSON,include:include,startsWith:startsWith,endsWith:endsWith,empty:empty,blank:blank,interpolate:interpolate};})());var Template=Class.create({initialize:function(template,pattern){this.template=template.toString();this.pattern=pattern||Template.Pattern;},evaluate:function(object){if(object&&Object.isFunction(object.toTemplateReplacements)){object=object.toTemplateReplacements();}return this.template.gsub(this.pattern,function(match){if(object==null){return(match[1]+"");}var before=match[1]||"";if(before=="\\"){return match[2];}var ctx=object,expr=match[3],pattern=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;match=pattern.exec(expr);if(match==null){return before;}while(match!=null){var comp=match[1].startsWith("[")?match[2].replace(/\\\\]/g,"]"):match[1];ctx=ctx[comp];if(null==ctx||""==match[3]){break;}expr=expr.substring("["==match[3]?match[1].length:match[0].length);match=pattern.exec(expr);}return before+String.interpret(ctx);});}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;var $break={};var Enumerable=(function(){function each(iterator,context){var index=0;try{this._each(function(value){iterator.call(context,value,index++);});}catch(e){if(e!=$break){throw e;}}return this;}function eachSlice(number,iterator,context){var index=-number,slices=[],array=this.toArray();if(number<1){return array;}while((index+=number)<array.length){slices.push(array.slice(index,index+number));}return slices.collect(iterator,context);}function all(iterator,context){iterator=iterator||Prototype.K;var result=true;this.each(function(value,index){result=result&&!!iterator.call(context,value,index);if(!result){throw $break;}});return result;}function any(iterator,context){iterator=iterator||Prototype.K;var result=false;this.each(function(value,index){if(result=!!iterator.call(context,value,index)){throw $break;}});return result;}function collect(iterator,context){iterator=iterator||Prototype.K;var results=[];this.each(function(value,index){results.push(iterator.call(context,value,index));});return results;}function detect(iterator,context){var result;this.each(function(value,index){if(iterator.call(context,value,index)){result=value;throw $break;}});return result;}function findAll(iterator,context){var results=[];this.each(function(value,index){if(iterator.call(context,value,index)){results.push(value);}});return results;}function grep(filter,iterator,context){iterator=iterator||Prototype.K;var results=[];if(Object.isString(filter)){filter=new RegExp(RegExp.escape(filter));}this.each(function(value,index){if(filter.match(value)){results.push(iterator.call(context,value,index));}});return results;}function include(object){if(Object.isFunction(this.indexOf)){if(this.indexOf(object)!=-1){return true;}}var found=false;this.each(function(value){if(value==object){found=true;throw $break;}});return found;}function inGroupsOf(number,fillWith){fillWith=Object.isUndefined(fillWith)?null:fillWith;return this.eachSlice(number,function(slice){while(slice.length<number){slice.push(fillWith);}return slice;});}function inject(memo,iterator,context){this.each(function(value,index){memo=iterator.call(context,memo,value,index);});return memo;}function invoke(method){var args=$A(arguments).slice(1);return this.map(function(value){return value[method].apply(value,args);});}function max(iterator,context){iterator=iterator||Prototype.K;var result;this.each(function(value,index){value=iterator.call(context,value,index);if(result==null||value>=result){result=value;}});return result;}function min(iterator,context){iterator=iterator||Prototype.K;var result;this.each(function(value,index){value=iterator.call(context,value,index);if(result==null||value<result){result=value;}});return result;}function partition(iterator,context){iterator=iterator||Prototype.K;var trues=[],falses=[];this.each(function(value,index){(iterator.call(context,value,index)?trues:falses).push(value);});return[trues,falses];}function pluck(property){var results=[];this.each(function(value){results.push(value[property]);});return results;}function reject(iterator,context){var results=[];this.each(function(value,index){if(!iterator.call(context,value,index)){results.push(value);}});return results;}function sortBy(iterator,context){return this.map(function(value,index){return{value:value,criteria:iterator.call(context,value,index)};}).sort(function(left,right){var a=left.criteria,b=right.criteria;return a<b?-1:a>b?1:0;}).pluck("value");}function toArray(){return this.map();}function zip(){var iterator=Prototype.K,args=$A(arguments);if(Object.isFunction(args.last())){iterator=args.pop();}var collections=[this].concat(args).map($A);return this.map(function(value,index){return iterator(collections.pluck(index));});}function size(){return this.toArray().length;}function inspect(){return"#<Enumerable:"+this.toArray().inspect()+">";}return{each:each,eachSlice:eachSlice,all:all,every:all,any:any,some:any,collect:collect,map:collect,detect:detect,findAll:findAll,select:findAll,filter:findAll,grep:grep,include:include,member:include,inGroupsOf:inGroupsOf,inject:inject,invoke:invoke,max:max,min:min,partition:partition,pluck:pluck,reject:reject,sortBy:sortBy,toArray:toArray,entries:toArray,zip:zip,size:size,inspect:inspect,find:detect};})();function $A(iterable){if(!iterable){return[];}if("toArray" in Object(iterable)){return iterable.toArray();}var length=iterable.length||0,results=new Array(length);while(length--){results[length]=iterable[length];}return results;}function $w(string){if(!Object.isString(string)){return[];}string=string.strip();return string?string.split(/\s+/):[];}Array.from=$A;(function(){var arrayProto=Array.prototype,slice=arrayProto.slice,_each=arrayProto.forEach;function each(iterator,context){for(var i=0,length=this.length>>>0;i<length;i++){if(i in this){iterator.call(context,this[i],i,this);}}}if(!_each){_each=each;}function clear(){this.length=0;return this;}function first(){return this[0];}function last(){return this[this.length-1];}function compact(){return this.select(function(value){return value!=null;});}function flatten(){return this.inject([],function(array,value){if(Object.isArray(value)){return array.concat(value.flatten());}array.push(value);return array;});}function without(){var values=slice.call(arguments,0);return this.select(function(value){return !values.include(value);});}function reverse(inline){return(inline===false?this.toArray():this)._reverse();}function uniq(sorted){return this.inject([],function(array,value,index){if(0==index||(sorted?array.last()!=value:!array.include(value))){array.push(value);}return array;});}function intersect(array){return this.uniq().findAll(function(item){return array.detect(function(value){return item===value;});});}function clone(){return slice.call(this,0);}function size(){return this.length;}function inspect(){return"["+this.map(Object.inspect).join(", ")+"]";}function indexOf(item,i){i||(i=0);var length=this.length;if(i<0){i=length+i;}for(;i<length;i++){if(this[i]===item){return i;}}return -1;}function lastIndexOf(item,i){i=isNaN(i)?this.length:(i<0?this.length+i:i)+1;var n=this.slice(0,i).reverse().indexOf(item);return(n<0)?n:i-n-1;}function concat(){var array=slice.call(this,0),item;for(var i=0,length=arguments.length;i<length;i++){item=arguments[i];if(Object.isArray(item)&&!("callee" in item)){for(var j=0,arrayLength=item.length;j<arrayLength;j++){array.push(item[j]);}}else{array.push(item);}}return array;}Object.extend(arrayProto,Enumerable);if(!arrayProto._reverse){arrayProto._reverse=arrayProto.reverse;}Object.extend(arrayProto,{_each:_each,clear:clear,first:first,last:last,compact:compact,flatten:flatten,without:without,reverse:reverse,uniq:uniq,intersect:intersect,clone:clone,toArray:clone,size:size,inspect:inspect});var CONCAT_ARGUMENTS_BUGGY=(function(){return[].concat(arguments)[0][0]!==1;})(1,2);if(CONCAT_ARGUMENTS_BUGGY){arrayProto.concat=concat;}if(!arrayProto.indexOf){arrayProto.indexOf=indexOf;}if(!arrayProto.lastIndexOf){arrayProto.lastIndexOf=lastIndexOf;}})();function $H(object){return new Hash(object);}var Hash=Class.create(Enumerable,(function(){function initialize(object){this._object=Object.isHash(object)?object.toObject():Object.clone(object);}function _each(iterator){for(var key in this._object){var value=this._object[key],pair=[key,value];pair.key=key;pair.value=value;iterator(pair);}}function set(key,value){return this._object[key]=value;}function get(key){if(this._object[key]!==Object.prototype[key]){return this._object[key];}}function unset(key){var value=this._object[key];delete this._object[key];return value;}function toObject(){return Object.clone(this._object);}function keys(){return this.pluck("key");}function values(){return this.pluck("value");}function index(value){var match=this.detect(function(pair){return pair.value===value;});return match&&match.key;}function merge(object){return this.clone().update(object);}function update(object){return new Hash(object).inject(this,function(result,pair){result.set(pair.key,pair.value);return result;});}function toQueryPair(key,value){if(Object.isUndefined(value)){return key;}return key+"="+encodeURIComponent(String.interpret(value));}function toQueryString(){return this.inject([],function(results,pair){var key=encodeURIComponent(pair.key),values=pair.value;if(values&&typeof values=="object"){if(Object.isArray(values)){var queryValues=[];for(var i=0,len=values.length,value;i<len;i++){value=values[i];queryValues.push(toQueryPair(key,value));}return results.concat(queryValues);}}else{results.push(toQueryPair(key,values));}return results;}).join("&");}function inspect(){return"#<Hash:{"+this.map(function(pair){return pair.map(Object.inspect).join(": ");}).join(", ")+"}>";}function clone(){return new Hash(this);}return{initialize:initialize,_each:_each,set:set,get:get,unset:unset,toObject:toObject,toTemplateReplacements:toObject,keys:keys,values:values,index:index,merge:merge,update:update,toQueryString:toQueryString,inspect:inspect,toJSON:toObject,clone:clone};})());Hash.from=$H;Object.extend(Number.prototype,(function(){function toColorPart(){return this.toPaddedString(2,16);}function succ(){return this+1;}function times(iterator,context){$R(0,this,true).each(iterator,context);return this;}function toPaddedString(length,radix){var string=this.toString(radix||10);return"0".times(length-string.length)+string;}function abs(){return Math.abs(this);}function round(){return Math.round(this);}function ceil(){return Math.ceil(this);}function floor(){return Math.floor(this);}return{toColorPart:toColorPart,succ:succ,times:times,toPaddedString:toPaddedString,abs:abs,round:round,ceil:ceil,floor:floor};})());function $R(start,end,exclusive){return new ObjectRange(start,end,exclusive);}var ObjectRange=Class.create(Enumerable,(function(){function initialize(start,end,exclusive){this.start=start;this.end=end;this.exclusive=exclusive;}function _each(iterator){var value=this.start;while(this.include(value)){iterator(value);value=value.succ();}}function include(value){if(value<this.start){return false;}if(this.exclusive){return value<this.end;}return value<=this.end;}return{initialize:initialize,_each:_each,include:include};})());var Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest();},function(){return new ActiveXObject("Msxml2.XMLHTTP");},function(){return new ActiveXObject("Microsoft.XMLHTTP");})||false;},activeRequestCount:0};Ajax.Responders={responders:[],_each:function(iterator){this.responders._each(iterator);},register:function(responder){if(!this.include(responder)){this.responders.push(responder);}},unregister:function(responder){this.responders=this.responders.without(responder);},dispatch:function(callback,request,transport,json){this.each(function(responder){if(Object.isFunction(responder[callback])){try{responder[callback].apply(responder,[request,transport,json]);}catch(e){}}});}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++;},onComplete:function(){Ajax.activeRequestCount--;}});Ajax.Base=Class.create({initialize:function(options){this.options={method:"post",asynchronous:true,contentType:"application/x-www-form-urlencoded",encoding:"UTF-8",parameters:"",evalJSON:true,evalJS:true};Object.extend(this.options,options||{});this.options.method=this.options.method.toLowerCase();if(Object.isHash(this.options.parameters)){this.options.parameters=this.options.parameters.toObject();}}});Ajax.Request=Class.create(Ajax.Base,{_complete:false,initialize:function($super,url,options){$super(options);this.transport=Ajax.getTransport();this.request(url);},request:function(url){this.url=url;this.method=this.options.method;var params=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);if(!["get","post"].include(this.method)){params+=(params?"&":"")+"_method="+this.method;this.method="post";}if(params&&this.method==="get"){this.url+=(this.url.include("?")?"&":"?")+params;}this.parameters=params.toQueryParams();try{var response=new Ajax.Response(this);if(this.options.onCreate){this.options.onCreate(response);}Ajax.Responders.dispatch("onCreate",this,response);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous){this.respondToReadyState.bind(this).defer(1);}this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body=this.method=="post"?(this.options.postBody||params):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange();}}catch(e){this.dispatchException(e);}},onStateChange:function(){var readyState=this.transport.readyState;if(readyState>1&&!((readyState==4)&&this._complete)){this.respondToReadyState(this.transport.readyState);}},setRequestHeaders:function(){var headers={"X-Requested-With":"XMLHttpRequest","X-Prototype-Version":Prototype.Version,"Accept":"text/javascript, text/html, application/xml, text/xml, */*"};if(this.method=="post"){headers["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+this.options.encoding:"");if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){headers["Connection"]="close";}}if(typeof this.options.requestHeaders=="object"){var extras=this.options.requestHeaders;if(Object.isFunction(extras.push)){for(var i=0,length=extras.length;i<length;i+=2){headers[extras[i]]=extras[i+1];}}else{$H(extras).each(function(pair){headers[pair.key]=pair.value;});}}for(var name in headers){this.transport.setRequestHeader(name,headers[name]);}},success:function(){var status=this.getStatus();return !status||(status>=200&&status<300)||status==304;},getStatus:function(){try{if(this.transport.status===1223){return 204;}return this.transport.status||0;}catch(e){return 0;}},respondToReadyState:function(readyState){var state=Ajax.Request.Events[readyState],response=new Ajax.Response(this);if(state=="Complete"){try{this._complete=true;(this.options["on"+response.status]||this.options["on"+(this.success()?"Success":"Failure")]||Prototype.emptyFunction)(response,response.headerJSON);}catch(e){this.dispatchException(e);}var contentType=response.getHeader("Content-type");if(this.options.evalJS=="force"||(this.options.evalJS&&this.isSameOrigin()&&contentType&&contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))){this.evalResponse();}}try{(this.options["on"+state]||Prototype.emptyFunction)(response,response.headerJSON);Ajax.Responders.dispatch("on"+state,this,response,response.headerJSON);}catch(e){this.dispatchException(e);}if(state=="Complete"){this.transport.onreadystatechange=Prototype.emptyFunction;}},isSameOrigin:function(){var m=this.url.match(/^\s*https?:\/\/[^\/]*/);return !m||(m[0]=="#{protocol}//#{domain}#{port}".interpolate({protocol:location.protocol,domain:document.domain,port:location.port?":"+location.port:""}));},getHeader:function(name){try{return this.transport.getResponseHeader(name)||null;}catch(e){return null;}},evalResponse:function(){try{return eval((this.transport.responseText||"").unfilterJSON());}catch(e){this.dispatchException(e);}},dispatchException:function(exception){(this.options.onException||Prototype.emptyFunction)(this,exception);Ajax.Responders.dispatch("onException",this,exception);}});Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];Ajax.Response=Class.create({initialize:function(request){this.request=request;var transport=this.transport=request.transport,readyState=this.readyState=transport.readyState;if((readyState>2&&!Prototype.Browser.IE)||readyState==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=String.interpret(transport.responseText);this.headerJSON=this._getHeaderJSON();}if(readyState==4){var xml=transport.responseXML;this.responseXML=Object.isUndefined(xml)?null:xml;this.responseJSON=this._getResponseJSON();}},status:0,statusText:"",getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||"";}catch(e){return"";}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders();}catch(e){return null;}},getResponseHeader:function(name){return this.transport.getResponseHeader(name);},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders();},_getHeaderJSON:function(){var json=this.getHeader("X-JSON");if(!json){return null;}json=decodeURIComponent(escape(json));try{return json.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin());}catch(e){this.request.dispatchException(e);}},_getResponseJSON:function(){var options=this.request.options;if(!options.evalJSON||(options.evalJSON!="force"&&!(this.getHeader("Content-type")||"").include("application/json"))||this.responseText.blank()){return null;}try{return this.responseText.evalJSON(options.sanitizeJSON||!this.request.isSameOrigin());}catch(e){this.request.dispatchException(e);}}});Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,container,url,options){this.container={success:(container.success||container),failure:(container.failure||(container.success?null:container))};options=Object.clone(options);var onComplete=options.onComplete;options.onComplete=(function(response,json){this.updateContent(response.responseText);if(Object.isFunction(onComplete)){onComplete(response,json);}}).bind(this);$super(url,options);},updateContent:function(responseText){var receiver=this.container[this.success()?"success":"failure"],options=this.options;if(!options.evalScripts){responseText=responseText.stripScripts();}if(receiver=$(receiver)){if(options.insertion){if(Object.isString(options.insertion)){var insertion={};insertion[options.insertion]=responseText;receiver.insert(insertion);}else{options.insertion(receiver,responseText);}}else{receiver.update(responseText);}}}});Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,container,url,options){$super(options);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=container;this.url=url;this.start();},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent();},stop:function(){this.updater.options.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments);},updateComplete:function(response){if(this.options.decay){this.decay=(response.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=response.responseText;}this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency);},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options);}});function $(element){if(arguments.length>1){for(var i=0,elements=[],length=arguments.length;i<length;i++){elements.push($(arguments[i]));}return elements;}if(Object.isString(element)){element=document.getElementById(element);}return Element.extend(element);}if(Prototype.BrowserFeatures.XPath){document._getElementsByXPath=function(expression,parentElement){var results=[];var query=document.evaluate(expression,$(parentElement)||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0,length=query.snapshotLength;i<length;i++){results.push(Element.extend(query.snapshotItem(i)));}return results;};}if(!Node){var Node={};}if(!Node.ELEMENT_NODE){Object.extend(Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12});}(function(global){function shouldUseCache(tagName,attributes){if(tagName==="select"){return false;}if("type" in attributes){return false;}return true;}var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX=(function(){try{var el=document.createElement('<input name="x">');return el.tagName.toLowerCase()==="input"&&el.name==="x";}catch(err){return false;}})();var element=global.Element;global.Element=function(tagName,attributes){attributes=attributes||{};tagName=tagName.toLowerCase();var cache=Element.cache;if(HAS_EXTENDED_CREATE_ELEMENT_SYNTAX&&attributes.name){tagName="<"+tagName+' name="'+attributes.name+'">';delete attributes.name;return Element.writeAttribute(document.createElement(tagName),attributes);}if(!cache[tagName]){cache[tagName]=Element.extend(document.createElement(tagName));}var node=shouldUseCache(tagName,attributes)?cache[tagName].cloneNode(false):document.createElement(tagName);return Element.writeAttribute(node,attributes);};Object.extend(global.Element,element||{});if(element){global.Element.prototype=element.prototype;}})(this);Element.idCounter=1;Element.cache={};Element._purgeElement=function(element){var uid=element._prototypeUID;if(uid){Element.stopObserving(element);element._prototypeUID=void 0;delete Element.Storage[uid];}};Element.Methods={visible:function(element){return $(element).style.display!="none";},toggle:function(element){element=$(element);Element[Element.visible(element)?"hide":"show"](element);return element;},hide:function(element){element=$(element);element.style.display="none";return element;},show:function(element){element=$(element);element.style.display="";return element;},remove:function(element){element=$(element);element.parentNode.removeChild(element);return element;},update:(function(){var SELECT_ELEMENT_INNERHTML_BUGGY=(function(){var el=document.createElement("select"),isBuggy=true;el.innerHTML='<option value="test">test</option>';if(el.options&&el.options[0]){isBuggy=el.options[0].nodeName.toUpperCase()!=="OPTION";}el=null;return isBuggy;})();var TABLE_ELEMENT_INNERHTML_BUGGY=(function(){try{var el=document.createElement("table");if(el&&el.tBodies){el.innerHTML="<tbody><tr><td>test</td></tr></tbody>";var isBuggy=typeof el.tBodies[0]=="undefined";el=null;return isBuggy;}}catch(e){return true;}})();var LINK_ELEMENT_INNERHTML_BUGGY=(function(){try{var el=document.createElement("div");el.innerHTML="<link>";var isBuggy=(el.childNodes.length===0);el=null;return isBuggy;}catch(e){return true;}})();var ANY_INNERHTML_BUGGY=SELECT_ELEMENT_INNERHTML_BUGGY||TABLE_ELEMENT_INNERHTML_BUGGY||LINK_ELEMENT_INNERHTML_BUGGY;var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING=(function(){var s=document.createElement("script"),isBuggy=false;try{s.appendChild(document.createTextNode(""));isBuggy=!s.firstChild||s.firstChild&&s.firstChild.nodeType!==3;}catch(e){isBuggy=true;}s=null;return isBuggy;})();function update(element,content){element=$(element);var purgeElement=Element._purgeElement;var descendants=element.getElementsByTagName("*"),i=descendants.length;while(i--){purgeElement(descendants[i]);}if(content&&content.toElement){content=content.toElement();}if(Object.isElement(content)){return element.update().insert(content);}content=Object.toHTML(content);var tagName=element.tagName.toUpperCase();if(tagName==="SCRIPT"&&SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING){element.text=content;return element;}if(ANY_INNERHTML_BUGGY){if(tagName in Element._insertionTranslations.tags){while(element.firstChild){element.removeChild(element.firstChild);}Element._getContentFromAnonymousElement(tagName,content.stripScripts()).each(function(node){element.appendChild(node);});}else{if(LINK_ELEMENT_INNERHTML_BUGGY&&Object.isString(content)&&content.indexOf("<link")>-1){while(element.firstChild){element.removeChild(element.firstChild);}var nodes=Element._getContentFromAnonymousElement(tagName,content.stripScripts(),true);nodes.each(function(node){element.appendChild(node);});}else{element.innerHTML=content.stripScripts();}}}else{element.innerHTML=content.stripScripts();}content.evalScripts.bind(content).defer();return element;}return update;})(),replace:function(element,content){element=$(element);if(content&&content.toElement){content=content.toElement();}else{if(!Object.isElement(content)){content=Object.toHTML(content);var range=element.ownerDocument.createRange();range.selectNode(element);content.evalScripts.bind(content).defer();content=range.createContextualFragment(content.stripScripts());}}element.parentNode.replaceChild(content,element);return element;},insert:function(element,insertions){element=$(element);if(Object.isString(insertions)||Object.isNumber(insertions)||Object.isElement(insertions)||(insertions&&(insertions.toElement||insertions.toHTML))){insertions={bottom:insertions};}var content,insert,tagName,childNodes;for(var position in insertions){content=insertions[position];position=position.toLowerCase();insert=Element._insertionTranslations[position];if(content&&content.toElement){content=content.toElement();}if(Object.isElement(content)){insert(element,content);continue;}content=Object.toHTML(content);tagName=((position=="before"||position=="after")?element.parentNode:element).tagName.toUpperCase();childNodes=Element._getContentFromAnonymousElement(tagName,content.stripScripts());if(position=="top"||position=="after"){childNodes.reverse();}childNodes.each(insert.curry(element));content.evalScripts.bind(content).defer();}return element;},wrap:function(element,wrapper,attributes){element=$(element);if(Object.isElement(wrapper)){$(wrapper).writeAttribute(attributes||{});}else{if(Object.isString(wrapper)){wrapper=new Element(wrapper,attributes);}else{wrapper=new Element("div",wrapper);}}if(element.parentNode){element.parentNode.replaceChild(wrapper,element);}wrapper.appendChild(element);return wrapper;},inspect:function(element){element=$(element);var result="<"+element.tagName.toLowerCase();$H({"id":"id","className":"class"}).each(function(pair){var property=pair.first(),attribute=pair.last(),value=(element[property]||"").toString();if(value){result+=" "+attribute+"="+value.inspect(true);}});return result+">";},recursivelyCollect:function(element,property,maximumLength){element=$(element);maximumLength=maximumLength||-1;var elements=[];while(element=element[property]){if(element.nodeType==1){elements.push(Element.extend(element));}if(elements.length==maximumLength){break;}}return elements;},ancestors:function(element){return Element.recursivelyCollect(element,"parentNode");},descendants:function(element){return Element.select(element,"*");},firstDescendant:function(element){element=$(element).firstChild;while(element&&element.nodeType!=1){element=element.nextSibling;}return $(element);},immediateDescendants:function(element){var results=[],child=$(element).firstChild;while(child){if(child.nodeType===1){results.push(Element.extend(child));}child=child.nextSibling;}return results;},previousSiblings:function(element,maximumLength){return Element.recursivelyCollect(element,"previousSibling");},nextSiblings:function(element){return Element.recursivelyCollect(element,"nextSibling");},siblings:function(element){element=$(element);return Element.previousSiblings(element).reverse().concat(Element.nextSiblings(element));},match:function(element,selector){element=$(element);if(Object.isString(selector)){return Prototype.Selector.match(element,selector);}return selector.match(element);},up:function(element,expression,index){element=$(element);if(arguments.length==1){return $(element.parentNode);}var ancestors=Element.ancestors(element);return Object.isNumber(expression)?ancestors[expression]:Prototype.Selector.find(ancestors,expression,index);},down:function(element,expression,index){element=$(element);if(arguments.length==1){return Element.firstDescendant(element);}return Object.isNumber(expression)?Element.descendants(element)[expression]:Element.select(element,expression)[index||0];},previous:function(element,expression,index){element=$(element);if(Object.isNumber(expression)){index=expression,expression=false;}if(!Object.isNumber(index)){index=0;}if(expression){return Prototype.Selector.find(element.previousSiblings(),expression,index);}else{return element.recursivelyCollect("previousSibling",index+1)[index];}},next:function(element,expression,index){element=$(element);if(Object.isNumber(expression)){index=expression,expression=false;}if(!Object.isNumber(index)){index=0;}if(expression){return Prototype.Selector.find(element.nextSiblings(),expression,index);}else{var maximumLength=Object.isNumber(index)?index+1:1;return element.recursivelyCollect("nextSibling",index+1)[index];}},select:function(element){element=$(element);var expressions=Array.prototype.slice.call(arguments,1).join(", ");return Prototype.Selector.select(expressions,element);},adjacent:function(element){element=$(element);var expressions=Array.prototype.slice.call(arguments,1).join(", ");return Prototype.Selector.select(expressions,element.parentNode).without(element);},identify:function(element){element=$(element);var id=Element.readAttribute(element,"id");if(id){return id;}do{id="anonymous_element_"+Element.idCounter++;}while($(id));Element.writeAttribute(element,"id",id);return id;},readAttribute:function(element,name){element=$(element);if(Prototype.Browser.IE){var t=Element._attributeTranslations.read;if(t.values[name]){return t.values[name](element,name);}if(t.names[name]){name=t.names[name];}if(name.include(":")){return(!element.attributes||!element.attributes[name])?null:element.attributes[name].value;}}return element.getAttribute(name);},writeAttribute:function(element,name,value){element=$(element);var attributes={},t=Element._attributeTranslations.write;if(typeof name=="object"){attributes=name;}else{attributes[name]=Object.isUndefined(value)?true:value;}for(var attr in attributes){name=t.names[attr]||attr;value=attributes[attr];if(t.values[attr]){name=t.values[attr](element,value);}if(value===false||value===null){element.removeAttribute(name);}else{if(value===true){element.setAttribute(name,name);}else{element.setAttribute(name,value);}}}return element;},getHeight:function(element){return Element.getDimensions(element).height;},getWidth:function(element){return Element.getDimensions(element).width;},classNames:function(element){return new Element.ClassNames(element);},hasClassName:function(element,className){if(!(element=$(element))){return;}var elementClassName=element.className;return(elementClassName.length>0&&(elementClassName==className||new RegExp("(^|\\s)"+className+"(\\s|$)").test(elementClassName)));},addClassName:function(element,className){if(!(element=$(element))){return;}if(!Element.hasClassName(element,className)){element.className+=(element.className?" ":"")+className;}return element;},removeClassName:function(element,className){if(!(element=$(element))){return;}element.className=element.className.replace(new RegExp("(^|\\s+)"+className+"(\\s+|$)")," ").strip();return element;},toggleClassName:function(element,className){if(!(element=$(element))){return;}return Element[Element.hasClassName(element,className)?"removeClassName":"addClassName"](element,className);},cleanWhitespace:function(element){element=$(element);var node=element.firstChild;while(node){var nextNode=node.nextSibling;if(node.nodeType==3&&!/\S/.test(node.nodeValue)){element.removeChild(node);}node=nextNode;}return element;},empty:function(element){return $(element).innerHTML.blank();},descendantOf:function(element,ancestor){element=$(element),ancestor=$(ancestor);if(element.compareDocumentPosition){return(element.compareDocumentPosition(ancestor)&8)===8;}if(ancestor.contains){return ancestor.contains(element)&&ancestor!==element;}while(element=element.parentNode){if(element==ancestor){return true;}}return false;},scrollTo:function(element){element=$(element);var pos=Element.cumulativeOffset(element);window.scrollTo(pos[0],pos[1]);return element;},getStyle:function(element,style){element=$(element);style=style=="float"?"cssFloat":style.camelize();var value=element.style[style];if(!value||value=="auto"){var css=document.defaultView.getComputedStyle(element,null);value=css?css[style]:null;}if(style=="opacity"){return value?parseFloat(value):1;}return value=="auto"?null:value;},getOpacity:function(element){return $(element).getStyle("opacity");},setStyle:function(element,styles){element=$(element);var elementStyle=element.style,match;if(Object.isString(styles)){element.style.cssText+=";"+styles;return styles.include("opacity")?element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]):element;}for(var property in styles){if(property=="opacity"){element.setOpacity(styles[property]);}else{elementStyle[(property=="float"||property=="cssFloat")?(Object.isUndefined(elementStyle.styleFloat)?"cssFloat":"styleFloat"):property]=styles[property];}}return element;},setOpacity:function(element,value){element=$(element);element.style.opacity=(value==1||value==="")?"":(value<0.00001)?0:value;return element;},makePositioned:function(element){element=$(element);var pos=Element.getStyle(element,"position");if(pos=="static"||!pos){element._madePositioned=true;element.style.position="relative";if(Prototype.Browser.Opera){element.style.top=0;element.style.left=0;}}return element;},undoPositioned:function(element){element=$(element);if(element._madePositioned){element._madePositioned=undefined;element.style.position=element.style.top=element.style.left=element.style.bottom=element.style.right="";}return element;},makeClipping:function(element){element=$(element);if(element._overflow){return element;}element._overflow=Element.getStyle(element,"overflow")||"auto";if(element._overflow!=="hidden"){element.style.overflow="hidden";}return element;},undoClipping:function(element){element=$(element);if(!element._overflow){return element;}element.style.overflow=element._overflow=="auto"?"":element._overflow;element._overflow=null;return element;},clonePosition:function(element,source){var options=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},arguments[2]||{});source=$(source);var p=Element.viewportOffset(source),delta=[0,0],parent=null;element=$(element);if(Element.getStyle(element,"position")=="absolute"){parent=Element.getOffsetParent(element);delta=Element.viewportOffset(parent);}if(parent==document.body){delta[0]-=document.body.offsetLeft;delta[1]-=document.body.offsetTop;}if(options.setLeft){element.style.left=(p[0]-delta[0]+options.offsetLeft)+"px";}if(options.setTop){element.style.top=(p[1]-delta[1]+options.offsetTop)+"px";}if(options.setWidth){element.style.width=source.offsetWidth+"px";}if(options.setHeight){element.style.height=source.offsetHeight+"px";}return element;}};Object.extend(Element.Methods,{getElementsBySelector:Element.Methods.select,childElements:Element.Methods.immediateDescendants});Element._attributeTranslations={write:{names:{className:"class",htmlFor:"for"},values:{}}};if(Prototype.Browser.Opera){Element.Methods.getStyle=Element.Methods.getStyle.wrap(function(proceed,element,style){switch(style){case"height":case"width":if(!Element.visible(element)){return null;}var dim=parseInt(proceed(element,style),10);if(dim!==element["offset"+style.capitalize()]){return dim+"px";}var properties;if(style==="height"){properties=["border-top-width","padding-top","padding-bottom","border-bottom-width"];}else{properties=["border-left-width","padding-left","padding-right","border-right-width"];}return properties.inject(dim,function(memo,property){var val=proceed(element,property);return val===null?memo:memo-parseInt(val,10);})+"px";default:return proceed(element,style);}});Element.Methods.readAttribute=Element.Methods.readAttribute.wrap(function(proceed,element,attribute){if(attribute==="title"){return element.title;}return proceed(element,attribute);});}else{if(Prototype.Browser.IE){Element.Methods.getStyle=function(element,style){element=$(element);style=(style=="float"||style=="cssFloat")?"styleFloat":style.camelize();var value=element.style[style];if(!value&&element.currentStyle){value=element.currentStyle[style];}if(style=="opacity"){if(value=(element.getStyle("filter")||"").match(/alpha\(opacity=(.*)\)/)){if(value[1]){return parseFloat(value[1])/100;}}return 1;}if(value=="auto"){if((style=="width"||style=="height")&&(element.getStyle("display")!="none")){return element["offset"+style.capitalize()]+"px";}return null;}return value;};if(!navigator.userAgent.match(/MSIE\s9/)){Element.Methods.setOpacity=function(element,value){function stripAlpha(filter){return filter.replace(/alpha\([^\)]*\)/gi,"");}element=$(element);var currentStyle=element.currentStyle;if((currentStyle&&!currentStyle.hasLayout)||(!currentStyle&&element.style.zoom=="normal")){element.style.zoom=1;}var filter=element.getStyle("filter"),style=element.style;if(value==1||value===""){(filter=stripAlpha(filter))?style.filter=filter:style.removeAttribute("filter");return element;}else{if(value<0.00001){value=0;}}style.filter=stripAlpha(filter)+"alpha(opacity="+(value*100)+")";return element;};}Element._attributeTranslations=(function(){var classProp="className",forProp="for",el=document.createElement("div");el.setAttribute(classProp,"x");if(el.className!=="x"){el.setAttribute("class","x");if(el.className==="x"){classProp="class";}}el=null;el=document.createElement("label");el.setAttribute(forProp,"x");if(el.htmlFor!=="x"){el.setAttribute("htmlFor","x");if(el.htmlFor==="x"){forProp="htmlFor";}}el=null;return{read:{names:{"class":classProp,"className":classProp,"for":forProp,"htmlFor":forProp},values:{_getAttr:function(element,attribute){return element.getAttribute(attribute);},_getAttr2:function(element,attribute){return element.getAttribute(attribute,2);},_getAttrNode:function(element,attribute){var node=element.getAttributeNode(attribute);return node?node.value:"";},_getEv:(function(){var el=document.createElement("div"),f;el.onclick=Prototype.emptyFunction;var value=el.getAttribute("onclick");if(String(value).indexOf("{")>-1){f=function(element,attribute){attribute=element.getAttribute(attribute);if(!attribute){return null;}attribute=attribute.toString();attribute=attribute.split("{")[1];attribute=attribute.split("}")[0];return attribute.strip();};}else{if(value===""){f=function(element,attribute){attribute=element.getAttribute(attribute);if(!attribute){return null;}return attribute.strip();};}}el=null;return f;})(),_flag:function(element,attribute){return $(element).hasAttribute(attribute)?attribute:null;},style:function(element){return element.style.cssText.toLowerCase();},title:function(element){return element.title;}}}};})();Element._attributeTranslations.write={names:Object.extend({cellpadding:"cellPadding",cellspacing:"cellSpacing"},Element._attributeTranslations.read.names),values:{checked:function(element,value){element.checked=!!value;},style:function(element,value){element.style.cssText=value?value:"";}}};Element._attributeTranslations.has={};$w("colSpan rowSpan vAlign dateTime accessKey tabIndex "+"encType maxLength readOnly longDesc frameBorder").each(function(attr){Element._attributeTranslations.write.names[attr.toLowerCase()]=attr;Element._attributeTranslations.has[attr.toLowerCase()]=attr;});(function(v){Object.extend(v,{href:v._getAttr2,src:v._getAttr2,type:v._getAttr,action:v._getAttrNode,disabled:v._flag,checked:v._flag,readonly:v._flag,multiple:v._flag,onload:v._getEv,onunload:v._getEv,onclick:v._getEv,ondblclick:v._getEv,onmousedown:v._getEv,onmouseup:v._getEv,onmouseover:v._getEv,onmousemove:v._getEv,onmouseout:v._getEv,onfocus:v._getEv,onblur:v._getEv,onkeypress:v._getEv,onkeydown:v._getEv,onkeyup:v._getEv,onsubmit:v._getEv,onreset:v._getEv,onselect:v._getEv,onchange:v._getEv});})(Element._attributeTranslations.read.values);if(Prototype.BrowserFeatures.ElementExtensions){(function(){function _descendants(element){var nodes=element.getElementsByTagName("*"),results=[];for(var i=0,node;node=nodes[i];i++){if(node.tagName!=="!"){results.push(node);}}return results;}Element.Methods.down=function(element,expression,index){element=$(element);if(arguments.length==1){return element.firstDescendant();}return Object.isNumber(expression)?_descendants(element)[expression]:Element.select(element,expression)[index||0];};})();}}else{if(Prototype.Browser.Gecko&&/rv:1\.8\.0/.test(navigator.userAgent)){Element.Methods.setOpacity=function(element,value){element=$(element);element.style.opacity=(value==1)?0.999999:(value==="")?"":(value<0.00001)?0:value;return element;};}else{if(Prototype.Browser.WebKit){Element.Methods.setOpacity=function(element,value){element=$(element);element.style.opacity=(value==1||value==="")?"":(value<0.00001)?0:value;if(value==1){if(element.tagName.toUpperCase()=="IMG"&&element.width){element.width++;element.width--;}else{try{var n=document.createTextNode(" ");element.appendChild(n);element.removeChild(n);}catch(e){}}}return element;};}}}}if("outerHTML" in document.documentElement){Element.Methods.replace=function(element,content){element=$(element);if(content&&content.toElement){content=content.toElement();}if(Object.isElement(content)){element.parentNode.replaceChild(content,element);return element;}content=Object.toHTML(content);var parent=element.parentNode,tagName=parent.tagName.toUpperCase();if(Element._insertionTranslations.tags[tagName]){var nextSibling=element.next(),fragments=Element._getContentFromAnonymousElement(tagName,content.stripScripts());parent.removeChild(element);if(nextSibling){fragments.each(function(node){parent.insertBefore(node,nextSibling);});}else{fragments.each(function(node){parent.appendChild(node);});}}else{element.outerHTML=content.stripScripts();}content.evalScripts.bind(content).defer();return element;};}Element._returnOffset=function(l,t){var result=[l,t];result.left=l;result.top=t;return result;};Element._getContentFromAnonymousElement=function(tagName,html,force){var div=new Element("div"),t=Element._insertionTranslations.tags[tagName];var workaround=false;if(t){workaround=true;}else{if(force){workaround=true;t=["","",0];}}if(workaround){div.innerHTML="&nbsp;"+t[0]+html+t[1];div.removeChild(div.firstChild);for(var i=t[2];i--;){div=div.firstChild;}}else{div.innerHTML=html;}return $A(div.childNodes);};Element._insertionTranslations={before:function(element,node){element.parentNode.insertBefore(node,element);},top:function(element,node){element.insertBefore(node,element.firstChild);},bottom:function(element,node){element.appendChild(node);},after:function(element,node){element.parentNode.insertBefore(node,element.nextSibling);},tags:{TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]}};(function(){var tags=Element._insertionTranslations.tags;Object.extend(tags,{THEAD:tags.TBODY,TFOOT:tags.TBODY,TH:tags.TD});})();Element.Methods.Simulated={hasAttribute:function(element,attribute){attribute=Element._attributeTranslations.has[attribute]||attribute;var node=$(element).getAttributeNode(attribute);return !!(node&&node.specified);}};Element.Methods.ByTag={};Object.extend(Element,Element.Methods);(function(div){if(!Prototype.BrowserFeatures.ElementExtensions&&div["__proto__"]){window.HTMLElement={};window.HTMLElement.prototype=div["__proto__"];Prototype.BrowserFeatures.ElementExtensions=true;}div=null;})(document.createElement("div"));Element.extend=(function(){function checkDeficiency(tagName){if(typeof window.Element!="undefined"){var proto=window.Element.prototype;if(proto){var id="_"+(Math.random()+"").slice(2),el=document.createElement(tagName);proto[id]="x";var isBuggy=(el[id]!=="x");delete proto[id];el=null;return isBuggy;}}return false;}function extendElementWith(element,methods){for(var property in methods){var value=methods[property];if(Object.isFunction(value)&&!(property in element)){element[property]=value.methodize();}}}var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY=checkDeficiency("object");if(Prototype.BrowserFeatures.SpecificElementExtensions){if(HTMLOBJECTELEMENT_PROTOTYPE_BUGGY){return function(element){if(element&&typeof element._extendedByPrototype=="undefined"){var t=element.tagName;if(t&&(/^(?:object|applet|embed)$/i.test(t))){extendElementWith(element,Element.Methods);extendElementWith(element,Element.Methods.Simulated);extendElementWith(element,Element.Methods.ByTag[t.toUpperCase()]);}}return element;};}return Prototype.K;}var Methods={},ByTag=Element.Methods.ByTag;var extend=Object.extend(function(element){if(!element||typeof element._extendedByPrototype!="undefined"||element.nodeType!=1||element==window){return element;}var methods=Object.clone(Methods),tagName=element.tagName.toUpperCase();if(ByTag[tagName]){Object.extend(methods,ByTag[tagName]);}extendElementWith(element,methods);element._extendedByPrototype=Prototype.emptyFunction;return element;},{refresh:function(){if(!Prototype.BrowserFeatures.ElementExtensions){Object.extend(Methods,Element.Methods);Object.extend(Methods,Element.Methods.Simulated);}}});extend.refresh();return extend;})();if(document.documentElement.hasAttribute){Element.hasAttribute=function(element,attribute){return element.hasAttribute(attribute);};}else{Element.hasAttribute=Element.Methods.Simulated.hasAttribute;}Element.addMethods=function(methods){var F=Prototype.BrowserFeatures,T=Element.Methods.ByTag;if(!methods){Object.extend(Form,Form.Methods);Object.extend(Form.Element,Form.Element.Methods);Object.extend(Element.Methods.ByTag,{"FORM":Object.clone(Form.Methods),"INPUT":Object.clone(Form.Element.Methods),"SELECT":Object.clone(Form.Element.Methods),"TEXTAREA":Object.clone(Form.Element.Methods),"BUTTON":Object.clone(Form.Element.Methods)});}if(arguments.length==2){var tagName=methods;methods=arguments[1];}if(!tagName){Object.extend(Element.Methods,methods||{});}else{if(Object.isArray(tagName)){tagName.each(extend);}else{extend(tagName);}}function extend(tagName){tagName=tagName.toUpperCase();if(!Element.Methods.ByTag[tagName]){Element.Methods.ByTag[tagName]={};}Object.extend(Element.Methods.ByTag[tagName],methods);}function copy(methods,destination,onlyIfAbsent){onlyIfAbsent=onlyIfAbsent||false;for(var property in methods){var value=methods[property];if(!Object.isFunction(value)){continue;}if(!onlyIfAbsent||!(property in destination)){destination[property]=value.methodize();}}}function findDOMClass(tagName){var klass;var trans={"OPTGROUP":"OptGroup","TEXTAREA":"TextArea","P":"Paragraph","FIELDSET":"FieldSet","UL":"UList","OL":"OList","DL":"DList","DIR":"Directory","H1":"Heading","H2":"Heading","H3":"Heading","H4":"Heading","H5":"Heading","H6":"Heading","Q":"Quote","INS":"Mod","DEL":"Mod","A":"Anchor","IMG":"Image","CAPTION":"TableCaption","COL":"TableCol","COLGROUP":"TableCol","THEAD":"TableSection","TFOOT":"TableSection","TBODY":"TableSection","TR":"TableRow","TH":"TableCell","TD":"TableCell","FRAMESET":"FrameSet","IFRAME":"IFrame"};if(trans[tagName]){klass="HTML"+trans[tagName]+"Element";}if(window[klass]){return window[klass];}klass="HTML"+tagName+"Element";if(window[klass]){return window[klass];}klass="HTML"+tagName.capitalize()+"Element";if(window[klass]){return window[klass];}var element=document.createElement(tagName),proto=element["__proto__"]||element.constructor.prototype;element=null;return proto;}var elementPrototype=window.HTMLElement?HTMLElement.prototype:Element.prototype;if(F.ElementExtensions){copy(Element.Methods,elementPrototype);copy(Element.Methods.Simulated,elementPrototype,true);}if(F.SpecificElementExtensions){for(var tag in Element.Methods.ByTag){var klass=findDOMClass(tag);if(Object.isUndefined(klass)){continue;}copy(T[tag],klass.prototype);}}Object.extend(Element,Element.Methods);delete Element.ByTag;if(Element.extend.refresh){Element.extend.refresh();}Element.cache={};};document.viewport={getDimensions:function(){return{width:this.getWidth(),height:this.getHeight()};},getScrollOffsets:function(){return Element._returnOffset(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);}};(function(viewport){var B=Prototype.Browser,doc=document,element,property={};function getRootElement(){if(B.WebKit&&!doc.evaluate){return document;}if(B.Opera&&window.parseFloat(window.opera.version())<9.5){return document.body;}return document.documentElement;}function define(D){if(!element){element=getRootElement();}property[D]="client"+D;viewport["get"+D]=function(){return element[property[D]];};return viewport["get"+D]();}viewport.getWidth=define.curry("Width");viewport.getHeight=define.curry("Height");})(document.viewport);Element.Storage={UID:1};Element.addMethods({getStorage:function(element){if(!(element=$(element))){return;}var uid;if(element===window){uid=0;}else{if(typeof element._prototypeUID==="undefined"){element._prototypeUID=Element.Storage.UID++;}uid=element._prototypeUID;}if(!Element.Storage[uid]){Element.Storage[uid]=$H();}return Element.Storage[uid];},store:function(element,key,value){if(!(element=$(element))){return;}if(arguments.length===2){Element.getStorage(element).update(key);}else{Element.getStorage(element).set(key,value);}return element;},retrieve:function(element,key,defaultValue){if(!(element=$(element))){return;}var hash=Element.getStorage(element),value=hash.get(key);if(Object.isUndefined(value)){hash.set(key,defaultValue);value=defaultValue;}return value;},clone:function(element,deep){if(!(element=$(element))){return;}var clone=element.cloneNode(deep);clone._prototypeUID=void 0;if(deep){var descendants=Element.select(clone,"*"),i=descendants.length;while(i--){descendants[i]._prototypeUID=void 0;}}return Element.extend(clone);},purge:function(element){if(!(element=$(element))){return;}var purgeElement=Element._purgeElement;purgeElement(element);var descendants=element.getElementsByTagName("*"),i=descendants.length;while(i--){purgeElement(descendants[i]);}return null;}});(function(){function toDecimal(pctString){var match=pctString.match(/^(\d+)%?$/i);if(!match){return null;}return(Number(match[1])/100);}function getPixelValue(value,property,context){var element=null;if(Object.isElement(value)){element=value;value=element.getStyle(property);}if(value===null){return null;}if((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)){return window.parseFloat(value);}var isPercentage=value.include("%"),isViewport=(context===document.viewport);if(/\d/.test(value)&&element&&element.runtimeStyle&&!(isPercentage&&isViewport)){var style=element.style.left,rStyle=element.runtimeStyle.left;element.runtimeStyle.left=element.currentStyle.left;element.style.left=value||0;value=element.style.pixelLeft;element.style.left=style;element.runtimeStyle.left=rStyle;return value;}if(element&&isPercentage){context=context||element.parentNode;var decimal=toDecimal(value);var whole=null;var position=element.getStyle("position");var isHorizontal=property.include("left")||property.include("right")||property.include("width");var isVertical=property.include("top")||property.include("bottom")||property.include("height");if(context===document.viewport){if(isHorizontal){whole=document.viewport.getWidth();}else{if(isVertical){whole=document.viewport.getHeight();}}}else{if(isHorizontal){whole=$(context).measure("width");}else{if(isVertical){whole=$(context).measure("height");}}}return(whole===null)?0:whole*decimal;}return 0;}function toCSSPixels(number){if(Object.isString(number)&&number.endsWith("px")){return number;}return number+"px";}function isDisplayed(element){var originalElement=element;while(element&&element.parentNode){var display=element.getStyle("display");if(display==="none"){return false;}element=$(element.parentNode);}return true;}var hasLayout=Prototype.K;if("currentStyle" in document.documentElement){hasLayout=function(element){if(!element.currentStyle.hasLayout){element.style.zoom=1;}return element;};}function cssNameFor(key){if(key.include("border")){key=key+"-width";}return key.camelize();}Element.Layout=Class.create(Hash,{initialize:function($super,element,preCompute){$super();this.element=$(element);Element.Layout.PROPERTIES.each(function(property){this._set(property,null);},this);if(preCompute){this._preComputing=true;this._begin();Element.Layout.PROPERTIES.each(this._compute,this);this._end();this._preComputing=false;}},_set:function(property,value){return Hash.prototype.set.call(this,property,value);},set:function(property,value){throw"Properties of Element.Layout are read-only.";},get:function($super,property){var value=$super(property);return value===null?this._compute(property):value;},_begin:function(){if(this._prepared){return;}var element=this.element;if(isDisplayed(element)){this._prepared=true;return;}var originalStyles={position:element.style.position||"",width:element.style.width||"",visibility:element.style.visibility||"",display:element.style.display||""};element.store("prototype_original_styles",originalStyles);var position=element.getStyle("position"),width=element.getStyle("width");if(width==="0px"||width===null){element.style.display="block";width=element.getStyle("width");}var context=(position==="fixed")?document.viewport:element.parentNode;element.setStyle({position:"absolute",visibility:"hidden",display:"block"});var positionedWidth=element.getStyle("width");var newWidth;if(width&&(positionedWidth===width)){newWidth=getPixelValue(element,"width",context);}else{if(position==="absolute"||position==="fixed"){newWidth=getPixelValue(element,"width",context);}else{var parent=element.parentNode,pLayout=$(parent).getLayout();newWidth=pLayout.get("width")-this.get("margin-left")-this.get("border-left")-this.get("padding-left")-this.get("padding-right")-this.get("border-right")-this.get("margin-right");}}element.setStyle({width:newWidth+"px"});this._prepared=true;},_end:function(){var element=this.element;var originalStyles=element.retrieve("prototype_original_styles");element.store("prototype_original_styles",null);element.setStyle(originalStyles);this._prepared=false;},_compute:function(property){var COMPUTATIONS=Element.Layout.COMPUTATIONS;if(!(property in COMPUTATIONS)){throw"Property not found.";}return this._set(property,COMPUTATIONS[property].call(this,this.element));},toObject:function(){var args=$A(arguments);var keys=(args.length===0)?Element.Layout.PROPERTIES:args.join(" ").split(" ");var obj={};keys.each(function(key){if(!Element.Layout.PROPERTIES.include(key)){return;}var value=this.get(key);if(value!=null){obj[key]=value;}},this);return obj;},toHash:function(){var obj=this.toObject.apply(this,arguments);return new Hash(obj);},toCSS:function(){var args=$A(arguments);var keys=(args.length===0)?Element.Layout.PROPERTIES:args.join(" ").split(" ");var css={};keys.each(function(key){if(!Element.Layout.PROPERTIES.include(key)){return;}if(Element.Layout.COMPOSITE_PROPERTIES.include(key)){return;}var value=this.get(key);if(value!=null){css[cssNameFor(key)]=value+"px";}},this);return css;},inspect:function(){return"#<Element.Layout>";}});Object.extend(Element.Layout,{PROPERTIES:$w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"),COMPOSITE_PROPERTIES:$w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"),COMPUTATIONS:{"height":function(element){if(!this._preComputing){this._begin();}var bHeight=this.get("border-box-height");if(bHeight<=0){if(!this._preComputing){this._end();}return 0;}var bTop=this.get("border-top"),bBottom=this.get("border-bottom");var pTop=this.get("padding-top"),pBottom=this.get("padding-bottom");if(!this._preComputing){this._end();}return bHeight-bTop-bBottom-pTop-pBottom;},"width":function(element){if(!this._preComputing){this._begin();}var bWidth=this.get("border-box-width");if(bWidth<=0){if(!this._preComputing){this._end();}return 0;}var bLeft=this.get("border-left"),bRight=this.get("border-right");var pLeft=this.get("padding-left"),pRight=this.get("padding-right");if(!this._preComputing){this._end();}return bWidth-bLeft-bRight-pLeft-pRight;},"padding-box-height":function(element){var height=this.get("height"),pTop=this.get("padding-top"),pBottom=this.get("padding-bottom");return height+pTop+pBottom;},"padding-box-width":function(element){var width=this.get("width"),pLeft=this.get("padding-left"),pRight=this.get("padding-right");return width+pLeft+pRight;},"border-box-height":function(element){if(!this._preComputing){this._begin();}var height=element.offsetHeight;if(!this._preComputing){this._end();}return height;},"border-box-width":function(element){if(!this._preComputing){this._begin();}var width=element.offsetWidth;if(!this._preComputing){this._end();}return width;},"margin-box-height":function(element){var bHeight=this.get("border-box-height"),mTop=this.get("margin-top"),mBottom=this.get("margin-bottom");if(bHeight<=0){return 0;}return bHeight+mTop+mBottom;},"margin-box-width":function(element){var bWidth=this.get("border-box-width"),mLeft=this.get("margin-left"),mRight=this.get("margin-right");if(bWidth<=0){return 0;}return bWidth+mLeft+mRight;},"top":function(element){var offset=element.positionedOffset();return offset.top;},"bottom":function(element){var offset=element.positionedOffset(),parent=element.getOffsetParent(),pHeight=parent.measure("height");var mHeight=this.get("border-box-height");return pHeight-mHeight-offset.top;},"left":function(element){var offset=element.positionedOffset();return offset.left;},"right":function(element){var offset=element.positionedOffset(),parent=element.getOffsetParent(),pWidth=parent.measure("width");var mWidth=this.get("border-box-width");return pWidth-mWidth-offset.left;},"padding-top":function(element){return getPixelValue(element,"paddingTop");},"padding-bottom":function(element){return getPixelValue(element,"paddingBottom");},"padding-left":function(element){return getPixelValue(element,"paddingLeft");},"padding-right":function(element){return getPixelValue(element,"paddingRight");},"border-top":function(element){return getPixelValue(element,"borderTopWidth");},"border-bottom":function(element){return getPixelValue(element,"borderBottomWidth");},"border-left":function(element){return getPixelValue(element,"borderLeftWidth");},"border-right":function(element){return getPixelValue(element,"borderRightWidth");},"margin-top":function(element){return getPixelValue(element,"marginTop");},"margin-bottom":function(element){return getPixelValue(element,"marginBottom");},"margin-left":function(element){return getPixelValue(element,"marginLeft");},"margin-right":function(element){return getPixelValue(element,"marginRight");}}});if("getBoundingClientRect" in document.documentElement){Object.extend(Element.Layout.COMPUTATIONS,{"right":function(element){var parent=hasLayout(element.getOffsetParent());var rect=element.getBoundingClientRect(),pRect=parent.getBoundingClientRect();return(pRect.right-rect.right).round();},"bottom":function(element){var parent=hasLayout(element.getOffsetParent());var rect=element.getBoundingClientRect(),pRect=parent.getBoundingClientRect();return(pRect.bottom-rect.bottom).round();}});}Element.Offset=Class.create({initialize:function(left,top){this.left=left.round();this.top=top.round();this[0]=this.left;this[1]=this.top;},relativeTo:function(offset){return new Element.Offset(this.left-offset.left,this.top-offset.top);},inspect:function(){return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this);},toString:function(){return"[#{left}, #{top}]".interpolate(this);},toArray:function(){return[this.left,this.top];}});function getLayout(element,preCompute){return new Element.Layout(element,preCompute);}function measure(element,property){return $(element).getLayout().get(property);}function getDimensions(element){element=$(element);var display=Element.getStyle(element,"display");if(display&&display!=="none"){return{width:element.offsetWidth,height:element.offsetHeight};}var style=element.style;var originalStyles={visibility:style.visibility,position:style.position,display:style.display};var newStyles={visibility:"hidden",display:"block"};if(originalStyles.position!=="fixed"){newStyles.position="absolute";}Element.setStyle(element,newStyles);var dimensions={width:element.offsetWidth,height:element.offsetHeight};Element.setStyle(element,originalStyles);return dimensions;}function getOffsetParent(element){element=$(element);if(isDocument(element)||isDetached(element)||isBody(element)||isHtml(element)){return $(document.body);}var isInline=(Element.getStyle(element,"display")==="inline");if(!isInline&&element.offsetParent){return $(element.offsetParent);}while((element=element.parentNode)&&element!==document.body){if(Element.getStyle(element,"position")!=="static"){return isHtml(element)?$(document.body):$(element);}}return $(document.body);}function cumulativeOffset(element){element=$(element);var valueT=0,valueL=0;if(element.parentNode){do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;element=element.offsetParent;}while(element);}return new Element.Offset(valueL,valueT);}function positionedOffset(element){element=$(element);var layout=element.getLayout();var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;element=element.offsetParent;if(element){if(isBody(element)){break;}var p=Element.getStyle(element,"position");if(p!=="static"){break;}}}while(element);valueL-=layout.get("margin-top");valueT-=layout.get("margin-left");return new Element.Offset(valueL,valueT);}function cumulativeScrollOffset(element){var valueT=0,valueL=0;do{valueT+=element.scrollTop||0;valueL+=element.scrollLeft||0;element=element.parentNode;}while(element);return new Element.Offset(valueL,valueT);}function viewportOffset(forElement){element=$(element);var valueT=0,valueL=0,docBody=document.body;var element=forElement;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;if(element.offsetParent==docBody&&Element.getStyle(element,"position")=="absolute"){break;}}while(element=element.offsetParent);element=forElement;do{if(element!=docBody){valueT-=element.scrollTop||0;valueL-=element.scrollLeft||0;}}while(element=element.parentNode);return new Element.Offset(valueL,valueT);}function absolutize(element){element=$(element);if(Element.getStyle(element,"position")==="absolute"){return element;}var offsetParent=getOffsetParent(element);var eOffset=element.viewportOffset(),pOffset=offsetParent.viewportOffset();var offset=eOffset.relativeTo(pOffset);var layout=element.getLayout();element.store("prototype_absolutize_original_styles",{left:element.getStyle("left"),top:element.getStyle("top"),width:element.getStyle("width"),height:element.getStyle("height")});element.setStyle({position:"absolute",top:offset.top+"px",left:offset.left+"px",width:layout.get("width")+"px",height:layout.get("height")+"px"});return element;}function relativize(element){element=$(element);if(Element.getStyle(element,"position")==="relative"){return element;}var originalStyles=element.retrieve("prototype_absolutize_original_styles");if(originalStyles){element.setStyle(originalStyles);}return element;}if(Prototype.Browser.IE){getOffsetParent=getOffsetParent.wrap(function(proceed,element){element=$(element);if(isDocument(element)||isDetached(element)||isBody(element)||isHtml(element)){return $(document.body);}var position=element.getStyle("position");if(position!=="static"){return proceed(element);}element.setStyle({position:"relative"});var value=proceed(element);element.setStyle({position:position});return value;});positionedOffset=positionedOffset.wrap(function(proceed,element){element=$(element);if(!element.parentNode){return new Element.Offset(0,0);}var position=element.getStyle("position");if(position!=="static"){return proceed(element);}var offsetParent=element.getOffsetParent();if(offsetParent&&offsetParent.getStyle("position")==="fixed"){hasLayout(offsetParent);}element.setStyle({position:"relative"});var value=proceed(element);element.setStyle({position:position});return value;});}else{if(Prototype.Browser.Webkit){cumulativeOffset=function(element){element=$(element);var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;if(element.offsetParent==document.body){if(Element.getStyle(element,"position")=="absolute"){break;}}element=element.offsetParent;}while(element);return new Element.Offset(valueL,valueT);};}}Element.addMethods({getLayout:getLayout,measure:measure,getDimensions:getDimensions,getOffsetParent:getOffsetParent,cumulativeOffset:cumulativeOffset,positionedOffset:positionedOffset,cumulativeScrollOffset:cumulativeScrollOffset,viewportOffset:viewportOffset,absolutize:absolutize,relativize:relativize});function isBody(element){return element.nodeName.toUpperCase()==="BODY";}function isHtml(element){return element.nodeName.toUpperCase()==="HTML";}function isDocument(element){return element.nodeType===Node.DOCUMENT_NODE;}function isDetached(element){return element!==document.body&&!Element.descendantOf(element,document.body);}if("getBoundingClientRect" in document.documentElement){Element.addMethods({viewportOffset:function(element){element=$(element);if(isDetached(element)){return new Element.Offset(0,0);}var rect=element.getBoundingClientRect(),docEl=document.documentElement;return new Element.Offset(rect.left-docEl.clientLeft,rect.top-docEl.clientTop);}});}})();window.$$=function(){var expression=$A(arguments).join(", ");return Prototype.Selector.select(expression,document);};Prototype.Selector=(function(){function select(){throw new Error('Method "Prototype.Selector.select" must be defined.');}function match(){throw new Error('Method "Prototype.Selector.match" must be defined.');}function find(elements,expression,index){index=index||0;var match=Prototype.Selector.match,length=elements.length,matchIndex=0,i;for(i=0;i<length;i++){if(match(elements[i],expression)&&index==matchIndex++){return Element.extend(elements[i]);}}}function extendElements(elements){for(var i=0,length=elements.length;i<length;i++){Element.extend(elements[i]);}return elements;}var K=Prototype.K;return{select:select,match:match,find:find,extendElements:(Element.extend===K)?K:extendElements,extendElement:Element.extend};})();Prototype._original_property=window.Sizzle;
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];var origContext=context=context||document;if(context.nodeType!==1&&context.nodeType!==9){return[];}if(!selector||typeof selector!=="string"){return results;}var parts=[],m,set,checkSet,check,mode,extra,prune=true,contextXML=isXML(context),soFar=selector;while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}if(pop==null){pop=context;}Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}if(!checkSet){checkSet=set;}if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector);}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else{if(context&&context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}}else{makeArray(checkSet,results);}if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[];}for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}if(!set){set=context.getElementsByTagName("*");}return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;anyFound=false;if(curLoop==result){result=[];}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else{if(match===true){continue;}}}if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else{if(pass){result.push(item);anyFound=true;}}}}}if(found!==undefined){if(!inplace){curLoop=result;}expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}break;}}}if(expr==old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+expr;}else{break;}}old=expr;}return curLoop;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");}},relative:{"+":function(checkSet,part,isXML){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag&&!isXML){part=part.toUpperCase();}for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName===part?elem||false:elem===part;}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part,isXML){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=isXML?part:part.toUpperCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName===part?parent:false;}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(!/\W/.test(part)){var nodeCheck=part=isXML?part:part.toUpperCase();checkFn=dirNodeCheck;}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=isXML?part:part.toUpperCase();checkFn=dirNodeCheck;}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[];}},NAME:function(match,context,isXML){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}return ret.length===0?null:ret;}},TAG:function(match,context){return context.getElementsByTagName(match[1]);}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";if(isXML){return match;}for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else{if(inplace){curLoop[i]=false;}}}}return false;},ID:function(match){return match[1].replace(/\\/g,"");},TAG:function(match,curLoop){for(var i=0;curLoop[i]===false;i++){}return curLoop[i]&&isXML(curLoop[i])?match[1]:match[1].toUpperCase();},CHILD:function(match){if(match[1]=="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]=="even"&&"2n"||match[2]=="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}if(match[2]==="~="){match[4]=" "+match[4]+" ";}return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}return false;}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}}return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true;},parent:function(elem){return !!elem.firstChild;},empty:function(elem){return !elem.firstChild;},has:function(elem,i,match){return !!Sizzle(match[3],elem).length;},header:function(elem){return/h\d/i.test(elem.nodeName);},text:function(elem){return"text"===elem.type;},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON";},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0==i;},eq:function(elem,i,match){return match[3]-0==i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else{if(name==="contains"){return(elem.textContent||elem.innerText||"").indexOf(match[3])>=0;}else{if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false;}}return true;}}}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}if(type=="first"){return true;}node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}return true;case"nth":var first=match[2],last=match[3];if(first==1&&last==0){return true;}var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}parent.sizcache=doneName;}var diff=elem.nodeIndex-last;if(first==0){return diff==0;}else{return(diff%first==0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!=check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source);}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0);}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i]);}}else{for(var i=0;array[i];i++){ret.push(array[i]);}}}return ret;};}var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true;}return 0;}var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true;}return ret;};}else{if("sourceIndex" in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true;}return 0;}var ret=a.sourceIndex-b.sourceIndex;if(ret===0){hasDuplicate=true;}return ret;};}else{if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true;}return 0;}var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.setStart(a,0);aRange.setEnd(a,0);bRange.setStart(b,0);bRange.setEnd(b,0);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true;}return ret;};}}}(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();form.innerHTML="<a name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(!!document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}results=tmp;}return results;};}div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra);}catch(e){}}return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}div=null;})();}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(div.getElementsByClassName("e").length===0){return;}div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();}function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;elem.sizset=i;}elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}if(elem.nodeName===cur){match=elem;break;}elem=elem[dir];}checkSet[i]=match;}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;elem.sizset=i;}elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}}elem=elem[dir];}checkSet[i]=match;}}}var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16;}:function(a,b){return a!==b&&(a.contains?a.contains(b):true);};var isXML=function(elem){return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&elem.ownerDocument.documentElement.nodeName!=="HTML";};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}return Sizzle.filter(later,tmpSet);};window.Sizzle=Sizzle;})();(function(engine){var extendElements=Prototype.Selector.extendElements;function select(selector,scope){return extendElements(engine(selector,scope||document));}function match(element,selector){return engine.matches(selector,[element]).length==1;}Prototype.Selector.engine=engine;Prototype.Selector.select=select;Prototype.Selector.match=match;})(Sizzle);window.Sizzle=Prototype._original_property;delete Prototype._original_property;var Form={reset:function(form){form=$(form);form.reset();return form;},serializeElements:function(elements,options){if(typeof options!="object"){options={hash:!!options};}else{if(Object.isUndefined(options.hash)){options.hash=true;}}var key,value,submitted=false,submit=options.submit,accumulator,initial;if(options.hash){initial={};accumulator=function(result,key,value){if(key in result){if(!Object.isArray(result[key])){result[key]=[result[key]];}result[key].push(value);}else{result[key]=value;}return result;};}else{initial="";accumulator=function(result,key,value){return result+(result?"&":"")+encodeURIComponent(key)+"="+encodeURIComponent(value);};}return elements.inject(initial,function(result,element){if(!element.disabled&&element.name){key=element.name;value=$(element).getValue();if(value!=null&&element.type!="file"&&(element.type!="submit"||(!submitted&&submit!==false&&(!submit||key==submit)&&(submitted=true)))){result=accumulator(result,key,value);}}return result;});}};Form.Methods={serialize:function(form,options){return Form.serializeElements(Form.getElements(form),options);},getElements:function(form){var elements=$(form).getElementsByTagName("*"),element,arr=[],serializers=Form.Element.Serializers;for(var i=0;element=elements[i];i++){arr.push(element);}return arr.inject([],function(elements,child){if(serializers[child.tagName.toLowerCase()]){elements.push(Element.extend(child));}return elements;});},getInputs:function(form,typeName,name){form=$(form);var inputs=form.getElementsByTagName("input");if(!typeName&&!name){return $A(inputs).map(Element.extend);}for(var i=0,matchingInputs=[],length=inputs.length;i<length;i++){var input=inputs[i];if((typeName&&input.type!=typeName)||(name&&input.name!=name)){continue;}matchingInputs.push(Element.extend(input));}return matchingInputs;},disable:function(form){form=$(form);Form.getElements(form).invoke("disable");return form;},enable:function(form){form=$(form);Form.getElements(form).invoke("enable");return form;},findFirstElement:function(form){var elements=$(form).getElements().findAll(function(element){return"hidden"!=element.type&&!element.disabled;});var firstByIndex=elements.findAll(function(element){return element.hasAttribute("tabIndex")&&element.tabIndex>=0;}).sortBy(function(element){return element.tabIndex;}).first();return firstByIndex?firstByIndex:elements.find(function(element){return/^(?:input|select|textarea)$/i.test(element.tagName);});},focusFirstElement:function(form){form=$(form);var element=form.findFirstElement();if(element){element.activate();}return form;},request:function(form,options){form=$(form),options=Object.clone(options||{});var params=options.parameters,action=form.readAttribute("action")||"";if(action.blank()){action=window.location.href;}options.parameters=form.serialize(true);if(params){if(Object.isString(params)){params=params.toQueryParams();}Object.extend(options.parameters,params);}if(form.hasAttribute("method")&&!options.method){options.method=form.method;}return new Ajax.Request(action,options);}};Form.Element={focus:function(element){$(element).focus();return element;},select:function(element){$(element).select();return element;}};Form.Element.Methods={serialize:function(element){element=$(element);if(!element.disabled&&element.name){var value=element.getValue();if(value!=undefined){var pair={};pair[element.name]=value;return Object.toQueryString(pair);}}return"";},getValue:function(element){element=$(element);var method=element.tagName.toLowerCase();return Form.Element.Serializers[method](element);},setValue:function(element,value){element=$(element);var method=element.tagName.toLowerCase();Form.Element.Serializers[method](element,value);return element;},clear:function(element){$(element).value="";return element;},present:function(element){return $(element).value!="";},activate:function(element){element=$(element);try{element.focus();if(element.select&&(element.tagName.toLowerCase()!="input"||!(/^(?:button|reset|submit)$/i.test(element.type)))){element.select();}}catch(e){}return element;},disable:function(element){element=$(element);element.disabled=true;return element;},enable:function(element){element=$(element);element.disabled=false;return element;}};var Field=Form.Element;var $F=Form.Element.Methods.getValue;Form.Element.Serializers=(function(){function input(element,value){switch(element.type.toLowerCase()){case"checkbox":case"radio":return inputSelector(element,value);default:return valueSelector(element,value);}}function inputSelector(element,value){if(Object.isUndefined(value)){return element.checked?element.value:null;}else{element.checked=!!value;}}function valueSelector(element,value){if(Object.isUndefined(value)){return element.value;}else{element.value=value;}}function select(element,value){if(Object.isUndefined(value)){return(element.type==="select-one"?selectOne:selectMany)(element);}var opt,currentValue,single=!Object.isArray(value);for(var i=0,length=element.length;i<length;i++){opt=element.options[i];currentValue=this.optionValue(opt);if(single){if(currentValue==value){opt.selected=true;return;}}else{opt.selected=value.include(currentValue);}}}function selectOne(element){var index=element.selectedIndex;return index>=0?optionValue(element.options[index]):null;}function selectMany(element){var values,length=element.length;if(!length){return null;}for(var i=0,values=[];i<length;i++){var opt=element.options[i];if(opt.selected){values.push(optionValue(opt));}}return values;}function optionValue(opt){return Element.hasAttribute(opt,"value")?opt.value:opt.text;}return{input:input,inputSelector:inputSelector,textarea:valueSelector,select:select,selectOne:selectOne,selectMany:selectMany,optionValue:optionValue,button:valueSelector};})();Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,element,frequency,callback){$super(callback,frequency);this.element=$(element);this.lastValue=this.getValue();},execute:function(){var value=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(value)?this.lastValue!=value:String(this.lastValue)!=String(value)){this.callback(this.element,value);this.lastValue=value;}}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element);}});Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element);}});Abstract.EventObserver=Class.create({initialize:function(element,callback){this.element=$(element);this.callback=callback;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=="form"){this.registerFormCallbacks();}else{this.registerCallback(this.element);}},onElementEvent:function(){var value=this.getValue();if(this.lastValue!=value){this.callback(this.element,value);this.lastValue=value;}},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this);},registerCallback:function(element){if(element.type){switch(element.type.toLowerCase()){case"checkbox":case"radio":Event.observe(element,"click",this.onElementEvent.bind(this));break;default:Event.observe(element,"change",this.onElementEvent.bind(this));break;}}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element);}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element);}});(function(){var Event={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,cache:{}};var docEl=document.documentElement;var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED="onmouseenter" in docEl&&"onmouseleave" in docEl;var isIELegacyEvent=function(event){return false;};if(window.attachEvent){if(window.addEventListener){isIELegacyEvent=function(event){return !(event instanceof window.Event);};}else{isIELegacyEvent=function(event){return true;};}}var _isButton;function _isButtonForDOMEvents(event,code){return event.which?(event.which===code+1):(event.button===code);}var legacyButtonMap={0:1,1:4,2:2};function _isButtonForLegacyEvents(event,code){return event.button===legacyButtonMap[code];}function _isButtonForWebKit(event,code){switch(code){case 0:return event.which==1&&!event.metaKey;case 1:return event.which==2||(event.which==1&&event.metaKey);case 2:return event.which==3;default:return false;}}if(window.attachEvent){if(!window.addEventListener){_isButton=_isButtonForLegacyEvents;}else{_isButton=function(event,code){return isIELegacyEvent(event)?_isButtonForLegacyEvents(event,code):_isButtonForDOMEvents(event,code);};}}else{if(Prototype.Browser.WebKit){_isButton=_isButtonForWebKit;}else{_isButton=_isButtonForDOMEvents;}}function isLeftClick(event){return _isButton(event,0);}function isMiddleClick(event){return _isButton(event,1);}function isRightClick(event){return _isButton(event,2);}function element(event){event=Event.extend(event);var node=event.target,type=event.type,currentTarget=event.currentTarget;if(currentTarget&&currentTarget.tagName){if(type==="load"||type==="error"||(type==="click"&&currentTarget.tagName.toLowerCase()==="input"&&currentTarget.type==="radio")){node=currentTarget;}}if(node.nodeType==Node.TEXT_NODE){node=node.parentNode;}return Element.extend(node);}function findElement(event,expression){var element=Event.element(event);if(!expression){return element;}while(element){if(Object.isElement(element)&&Prototype.Selector.match(element,expression)){return Element.extend(element);}element=element.parentNode;}}function pointer(event){return{x:pointerX(event),y:pointerY(event)};}function pointerX(event){var docElement=document.documentElement,body=document.body||{scrollLeft:0};return event.pageX||(event.clientX+(docElement.scrollLeft||body.scrollLeft)-(docElement.clientLeft||0));}function pointerY(event){var docElement=document.documentElement,body=document.body||{scrollTop:0};return event.pageY||(event.clientY+(docElement.scrollTop||body.scrollTop)-(docElement.clientTop||0));}function stop(event){Event.extend(event);event.preventDefault();event.stopPropagation();event.stopped=true;}Event.Methods={isLeftClick:isLeftClick,isMiddleClick:isMiddleClick,isRightClick:isRightClick,element:element,findElement:findElement,pointer:pointer,pointerX:pointerX,pointerY:pointerY,stop:stop};var methods=Object.keys(Event.Methods).inject({},function(m,name){m[name]=Event.Methods[name].methodize();return m;});if(window.attachEvent){function _relatedTarget(event){var element;switch(event.type){case"mouseover":case"mouseenter":element=event.fromElement;break;case"mouseout":case"mouseleave":element=event.toElement;break;default:return null;}return Element.extend(element);}var additionalMethods={stopPropagation:function(){this.cancelBubble=true;},preventDefault:function(){this.returnValue=false;},inspect:function(){return"[object Event]";}};Event.extend=function(event,element){if(!event){return false;}if(!isIELegacyEvent(event)){return event;}if(event._extendedByPrototype){return event;}event._extendedByPrototype=Prototype.emptyFunction;var pointer=Event.pointer(event);Object.extend(event,{target:event.srcElement||element,relatedTarget:_relatedTarget(event),pageX:pointer.x,pageY:pointer.y});Object.extend(event,methods);Object.extend(event,additionalMethods);return event;};}else{Event.extend=Prototype.K;}if(window.addEventListener){Event.prototype=window.Event.prototype||document.createEvent("HTMLEvents").__proto__;Object.extend(Event.prototype,methods);}function _createResponder(element,eventName,handler){var registry=Element.retrieve(element,"prototype_event_registry");if(Object.isUndefined(registry)){CACHE.push(element);registry=Element.retrieve(element,"prototype_event_registry",$H());}var respondersForEvent=registry.get(eventName);if(Object.isUndefined(respondersForEvent)){respondersForEvent=[];registry.set(eventName,respondersForEvent);}if(respondersForEvent.pluck("handler").include(handler)){return false;}var responder;if(eventName.include(":")){responder=function(event){if(Object.isUndefined(event.eventName)){return false;}if(event.eventName!==eventName){return false;}Event.extend(event,element);handler.call(element,event);};}else{if(!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED&&(eventName==="mouseenter"||eventName==="mouseleave")){if(eventName==="mouseenter"||eventName==="mouseleave"){responder=function(event){Event.extend(event,element);var parent=event.relatedTarget;while(parent&&parent!==element){try{parent=parent.parentNode;}catch(e){parent=element;}}if(parent===element){return;}handler.call(element,event);};}}else{responder=function(event){Event.extend(event,element);handler.call(element,event);};}}responder.handler=handler;respondersForEvent.push(responder);return responder;}function _destroyCache(){for(var i=0,length=CACHE.length;i<length;i++){Event.stopObserving(CACHE[i]);CACHE[i]=null;}}var CACHE=[];if(Prototype.Browser.IE){window.attachEvent("onunload",_destroyCache);}if(Prototype.Browser.WebKit){window.addEventListener("unload",Prototype.emptyFunction,false);}var _getDOMEventName=Prototype.K,translations={mouseenter:"mouseover",mouseleave:"mouseout"};if(!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED){_getDOMEventName=function(eventName){return(translations[eventName]||eventName);};}function observe(element,eventName,handler){element=$(element);var responder=_createResponder(element,eventName,handler);if(!responder){return element;}if(eventName.include(":")){if(element.addEventListener){element.addEventListener("dataavailable",responder,false);}else{element.attachEvent("ondataavailable",responder);element.attachEvent("onlosecapture",responder);}}else{var actualEventName=_getDOMEventName(eventName);if(element.addEventListener){element.addEventListener(actualEventName,responder,false);}else{element.attachEvent("on"+actualEventName,responder);}}return element;}function stopObserving(element,eventName,handler){element=$(element);var registry=Element.retrieve(element,"prototype_event_registry");if(!registry){return element;}if(!eventName){registry.each(function(pair){var eventName=pair.key;stopObserving(element,eventName);});return element;}var responders=registry.get(eventName);if(!responders){return element;}if(!handler){responders.each(function(r){stopObserving(element,eventName,r.handler);});return element;}var i=responders.length,responder;while(i--){if(responders[i].handler===handler){responder=responders[i];break;}}if(!responder){return element;}if(eventName.include(":")){if(element.removeEventListener){element.removeEventListener("dataavailable",responder,false);}else{element.detachEvent("ondataavailable",responder);element.detachEvent("onlosecapture",responder);}}else{var actualEventName=_getDOMEventName(eventName);if(element.removeEventListener){element.removeEventListener(actualEventName,responder,false);}else{element.detachEvent("on"+actualEventName,responder);}}registry.set(eventName,responders.without(responder));return element;}function fire(element,eventName,memo,bubble){element=$(element);if(Object.isUndefined(bubble)){bubble=true;}if(element==document&&document.createEvent&&!element.dispatchEvent){element=document.documentElement;}var event;if(document.createEvent){event=document.createEvent("HTMLEvents");event.initEvent("dataavailable",bubble,true);}else{event=document.createEventObject();event.eventType=bubble?"ondataavailable":"onlosecapture";}event.eventName=eventName;event.memo=memo||{};if(document.createEvent){element.dispatchEvent(event);}else{element.fireEvent(event.eventType,event);}return Event.extend(event);}Event.Handler=Class.create({initialize:function(element,eventName,selector,callback){this.element=$(element);this.eventName=eventName;this.selector=selector;this.callback=callback;this.handler=this.handleEvent.bind(this);},start:function(){Event.observe(this.element,this.eventName,this.handler);return this;},stop:function(){Event.stopObserving(this.element,this.eventName,this.handler);return this;},handleEvent:function(event){var element=Event.findElement(event,this.selector);if(element){this.callback.call(this.element,event,element);}}});function on(element,eventName,selector,callback){element=$(element);if(Object.isFunction(selector)&&Object.isUndefined(callback)){callback=selector,selector=null;}return new Event.Handler(element,eventName,selector,callback).start();}Object.extend(Event,Event.Methods);Object.extend(Event,{fire:fire,observe:observe,stopObserving:stopObserving,on:on});Element.addMethods({fire:fire,observe:observe,stopObserving:stopObserving,on:on});Object.extend(document,{fire:fire.methodize(),observe:observe.methodize(),stopObserving:stopObserving.methodize(),on:on.methodize(),loaded:false});if(window.Event){Object.extend(window.Event,Event);}else{window.Event=Event;}})();(function(){var timer;function fireContentLoadedEvent(){if(document.loaded){return;}if(timer){window.clearTimeout(timer);}document.loaded=true;document.fire("dom:loaded");}function checkReadyState(){if(document.readyState==="complete"){document.stopObserving("readystatechange",checkReadyState);fireContentLoadedEvent();}}function pollDoScroll(){try{document.documentElement.doScroll("left");}catch(e){timer=pollDoScroll.defer();return;}fireContentLoadedEvent();}if(document.addEventListener){document.addEventListener("DOMContentLoaded",fireContentLoadedEvent,false);}else{document.observe("readystatechange",checkReadyState);if(window==top){timer=pollDoScroll.defer();}}Event.observe(window,"load",fireContentLoadedEvent);})();Element.addMethods();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};Element.Methods.childOf=Element.Methods.descendantOf;var Insertion={Before:function(element,content){return Element.insert(element,{before:content});},Top:function(element,content){return Element.insert(element,{top:content});},Bottom:function(element,content){return Element.insert(element,{bottom:content});},After:function(element,content){return Element.insert(element,{after:content});}};var $continue=new Error('"throw $continue" is deprecated, use "return" instead');var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;},within:function(element,x,y){if(this.includeScrollOffsets){return this.withinIncludingScrolloffsets(element,x,y);}this.xcomp=x;this.ycomp=y;this.offset=Element.cumulativeOffset(element);return(y>=this.offset[1]&&y<this.offset[1]+element.offsetHeight&&x>=this.offset[0]&&x<this.offset[0]+element.offsetWidth);},withinIncludingScrolloffsets:function(element,x,y){var offsetcache=Element.cumulativeScrollOffset(element);this.xcomp=x+offsetcache[0]-this.deltaX;this.ycomp=y+offsetcache[1]-this.deltaY;this.offset=Element.cumulativeOffset(element);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+element.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+element.offsetWidth);},overlap:function(mode,element){if(!mode){return 0;}if(mode=="vertical"){return((this.offset[1]+element.offsetHeight)-this.ycomp)/element.offsetHeight;}if(mode=="horizontal"){return((this.offset[0]+element.offsetWidth)-this.xcomp)/element.offsetWidth;}},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(element){Position.prepare();return Element.absolutize(element);},relativize:function(element){Position.prepare();return Element.relativize(element);},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(source,target,options){options=options||{};return Element.clonePosition(target,source,options);}};if(!document.getElementsByClassName){document.getElementsByClassName=function(instanceMethods){function iter(name){return name.blank()?null:"[contains(concat(' ', @class, ' '), ' "+name+" ')]";}instanceMethods.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(element,className){className=className.toString().strip();var cond=/\s/.test(className)?$w(className).map(iter).join(""):iter(className);return cond?document._getElementsByXPath(".//*"+cond,element):[];}:function(element,className){className=className.toString().strip();var elements=[],classNames=(/\s/.test(className)?$w(className):null);if(!classNames&&!className){return elements;}var nodes=$(element).getElementsByTagName("*");className=" "+className+" ";for(var i=0,child,cn;child=nodes[i];i++){if(child.className&&(cn=" "+child.className+" ")&&(cn.include(className)||(classNames&&classNames.all(function(name){return !name.toString().blank()&&cn.include(" "+name+" ");})))){elements.push(Element.extend(child));}}return elements;};return function(className,parentElement){return $(parentElement||document.body).getElementsByClassName(className);};}(Element.Methods);}Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(element){this.element=$(element);},_each:function(iterator){this.element.className.split(/\s+/).select(function(name){return name.length>0;})._each(iterator);},set:function(className){this.element.className=className;},add:function(classNameToAdd){if(this.include(classNameToAdd)){return;}this.set($A(this).concat(classNameToAdd).join(" "));},remove:function(classNameToRemove){if(!this.include(classNameToRemove)){return;}this.set($A(this).without(classNameToRemove).join(" "));},toString:function(){return $A(this).join(" ");}};Object.extend(Element.ClassNames.prototype,Enumerable);(function(){window.Selector=Class.create({initialize:function(expression){this.expression=expression.strip();},findElements:function(rootElement){return Prototype.Selector.select(this.expression,rootElement);},match:function(element){return Prototype.Selector.match(element,this.expression);},toString:function(){return this.expression;},inspect:function(){return"#<Selector: "+this.expression+">";}});Object.extend(Selector,{matchElements:function(elements,expression){var match=Prototype.Selector.match,results=[];for(var i=0,length=elements.length;i<length;i++){var element=elements[i];if(match(element,expression)){results.push(Element.extend(element));}}return results;},findElement:function(elements,expression,index){index=index||0;var matchIndex=0,element;for(var i=0,length=elements.length;i<length;i++){element=elements[i];if(Prototype.Selector.match(element,expression)&&index===matchIndex++){return Element.extend(element);}}},findChildElements:function(element,expressions){var selector=expressions.toArray().join(", ");return Prototype.Selector.select(selector,element||document);}});})();(function(){var cache={};NYTD.Template=function(str,data){var fn=!/\W/.test(str)?cache[str]=cache[str]||NYTD.Template(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return data?fn(data):fn;};})();var TimesPeople=TimesPeople||{};TimesPeople.URIList={allowedHosts:{"www.nytimes.com":1,"nytimes.com":1,"community.nytimes.com":1,"elections.nytimes.com":1,"events.nytimes.com":1,"movies.nytimes.com":1,"movies2.nytimes.com":1,"my.nytimes.com":1,"politics.nytimes.com":1,"tech2.nytimes.com":1,"tech.nytimes.com":1,"travel.nytimes.com":1,"travel2.nytimes.com":1,"topics.nytimes.com":1,"theater.nytimes.com":1,"jobmarket.nytimes.com":1,"projects.nytimes.com":1,"prototype.nytimes.com":1,"query.nytimes.com":1,"health.nytimes.com":1,"timesmachine.nytimes.com":1,"timespeople.nytimes.com":1,"www.sea1.nytimes.com":1,"tv.nytimes.com":1,"nyt.com":1,"www.nyt.com":1,"oscars.nytimes.com":1,"documents.nytimes.com":1,"ncaabracket.nytimes.com":1,"submit.nytimes.com":1,"global.nytimes.com":1,"video.nytimes.com":1,"video.on.nytimes.com":1},allowedHostsPatterns:[/.*\.blogs\.nytimes\.com/],deniedURIs:[/.*?glogin.*/,/.*?\/auth\/login.*/,/.*?gst\/signout.*/,/.*?pagewanted=print.*/,/.*?pagemode=print.*/,/.*?\/style\/t\/.*/,/.*?archive\/pdf.*/,/.*?markets.on.nytimes.com.*/,/.*?\/learning.nytimes.com.*/,/.*?\/membercenter.*/,/.*?\/mem\/.*/,/.*?\/gst\/forgot.*/,/.*?\/gst\/emailus.*/,/.*?\/gst\/unsub.*/,/.*?\/gst\/regi.*/,/.*?\/regi.*/,/.*?\/ref\/crosswords\/setpuzzle.*/,/.*?\/gst\/mostblogged.*/,/.*?\/gst\/mostsearched.*/,/.*?\/gst\/mostemailed.*/,/.*?\/gst\/mostpopular.*/,/.*?\/marketing\/.*/,/.*?jobmarket.nytimes.com.*/,/.*?\/packages\/html\/style\/.*?/,/.*?\/gst\/litesub_insert.*/,/.*?\/ref\/classifieds\/.*?/,/.*?\/gst\/shopping_cart.*/,/.*?select.nytimes.com.*/],deniedMetaTags:[{"PST":"Audio Slideshow"},{"TimesPeople":"disallow"}],deniedPlatforms:[/Android|dream|AppleWebKit\/41|Opera/],allowsCurrentPlatform:function(){for(var i=0,pattern;pattern=this.deniedPlatforms[i];i++){if(pattern.test(navigator.userAgent)){return false;}}return true;},allowsCurrentHost:function(){if(NYTD.env=="staging"||NYTD.env=="development"){return true;}else{if(this.allowedHosts[window.location.host]){return true;}else{for(var i=0,pattern;pattern=this.allowedHostsPatterns[i];i++){if(pattern.test(window.location.host)){return true;}else{return false;}}}}},allowsCurrentType:function(){for(var i=0,pair;pair=this.deniedMetaTags[i];i++){for(var key in pair){var matches=document.getElementsByName(key);for(var j=0,match;match=matches[j];j++){if(match.content==pair[key]){return false;}}}}return true;},allowsCurrentURI:function(){for(var i=0,pattern;pattern=this.deniedURIs[i];i++){if(pattern.test(window.location.href)){return false;}}return true;},allowsCurrentPage:function(){return this.allowsCurrentPlatform()&&this.allowsCurrentHost()&&this.allowsCurrentURI()&&this.allowsCurrentType();}};if(window.TimesPeople&&TimesPeople.URIList&&TimesPeople.URIList.allowsCurrentPage()){NYTD.require("/js/app/timespeople/toolbar/1.7/config/"+(NYTD.env||"config")+".js");NYTD.require("/js/app/timespeople/toolbar/1.7/toolbar.build.min.js");}if(window.TimesPeople&&TimesPeople.URIList&&TimesPeople.URIList.allowsCurrentPage()){NYTD.require("/js/app/timespeople/activities/1.6/activities.build.js");}
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}
if(typeof SWFObject == "undefined") {
var getQueryParamValue=deconcept.util.getRequestParameter;
var FlashObject=deconcept.SWFObject;
var SWFObject=deconcept.SWFObject;
}
if(!SWFObject.swfEvents && !SWFObject.swfListeners) {
SWFObject.swfEvents = new Object();
SWFObject.swfListeners = new Object();
SWFObject.dispatchEventToSWF = function(sid,e) {
var evts = SWFObject.swfEvents["s"+sid];
if(evts == null) evts = [];
evts.push(e);
SWFObject.swfEvents["s"+sid] = evts;
}
SWFObject.cancelEventsToSWF = function(sid,type) {
var evts = SWFObject.swfEvents["s"+sid];
if(evts == null) return;
for(var i=0; i<evts.length; i++) {
if(type == null || evts[i].type == type) {
evts.splice(i,1);
i--;
}
}
}
SWFObject.hasEventsFor = function(sid) {
var evts = SWFObject.swfEvents["s"+sid];
return (evts && evts.length > 0);
}
SWFObject.getEventsFor = function(sid) {
var evts = SWFObject.swfEvents["s"+sid];
if(evts) {
SWFObject.swfEvents["s"+sid] = [];
return evts;
}
return [];
}
SWFObject.addSWFEventListener = function(swfId,eType,callback) {
swfId = swfId.replace(/[^\w]/g,"");
if(SWFObject.swfListeners["swf"+swfId] == null) {
SWFObject.swfListeners["swf"+swfId] = [{id:swfId,type:eType,callback:callback}];
}
else SWFObject.swfListeners["swf"+swfId].push({id:swfId,type:eType,callback:callback});
}
SWFObject.onSWFEvent = function(e) {
if(e.type == null || e.target == null) return;
var swfId = e.target.replace(/[^\w]/g,"");
var listeners = SWFObject.swfListeners["swf"+swfId];
if(listeners == null) return;
for(var i=0; i<listeners.length; i++) {
if(listeners[i].id == swfId && listeners[i].type == e.type) listeners[i].callback(e);
}
}
}/* $Id: tabset.js 23146 2009-08-17 21:07:52Z kom $
 * The tool to use if you need a set of tabs.
 *
 * USE: NYTD.TabSet("idOfTabSetContainerDiv");
 */

NYTD.TabSet = function( target ) {
	function root() {
		return $(target);
	}

	function subSelect(queryString) {
		return root().select(queryString);
	}

	function activateTabLink(event) {
		blankTabsAndContent();
		selectTab(event.findElement('li'));
		event.element().blur();
		event.stop();
	}

	function blankTabsAndContent() {
		api.getTabs().invoke("removeClassName", "selected");
		api.getTabContent().invoke("removeClassName", "active");
	}

	function selectTab(tabNode) {
		if (tabNode) {
		  var index = api.getTabs().indexOf(tabNode);
			activateTab(tabNode, api.getTabContent()[index]);
		}
	}

	function activateTab(tabNode, contentNode) {
		if (tabNode && contentNode) {
			tabNode.addClassName("selected");
			contentNode.addClassName("active");
		}
	}

	var api = {
		subSelect: function(queryString) { return subSelect(queryString); },
		getRoot: function() { return root() },
		selectedTabNotFound: function() { return subSelect("ul.tabs li.selected").length < 1},
		activeContentNotFound: function() { return subSelect(".tabContent.active").length < 1},
		getTabs: function() { return subSelect("ul.tabs li")},
		getTabLinks: function() { return subSelect("ul.tabs li a")},
		getTabContent: function() { return subSelect(".tabContent")},
		activateTab: function(tabNode, contentNode) {activateTab(tabNode, contentNode);},
		activateTabLinks: function() {return activateTabLink;}
	};

	api.getTabs().invoke("observe", "click", activateTabLink);  
	if(api.selectedTabNotFound() || api.activeContentNotFound()) {
		blankTabsAndContent();
		activateTab(api.getTabs()[0], api.getTabContent()[0]);
		}
	return api;
};

// Automatically tab-i-fy nodes with a class of tabAutoLoad
document.observe("dom:loaded", function() {
	$$(".tabAutoLoad").each(function(tabSet){
		new NYTD.TabSet(tabSet);
	});
});

// Compatibility
if(!($$("body#home"))) {
    var Accordian = NYTD.TabSet;
}
