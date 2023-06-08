// "use strict"

// Switch y If
{
    // let edad = 18;
    // let imprime = "";
    // switch (edad) {
    //     case 18:
    //         imprime = "Acabas de cumplir la mayoria de edad";
    //         break;

    //         case 25:
    //         imprime = "Ya eres un adulto";
    //         break;

    //         case 40:
    //         imprime = "Crisis de los 40";
    //         break;

    //         case 75:
    //         imprime = "Eres ya un anciano";
    //         break;

    //     default:
    //         imprime = "Tu edad es neutra"
    //         break;
    // }

    // console.log(imprime);
}

{// Ejercicio 1
    // El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar
    // cual es el mayor, el primero o el segundo.

    // let num1 = parseInt(prompt("Ingresa un numero aqui"));
    // let num2 = parseInt(prompt("Ingresa un numero aqui"));
    // let imprime = "";

    // if(num1>num2){
    //     imprime = `${num1} es mayor que ${num2}` 
    // }else if(num1<num2){
    //     imprime = `${num1} es menor que ${num2}` 
    // }else{
    //     imprime = `${num1} es igual que ${num2}` 
    // }

    // console.log(imprime);
}

{//  Ejercicio 2
    // El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensja
    // ede acierto en caso contrario dirá que se produjo un error.
    // Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, el resultado será Error

    // let num = parseInt(prompt("Ingresa un numero"));
    // let cuadrado = parseInt(prompt("Ingresa su cuadrado"));
    // let imprime = "";

    // if(Math.pow(num, 2) === cuadrado){
    //     imprime = "Correcto"
    // }else{
    //     imprime = "Incorrecto"
    // }
    // console.log(imprime);
}

{// Ejercicio 3
    // En ste caso, también suando el perador ternario o if reducido, un visitante a la
    // página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra"
    // en caso contario deberá decirle los años que tiene que estperar para entrar.

    // Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo que tengo 14 años
    // me dirá "Espera 4 años"

    // let edad = parseInt(prompt("Escribe tu edad"));
    // let imprime = "";

    // if (edad >= 18) {
    //     imprime = "Entra"
    // }else{
    //     imprime = `Espera ${18-edad} años por favor`
    // }
    // console.log(imprime);
}

{// Ejercicio 4
    // En un restaurante los clientes pueden pedir menú de carne, pescado o verdura.
    // Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco
    // y si pide verdura se le ofrecerá agua

    // Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

    // let menu = prompt("Elige carne, pescado o verdura")
    // imprime = "";

    // switch (menu) {
    //     case "carne":
    //         alert(imprime = "Desea vino tinto?")
    //         break;

    //         case "pescado":
    //         alert(imprime = "Desea vino blanco?")
    //         break;

    //         case "verdura":
    //         alert(imprime = "Desea agua?")
    //         break;

    //     default:
    //         alert(imprime = "elija carne, pescado o verdura por favor") 
    //         break;
    // }
    // console.log(imprime);

}

{// Ejercicio 5
    // En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga
    // 4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras
    // y si paga 1 solo a la primera sala.

    // Tecleo que pago 2 créditos, el escript me dirá que puedo acceder a las salas de consola y juegos 2D.

    // let salas = parseInt(prompt("Inserta tus créditos aquí"));
    // imprime = "";

    // switch (salas) {
    //     case 4:
    //         imprime = "Tienes acceso a todas las salas"
    //         break;

    //         case 3:
    //         imprime = "Tienes acceso a Consolas, Juegos 2D y Juegos 3D"
    //         break;

    //         case 2:
    //         imprime = "Tienes acceso a Consolas y Juegos 2D"
    //         break;

    //         case 1:
    //         imprime = "Tienes acceso a Consolas"
    //         break;

    //     default:
    //         imprime = "Ingrese una cantidad de créditos válida (entre 1 y 4)"
    //         break;
    // }
    // console.log(imprime);

}

