'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('.content').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(app);
