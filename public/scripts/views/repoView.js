'use strict';
var app = app || {};

(function(module) {
  const repoView = {};
  console.log('in repo view');
  const ui = function() {
    let $projects = $('#projects');
    $projects.find('ul').empty();
    $projects.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#projects ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
