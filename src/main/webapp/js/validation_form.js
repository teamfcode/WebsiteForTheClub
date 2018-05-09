/*jslint browser: true*/
/*global $*/

var comment = $('.comment_c');
//var message = $('.message_area_c');
var postThis = $('.post_this_c')

comment.on('keyup',function(){
	$(this).css('height','8.5vmin');
	$(this).height(this.scrollHeight);
 });
comment.focus(function(){
   postThis.css('display','block'); 
});