'use strict'
/*
Programa que pida dos numeros y que nos diga cual es el mayor , el menor y si son iguales.
PLUS: Si lo que escribe no son numeros, nos vuelva a pedir que intrduscamos los datos.
*/

var numero1 = parseInt(prompt("Introduce el primero numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while (numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {
    alert("INTRODUCE SOLO NUMEROS");
    numero1 = parseInt(prompt("Introduce el primero numero",0));
    numero2 = parseInt(prompt("Introduce el segundo numero",0));
}


if (numero1 > numero2) {
    console.log("El " + numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
    console.log("El " + numero1 + " es menor que " + numero2);
} else if (numero1 == numero2) {
    console.log("El " + numero1 + " es igual que " + numero2);
}else{
    alert("INTRODUCE NUMEROS CORRECTOS");
}
