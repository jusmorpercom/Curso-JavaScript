// Función como objeto


function myFunction(a,b){
    console.log(arguments.length);
    return a + b;
}

var myFunctionText = myFunction.toString();
console.log(myFunctionText);


