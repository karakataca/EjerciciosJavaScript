function comprobar()
{
// Obtener los valores de los campos del formulario
var numero1 = document.getElementById("numero1").value;
var numero2 = document.getElementById("numero2").value;

if (numero1 > numero2) {
  console.log("El numero " + numero1 + " es mayor que " + numero2);
  document.getElementById("Esmayor").innerHTML = "El numero " + numero1 + " es mayor que " + numero2
}
else if (numero1 == numero2) {
  console.log("Los numeros " + numero2 + ", " + numero1 + "son iguales");
  document.getElementById("Esmayor").innerHTML = "Los numeros " + numero2 + ", " + numero1 + "son iguales"
}
else {
  console.log("El numero " + numero2 + " es mayor que " + numero1);
  document.getElementById("Esmayor").innerHTML = "El numero " + numero2 + " es mayor que " + numero1
}
if (numero1 != 0) {
  console.log("El numero " + numero1 + "es negativo o distinto de cero");
  document.getElementById("Esnegativo").innerHTML = "El numero " + numero1 + " es negativo o distinto de cero"
}
if (numero1 + 1 < numero2) {
  console.log("El incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2);
  document.getElementById("Incrementado").innerHTML = "El incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2
}
}
