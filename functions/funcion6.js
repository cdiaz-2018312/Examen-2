const fecha1Texto = prompt("Introduce la primera fecha (YYYY.MM.DD):");
const fecha2Texto = prompt("Introduce la segunda fecha (YYYY.MM.DD):");

const fecha1 = new Date(fecha1Texto);
const fecha2 = new Date(fecha2Texto);

//segun la documentacion esto nos devuelve los milisegundos en diferencia
const diferenciaMilisegundos = fecha2 - fecha1;

//con esto de abajo pasamos los milisegundos a dias
const diferenciaDias = Math.floor(diferenciaMilisegundos / (86400000)); 

const absoluto = Math.abs(diferenciaDias)
console.log(`Diferencia en días: ${absoluto}`);