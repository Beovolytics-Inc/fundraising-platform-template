(function($) {
	"use strict";
	$(document).ready(function() {
		$( '.docs-nav li a' ).on( 'click', function(e) {
			e.preventDefault();
			var hash = $( this ).attr( 'href' );
			$('html, body').animate({
		        scrollTop: $(hash).offset().top
		    }, 700);

		    $( '.docs-nav li a' ).not( this ).removeClass('active');
		    $( this ).addClass('active');
		});
	});
})(jQuery);