angular.module('books').factory('setBook', function(){
  var book = {};

  book.setTitle = function(newBook){
    book.title = newBook.book.title;
  };

  book.setImage = function(newBook){
    if (newBook.book.image_url === 'http://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'){
      book.image = 'http://covers.openlibrary.org/b/isbn/' + newBook.book.isbn + '-M.jpg';
    }
    else {
      book.image = newBook.book.image_url;
    }
  };

  book.setRate = function(newBook){
    book.rate = newBook.rating;
  };  

  book.setAvg = function(newBook){
    book.avg = newBook.book.average_rating;
  };  

  book.setDescription = function(newBook){
    book.description = newBook.book.description;
  };  

  book.setAuthor = function(newBook){
    book.author = newBook.book.authors.author.name;
  };  

  book.setAuthorImage = function(newBook){
    book.authorImage = newBook.book.authors.author.image_url;
  };

  return book;
});