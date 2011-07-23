/* $Id: tabset.js 23146 2009-08-17 21:07:52Z kom $
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
