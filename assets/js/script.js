$(document).ready(function() {

  (function()
    {
      if( window.localStorage )
      {
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }
        else
          localStorage.removeItem('firstLoad');
      }
    })();

  var demo_height = $("#demo_weight").height();
  $(".demo").css({
    'line-height': demo_height + 'px'
  });

  var glyph_table_entry_width = $("#glyphs .glyph_table div").width();
  $("#glyphs .glyph_table div").css({
    'height': glyph_table_entry_width,
    'line-height': glyph_table_entry_width + 'px'
  });

  var featured_glyph_width = $("#featured_glyph").width();
  $("#featured_glyph p").css({
    'font-size': featured_glyph_width * 0.7 + 'px',
    'line-height': featured_glyph_width + 'px'
  });

  setTimeout(function() {
      var title_size = $('#science').css('font-size');
      $('#gothic').css('font-size', title_size);
    }, 250);

/*
  setTimeout(function() {
      $('#title').css('animation', 'title_cycle 10s ease-out');
    }, 3000);
*/

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
  $(".align").click(function() {
    $(".align").css('stroke', 'var(--green)' );
    $(this).css('stroke', 'white' );
    var idName = $(this).attr('id');
    if (idName == 'align_left') {
      $('#text_input textarea').css('text-align', 'left');
    }
    else if (idName == 'align_center') {
      $('#text_input textarea').css('text-align', 'center');
    }
    else {
      $('#text_input textarea').css('text-align', 'right');
    }
  });

// glyph table
  $("#glyphs .glyph_table div").hover(function(){
    var current_glyph = $(this).text();
    $(this).css('background', 'rgba(0,0,0,0.8)');
  }, function() {
    $(this).css('background', 'none');
  });

  $("#glyphs .glyph_table div").click(function(){
    var current_glyph = $(this).text();
    $("#featured_glyph p").text(current_glyph);
  });

  $(".glyph_tab#cyrillic").click(function(){
    $(".glyph_tab p").css('color', 'var(--green)');
    $(".glyph_tab#cyrillic p").css('color', 'white');
    $('#glyphs #latin_table, #glyphs #etc_table').css('display', 'none');
    $('#glyphs #cyrillic_table').css('display', 'block');
  });

  $(".glyph_tab#latin").click(function(){
    $(".glyph_tab p").css('color', 'var(--green)');
    $(".glyph_tab#latin p").css('color', 'white');
    $('#glyphs #cyrillic_table, #glyphs #etc_table').css('display', 'none');
    $('#glyphs #latin_table').css('display', 'block');
  });

  $(".glyph_tab#etc_chars").click(function(){
    $(".glyph_tab p").css('color', 'var(--green)');
    $(".glyph_tab#etc_chars p").css('color', 'white');
    $('#glyphs #cyrillic_table, #glyphs #latin_table').css('display', 'none');
    $('#glyphs #etc_table').css('display', 'block');
  });

});
