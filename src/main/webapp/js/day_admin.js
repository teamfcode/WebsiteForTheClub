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

$(document).ready(function() {
    $('.left_menu_da > li > a').click(function(event){
        event.preventDefault();//stop browser to take action for clicked anchor
                    
        //get displaying tab content jQuery selector
        var active_tab_selector = $('.left_menu_da > li.active_da > a').attr('href');                  
                    
        //find actived navigation and remove 'active' css
        var actived_nav = $('.left_menu_da > li.active_da');
        actived_nav.removeClass('active_da');
                    
        //add 'active' css into clicked navigation
        $(this).parents('.menu_da').addClass('active_da');
                    
        //hide displaying tab content
        $(active_tab_selector).removeClass('active_da');
        $(active_tab_selector).addClass('hide_da');
                    
        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide_da');
        $(target_tab_selector).addClass('active_da');
        });    
    });



/*Khung Edit*/
 $(document).ready(function() {
    $('#new_text_da').summernote();
    $('#event_text_da').summernote();
});


// --------------VIEW CREATE-----------
$(document).ready(function(){    
    $(".display_create").click(function(){
        $(".view_create").show();
    });
    $(".hide_create").click(function(){
        $(".view_create").hide();
    });
});

// --------------VIEW TABLE-----------
$(document).ready(function(){    
    $(".display_table").click(function(){
        $(".table_da").show();
    });
    $(".hide_table").click(function(){
        $(".table_da").hide();
    });
});
