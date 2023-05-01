let aprobados=0;
let desaprobados=0;
let calificacion5 = prompt("Ingresa calificacion1:");
let calificacion1 = prompt("Ingresa calificacion2:");
let calificacion2 = prompt("Ingresa calificacion3:");
let calificacion3 = prompt("Ingresa calificacion4:");
let calificacion4 = prompt("Ingresa calificacion5:");
if(calificacion1>=11){          
    aprobados++;
    
}else{
    desaprobados++;
}
if(calificacion2>=11){          
    aprobados++;
    
}else{
    desaprobados++;
}
if(calificacion3>=11){          
    aprobados++;
    
}else{
    desaprobados++;
}
if(calificacion4>=11){          
    aprobados++;
    
}else{
    desaprobados++;
}
if(calificacion5>=11){          
    aprobados++;
    
}else{
    desaprobados++;
}
console.log("hay "+aprobados+" aprobados y "+" hay "+desaprobados+" desaprobados")
