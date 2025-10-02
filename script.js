// Esto es un comentario en JavaScript.
// Este código se ejecutará tan pronto como la página se haya cargado completamente.

window.onload = function() {
    // Definimos el texto del mensaje emergente:
    var mensaje = "¡AGENCIA 128 te da la bienvenida! ¡Estamos listos para ganar!";
    
    // La función 'alert()' crea la ventana emergente en el navegador:
    alert(mensaje);
};
function verificarEdad(){
    var edad = prompt ("Por favor, ingresa tu edad");
     if (edad !== null && parseInt(edad) >= 18) {
        alert("¡Acceso concedido! Disfruta del Casino.");
         window.location.href= "https://www.casinoclubonline.bet.ar";
     }else if (edad !==null && parseInt(edad) <=18){
         alert ("¡Acceso denegado, debes ser mayor de 18 años para ingresar");
     } else {
         alert("Acceso denegado");
     }
}
function AlternarFooter(){
    var footerElemento = document.querySelector('.pie-pagina'); 
    if (footerElemento) {
        // classList.toggle('oculto') verifica si la clase existe y hace lo opuesto:
        // - Si existe, la quita (el footer se muestra).
        // - Si NO existe, la añade (el footer se oculta).
        footerElemento.classList.toggle('oculto'); 
    }
}
