$(document).ready(function(){
        $(".button-collapse").sideNav();
});

(function(){
  var app = angular.module('safeword',[]);
  app.controller('getWeblinkController',function($http,$scope){
    $http.get("http://api.pedelen.com/report/")
    .then(function(res){
      $scope.reportList = res.data;
    });
  })
})();
