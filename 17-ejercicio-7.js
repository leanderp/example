'use strict'

/*
Tabla de multiplicar por un numero introducido en pantalla.
*/

var numero = parseInt(prompt("Introduce un numero", 1));

for(var i = 1; i <=10; i++){
    console.log(i+" x "+numero+" = "+(i*numero));
}

//Toda las tablas de multiplicar

for(var c = 1; c <= 10; c++){
    document.write("<h1> Tabla del "+c+"</h1>");
    for(var i = 1; i <=10; i++){
        document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
    }
}