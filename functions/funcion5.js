const numero = prompt("Introduzca el número");

function totalDigitos(numero) {
    if (numero === null) {
        return 0; 
    }
    const ingresadoLimpio = numero.replace(/\D/g, "");
    return ingresadoLimpio.length;
}
const cantidadDigitos = totalDigitos(numero);
if (cantidadDigitos === 0) {
    console.log("No se proporcionó un número.");
} else {
    console.log(`Cantidad de dígitos: ${cantidadDigitos}`);
}