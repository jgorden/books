app.controller('modalController', ['$scope', 'setBook', function($scope, setBook){
  $scope.title = setBook.title;
  $scope.image = setBook.image;
  $scope.rate = setBook.rate;
  $scope.avg = setBook.avg;
  $scope.description = setBook.description;
  $scope.author = setBook.author;
  $scope.authorImage = setBook.authorImage;
  $scope.myData = [{
 "value": "white",
 "date": "01/10/2011"
 },
 {
 "value": "2",
 "date": "02/10/2011"
 },
 {
 "value": "2",
 "date": "03/10/2011"
 },
 {
 "value": "2",
 "date": "03/10/2011"
 },
 {
 "value": "2",
 "date": "01/10/2011"
 },
 {
 "value": "2",
 "date": "02/10/2011"
 },
 {
 "value": "2",
 "date": "03/10/2011"
 },
 {
 "value": "2",
 "date": "01/10/2011" },
 {
 "value": "2",
 "date": "02/10/2011" },
 {
 "value": "2",
 "date": "03/10/2011" }
 ];

}]);