app.controller('modalController', ['$scope', 'setBook', function($scope, setBook){
  $scope.title = setBook.title
  $scope.image = setBook.image
  $scope.rate = setBook.rate
  $scope.avg = setBook.avg
  $scope.description = setBook.description
  $scope.author = setBook.author
  $scope.authorImage = setBook.authorImage
  $scope.verdict = function(){
    var diff = ($scope.rate - $scope.avg)
    if (diff >= 0.25){
      $scope.diffComment = 'Joji liked this book more than the average reader. It must speak to him somehow.';
    }
    else if (diff <= -0.25){
      $scope.diffComment = 'Joji liked this book less than the average reader. What a hater.';
    }
    else { $scope.diffComment = 'Joji liked this book about as much as the average reader. What a sheep.'; }
  }
  $scope.verdict();
}]);