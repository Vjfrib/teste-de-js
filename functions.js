
function varParaArrow (){
  let meuNome = prompt("digite seu nome");
  const saudationGreetings = nome => `oi ${nome}`;
  alert(saudationGreetings(meuNome));
  //Alert com o resultado
}

module.exports = { varParaArrow }