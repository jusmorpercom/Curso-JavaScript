// Arreglos Arrays 

// Es un tipo object que permite guardar varios valores

// let autos = new Array('BMW', 'Mercedes', 'volvo'); // No se recomienda 

const autos = ['BMW', 'Mercedes', 'volvo'];
console.log(autos);

console.log(autos[0]);

for( let i = 0; i < autos.length; i++){     // Recorrer un array 
    console.log(autos[i]);
    console.log( i + ':' + autos[i]);
}