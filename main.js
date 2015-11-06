// Functionality for button 1
// If txt2 or txt3 are visible, fade them out, then fade in txt1
$('.btn1').click(function(){
  if ($('.txt2').is(":visible")) {
    $('.txt2').fadeOut(1000, function(){$('.txt1').fadeIn(1000)});
  }
  else if ($('.txt3').is(":visible")) {
    $('.txt3').fadeOut(1000, function(){$('.txt1').fadeIn(1000)});
  } else {
    $('.txt1').fadeIn(1000);
  }
});

// Functionality for button 2
// If txt1 or txt3 are visible, fade them out, then fade in txt2
$('.btn2').click(function(){
  if ($('.txt1').is(":visible")) {
    $('.txt1').fadeOut(1000, function(){$('.txt2').fadeIn(1000)});
  }
  else if ($('.txt3').is(":visible")) {
    $('.txt3').fadeOut(1000, function(){$('.txt2').fadeIn(1000)});
  } else{
    $('.txt2').fadeIn(1000);
  }
});

// Functionality for button 3
// If txt1 or txt2 are visible, fade them out, then fade in txt3
$('.btn3').click(function(){
  if ($('.txt1').is(":visible")) {
    $('.txt1').fadeOut(1000, function(){$('.txt3').fadeIn(1000)});
  }
  else if ($('.txt2').is(":visible")) {
    $('.txt2').fadeOut(1000, function(){$('.txt3').fadeIn(1000)});
  } else {
    $('.txt3').fadeIn(1000)
  }
});