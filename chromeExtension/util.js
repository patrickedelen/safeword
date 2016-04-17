Settings = function(func) {
	this.blockHttpsSites = false;
	this.blockHttpsRequests = false;
	chrome.storage.onChanged.addListener(function(changes){
		if(changes.blockHttpSites != null){
			this.setUISites(changes.blockHttpSites);
		}
		if(changes.blockHttpRequests != null){
			this.setUIRequests(changes.blockHttpRequests);
		}
	}.bind(this));
	this.loadSync(func);
};
Settings.prototype.loadSync = function(func){
	console.log('loading');
	chrome.storage.sync.get(["blockHttpSites","blockHttpRequests"],function(items){
		console.log(this);
		console.log(items);
		if(items.blockHttpSites == null){
			this[0].setBlockSites(false);
		} else {
			this[0].setBlockSites(items.blockHttpSites);
		}
		if(items.blockHttpRequests == null){
			this[0].setBlockRequests(false);
		} else {
			this[0].setBlockRequests(items.blockHttpRequests);
		}
		(this[1])();
	}.bind([this,func]));
}
Settings.prototype.getBlockSites = function(){
	return this.blockHttpsSites;
}
Settings.prototype.getBlockRequests = function(){
	return this.blockHttpsRequests;
}
Settings.prototype.setUISites = function(val){
	this.blockHttpsSites = val;
	console.log("uisites"+val);
}
Settings.prototype.setUIRequests = function(val){
	this.blockHttpsRequests = val;
	console.log("uirequests"+val);
}
Settings.prototype.setBlockSites = function(val){
	this.setUISites(val);
	this.blockHttpsSites = val;
	chrome.storage.sync.set({"blockHttpSites":val}, function(){});
}
Settings.prototype.setBlockRequests = function(val){
	this.setUIRequests(val);
	this.blockHttpsSites = val;
	chrome.storage.sync.set({"blockHttpRequests":val}, function(){});
}

var openReportPage = function(){
	var win = $("window").open(SERVER_REPORT_URL, '_blank');
	if(win)
		win.focus();
}
