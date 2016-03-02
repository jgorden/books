var app = angular.module('books', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    // $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        // .state('home', {
        //     url: '/home',
        //     templateUrl: 'partial-home.html'
        // })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('about', {
        //     // we'll get to this in a bit       
        // });
        
});