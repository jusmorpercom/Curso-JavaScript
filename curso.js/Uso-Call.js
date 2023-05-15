// Uso de Call 

//Permite llamar un metodo uqe esta definido de un mt

let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso del call para usar el metodo persona1 con los datos de persona 2
//? Podemos usar el metodo que esta definido en otro objeto
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));