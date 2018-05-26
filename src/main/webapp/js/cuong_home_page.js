/*jslint browser: true*/
/*global $, window, jQuery*/

//Scroll to top
var stickyButtonUp = $('.sticky_button_up_c');

stickyButtonUp.on('click', function(){
	scrollUp();
});

function scrollUp() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
}

//Toggle for hidden menu
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


//Auto-expand textarea for comment

var comment = $('.comment_c');
var postThis = $('.post_this_c');

comment.on('keyup',function(){
	$(this).css('height','8.5vmin');
	$(this).height(this.scrollHeight);
 });
comment.focus(function(){
   postThis.css('display','block'); 
});