var app = angular.module('app', ['ngRoute']);

/****** ROUTING *******/

app.config(function($routeProvider,$locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'RootController',
      templateUrl: 'views/RootControllerView.html'
      })
    .when('/category', {
      controller: 'CategoryController',
      templateUrl: 'views/CategoryControllerView.html'
    })
    .otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode(true);  
  
});

app.controller('RootController', function($scope){
  $scope.posts = [];
  init();

  function init(){
  }
  
});
