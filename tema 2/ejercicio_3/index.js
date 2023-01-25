const data = ["hola", 87, 5, "adios"];

//Determina cuál de los números del array es mayor.
let max = data[1];
for (let i = 1; i < data.length; i++) {
    if (typeof data[i] === 'number' && data[i] > max) {
        max = data[i];
    }
}
console.log(`El número mayor es: ${max}`);

//Determina el resultado de las cinco operaciones numéricas realizadas con los dos elementos numéricos.
let num1, num2;
for (let i = 1; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        if (!num1) {
            num1 = data[i];
        } else {
            num2 = data[i];
            break;
        }
    }
}
console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 - num2}`);
console.log(`Multiplicación: ${num1 * num2}`);
console.log(`División: ${num1 / num2}`);
console.log(`Modulo: ${num1 % num2}`);