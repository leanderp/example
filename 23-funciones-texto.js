'use strict'

//Transformacion de textos *****

var numer = 444;
var texto1 = "Bienvenido al curso de JS, el curso definitivo";
var texto2 = "es muy buen curso";

// Busqueda *******

var busqueda = texto1.indexOf("curso"); //Primera palabra de la busqueda
var busqueda2 = texto1.lastIndexOf("curso"); // Ultima palabra de la busqueda(si se repite varias veces)
var busqueda3 = texto1.search("curso");// Primera palabra de la busqueda
var busqueda4 = texto1.match(/curso/g);// Si lo colocas entre "/" y la agregas un "g" (global) busca y emnumera todos lo que este indicado en los "/"
var busqueda5 = texto1.substr(14,5); // Extrae el texto por la posicion y la cantidad de letras.
var busqueda6 = texto1.charAt(23);// Extrae de el texto (letra) de la posicion indicada
var busqueda7 = texto1.startsWith("Bienve");// Indica true y false el texto inicia como el string indicado. 
var busqueda8 = texto1.endsWith("curso definitivo");// Indica true y false el texto finaliza como el string indicado.
var busqueda9  = texto1.includes("JS");//Indica true si encuentra la palabra en el String, y false si no.
var busqueda10 = texto1.replace("JS", "PHP")// Sirve para reemplasar un dato por el que quieres.
var busqueda11 = texto1.slice(14, 18);// Extrae por la posicion que se indica en la variable. puede ser que comienze y/o agreegar donde termina.
var busqueda12 = texto1.split(" ");// Mete el texto en un Array y se puede agregar un espacio por palabra
var busqueda13 = texto1.trim();// Recortar los espacios del string que tiene por delante y por detras (sobrantes).
console.log(busqueda13);


var dato = numer.toString(); //Convertir a un String
    dato = texto1.toUpperCase(); // Poner en MAYUSCULAS
    dato = texto2.toLowerCase(); //Poner en minusculas
;

//console.log(dato);

// Calcula longitud *****

var nombre = "Leander Perez";

//console.log(nombre.length);// length sirve para contar cosas.

// Concatenar - Unit textos ******

var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" "+texto2);

//console.log(textoTotal);

