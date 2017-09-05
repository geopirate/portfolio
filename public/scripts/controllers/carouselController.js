'use strict';
var app = app || {};

(function(module) {
  const carouselController = {};

  carouselController.init = () => {
    $('.content').hide();
    $('#carousel').fadeIn();
    app.carouselView.carousel();
  }

  module.carouselController = carouselController;
})(app);
