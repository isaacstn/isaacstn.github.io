$(document).ready(function() {
	toolTipPosH();
	toolTipPosV();
	$( window ).resize(function () {
		toolTipPosH();
	});
	$( window ).scroll(function () {
		toolTipPosV();
	});
	
	function toolTipPosH() {
		$('.box').each(function() {
			var theBox = $(this);
			var rBound = theBox.offset().left + theBox.outerWidth()
			var rMargin = $(window).width() - theBox.outerWidth() - 10;
			var lOrigin = theBox.parent().offset().left + theBox.parent().outerWidth();
			
			if( rBound >= $( window ).width() - 10 ) {
				theBox.offset({left: rMargin});
			}
			else {
				theBox.offset({left: lOrigin});
			}
		});
	}
	
	function toolTipPosV() {
		$('.box').each(function() {
			var theBox = $(this);
			var bBound = theBox.offset().top - $(window).scrollTop() + theBox.outerHeight();
			var bMargin = $(window).height() + $(window).scrollTop() - theBox.outerHeight() - 10;
			var tOrigin = theBox.parent().offset().top;
			
			if( bBound >= $(window).height() - 10 ) {
				theBox.offset({top: bMargin});
			}
			else {
				theBox.offset({top: tOrigin});
			}
		});
	}
});