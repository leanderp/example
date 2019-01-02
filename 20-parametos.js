'use strict'

//Parametros REST y SPREAD

function listadosFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta1: ", fruta1)
    console.log("Fruta2: ", fruta2)
    console.log(resto_de_frutas);
}

var frutas = ["Naranja", "Manzana", "Pera", "Sandia", "Melon"];

listadosFrutas(...frutas, "Manzana", "Pera", "Sandia", "Melon");
