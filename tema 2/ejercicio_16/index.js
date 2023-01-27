class AreaPer {
  constructor(lado) {
    this.side = lado;
  }

  perimetro() {
    return this.side * 4;
  }

  area() {
    return this.side ** 2;
  }
}

const areapeq = new AreaPer(2);
console.log("El perímetro del pequeño es: ",areapeq.perimetro(),"cm");
console.log("El area del pequeño es: ", areapeq.area(), "cm²");

const areamed = new AreaPer(5);
console.log("El perímetro del mediano es: ",areamed.perimetro(),"cm");
console.log("El area del mediano es:",areamed.area(), "cm²");

const areagran = new AreaPer(10);
console.log("El perímetro del grande es: ",areagran.perimetro(), "cm");
console.log("El area del mediano es:",areagran.area(), "cm²");
