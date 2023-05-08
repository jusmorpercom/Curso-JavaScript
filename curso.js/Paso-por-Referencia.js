// Paso por referencia 



const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos'; // accede a la referencia y la modifica, pasamos la referencia del objeto y la cambiamos 
    p1.apellido = 'Lara'
}


// Paso por referencai 
cambiarValorObjeto(persona); 
console.log(persona);