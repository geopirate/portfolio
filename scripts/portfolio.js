var projectScripts = {};

projectScripts.tabs = function(){
  $('header li').on('click', function() {
    var $tabSelection = $(this).data('content');
    $('section').hide();
    $('.' + $tabSelection).fadeIn(50);
  })
  $('header li:first').click();
}

projectScripts.carosel = function(){
  $('img').hide();
  $('img:first').show();
}

$(document).ready(function(){
  projectScripts.tabs();
  projectScripts.carosel();
})
