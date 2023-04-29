// Prioridad en los operadores
/**
 * Los paréntesis son lso que mas tiene prioridad (), []
 * Después son los operadores ++, --
 * * / % Son los terceros con prioridad
 * + - Posteriormente 
 * << >>
 * == != === !===
 */


let a = 3, b = 2, c = 1;

let z = a * b + c; //Empieza de izquierda a derecha pero el * tiene más prioridad  
console.log(z);
  
z = (c + a) * b / c;
console.log(z);