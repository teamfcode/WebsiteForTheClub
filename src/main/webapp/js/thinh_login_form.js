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


        var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 0; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }

        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    
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
                    textField.textContent = 'Good input';
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
                    textField_t.textContent = 'Good input';
                    textField_t.style.color = "green";
                       
                }else{
                    textField_t.textContent = 'only numbers,@ and letters';
                    textField_t.style.color = "red";
                }  
            }
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
        }
    }
 
    function inputPasswordValidation(inputPW){
   
        var regx_p= /[0-9a-zA-Z]/gm;
        var textField_p = document.getElementById("textField_p");
           
        if(inputPW.value != '' ){
       
            if(inputPW.value.length <= 60 || inputPW.value.length >= 10){
           
                if(inputPW.value.match(regx_p)){
                    textField_p.textContent = 'Good input';
                    textField_p.style.color = "green";
                       
                }else{
                    textField_p.textContent = 'only numbers and letters';
                    textField_p.style.color = "red";
                }  
            }else{
                textField_p.textContent = 'your input must be more than 10 characters';
                textField_p.style.color = "red";
            }  
        }
    }
