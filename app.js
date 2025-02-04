// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declara variable amigos, array
let amigosSorteados = new Set(); // declara variable amigos sorteados del conjunto de amigos ingresado

function agregarAmigo() {
    let input = document.getElementById("amigo"); //captura nombre de amigos ingresados
    let amigo = input.value.trim(); //elimina espacios en blanco

    function esTextoValido(texto) {
        return /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto); //valida caracteres del nombre, excluyendo numeros
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
