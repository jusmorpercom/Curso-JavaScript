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

    
    nombreCompleto(){ // Es un metodo que lo hereda el Empleado 
        return this._nombre +  ' ' + this._apellido;
    }
}

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

    //! Sobreescritura del metodo del padre 

    nombreCompleto(){
        return super.nombreCompleto()+ ', ' + this._departamento ;// ya podemos usar el atributo definido en la class hija 
               //? Con super accedemos a alos atributos y metodos de la clase padre 
    
    }
}
let persona1 = new Persona('Juan', 'Rossi');
console.log(persona1);

let empleado1 = new Empleado('juana', 'perez', 'sistemas');
console.log(empleado1);

console.log( empleado1._nombre);

// TODO Podemos sobreescribir. Desde la clase hija podemos modificar el comportamiento de un metodo definido en la calse padre
console.log( empleado1.nombreCompleto());
// ya nos puestra el atributo de la clase hijo del departamento 