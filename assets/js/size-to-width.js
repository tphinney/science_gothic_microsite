/*
 * SIZE-TO-WIDTH.JS
 *
 * Fits text into a line by adjusting the font-size.
 *
 * Requires jQuery and FontFaceObserver: https://raw.githubusercontent.com/bramstein/fontfaceobserver/v1.5.0/fontfaceobserver.js
 *
 * © 2016 Chris Lewis <chris@chrislewis.codes> All rights reserved.
 */

$('head').append('<style> .size-to-width { white-space: nowrap; } </style>');

window.FontFaceObserver || $('head').append("<script src='http://chrislewis.codes/js/fontfaceobserver.js'></script>");

window.sizeToWidth = function(el) {
	var div;
	if (!el || typeof el === 'number') {
    	div = $(this);
	} else {
    	div = $(el);
	}

	//wrap the text in an inline element to measure text width
	div.contents().wrap("<span style='display:inline-block; font-family:inherit; font-weight:inherit; font-style:inherit; font-size:inherit; text-transform:inherit; white-space:nowrap;'></span>");
	var span = div.children('span');

	var fullwidth = div.width();
	var textwidth;

	//measure twice in case rounding errors get in the way
	for (var i = 0; i < 2; i++) {
		textwidth = span.width();
		if (textwidth && Math.abs(fullwidth-textwidth)/fullwidth > 0.01) {
			div.css('font-size', Math.floor(Math.min($(window).height()/2, parseInt(div.css('font-size')) * fullwidth / textwidth)) + 'px');
		}
	}

	//get rid of the temporary span
	span.contents().unwrap();
};

stwFontsLoaded = {};
function initSizeToWidth() {
	var elements = $('.size-to-width');
	var fontElements = {};

	function updateFontElements(font) {
		$.each(fontElements[font], function(index, el) {
			el.css('visibility', 'visible');
			window.sizeToWidth(el);
		});
	}

	function update() {
		elements.each(function() { window.sizeToWidth(this); });
	}

	elements.each(function() {
		var el = $(this);
		var family = el.css('font-family').replace(/,.*/, ''); //remove fallbacks
		var style = el.css('font-style');
		var weight = el.css('font-weight');
		var key = family + ';;;' + style + ';;;' + weight;

		if (!(key in fontElements)) {
			fontElements[key] = [];
			if (key in stwFontsLoaded) {
				window.sizeToWidth(el);
			} else {
				el.css('visibility', 'hidden');
				var ffo = new FontFaceObserver(family, {
					'weight': weight,
					'style': style,
				});
				ffo.check().then(function() {
					stwFontsLoaded[key] = true;
					updateFontElements(key);
				});
			}
		}

		fontElements[key].push(el);
	});

	var sizeToWidthTimeout;
	$(window)
	.off('.sizeToWidth')
	.on('load.sizeToWidth', update)
	.on('resize.sizeToWidth', function() {
		sizeToWidthTimeout && clearTimeout(sizeToWidthTimeout);
		sizeToWidthTimeout = setTimeout(update, 100);
	});

	var stwKeyupTimeout;
	elements
	.off('.sizeToWidth')
	.on('blur.sizeToWidth', update)
	.on('keyup.sizeToWidth', function() {
		stwKeyupTimeout && clearTimeout(stwKeyupTimeout);
		stwKeyupTimeout = setTimeout(update, 1000);
	});

	$(update);
}

$(function() {
    //if we had to add a <script> tag for FontFaceObserver, it might not be available immediagely
    var waitForFFO = setInterval(function() {
    	if (window.FontFaceObserver) {
    		initSizeToWidth();
    		clearInterval(waitForFFO);
    	}
    }, 100);
});
