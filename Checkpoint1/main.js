const taskNameRef = document.querySelector('#taskName')
const urlRef = document.querySelector('#url')
const descriptionRef = document.querySelector('#description')
const createTaskButtonRef = document.querySelector('#createTaskButton')

console.log(taskNameRef)
console.log(urlRef)
console.log(descriptionRef)
console.log(createTaskButtonRef)



var formTask = {
  titulo: '',
  url: '',
  descricao: ''
}


// console.log(formTask)

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

  if(!errorMessage){
  errorMessage.id = 'taskErrorMessage'
  errorMessage.innerText = 'Por favor, preencha corretamente o campo URL'
  errorMessageRef.appendChild(errorMessage)
}
urlRef.classList.add('error')
formTask.url = url
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
  console.log(formTask)
}

taskNameRef.addEventListener('keyup', (event) => validaTitulo(event.target.value))
urlRef.addEventListener('keyup', (event) => validaUrl(event.target.value))
descriptionRef.addEventListener('keyup', (event) => validaDescricao(event.target.value))


createTaskButtonRef.addEventListener('click', (event) => newTask(event))


// validaTitulo()
// validaUrl()
// validaDescricao()

