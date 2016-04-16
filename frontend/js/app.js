(function(){
  var app = angular.module('safeword',[]);
  //
  // app.controller('weblinkController',function(){
  //   this.links = ["a","b","c","d"];
  // });

  // app.controller('helloWorldController',function(){
  //   this.word = "<p>hello world</p>";
  // });

  // app.controller('getLinesController',function($http,$scope){
  //   $http.get("https://burning-inferno-6474.firebaseio.com//.json?print=pretty&format=export&download=burning-inferno-6474-export.json&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNDYwOTIwODc0LCJ2IjowLCJkIjp7ImZvcmdlIjp0cnVlfSwiaWF0IjoxNDYwODM0NDc0fQ.j1ikaCJ7I7pWsg4raQECoA7X2VitJFdK0j_TFjpGwtI")
  //   .then(function(res){
  //     $scope.lines = res.data;
  //     $scope.number = res.data.length;
  //
  //   });
  // })

  app.controller('getWeblinkController',function($http,$scope){
    $http.get("http://safeword.pedelen.com/report/")
    .then(function(res){
      $scope.reportList = res.data;
      // if(res.data.type == "1"){
      //   $scope.type = "fuck";
      // }else{
      //   $scope.type = "shit";
      // }
    });
  })
})();
