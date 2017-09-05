'use strict';
var app = app || {};

(function(module) {
  const carouselController = {};

  carouselController.init = () => {
    $('.content').hide();
    $('#carousel').fadeIn();
  }

  module.carouselController = carouselController;
})(app);
