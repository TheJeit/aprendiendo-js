// "use strict"

//Condicional if
//Si A es igual(Mayor que, Menor que, diferente que, etc) a B haz algo

{// Ejemplo 1
// let edad1 = 10;
// let edad2 = 12;

// //Si pasa esto
// if(edad1 > edad2){
//     //Ejecuta esto
//     console.log("Edad uno es mayor que edad dos");
// }else{
//     console.log("Edad uno es menor que edad dos");
// }
}

{// Operadores relacionales

// Mayor: >
// Menor: <
// Mayor o igual: >=
// Menor o igual: <=
// diferente que: !=
}

{//Ejemplo 2

// let edad = 19;
// let nombre = "Jennifer Torres"

// if(edad >= 18){
//     console.log(`${nombre} tiene ${edad} años, es mayor de edad`);

//         if(edad <= 33){
//             console.log("Todavia eres milenial");
//         }

//         else if(edad >= 70){
//             console.log("Eres anciano");
//         }
        
//         else{
//             console.log("Ya no eres milenial");
//         }

//     }else{
//         console.log(`${nombre} tiene ${edad} años, es menor de edad`);
//     }
}

//Operadores lógicos
/*
AND(Y): &&
OR(O): ||
Negacion: !
*/

// Negacion

let year = 2018;
// if(year != 2021){
//     console.log(`El año no es 2023 (Realmente es ${year})`);
// }


{// AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}
}

{// OR

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}
}


