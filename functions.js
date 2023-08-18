
function varParaArrow (){
  let meuNome = prompt("digite seu nome");
  const saudationGreetings = nome => `oi ${nome}`;
  alert(saudationGreetings(meuNome));
  //Alert com o resultado
}


let  greeting = name =>{ 
  name = "sr. "+name;
  return `oi, ${name}`;
  //com uma linha, presume-se que a linha em questão já é o retorno
}

let  greetingInformal = name => `oi, ${name}!`;
  //com uma linha, muito simples

module.exports = { varParaArrow, greeting, greetingInformal }