// Etiquetas labels

// Con las etiquetas podemos indicar a que parte del programa queremos ir 

inicio: // etiqueta
for( let contador = 0; contador <= 10; contador++){
    if(contador %2 !== 0){
        continue inicio;  // le estamos indicando a donde tiene que ir 
    }
    else {
        console.log(contador);
    }
}
