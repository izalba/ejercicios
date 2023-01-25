console.log("hola");
// base 16 *23 cm
// volumen 13 cm

const volumen = 16*23*13;
console.log("volumen", volumen + " cm3");

// A = al + 2ab
const areaLateral = 23*13;
const areaBase = 16*23;
const areaTotal = areaLateral + 2 * areaBase;
console.log("area Total", areaTotal +  " cm2")

//Generalización
const base = 23;
const altura = 13;
const ancho = 16;

const volumen_1 = base * altura * ancho;
console.log("Volumen total ",volumen_1 + " cm3")

const area_1 = base * altura + 2* ancho * base;
console.log("Area total ", area_1 + " cm2")