//! Palabra static en javascript. con esta podemos crear metodos que se usaran exclusivamente

// TODO: Los atributos static se asocian con la clase, con la plantilla 
// TODO: Los atributos nos staticos son atributos que podemos utilizar cuando solo se crean objetos de la clase

class Persona {
    //? los atributos static se asocian con la clase persona
    static contadorPersona = 0; // variable que solo le pertenece a la clase Persona

    //? los atributos que no estan definidos como static
    //?  se asocian a partir del obejto de clase persona 

    static get MAX_OBJ(){  //metodo que simula una constante d4e tipo estatico 
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }  
        else{
            console.log('se ha superado el maximo de objetos permitido');
        }
        

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
        return this.idPersona + ' ' +this._apellido + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde método static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
let persona1 = new Persona('Juan', 'Rossi'); //utilizamos el constructor 
console.log(persona1);

let empleado1 = new Empleado('juana', 'perez', 'sistemas');
console.log(empleado1);
console.log(empleado1._nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString()); 
console.log( persona1 .toString());

// persona1.saludar(); no es posible llamar un metodo static desde uun opbjeto pero si desde una clase
// EL metodo saludar solo se observa desde la consola
// debido a que la llamada de un objeto static es diferente
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar(); 
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
//? Se asocia con la clase y no con el objeto
console.log( Persona.contadorObjetosPersona);

//? Podemos acceder desde las clases hija y no con los objetos 
console.log( Empleado.contadorObjetosPersona);

let empleado3 = new Persona('juana', 'garcia');
console.log(empleado3);

console.log(Persona.MAX_OBJ); // accedemos al valor

let persona3 = new Persona('Mariano', 'lara');
let persona4 = new Persona('armando','peña');
let persona5 = new Persona('carlos', 'mario');

