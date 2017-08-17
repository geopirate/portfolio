$(document).ready(function(){
  $('header li').on('click', function() {
    var $tabSelection = $(this).data('content');
    $('section').hide();
    $('.' + $tabSelection).fadeIn(50);
  })
  $('header li:first').click();
})
