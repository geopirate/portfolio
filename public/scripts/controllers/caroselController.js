'use strict';
var app = app || {};

(function(module) {
  const caroselController = {};

  caroselController.init = function() {
    //(app.pictureView.carosel);
    $('.content').hide();
    $('#carosel').fadeIn();
  }

  module.caroselController = caroselController;
})(app);
