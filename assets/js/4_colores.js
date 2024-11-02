function pintar(event) {
    event.target.style.backgroundColor = "black";
}

const divsColores = document.querySelectorAll("div");
divsColores.forEach(div => {
    div.addEventListener("click", pintar);
});

