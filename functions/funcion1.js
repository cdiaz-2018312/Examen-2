const boton = document.querySelector("#boton");
boton.addEventListener("click", ()=>{
    console.clear();
    let numerorandom= Math.floor(Math.random() * 5);
    funcionRandom(numerorandom) ();
})

const funciones = [
    function (){
        console.log("un padre tiene cierta cantidad de hijos,los hijos de este padre son el doble de hijos menos 4 al cuadrado, cuantos hijos tiene pepe?")
    },
    function (){
        console.log("Conozco a 8 practicantes que estan con migo, pero la pregunta es si me tomo un cáfe estará pintada toda la casa sin dejar de caer ninguna gota de pintura?")
    },
    function (){
        console.log("estaba un jinete en un bar con su caballo, el le daba los shots de tequila al caballo y el se tomaba el agua, cuando le preguntaron que por que no lo hacia al revez respondio:'esque a mi me toca manejar' ")
    },
    function (){
        console.log("si, son esos que van ahi, esos que hacen locuras bajo la lluvia en la noche")
    },
    function (){
        console.log("Esos 2 se derretieron frente a una fogata todo, todo se dijeron K/C")
    },
 ]

function funcionRandom(numeroAleatorio) {
   return funciones[numeroAleatorio];
}
