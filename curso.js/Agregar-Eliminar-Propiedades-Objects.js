// Agregar o eliminar propiedades de un objeto

let persona = {
    nombre: 'juan',
    apellido: 'Mejia',
    email: 'correo',
    edad: 13,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//? Agregamos mas propieedades a los objetos 

persona.tel = '424252';

console.log( persona ); 

// ! Eliminar propiedades

delete persona.tel;