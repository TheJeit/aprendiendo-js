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

    // let numero = parseInt(prompt("Ingresa un numero aquí"));
    // imprime = "";

    // for (let i = 0; i <= numero; i++) {
    //     imprime = imprime + i;

    //     if(i != numero){
    //         imprime = imprime + ", ";
    //     }
    // }
    // console.log(imprime);

}

{// Ejercicio 2
    // Se trata de que dado un número entero el script muesre una cuenta atrás,
    // es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.
    // Si tecle o número 5 deberá mostarar 5,4,3,2,1.

    // let numero = parseInt(prompt("Ingresa un número aquí"));
    // let imprime = "";

    // for (let i = numero; i >= 0; i--) {
    //     imprime = imprime + i;

    //     if (i !== 0) {
    //         imprime = imprime + ", ";
    //     }
    // }

    // console.log(imprime);
}

{//Ejercicio 3
    // Se quiere un bucle que genere una lista con todos los números pares
    // positivos por debajo del número tecleado por el usuario. Los números
    // se aparecerán en una ventana alert con cambios de linea (carácter '\n').

    // Si tecleo el número el número 9 deberá mostrar cinco lineas
    // con los números 0 2 4 6 8

    // let numero = parseInt(prompt("Ingresa tu número"));
    // let lista = "";

    // for (let i = 0; i < numero; i++) {
    //     if (i % 2 === 0) {
    //         lista = lista + `${i}\n`;
    //     }
    // }
    // alert(lista)
}

{//Ejercicio 4
    // Este script debe escribir la tabla de multiplicar del número que el usuario
    // teclee. La tabla mostrará en diferentes líneas cada producto y el resultado
    // en la forma a x b = ab. Recuerda que el salto de linea es el carácter "\n"

    // let tabla = parseInt(prompt("Ingresa tu número"));
    // let imprime = "";

    // for (let i = 1; i <= tabla; i++) {
    //     let producto = tabla * i;
    //     imprime = imprime + `${tabla} x ${i} = ${producto}\n`;
    // }

    // alert(imprime);
}

{//Ejercicio 5
    // En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número
    // y el script imprimirá (console.log) todos los números menores que al dividirlos por
    // 3 den como resto 2. Recuerda: un número es múltiplo de N es cuando el dividirlo por
    // N el resto es 0.

    // numero = parseInt(prompt("Ingresa tu número"));
    // imprime = "";

    // for (let i = 0; i < numero; i++) {
    //     if (i % 3 === 2) {
    //         imprime = imprime + `${i} `;
    //     }
    // }
    // console.log(imprime);
}

{//Ejercicio 6
    // Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena
    // formada por la letra repetida el número que haya tecleado.

    // Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x

    // let letra = String(prompt("Ingresa tu letra"));
    // let numero = parseInt(prompt("Ingresa tu número"));
    // let imprime = "";

    // for (let i = 0; i < numero; i++) {
    //     imprime = `${imprime}${letra}`;
    // }
    // console.log(imprime);
}

{//Ejercicio 7
    // Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple:
    // el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0
    // y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando
    // alcancemos el valor 1:4

    // for (let i = 0; i <= 1; i++) {

    //     for (let j = 0; j < 5; j++) {
    //         // Verificar si es el último valor deseado 1:4
    //         if (i === 1 && j === 4) {
    //             console.log(`${i}:${j}`);
    //             break; // Detener el bucle interno
    //         }
            
    //         console.log(`${i}:${j}`);
    //     }
    // }
}

{//Ejercicio 8
//     Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero,
//      el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará
//       formada por una serie de astericos tan larga como diga el número de línea en el que está.

//      Para separar una linea de la siguiente en console o en alert debes usar "\n".
//      En este ejercicio usa console.log.


    // let num = parseInt(prompt("Ingresa un numero"));
    // let imprime = "";

    // for (let i = 0; i < num; i++){
    //     imprime = imprime + "*".repeat(i + 1) + "\n";
    // }
    // console.log(imprime);

}

{//Ejercicio 9
    // Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos
    // entre 0 y el número tecleado por el usuario. El resultado será de la fomra
    // "Los números enteros de 0 a n  suman suma"

    // let num = parseInt(prompt("ingrese un numero"));
    // let imprime = 0;

    // for (let i = 1; i <= num; i++){
    //     imprime = imprime + i;
    // }
    // console.log(imprime);
}

{//Ejercicio 10
    // Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números
    // el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
}


