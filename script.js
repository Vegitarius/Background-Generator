let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let colorInputs = document.getElementById("colorInputs");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let randomizer = document.querySelector('button');

color1.value = "#ff0000";
color2.value = "#ffff00";

let setGradient = () => {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
};

let randomColors = () => {
  color1.value = "#" + Math.random().toString(16).slice(2,8).toUpperCase();
  color2.value = "#" + Math.random().toString(16).slice(2,8).toUpperCase();
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";

  css.textContent = body.style.background + ";";
};

setGradient();
colorInputs.addEventListener("input", setGradient);
randomizer.addEventListener("click", randomColors)