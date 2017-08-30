'use strict';
var app = app || {};

(function(module) {
  function Carousel(){
    console.log('inside the Carousel');
  }
  Carousel.loadCarousel = callback => {
    callback();
  }
  module.Carousel = Carousel;
})(app);
