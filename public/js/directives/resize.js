app.directive('resize', function($window) {


  return {

    restrict: 'AE',
    link: function(s, e, a) {



      $window.onresize = function(event) {
        var clientWidth = document.documentElement.clientWidth;


        if (clientWidth < 768)

        {
          e.removeClass('text-right');      
        } else {
          e.addClass('text-right');
        }
      }


    }


  }

})