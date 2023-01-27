function calcular() {
    // Obtener los valores de los campos del formulario
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var lado3 = document.getElementById("lado3").value;

    // Convertir los valores a números para pode realizar el cálculo
    lado1 = parseFloat(lado1);
    lado2 = parseFloat(lado2);
    lado3 = parseFloat(lado3);

    // Cálculo del volumen
    var volumen = lado1 * lado2 * lado3;
    // Mostramos en la consola
    console.log("Volumen: " + volumen);
    //mostrando en el div resultadoVolumen
    document.getElementById("resultadoVolumen").innerHTML = "Volumen: " + volumen;

    // Cálculo del área
    var area = 2 * (lado1 * lado2 + lado1 * lado3 + lado2 * lado3);
   // Mostramos en la consola
    console.log("Area: " + area);
    //Mostrando en el div resultadoArea
    document.getElementById("resultadoArea").innerHTML = "Area: " + area;
}
