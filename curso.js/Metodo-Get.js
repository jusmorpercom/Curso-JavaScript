// Metodo get en objects 

let persona = {
    nombre: 'Juan',
    apellido: 'Mejia',
    edad: 26,
    correo: 'correo',
    get nombreCompleto(){ //* Devuelve el valor de la propiedad
        
        return this.nombre + ' ' + this.apellido
    }
}
//! Ya no hay necesidad de establecer los parentesis porque ya entiende que obtiene informacion del object
console.log(persona.nombreCompleto);