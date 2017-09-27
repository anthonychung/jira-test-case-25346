function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getResourcePath(_urlpath) {
        var outputDirectory = Ti.Filesystem.resourcesDirectory;
        var file = Ti.Filesystem.getFile(outputDirectory, _urlpath);
        Ti.API.info("fileexists " + file.exists());
        var urlpath = file.nativePath;
        return urlpath;
    }
    function init() {
        var path = "/local.html";
        var url = getResourcePath(path);
        $.web.url = url;
    }
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "test";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.test = Ti.UI.createWindow({
        backgroundColor: "black",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "test"
    });
    $.__views.test && $.addTopLevelView($.__views.test);
    $.__views.web = Ti.UI.createWebView({
        top: 0,
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "black",
        id: "web"
    });
    $.__views.test.add($.__views.web);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    init();
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;