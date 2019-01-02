'use strict'

// Funciones Anonimas
//Conjunto de instrucciones (funcion) que no tiene nombre.

var pelicula = function(nombre) {
    return "La pelicula es : " + nombre;
}

// Callback
//Funcion que se ejecuta en otra.

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, dato => {
    console.log("La suma es: "+ dato);
},
function(dato){
    console.log("La suma por dos es: "+ (dato*2));
});