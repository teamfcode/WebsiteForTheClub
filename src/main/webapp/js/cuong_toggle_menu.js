/*jslint browser: true*/
/*global $*/

var menu = $('.menu_c');
var ToggleMenu = $('.toggle_menu_c');

menu.on('click', function(){
	ToggleMenu.slideToggle("slow");
});