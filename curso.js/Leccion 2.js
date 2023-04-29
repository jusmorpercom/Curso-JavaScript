// Tipo de dato string

const nombre = 'Diego';
console.log(typeof nombre);

// tipo de dato numérico
const numero = 100;
console.log(typeof numero);

// Tipo de dato object 
const objeto = {
    nombre: 'juan',
    apellido: 'Klaus',
    teléfono: ' 425293',
}

console.log(objeto);

// Tipo de dato Boolean (true, false)
var bandera = true;
console.log(bandera);

// Tipo de dato Function
function miFuncion() { }
console.log('miFuncion');

// Tipo de dato Symbol 
const simbol = Symbol('mi simbolo');
console.log(simbol);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

// Tipo de dato undefined
var x;
console.log(x);

x = undefined;
console.log(x);

//null = ausencia de valor
const y = null;
console.log(y);


//Arrays 
const autos = ['bmw', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos); // Son objetos 