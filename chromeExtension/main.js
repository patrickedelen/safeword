function myPluginLoadEvent(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

var checkGlobalHTTPS = function(settings){
	console.log(window.location.protocol);
	if(!(window.location.protocol === "https:")) {
		reportError(window.location.href,1);
		if(settings.getBlockSites() == true){
			window.location.href = (window.location.href).replace(/.*:\/\//, "https://");
		}
	}
};

console.log("loaded safeWord");
var globalSettings = new Settings(function(){
	console.log(globalSettings);
	checkGlobalHTTPS(globalSettings);
});

