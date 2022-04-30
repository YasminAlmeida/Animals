export default function initMenu(){ 
  const botao = document.getElementById('menu-mobile');    
  const options = document.querySelector('.options-menu');
  botao.addEventListener('click', abrirModal);
  function abrirModal(event){
    event.preventDefault();
    botao.classList.add('ativo');
    if (options.classList.contains('ativo')) {
      options.classList.remove('ativo');
    }else{
      options.classList.add('ativo');
    }
  }    
}
