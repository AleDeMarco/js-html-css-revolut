$(document).ready(function(){
  $('.dropdown').hover(function(){
    $(this).children('.drop-menu').toggleClass('active');
    $(this).children('a').toggleClass('focus');
    $(this).find('.down').toggleClass('active');
    $(this).find('.up').toggleClass('active');
  });
});
