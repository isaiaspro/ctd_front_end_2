const taskNameRef = document.querySelector('#taskName')
const urlRef = document.querySelector('#url')
const descriptionRef = document.querySelector('#description')
const createTaskButtonRef = document.querySelector('#createTaskButton')
const taskCardsRef = document.querySelector('#taskCards')


const cards = []

console.log(cards)

createTaskButtonRef.disabled = true
createTaskButtonRef.classList.add('button_error')

function validaCampos() {
  const errors = document.querySelectorAll('.error')
  if (errors.length > 0) {
    createTaskButtonRef.disabled = true
  } else {
    createTaskButtonRef.disabled = false
  }
}



function validaTitulo(titulo, allowEmpty=false){
  let errorMessageRef = document.querySelector('.input_titulo') 
  let taskNameRef = document.querySelector('#taskName')
  let errorMessage = document.createElement('p')

  titulo = titulo.trim()

  if (titulo === '') {
    if (errorMessageRef.querySelector('#taskErrorMessage')) {
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'));
    }
    errorMessage.id = 'taskErrorMessage'
    errorMessage.innerText = '*Por favor, preencha o campo Título, ele não pode ficar em branco ou conter apenas espaços'
    errorMessageRef.appendChild(errorMessage)
    taskNameRef.classList.add('error')
    createTaskButtonRef.classList.add('button_error')
    createTaskButtonRef.disabled = true
  return  
  }else{
    if(errorMessageRef.querySelector('#taskErrorMessage')){
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'))
    }
    taskNameRef.classList.remove('error')
    createTaskButtonRef.classList.remove('button_error')
    createTaskButtonRef.disabled = false
  }
}


function validaUrl(url, allowEmpty=false){
  let errorMessageRef = document.querySelector('.input_url') 
  let urlRef = document.querySelector('#url')
  let errorMessage = document.createElement('p')

    if (url === '') {
    if (errorMessageRef.querySelector('#taskErrorMessage')) {
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'));
    }
    errorMessage.id = 'taskErrorMessage'
    errorMessage.innerText = '*Por favor, preencha o campo URL'
    errorMessageRef.appendChild(errorMessage)
    urlRef.classList.add('error')
    createTaskButtonRef.classList.add('button_error')
    createTaskButtonRef.disabled = true
  return  
  }

  let regex = new RegExp("^((((https?|ftp|gopher|telnet|nntp):(\\/\\/)|(http|https):\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})|((mailto|news):(\\/\\/)|(http|https):\\/\\/)([a-z0-9-]+(\\.[a-z0-9-]+)*\\.[a-z]{2,6}))(:\\d{2,5})?([\\/\\w.-]*)*\\/?(\\?([\\w\\-.,@?^=%&:\\/~+#]*)+)?(#([\\w\\-\\s]*)+)?)?$", "i");
  
  if (!regex.test(url)) {
    if (errorMessageRef.querySelector('#taskErrorMessage')) {
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'));
    }
  if (!errorMessageRef.querySelector('#taskErrorMessage')) {
    errorMessage.id = 'taskErrorMessage'
    errorMessage.innerText = '*Por favor, preencha corretamente o campo URL, com uma url completa'
    errorMessageRef.appendChild(errorMessage)
  }
    urlRef.classList.add('error')
    createTaskButtonRef.classList.add('button_error')
    createTaskButtonRef.disabled = true
  }else{
    if(errorMessageRef.querySelector('#taskErrorMessage')){
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'))
    }
    urlRef.classList.remove('error')
    createTaskButtonRef.classList.remove('button_error')
    createTaskButtonRef.disabled = false
  }
  
  }




function validaDescricao(descricao, allowEmpty=false){
  let errorMessageRef = document.querySelector('.input_descricao') 
  let descriptionRef = document.querySelector('#description')
  let errorMessage = document.createElement('p')

  descricao = descricao.trim()

  if (descricao === '') {
    if (errorMessageRef.querySelector('#taskErrorMessage')) {
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'));
    }
    errorMessage.id = 'taskErrorMessage'
    errorMessage.innerText = '*Por favor, preencha o campo Descrição, ele não pode ficam em branco ou conter apenas espaços'
    errorMessageRef.appendChild(errorMessage)
    descriptionRef.classList.add('error')
    createTaskButtonRef.classList.add('button_error')
    createTaskButtonRef.disabled = true
  return  
  }else{
    if(errorMessageRef.querySelector('#taskErrorMessage')){
      errorMessageRef.removeChild(errorMessageRef.querySelector('#taskErrorMessage'))
    }
    descriptionRef.classList.remove('error')
    createTaskButtonRef.classList.remove('button_error')
    createTaskButtonRef.disabled = false
  }

}

function newTask(event){
  event.preventDefault()

let card = {
  titulo: taskNameRef.value,
  url: urlRef.value,
  descricao: descriptionRef.value
 }

validaUrl()
validaTitulo()
validaDescricao()

 cards.push(card)

 taskCardsRef.innerHTML += `
 <div class="card">
 <img src="${card.url}" alt="">
 <h3> ${card.titulo} </h3>
 <p> ${card.descricao} </p>
</div>
`

}


taskNameRef.addEventListener('keyup', (event) => validaTitulo(event.target.value))
urlRef.addEventListener('keyup', (event) => validaUrl(event.target.value))
descriptionRef.addEventListener('keyup', (event) => validaDescricao(event.target.value))
createTaskButtonRef.addEventListener('click', (event) => newTask(event))



