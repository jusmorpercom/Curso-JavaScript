// Distintas formas de imprimir un objeto
let persona = {
    nombre: 'juan',
    apellido: 'mejiia',
    email: 'correo',
    edad: 32,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}


//? Concatenar cada valor de cada propiedad

console.log(persona.nombre + ' ' + persona.apellido);

//? for in

for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//? Values lo devuelve en array

let personaArray = Object.values(persona);
console.log(personaArray);

// ? JSON stringify: lo devuelve en forma de string 

let personaString = JSON.stringify(persona);
console.log(personaString);