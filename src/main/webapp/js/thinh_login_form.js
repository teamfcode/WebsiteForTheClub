$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


  
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
    /*    document.addEventListener("click", closeAllSelect);
    
        var check = function() {
            if (document.getElementById('password').value ==
                document.getElementById('confirm_password').value) {
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = 'matching';
            } else {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = 'not matching';
            }
        }
  
    function inputValidation(inputTxt){
   
        var regx = /^[0-9a-zA-Z]+$/;
        var textField = document.getElementById("textField");
           
        if(inputTxt.value != '' ){
       
            if(inputTxt.value.length >= 5){
           
                if(inputTxt.value.match(regx)){
                    textField.textContent = '';
                    textField.style.color = "green";
                       
                }else{
                    textField.textContent = 'only numbers and letters';
                    textField.style.color = "red";
                }  
            }else{
                textField.textContent = 'your input is less than 5 chracters';
                textField.style.color = "red";
            }  
        }else{
            textField.textContent = 'your input is empty';
            textField.style.color = "red";
        }
    }

    function inputEmailValidation(inputEmail){
   
        var regx_t = /^[a-zA-Z0-9]*\@[a-zA-Z0-9]*\.[a-zA-Z0-9]*$/gm;
        var textField_t = document.getElementById("textField_t");
           
        if(inputEmail.value != '' ){
       
            if(inputEmail.value.length >= 5){
           
                if(inputEmail.value.match(regx_t)){
                    textField_t.textContent = '';
                    textField_t.style.color = "green";
                       
                }else{
                    textField_t.textContent = 'only numbers,@ and letters';
                    textField_t.style.color = "red";
                }  
            }
        }else{
            textField.textContent = 'your input is empty';
            textField.style.color = "red";
        }
    }


    function inputStudentNumberValidation(inputSNum){
   
        var regx_s = /(?:SE|IA)\d+/gm;
        var textField_s = document.getElementById("textField_s");
           
        if(inputSNum.value != '' ){
       
            if(inputSNum.value.length <= 8 || inputSNum.value.length >= 7 ){
           
                if(inputSNum.value.match(regx_s)){
                    textField_s.textContent = 'Good input';
                    textField_s.style.color = "green";
                       
                }else{
                    textField_s.textContent = 'only numbers, SE or IA';
                    textField_s.style.color = "red";
                }  
            }else{
                textField_s.textContent = 'your input less than 7 chracters';
                textField_s.style.color = "red";
            }  
        }else{
            textField.textContent = 'your input is empty';
            textField.style.color = "red";
        }
    } */
 
  