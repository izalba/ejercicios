function eliminarConsonantes() {
  var frase = prompt("Ingresa una frase:");
  var vocales = "aeiouáéíóú";
  var nuevaFrase = "";

  for (var i = 0; i < frase.length; i++) {
      if (vocales.indexOf(frase[i].toLowerCase()) !== -1) {
          nuevaFrase += frase[i];
      }
  }

  console.log(nuevaFrase);
}

eliminarConsonantes();