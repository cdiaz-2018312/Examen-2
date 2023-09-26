const texto = prompt("Introduce un texto para verificar si es un palíndromo:");

function limpiarTexto(input) {
    return input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
}

function esPalindromo(input) {
    const textoLimpio = limpiarTexto(input);
    const textoReverso = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoReverso;
}

if (esPalindromo(texto)) {
    console.log(`"${texto}" es un palíndromo.`);
} else {
    console.log(`"${texto}" no es un palíndromo.`);
}