/*jslint browser: true*/
/*global $, jQuery*/

var comment = $('.comment_c');
//var message = $('.message_area_c');
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

comment.on('keyup',function(){
	$(this).css('height','8.5vmin');
	$(this).height(this.scrollHeight);
 });
comment.focus(function(){
   postThis.css('display','block'); 
});