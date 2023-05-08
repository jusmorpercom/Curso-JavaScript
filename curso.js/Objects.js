// Objects 

// los tipos primitivos no tienen acceso  a los metodos ni propiedades
let x = 10;
console.log(x.length);

// A diferencia de los objetos que pueden contener propiedades y metodos

let persona = {

    nombre: 'Juana',
    apellido: 'Lara',
    email: 'jped@mail.com',
    edad: 23,
    nombreCompleto: function(){ // agregando el metodo al objeto
        return this.nombre + ' ' + this.apellido; // si estamos dentro del objeto la forma para acceder a las propiedades del objeto es con this
    },
    miFuncion: function(){
        return console.log('Creando otra funcion')
    }

}


console.log(persona.email);       // podemos acceder a lso atributos, propiedades
console.log(persona.nombre);
console.log(persona.nombreCompleto()); //llamamos el metodo que creamos 
console.log(persona.miFuncion());

// ? Otra forma de creacion de objetos (no es tan comun)

let persona2 = new Object(); // new significa reservar en el espacio de memoria
persona2.nombre = 'Carlos';
persona2. dirrecion = 'saturno 23';
persona2.tel = '43242243';

console.log(persona2.tel);
