function obtenerNumerosYSuma(arr) {
    //Filtrar sólo los elementos que son números
    var numeros = arr.filter(function(elemento) {
        return typeof elemento === "number";
    });

    //Calcular la suma de los números
    var suma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    //Devolver el nuevo array y la suma
    return {numeros: numeros, suma: suma};
}

//Pedir el array mediante un prompt
var arrString = prompt("Ingrese una lista de números o valores separados por comas:");

//Convertir la cadena de texto en un array
var arr = arrString.split(",").map(function(valor) {
    return parseFloat(valor);
});

//Procesar el array y obtener la lista de números y su suma
var resultado = obtenerNumerosYSuma(arr);
console.log(resultado);

