app.filter("trusted", ['$sce', function($sce) {
  return function(description){
    return $sce.trustAsHtml(description);
  }
}]);