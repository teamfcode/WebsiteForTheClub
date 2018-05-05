$(document).ready(function(){
    
    $('#showDropdown').click( function(e) {
        
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('#wrap_drop').toggle();
        
    });
    
    $('#wrap_drop').click( function(e) {
        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
        
    });
    
    $('body').click( function() {
       
        $('#wrap_drop').hide();
        
    });
    
});