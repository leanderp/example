'use strict'
/*
Hacer un programa que muestro todos los numeor entre 2 numeros introducidos por el ususario
*/

var numero1 = parseInt(prompt("Introduce el primero numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("<h3>De " + numero1 + " a " + numero2 + " estan numeros</h3>");

for(var i = numero1; i <= numero2; i++){
    document.write(i + "<br/>");
}
