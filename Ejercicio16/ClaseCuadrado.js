// Definimos la clase Cuadrado
class Cuadrado {
    constructor(lado) {
      this.lado = lado;
    }
    perimetro() {
      return this.lado * 4;
    }
    area() {
      return this.lado * this.lado;
    }
  }
  
  // Utilizamos los métodos que hemos definido en las clases instanciado 3 instancias de cuadrado
  const cuadradopeque = new Cuadrado(2);
  console.log(`Perímetro del cuadrado pequeño: ${cuadradopeque.perimetro()} cm`);
  console.log(`Área del cuadrado pequeño: ${cuadradopeque.area()} cm2`);
  document.getElementById("cuadradopequeño").innerHTML = `El lado del cuadrado pequeño: ${cuadradopeque.lado}  Área: ${cuadradopeque.area()}  cm2 Perímetro: ${cuadradopeque.perimetro()} cm` ;

  const cuadradomedio = new Cuadrado(5);
  console.log(`Perímetro del cuadrado mediano: ${cuadradomedio.perimetro()} cm`);
  console.log(`Área del cuadrado mediano:${cuadradomedio.area()} cm2`);
  document.getElementById("cuadradomediano").innerHTML = `El lado del cuadrado mediano: ${cuadradomedio.lado}  Área: ${cuadradomedio.area()}  cm2 Perímetro: ${cuadradomedio.perimetro()} cm` ;
  
  const cuadradogrande = new Cuadrado(10);
  console.log(`Perímetro del cuadrado grande: ${cuadradogrande.perimetro()} cm`);
  console.log(`Área del cuadrado grande: ${cuadradogrande.area()} cm2`);
  document.getElementById("cuadradogrande").innerHTML = `El lado del cuadrado grande: ${cuadradogrande.lado}  Área: ${cuadradogrande.area()}  cm2 Perímetro: ${cuadradogrande.perimetro()} cm` ;
