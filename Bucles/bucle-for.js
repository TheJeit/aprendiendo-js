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

    let letra = "x";
    let numero = 5;
    let imprime = [];

    for (let i = 0; i < numero; i++) {
        imprime = `${imprime}${letra}`;
    }
    console.log(imprime);
}

{//Ejercicio 7
    // Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple:
    // el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0
    // y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando
    // alcancemos el valor 1:4

    
}


