const data = ["hola", 2, 4, "adios"];
let num = 0;
let max = -Infinity;
let sum = 0;
let mul = 1;
let res = 0;
let numbers = [];
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    num = data[i];
    if(num>max) max = num;
    sum += num;
    mul *= num;
    if(res==0) 
      res = num;
    else res -= num;
    numbers.push(num);
  }
}
console.log("Los números son:" + numbers);
document.getElementById("Numeros").innerHTML ="Los números son:" + numbers
console.log("El número mayor es: " + max);
document.getElementById("Mayor").innerHTML ="El número mayor es: " + max
console.log("La suma es: " + sum);
document.getElementById("Suma").innerHTML ="La suma es: " + sum
console.log("La multiplicación es: " + mul);
document.getElementById("Multiplicacion").innerHTML ="La multiplicación es: " + mul
console.log("La resta es: " + res);
document.getElementById("Resta").innerHTML ="La resta es: " + res
