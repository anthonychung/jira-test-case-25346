// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function getResourcePath(_urlpath){
	var outputDirectory = Ti.Filesystem.resourcesDirectory; 
    var file = Ti.Filesystem.getFile(outputDirectory,_urlpath); 
    Ti.API.info('fileexists '+file.exists());
    var urlpath = file.nativePath;
    return urlpath;
}

function init(){
	var path = "/local.html"
	var url = getResourcePath(path);
	$.web.url = url;
}

init();