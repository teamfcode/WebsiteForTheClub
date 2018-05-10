/*jslint browser: true*/
/*global $, window*/

var menu = $('.menu_c');
var ToggleMenu = $('.toggle_menu_c');

menu.on('click', function(){
	ToggleMenu.slideToggle("slow");
});

$(window).resize(function(){     
	if($(window).width() >= 1000){
		ToggleMenu.css("display", "none");
	}
});