function sumaPares(numeros) {
  let suma = 0;
  for (let num of numeros) {
      if (num % 2 === 0) {
          suma += num;
      }
  }
  return suma;
}

console.log(sumaPares([1, 2, 3, 4, 14]));
