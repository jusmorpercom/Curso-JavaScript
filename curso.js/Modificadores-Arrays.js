// Modificadores de Arrays 

const autos = ['BMW', 'Mercedes', 'volvo'];
console.log(autos);

console.log(autos[0]);

for( let i = 0; i < autos.length; i++){     // Recorrer un array 
    console.log(autos[i]);
    console.log( i + ':' + autos[i]);
}

// Modificar el valor 

autos[1] = 'MercedesBenz'
console.log(autos[1]);

// Agregar Elementos 

autos.push('Audi'); 
console.log(autos);

// Tambien podemos agregar elementos con length

console.log(autos.length); // Nos devuelve el numero de elementos 
autos[autos.length] = 'cadillac';

console.log(autos);


// Podemos agregar dejando vacíos pero no es recomendable 

autos[6] = 'Porshe';
console.log(autos);

// Preguntar si es Array 

console.log(typeof autos); 

console.log(Array.isArray(autos));

console.log(autos instanceof Array); // preguntamos si autos es una instacia de array

