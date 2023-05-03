// Ejercicios de precedencia de operadores

let x = 5;
let y = 10;
let z = ++x + y--; //queda pendiente 
console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3; // toma prioridad la multiplicación y división 
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);