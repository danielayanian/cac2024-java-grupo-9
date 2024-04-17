
/* Para el boton de subir arriba */
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('#subirArriba').fadeIn(); 
    }); 
    $('#subirArriba').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});