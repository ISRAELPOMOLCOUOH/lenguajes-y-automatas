//todas las palabras que tengan una longitud de 7 o mas palabras
let palabra1 =/[a-z]{7,}/g;
console.log("EJERCICIO 1: ",palabra1.test( "el ferrocarril llega a las 7 de la mañana"));


//expresiones que no finalicen con una vocal
let palabra2 = /[^aeiou]$/g;
console.log("EJERCICIO 2: ",palabra2.test("ventilador"));


//las palabras que inicien con M donde las segunda letra no sea vocal
let palabra3 = /[M]{1}[^aeiou][a-z]/;
console.log("EJERCICIO 3: ",palabra3.test("Maria"));


//expresiones encerradas entre comillas
let palabra4 = /^(\"\w+\")$/;
console.log("EJERCICIO 4: ",palabra4.test('"texto"'));


//ip´s
let palabra5 = /^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/; ///^(\d){1,3}[.](\d){1,3}[.](\d){1,3}[.](\d){1,3}$/; 
console.log("EJERCICIO 5: ",palabra5.test("192.168.1.45"));


//horas
let palabra6 = /^(\d{1,2})[:](\d{1,2})$/;
console.log("EJERCICIO 6: ",palabra6.test("4:50"));


//telefonos
let palabra7 = /^(\d{10})$/;
console.log("EJERCICIO 7: ",palabra7.test("985111219983"));


//correos electronicos
let palabra8 = /^\w+[@][a-z]+(.[a-z]+)(.[a-z]+)$/;
console.log("EJERCICIO 8: ",palabra8.test("israel@gmail.com.mx"));


//url´s       
let palabra9 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*$/;
console.log("EJERCICIO 9: ",palabra9.test("https://www.google.com."));


//codigo postal
let palabra10 = /^\d{5}$/;
console.log("EJERCICIO 10: ",palabra10.test("97790"));