function validaTitulo(){
  let errorMessageRef = document.querySelector('.input_titulo') 
  let taskNameRef = document.querySelector('#taskName')
  let errorMessage = document.createElement('p')
  errorMessage.id = 'taskErrorMessage'
  errorMessage.innerText = 'Por favor, preencha corretamente o campo Título'
  errorMessageRef.appendChild(errorMessage)
  taskNameRef.classList.add('error')
}

function validaUrl(){
  let errorMessageRef = document.querySelector('.input_url') 
  let urlRef = document.querySelector('#url')
  let errorMessage = document.createElement('p')
  errorMessage.id = 'taskErrorMessage'
  errorMessage.innerText = 'Por favor, preencha corretamente o campo URL'
  errorMessageRef.appendChild(errorMessage)
  urlRef.classList.add('error')
}

function validaDescricao(){
  let errorMessageRef = document.querySelector('.input_descricao') 
  let descricaoRef = document.querySelector('#description')
  let errorMessage = document.createElement('p')
  errorMessage.id = 'taskErrorMessage'
  errorMessage.innerText = 'Por favor, preencha corretamente o campo Descrição'
  errorMessageRef.appendChild(errorMessage)
  descricaoRef.classList.add('error')
}

validaTitulo()
validaUrl()
validaDescricao()

