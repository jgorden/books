angular.module('books').factory('setBook', function(){
  var book = {};

  book.setTitle = function(newBook){
    book.title = newBook.book.title;
  };

  book.setImage = function(newBook){
    if (newBook.book.image_url === 'http://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'){
      book.image = 'http://covers.openlibrary.org/b/isbn/' + newBook.book.isbn + '-M.jpg'
    }
    else {
      book.image = newBook.book.image_url
    }
  };

  return book;
});