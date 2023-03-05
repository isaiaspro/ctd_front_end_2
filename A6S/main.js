let contentRef = document.querySelector("#content");

// let texto = document.createTextNode('Texto criado pelo JavaScript');

// contentRef.appendChild(texto);

const noticias = [
  {
    titulo: "Primeira Notícia",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam eaque itaque illum repudiandae et quo labore ea fugit neque laborum fuga, velit eveniet magnam dolorem deserunt? Cupiditate, perferendis atque?",
    url: "#",
  },
  {
    titulo: "Segunda Notícia",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam eaque itaque illum repudiandae et quo labore ea fugit neque laborum fuga, velit eveniet magnam dolorem deserunt? Cupiditate, perferendis atque?",
    url: "#",
  },
  {
    titulo: "Terceira Notícia",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam eaque itaque illum repudiandae et quo labore ea fugit neque laborum fuga, velit eveniet magnam dolorem deserunt? Cupiditate, perferendis atque?",
    url: "#",
  },
];

for (let noticia of noticias) {
  contentRef.innerHTML += `
  <article>
      <h2>${noticia.titulo}</h2>
      <p> ${noticia.descricao} </p>
      <a href=" ${noticia.url} ">Acesse a notícia</a>
  </article>
    
    `;
}

console.log(contentRef);
