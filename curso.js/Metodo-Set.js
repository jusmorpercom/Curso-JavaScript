// Metodo set 

let persona = {
    nombre: ' juan',
    apellido: 'Mejia',
    correo: 'correo',
    edad: 23,
    idioma: 'es_col',

    get lang(){
        return this.idioma.toUpperCase();  
    },
    //! El set modifica los valores de los atributos
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' '+ this.apellido;
    }

}
console.log( persona.nombreCompleto)

console.log( persona.lang);

persona.lang = 'eng';
console.log(persona.lang);
console.log( persona.idioma );