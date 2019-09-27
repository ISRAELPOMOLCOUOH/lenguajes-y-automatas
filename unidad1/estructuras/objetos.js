const saludar = ()=>{
    return "hola a todos";
}

let persona = {
    nombre : "juan",
    apellido : "perez",
    edad : 25,
    peso : 60.5,
    hobies : ["musica", "futbol","internet"],
    saludar
};

persona.apellido = "perez sosa";
console.log(persona.nombre + " "+ persona.apellido);
console.log(persona.hobies);
console.log(persona.saludar());

//Arreglo de objetos
let frutas = [
    {
        nombre : "grosella",
        familia : "saxi fragaceas",
        calorias: 29.3
    },
    {
        nombre: "piña",
        familia: "bromelicias",
        calorias: 46
    }
];

for(let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}