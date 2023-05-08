// Funciones de tipo Expresión 

// Declaración Función de tipo Expresión 
let sumar = function (a = 4, b = 5){ // podemos agregar parametros por default
    console.log(arguments[0]); // con esto mostramos los argumentos 
    console.log(arguments[1]);
    console.log(arguments[3]);
    return a + b + arguments[3]; // podemos realizar la operacion
    // aunque no se especificaron mas parametros, en este caso solo son 2, pero esta 
    // recibiendo 3

}; // Como no se le asigna un nombre a esta si termina en ;


// Llamamos a la función
resultado = sumar(7, 2, NaN, 7);
console.log(resultado);