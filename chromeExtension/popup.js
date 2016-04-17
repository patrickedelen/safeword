
$("#blockAll").onchange = function(){
	var val = $("#blockAll").checked;
	console.log("yepa");
	globalSettings.setBlockSites(val);
}
$("#blockForms").onchange = function(){
	var val = $("#blockForms").checked;
	console.log("yepf");
	globalSettings.setBlockRequests(val);
}

console.log("yolala");
var globalSettings = new Settings(function(){
	console.log(globalSettings);
});
