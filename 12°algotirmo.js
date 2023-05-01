// INTERES NORMAL

let sueldoBase = 1500;

let incremento = 0.1;

let aniosTrabajados =prompt("escribir los años traabajados:");

let sueldoFinal;

if (aniosTrabajados <= 6) {
  sueldoFinal = sueldoBase + sueldoBase * incremento * aniosTrabajados;
} else {
  sueldoFinal = sueldoBase + sueldoBase * incremento *6 ;
}

console.log("su salario al cabo de 6° años es $"+(sueldoBase + sueldoBase * incremento * 6));

console.log("y su salario sl cabo del "+aniosTrabajados+"° es "+sueldoFinal)