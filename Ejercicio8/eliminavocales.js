
function eliminarConsonantes() {
    // asignamos a cadena el valor incluido en el form
    var cadena = document.getElementById("frase").value;
  //  Se utiliza la función replace indicando que todo lo que tenga 
    var nuevacadena = cadena.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "");
    document.getElementById("SinConsonantes").innerHTML = "La frase es "+ nuevacadena;
    console.log(nuevacadena);

}




