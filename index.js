const { varParaArrow } = require ("./functions.js");
const { greeting } = require ("./functions.js");

//varParaArrow();

let meuNomin = prompt("digite seu nome");
meuNomin = greeting(meuNomin);
alert(meuNomin);
