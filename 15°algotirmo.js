const anioActual = 2023;
let edad = prompt("Ingresa tu edad:");
if(edad>=18){
    console.log("puedes votar en las proximas elecciones")
}else{
    edad=18-edad;
    console.log("no podras votar en los proximos "+edad+" anios")
}