{// Ejercicio 6

    // Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

    // Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.

    // ##################### FORMA 2 #####################

    // let estacion = parseInt(prompt("Ingresa un numero para saber la estación"));
    // imprime = "";

    // switch (estacion) {
    //     case 12:
    //         case 1:
    //         case 2:
    //         imprime = "Es invierno"
    //         break;

    //         case 3:
    //             case 4:
    //             case 5:
    //             imprime = "Es Primavera"
    //             break;

    //         case 6:
    //             case 7:
    //             case 8:
    //             imprime = "Es Verano"
    //             break;

    //         case 9:
    //             case 10:
    //             case 11:
    //             imprime = "Es Otoño"
    //             break;

    //         default:
    //             imprime = "Escribe un numero valido (1 al 12)"
    //             break;
    // }
    // console.log(imprime);

    // ##################### FORMA 2 #####################
    // let estacion = parseInt(prompt("Ingresa el numero del mes para saber su estación"));
    // imprime = "";

    // switch (true) {
    //     case estacion == 12 || estacion == 1 || estacion == 2:
    //         imprime = "Es Invierno"
    //         break;

    //     case estacion == 3 || estacion == 4 || estacion == 5:
    //         imprime = "Es Primavera"
    //         break;

    //         case estacion == 6 || estacion == 7 || estacion == 8:
    //         imprime = "Es Verano"
    //         break;

    //         case estacion == 9 || estacion == 10 || estacion == 11:
    //         imprime = "Es Otoño"
    //         break;

    //     default:
    //         imprime = "Ingresa un numero entre 1 y 12"
    //         break;
    // }
    // console.log(imprime);
}

{// Ejercicio 7
    // En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado.
    // Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es
    // mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".

    // longitud = parseInt(prompt("Ingresa la base de un cuadrado"))
    // alto = parseInt(prompt("Ingresa el alto del cuadrado"))
    // imprime = "";

    // if(longitud == alto){
    //     imprime = "Es un cuadrado"
    // }else if(longitud > alto){
    //     imprime = "Rectángulo horizontal"
    // }else if(longitud < alto){
    //     imprime = "Rectángulo vertical"
    // }
    // console.log(imprime);

}

{// Ejercicio 8
    // En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija.
    // Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200
    // y si elige electrico o 3 se le enviará a la ofician 300.

    // ##################### FORMA 1 con if #####################

    // secciones = prompt("Elige un tipo de combustible");
    // imprime = "";
    // secciones = secciones.toLowerCase();

    // if (secciones == 1 || secciones == "gasolina") {
    //     imprime = "Oficina numero 100"
    // }
    // else if(secciones == 2 || secciones == "diesel"){
    //     imprime = "Oficina numero 200"
    // }
    // else if(secciones == 3 || secciones == "electrico"){
    //     imprime = "Oficina numero 300"
    // }
    // else{
    //     imprime = "ingrese un combustible o numero valido, solo hay 3 disponibles"
    // }
    // console.log(imprime);

    // ##################### FORMA 2 con Switch #####################

    // secciones = prompt("Elige un tipo de combustible");
    // imprime = "";

    // secciones = secciones.toLowerCase();

    // switch (secciones) {
    //     case "gasolina":
    //     case "1":
    //         imprime = "Oficina numero 100";
    //         break;
    //     case "diesel":
    //     case "2":
    //         imprime = "Oficina numero 200";
    //         break;
    //     case "electrico":
    //     case "3":
    //         imprime = "Oficina numero 300";
    //         break;
    //     default:
    //         imprime = "Ingrese un combustible o número válido, solo hay 3 disponibles.";
    //         break;
    // }

    // console.log(imprime);
}

