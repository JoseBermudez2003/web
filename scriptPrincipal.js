// links para que la imagen redireccione 
let imagen = document.querySelector(".casa");
//este es un escuchador de eventos, osea, que detectara un click, y en base a ese click redirigira
imagen.addEventListener("click", function() {
  window.location.href = "../registro o iniciar sesion/registroInicio.html";
});


//hora de la pagina y fecha actual
function actualizarFechaHora() {
  const fechaHoraElemento = document.querySelector(".dia_y_hora");
  const fechaHoraActual = new Date();
  const fecha = fechaHoraActual.toLocaleDateString();
  const hora = fechaHoraActual.toLocaleTimeString();
  fechaHoraElemento.innerHTML = "<span style='color: white; font-size: 55px'>" 
  + hora + "</span>" + "<br><br>" + "Hoy es: " + fecha;
}

// Actualizar la fecha y hora cada segundo (1000 ms)
setInterval(actualizarFechaHora, 1000);


//boton del nombre del juego seleccionado
  function jugarBtn(juego) {
    let sinopsis = event.target.parentElement.querySelector('.sinopsis');
    sinopsis.innerHTML = "La descarga de " + "<span style='color: skyblue;'>" + juego + "</span>" + " comenzará pronto";
  }


//funcion para decirme el lenguaje seleccionado de mi pagina
function lenguajes(){
  let opcion = document.getElementById('lenguajes').value;

  switch (opcion){

    case "1": 
    alert ("haz seleccionado el español como idioma predeterminado");
    break;

    case "2": 
    alert ("You have selected English as the default language.");
    break;

    case "3": 
    alert ("Sie haben Englisch als Standardsprache ausgewählt.");
    break;
  }

}

//funcion  para decirme el pais que seleccione 
function pais(){
  let opcion = document.getElementById('pais').value;

  switch (opcion){

    case "1": 
    alert ("haz seleccionado a Venezuela como tu pais");
    break;

    case "2": 
    alert ("haz seleccionado a Estados Unidos como tu pais");
    break;

    case "3": 
    alert ("haz seleccionado a Alemania como tu pais");
    break;
  }

}


