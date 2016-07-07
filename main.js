$('.nav-section').click(function(e) {
  e.preventDefault();
  
  var sideContent = $(this).find('.side-content');
  var position = '';
  
  if($(sideContent).css('margin-right') === '0px') {
    position = '-100%';
  } else {
    position = '0';
  }
  
  $(sideContent).animate({'margin-right': position}, 500);
});


