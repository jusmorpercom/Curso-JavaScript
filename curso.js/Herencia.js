// Herencia 

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido; 
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

//? Para heredar usamos la palabra extends
// Esta clase hereda de Persona pero no hereda el constructor si no se le llama con la palabra super()
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //! Con super mandamos a llamar el constructor de la clase padre y pasamos los parametros 
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento
    }
}

let persona1 = new Persona('Juan', 'Rossi');
console.log(persona1);

let empleado1 = new Empleado('juana', 'perez', 'sistemas');
console.log(empleado1);

