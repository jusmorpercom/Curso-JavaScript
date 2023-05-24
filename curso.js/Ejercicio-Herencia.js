class Persona {

    static contadorPersonas = 0;

    constructor(idPersona, nombre, apellido, edad) { // Definimos los atributos
        this._idPersona = idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona() { // Metodo 
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    toString() {
        return `${this._idPersona}
                ${this._nombre}
                ${this._apellido}
                ${this._edad}`;
    }
}