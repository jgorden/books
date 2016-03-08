app.controller('mainController', ['$scope', '$http', function($scope, $http){
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

  $http.get('/users').success(function(r){
      if (r) {
        $scope.read = r
        console.log($scope.read)
      }
      else {console.log('nope')}
    });
}]);