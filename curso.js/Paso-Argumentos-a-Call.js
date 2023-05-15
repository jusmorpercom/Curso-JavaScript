// Paso de argumentos a call 

let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +  this.nombre + ' ' + this.apellido + ', '+ tel;
    } //! debido a que titulo y tel son parametros del objeto no es debido usar el this 
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso del call para usar el metodo persona1 con los datos de persona 2
//? Podemos usar el metodo que esta definido en otro objeto
console.log(persona1.nombreCompleto('lic.', '53920203'));

console.log(persona1.nombreCompleto.call(persona2, 'ing', '225345453'));