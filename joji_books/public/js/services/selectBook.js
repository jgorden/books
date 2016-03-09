angular.module('books').factory('setBook', function(){
  var book = {};

  book.setTitle = function(newBook){
    book.title = newBook.book.title;
  };

  return book;
});