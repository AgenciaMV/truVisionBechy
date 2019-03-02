
// PARA EL FORMULARIO DE FACEBOOK
$(".chat-button").on('click', function(e){
        e.preventDefault();
        $(".chat-content").slideToggle("fast");
});



// PARA LOS TOOLTIPS
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        animation: true,
        delay:{show:300, hide:500}
    });
});






