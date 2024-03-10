var menuItem = $('.why li'),
    imgItem = $('.why img'),
    textItem = $('.text__item');

$('li:first-of-type').addClass('active');
$('.text__item:first-of-type').addClass('active');
$('.why img:first-of-type').addClass('active');
$('.why img:last-of-type').addClass('desactive');

menuItem.on('click', function(){
  menuItem.not($(this)).removeClass('active');
  textItem.not('.' + $(this).attr('data-target') + '-text').removeClass('active');
  
  if($('.' + $(this).attr('data-target') + '-img').hasClass('active')) {
    return;
  } else {
    imgItem.removeClass('active--animation');
    imgItem.removeClass('desactive');
    $('.why img.active').addClass('active--animation');
    $('.' + $(this).attr('data-target') + '-img').addClass('active');
    imgItem.not('.' + $(this).attr('data-target') + '-img').removeClass('active');
  }
  
  $(this).addClass('active');
  $('.' + $(this).attr('data-target') + '-text').addClass('active');
});