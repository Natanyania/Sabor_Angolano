function filtrar(categoria){

    let fotos = document.querySelectorAll('.foto');

    fotos.forEach(foto => {

        if(categoria === 'todos'){
            foto.style.display = '';        
        }
        else if(foto.classList.contains(categoria)){
            foto.style.display = '';        
        }
        else{
            foto.style.display = 'none';
        }

    });

    let botoes = document.querySelectorAll('.menu-galeria button');

    botoes.forEach(botao => {
        botao.classList.remove('ativo');
    });

    event.target.classList.add('ativo');
}
