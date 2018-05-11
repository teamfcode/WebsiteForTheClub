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

//Footer form valadation
var comment = $('.comment_c');
var postThis = $('.post_this_c')

jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[A-Z ]+$/i.test(value);
});

$("form[name='message']").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
    rules: {
      name: {
        required: true,
        lettersonly: true
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: "Please fill the required field.",
        lettersonly: "Letters and spaces only please."
      },
      email: {
        required: "Please fill the required field.",
        email: "Email address seems invalid."
      },
    },
	errorPlacement: function(label, element) {
        label.insertAfter(element);
    },
    submitHandler: function() {
		$("input[type=text], textarea").val("");
    }
});

//Auto-expand textarea for comment
comment.on('keyup',function(){
	$(this).css('height','8.5vmin');
	$(this).height(this.scrollHeight);
 });
comment.focus(function(){
   postThis.css('display','block'); 
});