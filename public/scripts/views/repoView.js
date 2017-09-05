'use strict';
var app = app || {};

(function(module) {
  const repoView = {};


  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {

    $('#projects ul').append(
      // I also filtered out the labs that start with a number and no language
      app.repos.with('language').filter(repo => isNaN(repo.name.charAt(0))).map(render)
    );
  };

  module.repoView = repoView;
})(app);
