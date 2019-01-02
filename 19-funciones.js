'use strict'

//Funciones
//Es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function prueba() {
    // Conjunto de instrucciones a ejecutar
    console.log("Hola soy la prueba");
    console.log("Si soy yo");
    
    //return "Hola soy una prueba";
}

//console.log(prueba());

//Invocar o llamar a la funcion
//prueba();

function porPantalla(numero1, numero2){
        document.write("*********************<br/>");
        document.write("Suma: " + (numero1+numero2)+ "<br/>");
        document.write("Resta: " + (numero1-numero2)+ "<br/>");
        document.write("Multiplicacion: " + (numero1*numero2)+ "<br/>");
        document.write("Division: " + (numero1/numero2)+ "<br/>");
        document.write("*********************");
}

function porConsola(numero1, numero2){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: " + (numero1*numero2));
        console.log("Division: " + (numero1/numero2));
        console.log("*********************"); 
}

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
            porConsola(numero1, numero2); 
    }else{
        porPantalla(numero1, numero2);
    }
    
    return true;
}

calculadora(2, 5);

/*

var n1 = parseInt(prompt("Introduce el primer numero", 0));
var n2 = parseInt(prompt("Introduce el segundo numero", 0));

calculadora(n1,n2);


for(var i =1; i <= 10; i++){
    calculadora(i, n1);
}
*/