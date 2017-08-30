'use strict';
var app = app || {};

(function(module) {
  function Carosel(){
    console.log('inside the Carosel');
  }
  Carosel.loadCarosel = callback => {
    callback();
  }
  module.Carosel = Carosel;
})(app);
