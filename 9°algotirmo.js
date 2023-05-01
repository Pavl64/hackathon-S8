let anioNacimiento = prompt("escribir tu año de nacimiento:")
const anioActual = 2023;

let edad = anioActual - anioNacimiento;
if(edad>=18){
    console.log("Tienes "+edad+" años, estas apto para laborar")
}else{
    console.log("Tienes "+edad+" años, aun eres menor de edad")
}