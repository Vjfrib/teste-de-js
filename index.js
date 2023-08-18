const { varParaArrow } = require ("./functions.js");
const { greeting } = require ("./functions.js");
const { greetingInformal } = require ("./functions.js");

//varParaArrow();
function scriptDeSaudar(){
let meuNomin = prompt("digite seu nome");
meuNomin = greetingInformal(meuNomin);
alert(meuNomin);
}

//chama, agora
scriptDeSaudar();