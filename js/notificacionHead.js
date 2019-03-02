
// PARA LA BARRA DE NOTIFICACION DEL ENCABEZADO

$(document).ready(function(){


	$("#notificacion").delay(1500).slideDown("slow");

	function cerrarNotificacion (){
		$("#notificacion").click(function(){
        $(this).slideUp("fast");
    });
	}
	$("#cerrarCabeza").click(cerrarNotificacion); 
    
    setTimeout(function() {
       $("#notificacion").fadeOut(2000);
   	},7000);

    $("#notiCabeza").click(function(event) {
         alert("Gracias por visitar mi canal!");
 	});

 	
});