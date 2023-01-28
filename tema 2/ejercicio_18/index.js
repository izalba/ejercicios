
const btnSave = document.querySelector("button");
btnSave.addEventListener("click", function(){
    alert("Guardado :)");
});


const inputName = document.querySelector("label + input");
inputName.addEventListener("focus", function(){
    inputName.style.backgroundColor = "yellow";
});
inputName.addEventListener("blur", function(){
    inputName.style.backgroundColor = "white";
});

const inputLetter = document.querySelectorAll("label + input")[1];
let lastLetter = "";
inputLetter.addEventListener("input", function(){
    let letter = inputLetter.value[inputLetter.value.length - 1]; // obtenemos solo la última letra escrita
    if(/[aeiouáéíóú]/.test(letter)){
        inputLetter.style.color = "red";
        lastLetter = "vocal";
    } else if(/[bcdfghjklmnpqrstvwxyz]/.test(letter)){
        inputLetter.style.color = "blue";
        lastLetter = "consonante";
    } else {
        inputLetter.style.color = "black";
        lastLetter = "";
    }
});
