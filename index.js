let num1= parseInt(prompt("Ingrese el primero número por favor"));
let num2= parseInt(prompt("Ingrese el segundo número por favor"));   //Esta parte será para pedirle numeros al usuario.

function sumar(num1, num2) {   //Acá los parametros 
    let resultado= num1+num2;
    return
}

// Y acá estamos haciendo ejemplo del arrowfunction 
const suma=(num1, num2)=> resultado=num1 + num2;

let muestra= suma(num1, num2);
document.write("El resultado de tu suma es:"+ muestra);

//Otro ejemplo con la flecha
//Template string o interpolación

const imprimirFrase= nombre=> `Hola ${nombre}`;

let nombre= 'César';

console.log(imprimirFrase(nombre ));

//Objetos
const carro={
    color: 'rojo',
    marca: 'toyota',
    funciones:{
        acelera: 160, 
        frena: 0

    }
}

//let color= carro.color
console.log( color);
console.log(carro.funciones);
console.log(carro);

const {colorCarro}= carro;

//Destructuring object
const {color} =carro;
console.log(color);