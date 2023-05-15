// Metodo Apply

// Paso de argumentos a call 

let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +  this.nombre + ' ' + this.apellido + ', '+ tel;
    }  
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso del Apply
//? Este metodo nos permite llamar un metodo en un objetodo ue no tiene definido cierto metodo 

console.log(persona1.nombreCompleto('lic', '2453'));

//! A diferemncia del call con el metodo apply toca pasar los datos con un array 
let arreglo =['ing', '2239940']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

