const numeros = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
let pares = [];
let impares = [];

for (let num of numeros) {
  if (num % 2 === 0) {
    pares.push(num);
  } else {
    impares.push(num);
  }
}

console.log("El array de entrada es: ",numeros);
console.log("Números pares: ", pares);
console.log("Números impares: ", impares);