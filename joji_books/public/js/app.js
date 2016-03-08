var app = angular.module('books', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
      })        
});