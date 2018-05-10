/*jslint browser: true*/
/*global $*/

var stickyButtonUp = $('.sticky_button_up_c');

stickyButtonUp.on('click', function(){
	scrollUp();
});

function scrollUp() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
}