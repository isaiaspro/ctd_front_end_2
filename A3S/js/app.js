function verificarGanhador(usuario, oponente){
    if(jogadaUsuario === 1 && joagadaOponente === 2);

    if (usuario === 1 && oponente === 2){

        console.log('Voce perdeu');
    }
}

function comecarJogo(){

    let jogadaUsuario = Number(prompt('O que vpcê deseja jogar? 1 = pedra 2 = papeç 3 = tesoura'));
    let joagadaOponente = Math.floor(Math.random()*3)+1

    verificarGanhador(jogadaUsuario, joagadaOponente);
}

function perguntarSeUsuarioDesejaJogar(){
    let usuarioDesejaJogar = confirm('VocÊ gostara de jogar');

    if(usuarioDesejaJogar === true){
        comecarJogo();
    }else{
        alert('Obrigado por visitar a pagina');
    }
}


perguntarSeUsuarioDesejaJogar();


