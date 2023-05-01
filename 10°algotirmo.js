let p1 = prompt("escribir la edad de la 1° persona:");
let p2 = prompt("escribir la edad de la 2° persona:");
let p3 = prompt("escribir la edad de la 3° persona:");

if (p1 > p2) {
  if (p2> p3) {
    console.log(p3, 'es el menor de todos.');
  } else {
    console.log(p2, 'es el menor de todos.');
  }
} else {
  if (p1 > p3) {
    console.log(p3, 'es el menor de todos.');
  } else {
    console.log(p1, 'es el menor de todos.');
  }
}