{// Ejercicio 9

    // Un comerciante hace descuentos a sus clientes de la siguiente forma:
    // Si ha comprado menos de 100 euros no hay descuento
    // Si la compra está entre 100 y 300 euros le descuenta un 5%
    // Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
    // Si la compra supera los 400 euros le descuenta un 15%

    // ##################### FORMA 2 con Switch #####################

    // let compra = parseInt(prompt("Ingresa su monto aqui"));
    // let imprime = "";

    // switch (true) {
    //     case compra < 100:
    //         imprime = "No hay descuento"
    //         break;

    //     case compra >= 100 && compra < 301:
    //         imprime = `Tienes un descuento del 5 %, tu precio final es ${compra - compra * 5 / 100}$`
    //         break;
        
    //     case compra >= 300 && compra < 501:
    //         imprime = `Tienes un descuento del 10 %, tu precio final es ${compra - compra * 10 / 100}$`
    //         break;

    //     case compra >= 400:
    //         imprime = `Tienes un descuento del 15 %, tu precio final es ${compra - compra * 15 / 100}$`
    //         break;

    //     default:
    //     imprime = "Ingresa un monto en numeros"
    //         break;
    // }
    // console.log(imprime);

    // ##################### FORMA 2 con if #####################
    // let compra = parseInt(prompt("Ingrese su monto aqui"));
    // imprime = "";

    // if (compra < 100) {
    //     imprime = "No hay descuento";
    // }
    // else if (compra >= 100 && compra < 301){
    //     imprime = `Tienes un descuento de 5%, tu precio final es  ${compra - compra * 5 / 100}`;
    // }
    // else if(compra >= 300 && compra < 501){
    //     imprime = `Tienes un descuento de 10%, tu precio final es  ${compra - compra * 10 / 100}`;
    // }
    // else if(compra > 400 ){
    //     imprime = `Tienes un descuento de 15%, tu precio final es  ${compra - compra * 15 / 100}`;
    // }
    // else{
    //     imprime = "Ingresa un monto en numeros"
    // }
    // console.log(imprime);

}

{//  Ejercicio 10
    // En este ejercicio el script convertirá las notas numéricas de un examen en paabras:
    // 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.

    // ##################### FORMA 1 con Switch #####################

    // let notas = parseInt(prompt("Ingresa tu nota aquí"));
    // imprimir = "";

    // switch (true) {
    //     case notas >= 0 && notas < 5:
    //         imprimir = "Suspenso"
    //         break;

    //         case notas >= 5 && notas < 7:
    //         imprimir = "Aprovado"
    //         break;

    //         case notas >= 7 && notas < 9:
    //         imprimir = "Notable"
    //         break;

    //         case notas >= 9 && notas < 11:
    //         imprimir = "Sobresaliente"
    //         break;

    //     default:
    //         imprimir = "Ingresa numeros"
    //         break;
    // }
    // console.log(imprimir);

    // ##################### FORMA 2 con If #####################
    // notas = parseInt(prompt("Ingresa tus notas"));
    // imprimir = "";

    // if(notas >= 0 && notas < 5){
    //     imprimir = "Suspesdiste"
    // }
    // else if(notas >= 5 && notas < 7){
    //     imprimir = "Aprovaste"
    // }
    // else if(notas >= 7 && notas < 9){
    //     imprimir = "Notable"
    // }
    // else if(notas >= 9 && notas < 11){
    //     imprimir = "Sobresaliente"
    // }
    // else{
    //     imprimir = "Ingresa numeros"
    // }
    // console.log(imprimir);
}

{// Ejercicio plus 

    // Considera estás desarrollando un script donde trabajas con tipos de motor
    // (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor()
    // donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional
    // switch hagas lo siguiente:

    // a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.
    // b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.
    // c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.
    // d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.
    // e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.
    // f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”.
    
    // let tipo = parseInt(prompt("Ingresa el tipo de motor"))
    // let imprime = "";


    // function dimeTipoMotor(tipo) {
    //     switch (tipo) {
    //         case 0:
    //             imprime = "No hay establecido un valor definido para el tipo de bomba";
    //             break;
    
    //             case 1:
    //             imprime = "La bomba es una bomba de agua";
    //             break;
    
    //             case 2:
    //             imprime = "La bomba es una bomba de gasolina";
    //             break;
    
    //             case 3:
    //             imprime = "La bomba es una bomba de hormigón";
    //             break;
    
    //             case 4:
    //             imprime = "La bomba es una bomba de pasta alimenticia";
    //             break;
    
    //         default:
    //             imprime = "No existe un valor válido para tipo de bomba"
    //             break;
    // }
    //     return imprime;
    // }
    // console.log(dimeTipoMotor(tipo));

}

// prompt(): indica al navegador que muestre un cuadro de diálogo con un mensaje opcional que solicita
// al usuario que ingrese algún texto y que espere hasta que el usuario envíe el texto o cancele el cuadro de diálogo.

// parseInt: convierte los numeros con decimales o que sean texto a numberos

// parseFloat: convierte texto en numero y permite decimales

