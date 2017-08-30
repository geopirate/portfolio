'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    $('.content').hide();
    $('#projects').fadeIn();
  }

  module.projectsController = projectsController;
})(app);
