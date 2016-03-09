app.controller('modalController', ['$scope', 'setBook', function($scope, setBook){
  $scope.title = setBook.title
  $scope.image = setBook.image
  $scope.rate = setBook.rate
}]);