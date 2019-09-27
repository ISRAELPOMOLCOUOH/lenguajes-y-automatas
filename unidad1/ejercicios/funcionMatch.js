
var expresion = /[A-Z][a-z]+/g;//es para buscar las palabras que tengan una letra mayuscula al inicio y las demas minuscualas
var expresion2 = /[A-Z][^aeiou][a-z]+/g;//nombres donde la primera sea mayuscula y la segunda no vocal

//funcion match

var texto = "Este es un texto para Realizar una prueba";
var exp = /[A-Z][a-z]+/g;
result = texto.match(exp);
console.log(result);