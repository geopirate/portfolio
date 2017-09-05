'use strict';
var app = app || {};

(function(module) {
  const carouselView = {};

  carouselView.carousel = () => {
    var $img = $('.single img');
    var $img2 = $('.double img');
    var $input = $('input[name=selection]');
    // for wider screens I show 2 images at once!
    function doubleWide(temp){
      if ($('.double')){
        var temp2 = parseInt(temp) + 1;
        // if we are at the end, show the first image again
        if (temp2 >= $input.length){ temp2 = 1; }
        $('.double img:nth-child('+ temp2 +')').fadeIn(500);
      }
    }
    $('input[name=selection]').on('change', function(){
      $img.slideUp(500).delay(490);
      $img2.slideUp(500).delay(490);
      var temp = $(this).val();
      $('.single img:nth-child('+ temp +')').fadeIn(500);
      doubleWide(temp);
    })
    $img.hide();
    $img2.hide();
    $('.single img:first').fadeIn(2000);
    $('.double img:nth-child(2)').fadeIn(2000);
  }

  carouselView.initIndexPage = () => {
    carouselView.carousel();
  };

  module.carouselView = carouselView;
})(app);
