var app = angular.module('books', ['ui.router','ui.bootstrap','ngAnimate','googlechart']);

app.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
      })        
});