$(document).ready(function(){
        $(".button-collapse").sideNav();
});

(function(){
  var app = angular.module('safeword',['ngRoute', 'ngAnimate']);
  app.config(function($routeProvider){
        $routeProvider
        // home page
        .when('/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })

        // about page
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
        })

  });

  // CONTROLLERS ============================================
  // home page controller
  app.controller('mainController', function($scope) {
      $scope.pageClass = 'page-home';
  });

  // about page controller
  app.controller('aboutController', function($scope) {
      $scope.pageClass = 'page-about';
  });

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
