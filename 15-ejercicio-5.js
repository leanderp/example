'use strict'
/*
Muestre todos los numeros divisores de un numero introducido en el promt
*/

var numero = parseInt(prompt("Introduce el numero", 1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){ 
    console.log("Divisor:" + i);
    }
}