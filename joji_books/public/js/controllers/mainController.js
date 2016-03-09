app.controller('mainController', ['$scope', '$http', '$uibModal', '$log', 'setBook', function($scope, $http, $uibModal, $log, setBook){
  $scope.test = 'hey it works';
  console.log('is it working')

  // set book cover image, open library if no image available, otherwise goodreads image
  $scope.imageLink = function(book){
    if (book.book.image_url === 'http://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'){
      return 'http://covers.openlibrary.org/b/isbn/' + book.book.isbn + '-M.jpg'
    }
    else {
      return book.book.image_url
    }
  }

  // create modal
  $scope.open = function (book) {
    setBook.setTitle(book)
    setBook.setImage(book)
    setBook.setRate(book)
    console.log($scope.title)
    console.log($scope.image)
    console.log(book)
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      size: 'lg'
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