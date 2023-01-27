const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let mesesLargos = meses.filter(mes => mes.length > 7);
mesesLargos = mesesLargos.map(mes => mes.toUpperCase());
console.log(mesesLargos);
console.log("Meses con más de 7 letras: " + mesesLargos.length);
