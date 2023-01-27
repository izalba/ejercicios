function checkCase(phrase) {
  if(phrase === phrase.toUpperCase()) {
      console.log("La frase está escrita en mayúsculas");
  } else if (phrase === phrase.toLowerCase()) {
      console.log("La frase está escrita en minúsculas");
  } else {
      console.log("La frase está escrita con mayúsculas y minúsculas");
  }
}

const userPhrase = prompt("Escribe una frase:");
checkCase(userPhrase);
