app.controller('mainController', ['$scope', '$http', '$uibModal', '$log', 'setBook', function($scope, $http, $uibModal, $log, setBook){

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
    // collect book information
    setBook.setTitle(book)
    setBook.setImage(book)
    setBook.setRate(book)
    setBook.setAvg(book)
    setBook.setDescription(book)
    setBook.setAuthor(book)
    setBook.setAuthorImage(book)
    setBook.setStart(book)
    setBook.setFinish(book)
    // the actual modal
    var modalInstance = $uibModal.open({
      templateUrl: 'details.html',
      size: 'lg'
    });
  };


  collectBooks = function(){
   $http.get('/users').success(function(res){
      // if session is stored set response as book collection
      if (res) {
        $scope.collection = res.books;
        $scope.page = 1;

        // check if there are more books to load
        if (res.books.length < 20) { $scope.moreBooks = true }
        else { $scope.moreBooks = false }
      }
      // else open modal to prompt session id
      else {
        $uibModal.open({
          templateUrl: 'promptID.html',
          size: 'lg',
          keyboard: false,
          backdrop: 'static',
          controller: function($uibModalInstance, $scope, $http){
            $scope.id = null
            // set session in show route and run function again to collect books
            $scope.send = function(id){
              $http.get('/users/' + id).success(function(r){
                $uibModalInstance.dismiss('cancel');
                collectBooks();
              });
            }
          }
        });
      }
    });
  }
  collectBooks();

  // load more books from api to collection
  $scope.loadMore = function() {
    $scope.page++;
    $http.post('users/', $scope.page).success(function(res){
        for (i = 0; i < res.books.length; i++){
          $scope.collection.push(res.books[i]);
        };
        if (res.books.length < 20) { $scope.moreBooks = true }
      });
  };

  // change user
  $scope.change = function(){
    $http.delete('users/0').success(function(){collectBooks()});
  };

}]);