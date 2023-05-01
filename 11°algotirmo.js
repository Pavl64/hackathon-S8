let anioTrabajando = prompt("escribir los años trabajando:")
let bono;
if (anioTrabajando <= 5) {
  bono = anioTrabajando * 100;
} else {
  bono = 1000;
}

console.log("El bono es de $"+bono);