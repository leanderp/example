'use strict'

// Plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tu apellido");

//var texto = "Mi nombre es: "+nombre+"<br/> Mi apellido es: "+apellido;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellido son: ${apellido}</h3>
    <p>Holisssss</p>
`;
document.write(texto);