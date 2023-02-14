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



 /*let a = parseInt("22"); 
 let b = parseInt(prompt("Introduza idade")); 
 let c = parseInt("22"+"150"); 
 let d = parseInt(22+150) 
 let e = parseInt(22+parseInt("150")); 
 let f = parseInt(22.55); 
 let g = parseFloat(22.34);
 let h = parseFloat(22.3456284);
 console.log(a); 
 console.log(b); 
 console.log(c); 
 console.log(d); 
 console.log(e); 
 console.log(f);
 console.log(g); 
 console.log(h); */