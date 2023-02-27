import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";

var n1, n2;

function solicitarNumeros() {
 n1 = parseFloat(prompt("Informe o primeiro numero:"));
  console.log(n1);
 n2 = parseFloat(prompt("Informe o segundo numero:"));
  console.log(n2);
  isNaNVerification(n1, n2);
  calcular(n1, n2);
}



function calcular(n1, n2) {
  document.querySelector("h1").innerHTML = "";
  document.querySelector("h1").innerText += `Soma de ${n1} + ${n2} = ${somar(
    n1,
    n2
  )}\nSubtração de ${n1} - ${n2} = ${subtrair(
    n1,
    n2
  )}\nMultiplicação de ${n1} * ${n2} = ${multiplicar(
    n1,
    n2
  )}\nDivisão de ${n1} / ${n2} = ${dividir(n1, n2)}\n`;
}

function isNaNVerification(n1, n2){
  if (isNaN(n1) || isNaN(n2)){
window.alert("Insira um número por favor!")
solicitarNumeros();
  }
}

function limparResultado(){
  document.querySelector("h1").innerHTML = `0`;
}


var button = document.getElementById("newCalc");
button.addEventListener("click", limparResultado);
button.addEventListener("click", solicitarNumeros);


solicitarNumeros();