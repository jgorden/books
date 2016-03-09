app.controller('mainController', ['$scope', '$http', '$uibModal', '$log', 'setBook', function($scope, $http, $uibModal, $log, setBook){
  $scope.test = 'hey it works';
  console.log('is it working')

  $scope.imageLink = function(book){
    if (book.book.image_url === 'http://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'){
      return 'http://covers.openlibrary.org/b/isbn/' + book.book.isbn + '-M.jpg'
    }
    else {
      return book.book.image_url
    }
  }


  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (book) {
    setBook.setTitle(book)
    console.log($scope.title)
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      size: 'lg'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


  $http.get('/users').success(function(r){
      if (r) {
        $scope.read = r
        console.log($scope.read)
      }
      else {console.log('nope')}
    });
}]);