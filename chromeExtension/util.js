Util = function() {
	this.blockHttpsSites = false;
	this.blockHttpsRequests = false;
};
Util.prototype.getBlockSites = function(){
	return this.blockHttpsSites;
}
Util.prototype.getBlockRequests = function(){
	return this.blockHttpsSites;
}
Util.prototype.setBlockSites = function(val){
	this.blockHttpsSites = val;
}
Util.prototype.setBlockRequests = function(val){
	this.blockHttpsSites = val;
}
