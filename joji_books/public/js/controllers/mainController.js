app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.test = 'hey it works';
  console.log('is it working')
  // $scope.home_page = function($http){
  //   $http.get('/').success(function(){
  //     console.log('woooooo');
  //   });
  // };
  // $scope.home_page($http);


  $http.get('/users').success(function(r){
      if (r) {console.log(r)}
      else {console.log('nope')}
    });
}]);