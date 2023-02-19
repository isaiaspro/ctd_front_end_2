var pontuacaoJogador = 0;
var pontuacaoOponente = 0;

// Função que recebe três parametros pois iremos precisar das informações da jogada do usuario e da jogada do oponente e da rodada para realizar os comparativos e determinar quem é o vencedor, Exibir a rodada atualizada e o resultado.
function verificarGanhadorRodada(usuario, oponente, rodada) {
  // Tenha sempre em mente que: 1 representa Pedra, 2 representa Papel e 3 representa Tesoura
  const pedra = 1,
    papel = 2,
    tesoura = 3;

  if (usuario === pedra && oponente === pedra) {
    console.log(`Rodada ${rodada}: 🪨 x 🪨 Empate!`);
    window.alert(`Rodada ${rodada}: 🪨 x 🪨 Empate!`);
  } else if (usuario === pedra && oponente === papel) {
    console.log(`Rodada ${rodada}: 🪨 x 📄 Você perdeu! 😒`);
    window.alert(`Rodada ${rodada}: 🪨 x 📄 Você perdeu! 😒`);
    pontuacaoOponente++;
  } else if (usuario === pedra && oponente === tesoura) {
    console.log(`Rodada ${rodada}: 🪨 x ✂️ Você ganhou! 🎉`);
    window.alert(`Rodada ${rodada}: 🪨 x ✂️ Você ganhou! 🎉`);
    pontuacaoJogador++;
  } else if (usuario === papel && oponente === pedra) {
    console.log(`Rodada ${rodada}: 📄 x 🪨 Você ganhou! 🎉`);
    window.alert(`Rodada ${rodada}: 📄 x 🪨 Você ganhou! 🎉`);
    pontuacaoJogador++;
  } else if (usuario === papel && oponente === papel) {
    console.log(`Rodada ${rodada}: 📄 x 📄 Empate!`);
    window.alert(`Rodada ${rodada}: 📄 x 📄 Empate!`);
  } else if (usuario === papel && oponente === tesoura) {
    console.log(`Rodada ${rodada}: 📄 x ✂️ Você perdeu! 😒`);
    window.alert(`Rodada ${rodada}: 📄 x ✂️ Você perdeu! 😒`);
    pontuacaoOponente++;
  } else if (usuario === tesoura && oponente === pedra) {
    console.log(`Rodada ${rodada}: ✂️ x 🪨 Você perdeu! 😒`);
    window.alert(`Rodada ${rodada}: ✂️ x 🪨 Você perdeu! 😒`);
    pontuacaoOponente++;
  } else if (usuario === tesoura && oponente === papel) {
    console.log(`Rodada ${rodada}: ✂️ x 📄 Você ganhou! 🎉`);
    window.alert(`Rodada ${rodada}: ✂️ x 📄 Você ganhou! 🎉`);
    pontuacaoJogador++;
  } else if (usuario === tesoura && oponente === tesoura) {
    console.log(`Rodada ${rodada}: ✂️ x ✂️ Empate!`);
    window.alert(`Rodada ${rodada}: ✂️ x ✂️ Empate!`);
  } else {
    window.alert("Opção Inválida, tente novamente.");
  }

  //Caso chegue à terceira rodada, limpamos o placar, para assim atualizar e exibir o placar correto, após isso zeramos as pontuações para iniciar um novo jogo.
if (rodada == 3){
  document.getElementById("placar").innerHTML = "";
  mostarResultado(pontuacaoJogador, pontuacaoOponente);
  pontuacaoJogador = 0;
  pontuacaoOponente =0;
}
}

//Recolhe as jogadas durante 3 rodadas
function comecarJogo() {
  for (let rodada = 1; rodada <= 3; rodada++) {


    let usuario = parseInt(prompt("1️⃣🪨Pedra\n2️⃣📄Papel\n3️⃣✂️Tesoura"));

    //Verificamos se o usuário clicou em cancelar. Pois ao clicar em cancelar, o "usuario = NaN"
    //Então o jogo é cancelado, e essa função chama "perguntaUsuarioDesejaJogar()". Caso clique em cancelar, 
    //É exibido o alert("Obrigado por visitar a pagina");
    //FIM
    verificarNaN(usuario);
    if (isNaN(usuario)) {
      break;
    }
    

    let oponente = parseInt(Math.random() * 3 + 1);

    if (usuario < 1 || usuario > 3) {
      rodada--;
    }

    // Após obter a Jogada do Usuário e Gerar uma Jogada para o Oponente, chamamos a função para verificar quem foi o ganhador
    verificarGanhadorRodada(usuario, oponente, rodada);

  }
}


//Essa função atualiza o placar no pagina HTML
function mostarResultado(pontuacaoJogador, pontuacaoOponente) {
  if (pontuacaoJogador > pontuacaoOponente) {
    console.log(
      `Você venceu! Sua pontuação foi de: ${pontuacaoJogador} x ${pontuacaoOponente} contra a máquina`
    );
    /*window.alert(
      `Você venceu! Sua pontuação: ${pontuacaoJogador} x ${pontuacaoOponente} da máquina`
    );*/
    document.querySelector(
      "h1"
    ).innerText += `Você venceu! O placar foi de: ${pontuacaoJogador} x ${pontuacaoOponente} contra a máquina\n`;
  } else if (pontuacaoJogador < pontuacaoOponente) {
    console.log(
      `Você perdeu! Sua pontuação foi de: ${pontuacaoJogador} x ${pontuacaoOponente} à favor da máquina`
    );
    /* window.alert(
      `Você perdeu! Sua pontuação: ${pontuacaoJogador} x ${pontuacaoOponente} da máquina`
    );*/
    document.querySelector(
      "h1"
    ).innerText += `Você perdeu! O placar foi de: ${pontuacaoJogador} x ${pontuacaoOponente} à favor da máquina\n`;
  } else {
    console.log(
      `Empate! O placar foi: ${pontuacaoJogador} x ${pontuacaoOponente}. Tente Novamente\n`
    );
    /* window.alert(
      `Empate! Sua pontuação: ${pontuacaoJogador} x ${pontuacaoOponente}`
    );*/
    document.querySelector(
      "h1"
    ).innerText += `Empate! O placar foi: ${pontuacaoJogador} x ${pontuacaoOponente}.\n Tente Novamente!\n`;
  }
}

//Caso sim, começa o jogo, senão Agradece pela visita.
function perguntaUsuarioDesejaJogar() {
  let usuarioDesejaJogar = confirm("Você gostaria de jogar?");

  if (usuarioDesejaJogar === true) {
    comecarJogo();
  } else {
    alert("Obrigado por visitar a pagina");
    document.getElementById("placar").innerHTML = "";
    document.querySelector(
      "h1"
    ).innerText += `Obrigado por visitar a pagina 😉`;
  }
}

//Essa função limpa o placar
function limparPlacar(){
  document.getElementById("placar").innerHTML = "Placar Zerado!";
}


//Verifica se a opção escolhida foi Cancelar no prompt, caso sim, usuario = NaN.Então o jogo é cancelado e perdimos
//Se o usuário quer continuar o jogo
function verificarNaN(usuario) {
  if (isNaN(usuario)){
    window.alert("Jogo Cancelado");
    limparPlacar();
    perguntaUsuarioDesejaJogar();
  }
}

// Chamada da função que ira Começar o nosso game
perguntaUsuarioDesejaJogar();


//Botão Jogar Novamente
document.getElementById("btn_playAgain").addEventListener("click", comecarJogo);
//Botão Limpar placar
document.getElementById("btn_Limpar").addEventListener("click", limparPlacar);
