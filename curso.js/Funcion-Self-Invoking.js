// Funciones self invoking


// ES una funcion anonima pero se puede llamar asi misma 
(function(a , b){
    console.log('Ejecutando la función: '+ (a + b));
})(3, 4);

// no se puede reutilizar porque no tiene nombre, es la única vez que se puede llamar