var SERVER_URL = "http://API.pedelen.com/report/"

function reportError(url,violation){
	var postBody = "url=" + url + "&type=" + violation;
	$.ajax({
		type: "POST",
		url: SERVER_URL,
		data: postBody,
		cache: false,
		contentType: "x-www-urlencoded",
		dataType: "text",
		success: function(data){
			console.log("Successfull POST");
		},
		error: function(xhr,err,msg){
			console.log("Failed POST");
            console.log(xhr);
            console.log(err);
            console.log(msg);
		}
	});
}

