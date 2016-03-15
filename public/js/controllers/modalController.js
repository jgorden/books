app.controller('modalController', ['$scope', 'setBook', function($scope, setBook){
  $scope.title = setBook.title;
  $scope.image = setBook.image;
  $scope.rate = setBook.rate;
  $scope.avg = setBook.avg;
  $scope.description = setBook.description;
  $scope.author = setBook.author;
  $scope.authorImage = setBook.authorImage;
  $scope.myData = [];
  var start = new Date(setBook.start)
  var finish = new Date(setBook.finish);
  // clipping year range for readers start and finish
  $scope.range = { 'start':parseInt(String(start).slice(11,15)),'finish':(parseInt(String(finish).slice(11,15)) + 1) }

  // setting a place holder for iteration
  var current = start
  // clone place holder and shove into data set
  while (current <= finish) {
    var clone = new Date(current)
    $scope.myData.push({'date':clone, 'value':'1'});
    current.setDate(current.getDate() + 1)
  }
  // add date of finish to data set
  $scope.myData.push({'date':finish, 'value':'1'})

  $scope.authorPosition = function(){
    if($(window).width() < 768){ return }
    else { return 'text-center' };
  };
  // $(window).on('resize',$scope.authorPosition());
}]);