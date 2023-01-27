function ParImpar(numero) {
  if (numero % 2 === 0) {
    return `El número ${numero} es par`;
  } else {
    return `El número ${numero} es impar`;
  }
}
numero = prompt("Indroduce un valor numérico")
console.log(ParImpar(numero));