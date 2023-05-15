// Funcion constructor de objetos de tipo persona 
function Persona(nombre1, apellido,correo){
    this.nombre = nombre1;
    this.apellido = apellido;
    this.correo = correo; //! Del lado derecho es el parametro y el lado izquierdo es la propiedad 
}

Persona.prototype.tel = '88911235';

// Creamos un objeto con el constructor 
let padre = new Persona('Juan', 'Perez', 'dsfa@sfs.com');
padre.tel = '44212412' //* Podemos modificar el valor por default 
console.log(padre.tel );

// al usar la palabra reservada new, creamos un nuevo objeto en memoria
let madre = new Persona('Andrea', 'quintero', 'dfs@.com')
console.log(madre.tel);

 