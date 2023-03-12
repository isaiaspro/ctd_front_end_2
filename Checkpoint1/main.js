const taskNameRef = document.querySelector('#taskName')
const urlRef = document.querySelector('#url')
const descriptionRef = document.querySelector('#description')
const createTaskButtonRef = document.querySelector('#createTaskButton')
const taskCardsRef = document.querySelector('#taskCards')

// console.log(taskCardsRef)


const cards = []

console.log(cards)

function validaTitulo(titulo){
  let errorMessageRef = document.querySelector('.input_titulo') 
  let taskNameRef = document.querySelector('#taskName')
  let errorMessage = document.createElement('p')

  if(!errorMessage){
  errorMessage.id = 'taskErrorMessage'
  errorMessage.innerText = 'Por favor, preencha corretamente o campo Título'
  errorMessageRef.appendChild(errorMessage)
}
taskNameRef.classList.add('error')
formTask.titulo = titulo
}


function validaUrl(url){
  let errorMessageRef = document.querySelector('.input_url') 
  let urlRef = document.querySelector('#url')
  let errorMessage = document.createElement('p')

  let regex = new RegExp("^(http|https)://[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$", "i");
  
  if (!regex.test(url)) {
    if(!errorMessage){
    errorMessage.id = 'taskErrorMessage'
    errorMessage.innerText = 'Por favor, preencha corretamente o campo URL'
    errorMessageRef.appendChild(errorMessage)
    urlRef.classList.add('error')
  }
  }
}




function validaDescricao(descricao){
  let errorMessageRef = document.querySelector('.input_descricao') 
  let descricaoRef = document.querySelector('#description')
  let errorMessage = document.createElement('p')

  if(!errorMessage){
  errorMessage.id = 'taskErrorMessage'
  errorMessage.innerText = 'Por favor, preencha corretamente o campo Descrição'
  errorMessageRef.appendChild(errorMessage)
}
descricaoRef.classList.add('error')
formTask.descricao = descricao
}

function newTask(event){
  event.preventDefault()

let card = {
  titulo: taskNameRef.value,
  url: urlRef.value,
  descricao: descriptionRef.value
 }

 console.log(card)

 cards.push(card)

 taskCardsRef.innerHTML += `
 <div class="card">
 <img src="${card.url}" alt="">
 <h3> ${card.titulo} </h3>
 <p> ${card.descricao} </p>
</div>
`

 console.log(cards)
}

// for(let card of cards){
//   taskCardsRef.innerHTML += `
//   <div class="card">
//   <img src="${card.url}" alt="">
//   <h3> ${card.titulo} </h3>
//   <p> ${card.descricao} </p>
// </div>
// `
// }

var formTask = {
titulo: taskNameRef,
url: urlRef,
descricao: descriptionRef
}

taskNameRef.addEventListener('keyup', (event) => validaTitulo(event.target.value))
urlRef.addEventListener('keyup', (event) => validaUrl(event.target.value))
descriptionRef.addEventListener('keyup', (event) => validaDescricao(event.target.value))
createTaskButtonRef.addEventListener('click', (event) => newTask(event))



