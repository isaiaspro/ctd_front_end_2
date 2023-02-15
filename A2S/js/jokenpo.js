/*const pedra = 1, papel = 2, tesoura =3;

let escolha = parseInt(prompt('[1] Pedra | [2] Papel | [3] Tesoura'));


let computador = parseInt(Math.random()*3+1);
console.log(computador);

if(escolha == pedra && computador == pedra) {
    window.alert('O resutado foi 🪨 x 🪨 Deu empate!');
  } else if(escolha == pedra && computador == papel) {
    window.alert('O resutado foi 🪨 x 📄 Você perdeu! 😒');
  } else if(escolha == pedra && computador == tesoura) {
    window.alert('O resutado foi 🪨 x ✂️ Você ganhou🎉');
  } else if(escolha == papel && computador == pedra) {
    window.alert('O resutado foi 📄 x 🪨 Você ganhou🎉');
  } else if(escolha == papel && computador == papel) {
    window.alert('O resutado foi 📄 x 📄 Deu empate!');
  } else if(escolha == papel && computador == tesoura) {
    window.alert('O resutado foi 📄 x ✂️ Você perdeu! 😒');
  } else if(escolha == tesoura && computador == pedra) {
    window.alert('O resutado foi ✂️ x 🪨 Você perdeu!');
  } else if(escolha == tesoura && computador == papel){
    window.alert('O resutado foi ✂️ x 📄 Você ganhou🎉');
  }else{
    window.alert('O resutado foi ✂️ x ✂️ Deu empate!');
  }*/

const pedra = 1, papel = 2, tesoura = 3;
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

for (let rodada = 1; rodada <= 3; rodada++) {
  let escolha = parseInt(prompt('1️⃣🪨Pedra\n2️⃣📄Papel\n3️⃣✂️Tesoura'));


  let computador = parseInt(Math.random() * 3 + 1);

console.log('TESTE:' + computador);
 

  if (escolha === pedra && computador === pedra) {
    console.log(`Rodada ${rodada}: 🪨 x 🪨 Deu empate!`); 
    window.alert(`Rodada ${rodada}: 🪨 x 🪨 Deu empate!`);
  } else if (escolha === pedra && computador === papel) {
    console.log(`Rodada ${rodada}: 🪨 x 📄 Você perdeu! 😒`);
    window.alert(`Rodada ${rodada}: 🪨 x 📄 Você perdeu! 😒`);
    pontuacaoComputador++;
  } else if (escolha === pedra && computador === tesoura) {
    console.log(`Rodada ${rodada}: 🪨 x ✂️ Você ganhou! 🎉`);
    window.alert(`Rodada ${rodada}: 🪨 x ✂️ Você ganhou! 🎉`);
    pontuacaoJogador++;
  } else if (escolha === papel && computador === pedra) {
    console.log(`Rodada ${rodada}: 📄 x 🪨 Você ganhou! 🎉`);
    window.alert(`Rodada ${rodada}: 📄 x 🪨 Você ganhou! 🎉`);
    pontuacaoJogador++;
  } else if (escolha === papel && computador === papel) {
    console.log(`Rodada ${rodada}: 📄 x 📄 Deu empate!`);
    window.alert(`Rodada ${rodada}: 📄 x 📄 Deu empate!`);
  } else if (escolha === papel && computador === tesoura) {
    console.log(`Rodada ${rodada}: 📄 x ✂️ Você perdeu! 😒`);
    window.alert(`Rodada ${rodada}: 📄 x ✂️ Você perdeu! 😒`);
    pontuacaoComputador++;
  } else if (escolha === tesoura && computador === pedra) {
    console.log(`Rodada ${rodada}: ✂️ x 🪨 Você perdeu! 😒`);
    window.alert(`Rodada ${rodada}: ✂️ x 🪨 Você perdeu! 😒`);
    pontuacaoComputador++;
  } else if (escolha === tesoura && computador === papel) {
    console.log(`Rodada ${rodada}: ✂️ x 📄 Você ganhou! 🎉`);
    window.alert(`Rodada ${rodada}: ✂️ x 📄 Você ganhou! 🎉`);
    pontuacaoJogador++;
  } else if (escolha === tesoura && computador === tesoura) {
    console.log(`Rodada ${rodada}: ✂️ x ✂️ Deu empate!`);
    window.alert(`Rodada ${rodada}: ✂️ x ✂️ Deu empate!`);
  } else{
    window.alert('Opção Inválida, tente novamente.');
    rodada--;
  }
}

if (pontuacaoJogador > pontuacaoComputador) {
  console.log(`Você venceu! Sua pontuação foi de: ${pontuacaoJogador} x ${pontuacaoComputador} contra a máquina`);
  // window.alert(`Você venceu! Sua pontuação: ${pontuacaoJogador} x ${pontuacaoComputador} da máquina`);
  document.querySelector('h1').innerText += `Você venceu! O placar foi de: ${pontuacaoJogador} x ${pontuacaoComputador} contra a máquina`;
} else if (pontuacaoJogador < pontuacaoComputador) {
  console.log(`Você perdeu! Sua pontuação foi de: ${pontuacaoJogador} x ${pontuacaoComputador} contra a máquina`);
  // window.alert(`Você perdeu! Sua pontuação: ${pontuacaoJogador} x ${pontuacaoComputador} da máquina`);
  document.querySelector('h1').innerText += `Você perdeu! O placar foi de: ${pontuacaoJogador} x ${pontuacaoComputador} à favor da máquina`;
} else {
  console.log(`Deu empate! Sua pontuação foi de: ${pontuacaoJogador} x ${pontuacaoComputador} contra a máquina`);
  // window.alert(`Deu empate! Sua pontuação: ${pontuacaoJogador} x ${pontuacaoComputador} da máquina`);
  document.querySelector('h1').innerText += `Deu empate! O placar foi de: ${pontuacaoJogador} x ${pontuacaoComputador}`;
}