//Función para calcular la letra del DNI
// Ponemos el array TRWAGMYFPDXBNJZSQVHLCKE. Ejemplo si resto es 0 es la posición 0 del array, T... etc
function calcularLetraDNI(dni) {
    var letraDNI = "TRWAGMYFPDXBNJZSQVHLCKE"[dni % 23];
    return letraDNI;
}

//Función para validar el DNI, comprobamos que es un número isNaN, y que está entre 0 y 99999999
function validarDNI(dni) {
    var numero = parseInt(dni);
    if (isNaN(numero) || numero <= 0 || numero > 99999999) {
        return false;
    }
    return true;
}

//Función principal que utiliza las otras dos, con el formato prompt
function obtenerLetraDNI() {
    var dni = prompt("Por favor ingresa tu número de DNI sin letra:");
    if (!validarDNI(dni)) {
        alert("El número de DNI ingresado es inválido");
    } else {
        var letra = calcularLetraDNI(dni);
        alert("Tu letra de DNI es: " + letra);
    }
}

//Llamada a la función principal
obtenerLetraDNI();