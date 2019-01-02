'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt("Introduce un numero", 0));


while(isNaN(number)){
    alert("Numero no valido");
    var number = parseInt(prompt("Introduce un numero", 0));
}

if (number >= 0) {
    if(number%2 != 0)
        console.log("Es impar");
    else{
        console.log("Es Par");
    }

}