'use strict'

//VARIABLE
//Una variable es un contenedor de informacion.
//las variables tomann el ultimo elemento que lee el codigo.
// VAR =  Define una variable global o local en una function sin inportar el bloque.
// LET = Permite definir una variable limitando un alcance en el bloque o declaracion donde se usa.

// Pruebas con Let y Var

// Prueba con var
var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

// Prueba con Let
var texto = "Curso JS";
console.log(texto);

if(true){
    let texto = "No es un curso JS";
    console.log(texto);
}

console.log(texto);
