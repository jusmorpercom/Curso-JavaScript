//! Clase Object, Sobrecarga y Polimorfismo





class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() { // Es un metodo que lo hereda el Empleado 
        return this._nombre + ' ' + this._apellido;
    }

    //? Estamos sobreescribiendo el metodo de la clase padre
    toString(){
        //!se aplica poliformismo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona { //? Clase Hija 
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento
    }

    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;// ya podemos usar el atributo definido en la class hija 
        //? Con super accedemos a alos atributos y metodos de la clase padre 

    }
}
let persona1 = new Persona('Juan', 'Rossi');
console.log(persona1);

let empleado1 = new Empleado('juana', 'perez', 'sistemas');
console.log(empleado1);

console.log(empleado1._nombre);

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString()); //! El metodo que se ejecuta es el metodo llamado en la clase hija 
console.log( persona1 .toString()); //Llama el metodod nombreCompleto pero definido en la clase padre

// TODO: El metodo tostring se ejecuta y depende de la referencia si es de tipo padre o de tipo hijo