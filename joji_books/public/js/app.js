var app = angular.module('books', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
      .state('home', {
          url: '/',
          controller: 'mainController',
          templateUrl: 'views/home.html'
      })        
});