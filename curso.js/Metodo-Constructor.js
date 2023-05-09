// Metodo constructor: para reutilizar usamos el constructor para 
// crear mas instancias de un solo objeto.

// Funcion constructor de objetos de tipo persona 
function Persona(nombre1, apellido,correo){
    this.nombre = nombre1;
    this.apellido = apellido;
    this.correo = correo; //! Del lado derecho es el parametro y el lado izquierdo es la propiedad 
}

// Creamos un objeto con el constructor 
let padre = new Persona('Juan', 'Perez', 'dsfa@sfs.com');

console.log(padre);

// al usar la palabra reservada new, creamos un nuevo objeto en memoria
let madre = new Persona('Andrea', 'quintero', 'dfs@.com')
console.log(madre);

padre.nombre = 'carlos';
console.log(padre);