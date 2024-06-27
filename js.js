function calcular() {
  let n1 = parseFloat(document.getElementById('n1').value);
  let n2 = parseFloat(document.getElementById('n2').value);
  let n3 = parseFloat(document.getElementById('n3').value);
  let opc = parseInt(document.getElementById('opciones').value);
  let info = document.getElementById("info");

  switch (opc) {
    case 1:
      let suma = n1 + n2;
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML = suma;
      break;

    case 2:
      let resta = n1 - n2;
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML = resta;
      break;

    case 3:
      let mult = n1 * n2;
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML = mult;
      break;

    case 4:
      let div = n1 / n2;
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML = div;
      break;

    case 5:
      let sqrt = Math.sqrt(n1);
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML = sqrt;
      break;

    case 6:
      let discriminante = n2 * n2 - 4 * n1 * n3;
      if (discriminante > 0) {
        let x1 = (-n2 + Math.sqrt(discriminante)) / (2 * n1);
        let x2 = (-n2 - Math.sqrt(discriminante)) / (2 * n1);
        info.style.color = "#00FF00";
        info.style.fontSize = "22px";
        info.innerHTML = "x1 = " + x1 + ", x2 = " + x2;
      } else if (discriminante === 0) {
        let x = -n2 / (2 * n1);
        info.style.color = "#00FF00";
        info.style.fontSize = "22px";
        info.innerHTML = "Solución única: x = " + x;
      } else {
        info.style.color = "#FF0000";
        info.style.fontSize = "18px";
        info.innerHTML = "La ecuacion no tiene solucion";
      }
      break;

    case 7:
      let area = Math.PI * n1 * n1;
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML = area;
      break;

    case 8:
      let productoNotable = n1 * n1 - n2 * n2;
      info.style.color = "#00FF00";
      info.style.fontSize = "22px";
      info.innerHTML =  productoNotable;
      break;

    
  }
}

function mostrarSegundoNumero() {
let opc = parseInt(document.getElementById('opciones').value);
let n2Container = document.getElementById('n2Container');
let n3Container = document.getElementById('n3Container');

//block es que lo muestra
//none es que lo esconde
//nos estamos refiriendo a los inputs del html 

if (opc === 5) {
n2Container.style.display = "none";
n3Container.style.display = "none";
} else if (opc === 6) {
n2Container.style.display = "block";
n3Container.style.display = "block";
} 
else if (opc === 7){
n2Container.style.display = "none";
n3Container.style.display = "none";
}
else {
n2Container.style.display = "block";
n3Container.style.display = "none";
}
}