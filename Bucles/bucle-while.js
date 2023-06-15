// "use strict"
{//Ejemplo 1
    // let year = 2018;

    // while(year <= 2023){
    //console.log(`Estamos en el año: ${year}`);
    //     year++;

    //Esto quiere decir, mientras el año (year) sea menor o igual al 2023 (while(year <= 2023). Entonces
    //haz esto, el year al final es un incremento, lo que quiere decir que el bucle se repetira hasta que
    //year sea 2023, recordemos que year vale 2018. 
    //}
}

{//Ejemplo 2
    // let year2 = 2023;

    // while(year2 != 2018){
    //     console.log(`Estamos en el año: ${year2}`);
    //     year2--;

    // Esto significa que mientras el año (year2) sea diferente de 2018 (year2 !== 2018), el bucle se repetirá.
    // El valor de year2 se decrementa en cada iteración, lo que significa que el bucle se repetirá hasta que year2 sea igual a 2018.
    // Al comienzo, year2 tiene un valor de 2023, por lo que se imprimirá "Estamos en el año: 2023" y luego se decrementará en 1.
    // El proceso continuará hasta que year2 llegue a 2018, momento en el que el bucle se detendrá.
    //}
}

{//Ejercicio 1
    // Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números
    // desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán
    // por comas.

    //Si le doy el número 5 pues deberá contar 0,1,2,3,4,5

    // let num = parseInt(prompt("Ingresa tu número"));
    // let numeros = "";
    // let i = 0;

    // while (i <= num) {
    //     numeros = numeros + i;

    //     if (i < num) {
    //         numeros = numeros + ", ";
    //     }
    //     i++;
    // }
    // alert(numeros);
}

{//Ejercicio 2
    // Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera
    // de ese rango deberá volver a pedir el número.

    //Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5.

    // let num;
    // let imprime = "";

    // while (true) {
    //     num = parseInt(prompt("Inserta un numero"));

    //     if (num >= 1 && num <= 5) {
    //         imprime = "Correcto";
    //         break; 
    //     } else if (num > 5) {
    //         imprime = "Ingresa número (entre 1 y 5)";
    //         break; 
    //     } else if (num <= 0) {
    //         imprime = "Por favor teclee un número entre 1 y 5";
    //         break; 
    //     }
    // }

    // alert(imprime)
}

{//Ejercicio 3
    // Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa
    // una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta.

    // El usuario teclea Si, como no es la letra s pues dirá Error, ¿Desa seguir con el programa?

    // while (true) {
    //     let respuesta = prompt("¿Desea continuar con el programa? (n): ");
    //     if (respuesta.toLowerCase() === "n") {
    //         alert("Programa finalizado.");
    //         break;
    //     } else {
    //         alert("Error. Por favor, introduzca 'n' para finalizar el programa.");
    //     }
    // }
}

{//Ejercicio 4
    // Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que
    // solo puede dividirse por si mismo y por la unidad. 

    //Si el usuario telcea el 3: dirá que 3 es primo. Si telcea el 4 dirá que 4 no es primo.

    // let numero = parseInt(prompt("Ingresa un número:"));
    // let esPrimo = true;
    // let divisor = 2;

    // while (divisor < numero) {
    //     if (numero % divisor === 0) {
    //         esPrimo = false;
    //         break;
    //     }
    //     divisor++;
    // }

    // if (esPrimo) {
    //     console.log(numero + " es un número primo.");
    // } else {
    //     console.log(numero + " no es un número primo.");
    // }

}

{//Ejercicio 5
    // Escribir un script que pida al usuario una contraseña. Si coincide le devolverá el mensaje
    // "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces
    // se emitirá el mensaje "Alerta, intruso". 

    //La contraseña es por ejemplo pasar. Tecleo tres veces
    // otra distinta: Acceso Intruso.

    // let user = prompt("User:");
    // let password = prompt("Password");
    // let imprime = "";

    // let intentos = 0;

    // while (intentos < 3) {
    //     if (user === password) {
    //         imprime = "Acceso concedido";
    //         break;
    //     } else {
    //         imprime = "Acceso denegado";
    //         intentos++;
    //         user = prompt("User:");
    //         password = prompt("Password");
    //     }
    // }

    // if (intentos === 3) {
    //     imprime = "Alerta, intruso";
    // }

    // console.log(imprime);


}

{//Ejercicio 6
    // En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando
    // teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

    // El usuario teclea primero el 4 luego el 5 depsués 6 y finalmente , 0. El programa se para y muestra
    // "La suma de todos los número es 15"

    // let suma = 0;
    // let numero = parseInt(prompt("Teclea un número (0 para salir):"));

    // while (numero !== 0) {
    //     suma = suma + numero;
    //     numero = parseInt(prompt("Teclea un número (0 para salir):"));
    // }

    // console.log("La suma de todos los números es " + suma);
}

{//Ejercicio 7
    // Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario
    // ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.

    // El susuario teclea la sere 4,2,3,5,0, El máximo es 5 y el minimo es 2.
    // Si telcea 2,2,2,0, máximo es 2 y minimo es 2.

    let numero;
    let maximo = -Number.MAX_VALUE;
    let minimo = Number.MAX_VALUE;
    let imprime = "";

    numero = parseInt(prompt("Ingrese un número entero positivo (0 para terminar):"));

    while (numero !== 0) {
        if (numero > maximo) {
            maximo = numero;
        }

        if (numero < minimo) {
            minimo = numero;
        }

        numero = parseInt(prompt("Ingrese otro número entero positivo (0 para terminar):"));

        imprime = "El máximo es " + maximo + " y el mínimo es " + minimo + ".";
        console.log(imprime);
    }
}

{//Ejercicio 8
    // Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares,
    // en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares
    // ingresados (el 0 cuenta como par).

    //Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares")

    let count = 0;

    while (true) {
        const number = parseInt(prompt('Ingrese un número:'));

        if (number % 2 === 0) {
            count++;
        } else {
            break;
        }
    }

    alert('Ha escrito ' + count + ' números pares.');







}

{//Ejercicio 9
    // Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario
    // deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera
    // del menu se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza
    // al teclear el 3.

    //Pulso 1, mensaje Opción leeer datos. Y vuelve a pader opción. Pulso 4 : Error y
    // vuelve a pedir opción, Pulso 3: Fin del programa y acaba.

    let option = 0;

    while (option !== 3) {
        option = parseInt(prompt('Ingrese una opción:\n1- Leer datos\n2- Mostrar datos\n3- Fin'));

        if (option === 1) {
            alert('Opción leer datos.');
        } else if (option === 2) {
            alert('Opción mostrar datos.');
        } else if (option === 3) {
            alert('Fin del programa.');
        } else {
            alert('Error: opción inválida. Por favor, ingrese un número de opción válido.');
        }
    }
}

{//Ejercicio 10
    // Un script pedirá al usuario que vaya tecleando números hasta llegar al 0, entocnes el programa muestra
    // "La suma es " seguido de la suma de los números. Si esta suma es par el programa se repite y si es
    // impar el programa acaba.

    // Si tecleo 2,6,2, 0 Me dirá suma "10" y volverá a pedir otra serie de números, si tecleo
    // 2,6,3 Me dirá "suma 11" y acabará.

    let sum = 0;

    while (true) {
        const number = parseInt(prompt('Ingrese un número:'));

        sum += number;

        if (number === 0) {
            alert('La suma es ' + sum);

            if (sum % 2 === 0) {
                continue;
            } else {
                break;
            }
        }
    }
}
