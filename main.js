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