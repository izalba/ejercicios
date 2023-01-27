
const links = document.querySelectorAll("a");
console.log("Número de enlaces de la página: " + links.length);


const PenulLink = links[links.length-2];
console.log("Dirección a la que enlaza el penúltimo enlace: " + PenulLink.href);


const TercerParr = document.getElementById("tercer parrafo");


const linksTercerParr = TercerParr.querySelectorAll("a");
console.log("Número de enlaces del tercer párrafo: " + linksTercerParr.length);


const Nodo = document.createElement("div");
Nodo.innerHTML = "Número de enlaces de la página: " + links.length + "<br>" +
                       "Dirección a la que enlaza el penúltimo enlace: " + PenulLink.href + "<br>" +
                       "Número de enlaces del tercer párrafo: " + linksTercerParr.length;


document.body.appendChild(Nodo);
