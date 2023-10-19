function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while(contador <9){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_clap');
    };

    contador = contador + 1;

}



listaDeTeclas[1].onclick = tocaSomClap
listaDeTeclas[2].onclick = tocaSomTim
listaDeTeclas[3].onclick = tocaSomPuff


document.querySelector('.tecla_pom').onclick = tocaSomPom ();