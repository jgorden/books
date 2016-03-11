app.controller('modalController', ['$scope', 'setBook', function($scope, setBook){
  $scope.title = setBook.title;
  $scope.image = setBook.image;
  $scope.rate = setBook.rate;
  $scope.avg = setBook.avg;
  $scope.description = setBook.description;
  $scope.author = setBook.author;
  $scope.authorImage = setBook.authorImage;
  $scope.myData = [
    {'2000-01-01':10},
    {'2000-01-02':11},
    {'2000-01-03':12},
    {'2000-01-04':13},
    {'2000-01-05':14},
    {'2000-01-06':15},
    {'2000-01-07':16},
    {'2000-01-08':17},
    {'2000-01-09':18},
    {'2000-01-10':19},
  ];
}]);