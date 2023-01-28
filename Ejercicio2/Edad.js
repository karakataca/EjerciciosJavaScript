//calcular la edad de una persona
function calcularEdad() {
  // cogemos mi edad
  const micumple = {
    day: 15,
    month: 'Enero',
    year: 1970
  }
  console.log("Mi cumpleaños es el " + micumple.day + " de " + micumple.month);
  document.getElementById("Miedad").innerHTML = "Mi cumpleaños es el " + micumple.day + " de " + micumple.month + " de "+ micumple.year;

  // cogemos la fecha del formulario"
  var birthdate = new Date(document.getElementById("cumple").value);
  console.log(birthdate.value);
  // cogemos el día de hoy para el cálculo
  var today = new Date();
  // utilizamos la función getFullYear
  var age = today.getFullYear() - birthdate.getFullYear();
  // 
  var m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  document.getElementById("Tucumple").innerHTML = "Tu cumpleaños es el"+birthdate;
  document.getElementById("Tuedad").innerHTML = "Tienes " + age + " años.";
}          




