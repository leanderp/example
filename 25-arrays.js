'use strict'

// Arrays, Arreglos , Matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Leander Perez", "Pedro Perez", "Juana de Arco", 52, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

//console.log(nombres);
//console.log(lenguajes);
//console.log(nombre[4]);

// Ver el largo de un Array 

console.log(nombres.length);

// Ver logica de Array
/*
var elemento = parseInt(prompt("Que elemente quieres del Array?", 0));
alert(nombres[elemento]); 
if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que: "+ (nombres.length - 1))
}else{
    alert("El usuario seleccionado es: "+ nombres[elemento]);
}
*/

//Recorrer un Array

document.write("<h2>Lenguajes de programacion Super Duper</h2>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
});
document.write("</br>");

for( let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

// Busquedas
var precios = [10, 20, 50, 80, 100];
var busqueda1 = lenguajes.find(lenguaje => lenguaje == "PHP");//Busca el nombre del Array
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "JS"); // Muestra el indice donde esta la busqueda
var busqueda3 = precios.some(precios => precios >= 200);// Buscar en numeros y puede colocarles condiciones. 
console.log(busqueda3);

