let colorActual = '';

// Función para cambiar el color del div principal
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

  // Cambio de color del DIV principal
  keyDiv.style.backgroundColor = colorActual;
}

// Función para crear un nuevo div
function crearNuevoDiv(tecla) {
  const nuevoDiv = document.createElement('div');
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.border = '1px solid black';
  
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

  // Agregar el nuevo div al contenedor
  document.getElementById('container').appendChild(nuevoDiv);
}

// Evento para detectar teclas
document.addEventListener('keydown', (event) => {
  const tecla = event.key.toLowerCase();
  if (tecla === 'a' || tecla === 's' || tecla === 'd') {
    cambiarColorPrincipal(tecla);
  } else if (tecla === 'q' || tecla === 'w' || tecla === 'e') {
    crearNuevoDiv(tecla);
  }
});
