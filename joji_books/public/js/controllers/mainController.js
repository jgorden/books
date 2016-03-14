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

  // create detail modal
  $scope.open = function (book) {
    setBook.setTitle(book)
    setBook.setImage(book)
    setBook.setRate(book)
    setBook.setAvg(book)
    setBook.setDescription(book)
    setBook.setAuthor(book)
    setBook.setAuthorImage(book)
    setBook.setStart(book)
    setBook.setFinish(book)
    console.log($scope.title)
    console.log($scope.image)
    console.log(book)
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      size: 'lg'
    });
  };


  collectBooks = function(){
   $http.get('/users').success(function(res){
      // if session is stored set response as book collection
      if (res) {
        $scope.collection = res
        console.log($scope.collection)
      }
      // else open modal to prompt session id
      else {
        $uibModal.open({
          templateUrl: 'promptID.html',
          size: 'lg',
          keyboard: false,
          backdrop: 'static',
          controller: function($uibModalInstance, $scope, $http){
            // set session in show route and run function again to collect books
            $scope.send = function(id){
              $http.get('/users/' + id).success(function(r){
                $uibModalInstance.dismiss('cancel');
                collectBooks();
              });
            }

            $scope.id = null
          }
        });
      }
    });
  }
  collectBooks();

  $scope.change = function(){
    $http.delete('users/0').success(function(){collectBooks()});
  }


}]);