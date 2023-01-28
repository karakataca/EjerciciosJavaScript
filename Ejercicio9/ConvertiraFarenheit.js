function DeCelsiusaFahrenheit() {

    // Obtener los valores de los campos del formulario
    var gradoscelsius = document.getElementById("grados").value;
    
    

    // Convertir los valores a números para pode realizar el cálculo
    gradoscelsius = parseFloat(gradoscelsius);
    gradosFahrenheit = (gradoscelsius * 9/5) + 32;
   
    console.log( "En grados Fahrenheit: " + gradosFahrenheit);
    //Mostrando en el div resultadoArea
    document.getElementById("GradosFahrenheit").innerHTML = "En grados Fahrenheit: " + gradosFahrenheit
}
