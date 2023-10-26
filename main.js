function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla')


for(contador = 0; contador < listaDeTeclas.length; contador++){

    const instrumento = listaDeTeclas[contador].classList[1];

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    };


}



listaDeTeclas[1].onclick = tocaSomClap
listaDeTeclas[2].onclick = tocaSomTim
listaDeTeclas[3].onclick = tocaSomPuff


document.querySelector('.tecla_pom').onclick = tocaSomPom ();