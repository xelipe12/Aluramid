function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio).play('');

   if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
   }else{
      alert('Elemento não encontrado');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(contador = 0; contador < listaDeTeclas.length; contador++){

    const instrumento = listaDeTeclas[contador].classList[1];

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown  = function(){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup  = function(){
        tecla.classList.remove('ativa');
}
}