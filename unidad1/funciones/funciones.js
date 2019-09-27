//definicion tradicional
function square(x){
    return x*x;
}

//definicion a traves de una variable
const power = function(base,exponente){
    let result = 1;
    for(let i =0; i<exponente; i++){
        result*=base;
    }
    return result;
}

//funcion arrow
const hipotenusa = (a,b) =>{
    let result = Math.sqrt(a*a + b*b);
    return result;
}

//funcion arrow
const hola = () =>{
    return "hola a todos";
}

console.log(square(10));
console.log(power(2,4));
console.log(hipotenusa(3,4));
console.log(hola());