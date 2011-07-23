/*
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
