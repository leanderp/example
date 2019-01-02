'use strict'

//Arrays Multidireccionales
//Array dentro de otro

var categoria = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es Bellas", "El gran torino"];

var cine = [categoria, peliculas];

//console.log(cine[0][1]);
//Elemento 1 es para la categoria y el 2 para los elementos de la misma.
//console.log(cine[1][2]);

//peliculas.push("Batman");//Agregar elementos al Array
//console.log(peliculas);

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while (elemento != "ACABAR");
console.log(peliculas);

//Elimina el ultimo elemento del array (en este caso ACABAR)
peliculas.pop(); 

console.log(peliculas);

// Eliminar eventos de un Array
var indice = peliculas.indexOf("La vida es Bellas");
if (indice > -1) {
    peliculas.splice(indice,1)
}

console.log(peliculas);

// Convertir un Array a un String

var peliculas_string = peliculas.join();

console.log(peliculas_string);

//Convertir un String a un Array

var cadena = "Texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

// Ordenar un Array

peliculas.sort();//Ordena por orden Alfavetico (en numeros es el primer numero que toma en cuenta para ordenar)
peliculas.reverse();// Dar la vuelta al array
//console.log(peliculas);

