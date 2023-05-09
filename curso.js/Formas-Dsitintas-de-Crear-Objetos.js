// Distintas formas de crear un objeto

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



    let miObjeto = new Object(); //! Forma mas formal de crear un objeto
    let miObjeto2 = {}; //! Forma mas recomendable  

    let miCadena1 = new String('Hola'); // Sintaxis mas formal pero no es lo mas recomendable
    let miCadena2 = 'Hola' // Forma mas recomendable

    let miNumero = new Number(1); // Sintaxis mas formal
    let miNumero2 = 2;

    let miBoolean = new Boolean();
    let miBoolean2 = false;

    let miArray = new Array();
    let miArray2 = []; 

    let miFuncion = new Function();
    let miFuncion2 = function(){};

