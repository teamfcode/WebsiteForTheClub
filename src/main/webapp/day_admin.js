// ------------Chỗ Logout-----------
$(document).ready(function(){
    
    $('#showDropdown_da').click( function(e) {
        
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('#wrap_drop_da').toggle();
        
    });
    
    $('#wrap_drop_da').click( function(e) {
        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
        
    });
    
    $('body').click( function() {
       
        $('#wrap_drop_da').hide();
        
    });
    
});



// ----------Left Menu---------
$('.mainmenu_da').on('click', function(){   
    $('.mainmenu_da').removeClass('selected_da');
    $(this).addClass('selected_da');      
});

$('.menu_da').on('click', function(){
    $('.menu_da').removeClass('selectedBackground_da');
    $(this).addClass('selectedBackground_da');     
});

// -------Active------
$(document).ready(function(){
    $('.menu1_da').click();
    $('.1x').click();
});