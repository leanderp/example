'use strict'

/*Condicional IF

//Si A es (cualquier cosa) has esto.

// if significa SI


//Operadores Relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

*/

var edad = 72;
var nombre = 'David Perez';

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene "+edad+" a#os, es mayor de edad");
    if (edad <= 33) {
        console.log('Todavia eres Millenial');
    }else if (edad >= 70) {
        console.log('Eres 3er edad');
    }else{
        console.log('Ya no eres Millenial');
    }   
} else{
    //Es menor de edad
    console.log(nombre + " tiene "+edad+" a#os, es menor de edad y no puede ver este contenido");
}

/*
//Operadores logicos
    AND(Y): && (si esto pasa Y esto pasa, has esto)
    OR(O): || (si esto pasa O esto pasa, has esto)
    Negacion: ! (si esto no pasa, has esto)
*/

var year = 2018;

//AND
if(year >= 2000 && year <= 2020 && year != 2018){
    console.log('Estamos en la era actual');
}else{
    console.log('Estamos en el siglo 21');
}

//OR

if (year == 2008 || (year >= 2018 && year == 2028)){
    console.log('El a#o termina en 8');
}else{
    console.log('A#O NO REGISTRADO');
}

//Negacion
var year = 2018;

if (year != 2016) {
    console.log('El a#o no es 2016, realmente es ' + year);
}
