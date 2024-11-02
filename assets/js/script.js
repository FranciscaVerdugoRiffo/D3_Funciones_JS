//Ejercicio 2.3


function pintar(color = 'green') {
    const elemento = document.querySelector('#ele1');
    elemento.style.backgroundColor = color; 
}



// Ejercicio 2.2


function pintar (color){
    ele.style.backgroundColor = color
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); 
});
