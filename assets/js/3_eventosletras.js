let colorActual = '';

//Nuevo color con Letras

function cambiarColorPrincipal(tecla) {
  const keyDiv = document.getElementById('key');
  
  switch (tecla) {
    case 'a':
      colorActual = 'pink';
      break;
    case 's':
      colorActual = 'orange';
      break;
    case 'd':
      colorActual = 'lightblue';
      break;
  }

  // Función Cambio de color del DIV
  keyDiv.style.backgroundColor = colorActual;
}

// Crear nuevo DIV
function crearNuevoDiv(tecla) {
  const nuevoDiv = document.createElement('div');
  nuevoDiv.classList.add('new-div');
  
  switch (tecla) {
    case 'q':
      nuevoDiv.style.backgroundColor = 'purple';
      break;
    case 'w':
      nuevoDiv.style.backgroundColor = 'gray';
      break;
    case 'e':
      nuevoDiv.style.backgroundColor = 'brown';
      break;
  }

  // Función para agregar el nuevo DIV al contenedor
  document.getElementById('container').appendChild(nuevoDiv);
}

// Eventos con las Letras
document.addEventListener('keydown', (event) => {
  const tecla = event.key.toLowerCase();
  if (tecla === 'a' || tecla === 's' || tecla === 'd') {
    cambiarColorPrincipal(tecla);
  } else if (tecla === 'q' || tecla === 'w' || tecla === 'e') {
    crearNuevoDiv(tecla);
  }
});