// Accceder a las propiedades del objeto 

let persona = {
    nombre: 'Juan',
    apellido: 'Mejia',
    edad: 26,
    email: 'correo',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombre);

//! podemos acceder como si fuera un array

console.log(persona['apellido']);

// for in

for ( nombrePropiedad in persona){
    
//Acccedemos a las propiedades  
    console.log(nombrePropiedad);

// Accedemos a los valores 
    console.log(persona[nombrePropiedad]);
}