'use strict';
var app = app || {};

(function(module) {
  const carouselController = {};

  carouselController.init = function() {
    //(app.pictureView.carousel);
    $('.content').hide();
    $('#carousel').fadeIn();
  }

  module.carouselController = carouselController;
})(app);
