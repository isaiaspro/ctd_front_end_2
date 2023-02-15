let nome = prompt('Qual é o seu nome?');

 let idade = parseInt( prompt("Digite a sua idade")); 

 function verificarNaN(idade) {
     if (isNaN(idade)){
         return 'NaN';
     }
     return idade;
 }

 while (verificarNaN(idade)=='NaN') {
     idade = parseInt( prompt("Digite a sua idade"));

     if (verificarNaN(idade) != 'NaN') {
         break;
     }

     console.log("Você não digitou um número"); 
     window.alert("Você não digitou um número");
 }

 if(verificarNaN(idade)>=18) {
     document.querySelector('h1').innerText += ' ' + nome + ', você tem ' + idade + ' anos, e é maior de idade';
     console.log("Você é maior de idade"); 
 } else {
     document.querySelector('h1').innerText += ' ' + nome + ', você tem ' + idade + ' anos, e é menor de idade';
     console.log("Você é menor de idade");
 }