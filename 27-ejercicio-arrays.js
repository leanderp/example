'use strict'
/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorar el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    numeros.forEach((elementos, index) => {
        document.write("<li>"+elementos+"</li>");
    });
    document.write("</ul>");
}

//Pedir 6 numeros
// Funciona de las 2 maneras
//var numeros = new Array(6);
var numeros = [];

for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt("Introduce un numero para el Array", 0));    
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar el array por la consola
console.log(numeros);

// Ordenar y Mostrar
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, "Ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Revertido");

// Contar elementos del Array
document.write("<h2>El Array tiene: "+numeros.length+" Elementos</h2>");

//Busqueda un numero
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numeros => numeros == busqueda);

if (posicion &&  posicion != -1) {
    document.write("<hr/><h2>ENCONTRADO</h2>");
    document.write("<h3>El numero buscado es: "+busqueda);
    document.write("<h2>Posicion de la busqueda: "+posicion+"</h2><hr>");
} else {
    document.write("<hr/><h2>NO ENCONTRADO</h2><hr/>");
}
