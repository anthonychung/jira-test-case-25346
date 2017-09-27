/**
 * test case
 * needs to fire from within the webview, not from titanium native context
 */

var eventName = "app:fromWebView:scorm";

function webCallback(_params){
	// alert("test");
	Ti.API.info("LOGGER: \n\n"+JSON.stringify(_params)+"\n\n");
}

function runTest(){
	Alloy.createController("test").getView().open();
}

function setupListeners(){
	Ti.App.addEventListener(eventName, webCallback);
}

function start(){
 	setupListeners();
	$.index.open();
}

start();
