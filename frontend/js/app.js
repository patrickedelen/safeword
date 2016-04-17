$(document).ready(function(){
        $(".page").css("display", "none");
        $(".page").fadeIn(1000);
        $(".button-collapse").sideNav();

        $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".page").fadeOut(800, redirectPage);

        function redirectPage(){
          window.location = linkLocation;
        }
    });
});

(function(){
  var app = angular.module('safeword',[]);
  app.controller('getWeblinkController',function($http,$scope){
    $http.get("http://api.pedelen.com/report/")
    .then(function(res){
		console.log(res);

		for(i in res.data){
			var tempDate = new Date(res.data[i].date);
			res.data[i].date = tempDate.getHours() + ":" + tempDate.getMinutes() + ", " + tempDate.toDateString();
		}
        $scope.reportList = res.data;
    });
  })

})();
