// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = new Set();

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();

    function esTextoValido(texto) {
        return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto);
    }

    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!esTextoValido(amigo)) {
        alert("Solo se permiten letras y espacios. No ingreses números o caracteres especiales.");
        return;
    }
 amigos.push(amigo);
    input.value = "";
    mostrarLista();
}
