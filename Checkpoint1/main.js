// Definir uma função para gerar uma mensagem sobre o Dia Internacional da Mulher
function gerarMensagem() {
    const palavras1 = ["Celebre", "Honre", "Lembre-se", "Reconheça"];
    const palavras2 = ["a força", "a coragem", "a determinação", "a resiliência"];
    const palavras3 = ["das mulheres", "das mães", "das filhas", "das avós"];
  
    const rand1 = Math.floor(Math.random() * palavras1.length);
    const rand2 = Math.floor(Math.random() * palavras2.length);
    const rand3 = Math.floor(Math.random() * palavras3.length);
  
    return `${palavras1[rand1]} ${palavras2[rand2]} ${palavras3[rand3]} neste Dia Internacional da Mulher!`;
  }
  
  // Exibir a mensagem gerada pela função
  console.log(gerarMensagem());
  