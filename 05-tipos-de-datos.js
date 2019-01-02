'use strict'

// Operadores

var numero1 = 7;
var numero2 = 12;
var  operacion = numero1 * numero2;

alert("El resultado de la operacion es: " + operacion);

// Tipo de datos

var numero_entero = 44;
var cadena_texto = "Hola que tal"; // Las comillas no tiene diferencia entre las simples ' y las dobles ". Solo toma como prioridad para el texto la primera que coloques.
var verdadero_o_falso = true;

var numero_falso = "33.6";

/*
Number();// numero flotante (con decimales)
parseInt(); // numero entero (numero redondeado hacia abajo)
String(); // Pone cualquier variable a un string (texto) ejem: String(2) + "2" = "22";
typeof(); // Nos devuelve el tipo de dato de la variable.
*/

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);