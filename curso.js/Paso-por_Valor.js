// Paso por valor en Funciones 

// Tipos primitivos 
let x = 10; 

function cambiarValor(a){
    a = 20;
    return;
}

cambiarValor(x); 
console.log(x); // Existen dos variables la variable x y la a, cualquier cambio en la a 
// no modifica el valor almacenado en otra variable

// Simplemente se paso una copia de un valo a esto se le conoce como //! Paso por valor 
console.log(a); // no esta definida porque ccuando se termina el metodo se destruye 
// por eso no se modifico solo paso una copia 