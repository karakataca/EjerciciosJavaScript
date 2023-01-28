const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let sumaforof = 0;

for (let nota of notas) {
    sumaforof += nota;
}

console.log("Suma for of "+sumaforof); 

let sumafor = 0;

for (let i = 0; i < notas.length; i++) {
    sumafor += notas[i];
}
console.log("Suma for " + sumafor); 

document.getElementById("Numeros").innerHTML = "Los numeros son "+ notas;
document.getElementById("Sumafor").innerHTML = ""+ sumafor;
document.getElementById("Sumaforof").innerHTML = " " + sumaforof;

