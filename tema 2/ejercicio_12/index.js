const palabras = ["hola", "mundo", "javascript"];
let nuevoArray = [];

palabras.forEach(element => {
  nuevoArray.push(element.toUpperCase());
});

nuevoArray.reverse();
console.log(nuevoArray);