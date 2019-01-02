'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos devuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de 
sumar, restar, multiplicar y dividir esas dos cifras.
*/

var numero1 = parseInt(prompt("Introduce el primero numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primero numero",0));
    numero2 = parseInt(prompt("Introduce el segundo numero",0));
}

var resultado = "La suma es: " + (numero1+numero2)+"<br/>"+
                "La resta es: " + (numero1-numero2)+"<br/>"+
                "La multiplicacion es: " + (numero1*numero2)+"<br/>"+
                "La divicion es: " + (numero1/numero2)+"<br/>";
;

var resultado1 = "La suma es: " + (numero1+numero2)+" \n"+
                "La resta es: " + (numero1-numero2)+" \n"+
                "La multiplicacion es: " + (numero1*numero2)+" \n"+
                "La divicion es: " + (numero1/numero2)+" \n";

document.write(resultado);
console.log(resultado1);
alert(resultado1);