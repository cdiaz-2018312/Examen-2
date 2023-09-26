
const texto = prompt("Introduce una cadena de texto:");

function contarVocalesYConsonantes(texto) {
    let vocales = 0;
    let consonantes = 0;

    texto = texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if ("aeiou".includes(caracter)) {
            vocales++;
        } else if (/[a-z]/.test(caracter)) {
            consonantes++;
        }
    }
    return { vocales, consonantes };
}
const resultado = contarVocalesYConsonantes(texto);
console.log(`Vocales: ${resultado.vocales}`);
console.log(`Consonantes: ${resultado.consonantes}`);