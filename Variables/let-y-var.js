// "use strict"
// Pruebas let y var

// Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero) //valor 50
}

console.log(numero); //valor 50

// Prueba con Let
// Let es una variable de bloque, local. Solo funciona dentro del bloque que la contiene,
// en cambio var es global entonces se salta todo porque puede reasignar valores aunque esten en otros bloques.

var texto = "Curso de JS"
console.log(texto); // valor js

if(true){
    let texto = "Curso Laravel5"
    console.log(texto); //valor laravel5
}

console.log(texto); // valor js