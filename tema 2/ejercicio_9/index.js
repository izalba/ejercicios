function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
let celsius = prompt("Indica la temperatura en Celsius");
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);