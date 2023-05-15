// Hoisting y clases 
// No es posible crear objetos antes de declarar la clase, no se aplica el concepto de hoisting
// a diferencia de las funcinoes  
let persona2 = new Persona('Lara', 'Juarez');


class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido; 
    }

    get nombre(){
        return this._nombre
    }
//? El metodo set lo usamos para modificar los atributos 
    set nombre(nombre){
        this._nombre = nombre; 
    }
}

let persona1 = new Persona('Juan', 'Rossi');
persona1.nombre = 'juan Carlos'; 

//? de manera indireta accedemos a un atributo de la clase con el metodo get
console.log(persona1.nombre);

