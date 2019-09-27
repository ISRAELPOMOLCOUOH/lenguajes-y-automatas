let r1 = new RegExp("abc");//primera forma de definir una expresion regular
let r2 = /[0-9]/;//segunda forma de definir una expresion regular

result = r1.test("abc");
console.log(result);//true
result = r2.test("aniversario en 1981");
console.log(result);//true

//expresion regular para una fecha basica
let r3 =/\d+[-|/]\d+[-|/]\d+/;//se definie esto [-|/] para que la fecha admita cualquiera de los que este ddentro
console.log(r3.test("13-07-1995"));//se agrega el + para especificar 1 o mas elementos
console.log(r3.test("19/01/1848"));


//segunda forma regular para una fecha
let r4 = /\d\d[-|/]\dd[-|/]\d\d\d\d/;

//tercera forma regular para una fecha
let r5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

//ejemplo de vocal
var r6 = /[aeiou]/;//si esta de esta manera /aeiou/ lo toma como si fuera una cadena junta y asi /[aeiou]/ lo toma por separado
console.log(r6.test("start"));//true

let palabra = "israel";
let newPalabra = palabra.replace(/[aeiou]/g,"*");//con la g lo remplaza en todas las apariciones y si la quito solo remplaza la primera q detecte
//let newPalabra = palabra.replace(/[^aeiou]/g,"*"); esta es la forma de negarlo
//let newPalabra = palabra.replace(/[^aeiou]$/g,"*"); con el signo de $ toma la ultima letra y la sustituye
console.log(newPalabra);

let palabra2 = "el 02 de enero de 2019 se dio inicio a la 3 semana nacional de la tecnologia";
let newPalabra2 = palabra2.replace(/[0-9]/g,"0");
console.log(newPalabra2);

let newPalabra3 = palabra2.replace(/[a-z]{5,10}/g,"");//con las {} indico el tamaño que debe tener la palabra para sustituirlo que este entre el rango de 5 a 10
//(/[a-z]{5, }/g,""); es para indicar que comienza de desde 5 hasta los numeros que le siguen
console.log(newPalabra3);