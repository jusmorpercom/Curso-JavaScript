//Agregar metodos a un metodo Constructor de objetos 

function Persona(nombre1, apellido, correo){
    this.nombre = nombre1;
    this.apellido = apellido;
    this.correo = correo;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido
    }

}
    let padre = new Persona('Juan', 'Perez', 'dsfa@sfs.com');
    console.log(padre.nombreCompleto());

    let madre = new Persona('Andrea', 'quintero', 'dfs@.com')
    console.log(madre);
    console.log(madre.nombreCompleto());

    padre.nombre = 'carlos';
    console.log(padre);