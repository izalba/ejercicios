// Almacenamos en una variable el número de DNI indicado por el usuario
var dni = prompt("Introduce tu número de DNI (sin letra)");

// Validamos que el número de DNI sea válido
if(dni < 0 || dni > 99999999) {
    console.log("El número de DNI proporcionado no es válido");
} else {
    // Almacenamos en otra variable la letra del DNI que se ha indicado
    var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)").toUpperCase();

    // Array de letras para el cálculo
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Cálculo de la letra del DNI
    var calculoLetra = letras[dni % 23];

    // Comparamos la letra calculada con la letra introducida
    if(calculoLetra == letra) {
        console.log("El número y la letra de DNI son correctos");
    } else {
        console.log("La letra indicada no es correcta");
    }
}
