$(document).ready(function() {

  var page_height = $(document).height();
  $('body').css('height', page_height);

  setTimeout(function() {
      var title_size = $('#science').css('font-size');
      $('#gothic').css('font-size', title_size);
    }, 100);

  setTimeout(function() {
      $('#title').css('animation', 'title_cycle 10s ease-out');
    }, 3000);



// fraction cycle
  var delta = 750;
  $('#fraction').hover(
  function() {
    setTimeout(function() {
      $('#fraction p').text('¼');
    }, delta * 1);
    setTimeout(function() {
      $('#fraction p').text('⅓');
    }, delta * 2);
    setTimeout(function() {
      $('#fraction p').text('⅜');
    }, delta * 3);
    setTimeout(function() {
      $('#fraction p').text('½');
    }, delta * 4);
    setTimeout(function() {
      $('#fraction p').text('⅝');
    }, delta * 5);
    setTimeout(function() {
      $('#fraction p').text('⅔');
    }, delta * 6);
    setTimeout(function() {
      $('#fraction p').text('¾');
    }, delta * 7);
    setTimeout(function() {
      $('#fraction p').text('⅞');
    }, delta * 8);
    setTimeout(function() {
      $('#fraction p').text('1');
    }, delta * 9);
  }, function() {
    $('#fraction p').text('⅛');
  }
);

// sliders
  $('#slider_size').on('input',function(){
    var val = $(this).val();
    $('#text_input textarea').css('font-size', val + 'px');
    $(".slider_size_val").text(val + 'px');
  });

  $('#slider_lineheight').on('input',function(){
    var val = $(this).val();
    $('#text_input textarea').css('line-height', val);
    $(".slider_lineheight_val").text(val + 'x');
    $(".css_code .slider_lineheight_val").text(val);

  });

  $('#slider_weight, #slider_width, #slider_contrast, #slider_slant').on('input',function(){
    var wght_val = $('#slider_weight').val();
    var wdth_val = $('#slider_width').val();
    var yopq_val = $('#slider_contrast').val();
    var slnt_val = $('#slider_slant').val();
    $('#text_input textarea').css('font-variation-settings', "'wght' " + wght_val + ", 'wdth' " + wdth_val + ", 'YOPQ' " + yopq_val + ", 'slnt' " + slnt_val);
    var current_val = $(this).val();
    if ($(this).attr('id') == 'slider_weight') {
      $(".slider_weight_val").text(current_val);
    }
    else if ($(this).attr('id') == 'slider_width') {
      $(".slider_width_val").text(current_val);
    }
    else if ($(this).attr('id') == 'slider_contrast') {
      $(".slider_contrast_val").text(current_val);
    }
    else {
      $(".slider_slant_val").text(current_val);
    }
  });

// type tester text alignment
  $(".fas").click(function() {
    $(".fas").css('color', 'var(--green)' );
    $(this).css('color', 'white' );
    var className = $(this).attr('class');
    if (className == 'fas fa-align-left') {
      $('#text_input textarea').css('text-align', 'left');
    }
    else if (className == 'fas fa-align-center') {
      $('#text_input textarea').css('text-align', 'center');
    }
    else {
      $('#text_input textarea').css('text-align', 'right');
    }
  });

});
