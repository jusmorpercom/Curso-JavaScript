// Ejercicio de calculo

let mes = 9;
let estacion;

if (mes ==1 || mes == 2 || mes == 12) {
    estacion = "Invierno"
}
else if( mes == 3 || mes == 4 || mes ==5){
    estacion = "primavera"
}
else if( mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano"
}

else if ( mes == 9 || mes == 10 || mes == 11){
    estacion = "otoño"
}
else{
    console.log("Valor incorrecto")
}

console.log(estacion);

/**
 *Calculo hora del dia 
 */

let horaDia = 13;
let mensaje;

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos días"
}
else if(horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas tardes"
}
else if(horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches"
}
else {
    mensaje = "Durmiendo"
}
console.log(mensaje);




