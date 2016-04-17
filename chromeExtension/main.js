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

var checkGlobalHTTPS = function(){
	console.log(window.location.protocol);
	if(!(window.location.protocol === "https:")) {
		reportError(window.location.href,1);
	}
};

console.log("loaded safeWord");
checkGlobalHTTPS();
console.log(window.onload);
