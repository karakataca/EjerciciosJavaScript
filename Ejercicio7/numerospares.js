document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    var numeros = document.getElementById('numeros').value;
    // Llamamos a la función suma pares, utilizando el método split por , 
    var suma = sumaPares(numeros.split(','));
    document.getElementById("SumadePares").innerHTML = "La suma es "+ suma;
    console.log(suma);
});

function sumaPares(numeros) {
    // la función map nos devuelve otro array a partir del existente, pendiente de si es valida la función
    // Devuelve el numero correspondiente a la cadena, lo convierte en un array de números
    numeros = numeros.map(function(num){ return parseInt(num)});
    // Ahora filtramos ese array de números
    // Filtramos los números pares, mediante el método filter indicando que el filtro es que sea divisible por 2 (par)
    var pares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
    // Calcular la suma de los números pares, mediante la función reduce que aplica la función de sumar
    var suma = pares.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
    return suma;
}

