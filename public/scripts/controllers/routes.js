'use strict';

var app = app || {};

page('/', app.carouselController.init);
page('/about', app.aboutController.init);
page('/projects', app.projectsController.init);
page();
