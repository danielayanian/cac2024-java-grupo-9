
/* Para el boton de subir arriba */
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('#buttonUP').fadeIn(); 
    }); 
    $('#buttonUP').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});