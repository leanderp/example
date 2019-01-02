'use strict'

//Bucle while

var year = 2018;

while(year <= 2051){
    //ejecuta esto
    console.log("Estamos en el a#o: "+year);

    if(year == 2025){
        break;
    }

    year++;
}

// Do while
// Permite ejecutar primero un bloque de instrucciones y
// luego evaluar la condicion.

var years = 20;

do{
    alert("SOLO CUANDO SEA DIFERENTA A 20");
    years++;
}while(years <= 23);
