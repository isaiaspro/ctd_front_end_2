import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";

let n1 = parseFloat(prompt("Informe o primeiro numero:"));
let n2 = parseFloat(prompt("Informe o segundo numero:"));

console.log(somar(n1, n2));
console.log(subtrair(n1, n2));
console.log(multiplicar(n1, n2));
console.log(dividir(n1, n2));

/*window.alert(
  `Soma: ${somar(n1, n2)}\nSubtração: ${subtrair(
    n1,
    n2
  )}\nMultiplicação: ${multiplicar(n1, n2)}\nDivisão: ${dividir(n1, n2)}\n`
);*/

document.querySelector("h1").innerText += `Soma de ${n1} + ${n2} = ${somar(n1,n2)}\nSubtração de ${n1} - ${n2} = ${subtrair(n1, n2)}\nMultiplicação de ${n1} * ${n2} = ${multiplicar(n1,n2)}\nDivisão de ${n1} / ${n2}: ${dividir(n1, n2)}\n`;
