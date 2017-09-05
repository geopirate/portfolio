'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = () => {
    $('.content').hide();
    $('#projects').fadeIn();
    app.repos.requestRepos(app.repoView.index);
  }

  module.projectsController = projectsController;
})(app);
