const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let suma = 0;

// Con bucle for
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}
console.log("la suma es", suma);

// Con bucle for of
suma = 0;
for (const nota of notas) {
  suma += nota;
}
console.log("la suma es", suma);
