function darkMode(){

let body = document.querySelector('body');


body.classList.toggle('dark');

console.log(body);

if (body.classList.contains('dark') ){
document.querySelector('#button').innerHTML = "LightMode"
}else{
    document.querySelector('#button').innerHTML = "DarkMode"
}

}

