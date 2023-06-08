// "use strict"

// Bucle for
// Un bucle es una estrucctura de control que se repite varias veces, jemeplo:

// let numero = 10;

// for(let i = 0; i < numero; i++){
//     console.log(`Vamos por el numero ${i}`);
// }

{// Ejercicio 1
    // Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista
    // de números desde el 0 al valor tecleado. Los números se separarán por comas. 

    let numero = parseInt(prompt("Ingresa un numero aquí"));
    imprime = "";

    for (let i = 0; i <= numero; i++) {
        imprime = imprime + i;

        if(i != numero){
            imprime = imprime + ", ";
        }
    }
    
    console.log(imprime);
    
}


