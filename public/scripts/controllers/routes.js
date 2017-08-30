'use strict';

var app = app || {};

page('/', app.carouselController.init);
page('/about', app.aboutController.init);
page('/projects', app.projectsController.init);

page();

/*projectScripts.pictures = function(){
  let template = $('#picture-template').html();
  let templateRender = Handlebars.compile(template);
  return templateRender(this);
}

projectScripts.tabs = function(){
  $('header li').on('click', function() {
    var $tabSelection = $(this).data('content');
    $('section').hide();
    $('.' + $tabSelection).fadeIn(50);
  })
  $('header li:first').click();
}*/




//projectScripts.tabs();
//projectScripts.pictures();
