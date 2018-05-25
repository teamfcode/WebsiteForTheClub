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

//Footer form valadation

jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[A-Z ]+$/i.test(value);
});

jQuery.validator.addMethod("studentid", function(value, element) 
{
return this.optional(element) || /(?:SE|IA)\d+/.test(value);
});

jQuery.validator.addMethod("phonenum", function(value, element) 
{
return this.optional(element) || /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
});
jQuery.validator.addMethod('notnone', function(value) {
        return (value != '0');
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
	errorClass: "error_contact_c",
	errorPlacement: function(label, element) {
        label.insertAfter(element);
    },
    submitHandler: function() {
		$("input[type=text], textarea").val("");
    }
});

$("form[name='signup']").validate({
	onfocusout: false,
	onkeyup: false,
	onclick: false,
    rules: {
      fname: {
        required: true,
        lettersonly: true
      },
      lname: {
        required: true,
        lettersonly: true
      },
      bday: {
        required: true,
      },
      username: {
        required: true,
		minlength: 6,
		maxlength: 18
      },
      password: {
        required: true,
		minlength: 6,
		maxlength: 18
      },
      confirmpassword: {
        required: true,
		equalTo: "#password"
      },
      studentid: {
        required: true,
		studentid: true
      },
      phonenum: {
        required: true,
		phonenum: true
      },
      email: {
        required: true
      },
      choice: {
        notnone: true
      },
    },
    messages: {
      fname: {
        required: "Please fill the required field.",
        lettersonly: "Letters and spaces only please."
      },
      lname: {
        required: "Please fill the required field.",
        lettersonly: "Letters and spaces only please."
      },
      bday: {
        required: "Please fill the required field.",
      },
      username: {
        required: "Please fill the required field.",
		minlength: "Username must between 6 - 18 letter",
		maxlenth: "Username must between 6 - 18 letter"
      },
      password: {
        required: "Please fill the required field.",
		minlength: "Username must between 6 - 18 letter",
		maxlenth: "Username must between 6 - 18 letter"
      },
      confirmpassword: {
		required: "Please fill the required field.",
		equalTo: "Confirm password is not the same as password"
      },
      studentid: {
        required: "Please fill the required field.",
		studentid: "That not a valid student id"
      },
      phonenum: {
        required: "Please fill the required field.",
		phonenum: "That not a valid phone number"
      },
      email: {
        required: "Please fill the required field.",
        email: "Email address seems invalid."
      },
      choice: {
        notnone: "Please choose an option",
      },
    },
	errorClass: "error_login_c",
	errorPlacement: function(label, element) {
        label.insertAfter(element);
    },
    submitHandler: function() {
		$("input[type=text], textarea").val("");
    }
});