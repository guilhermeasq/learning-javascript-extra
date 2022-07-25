const listaDeTeclas = document.querySelectorAll('input[type=button]');
const displayTel = document.querySelector('input[type=tel]');

for (let contador = 0; contador<listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  
  tecla.onclick = function (){
    displayTel.value += tecla.value;
  }
  
  tecla.onkeydown = function (pressionou) {
    if (pressionou.code === 'Enter' || pressionou.code === 'Space'){
        tecla.classList.add('ativa');  
    }  
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}