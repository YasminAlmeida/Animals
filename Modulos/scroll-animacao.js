
export default function initTabFaq(){
  const tabPFaq = document.querySelectorAll('.js-tabPerguntaFaq');
  const tabRFaq = document.querySelectorAll('.js-tabRespostaFaq');

  if(tabPFaq.length && tabRFaq.length){
    tabRFaq[0].classList.add('ativo');
    function activeTabfaq(index){
      tabRFaq.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabRFaq[index].classList.add('ativo');
    }

    tabPFaq.forEach((tabPFaq, index) =>{
      tabPFaq.addEventListener('click', ()=>{
        activeTabfaq(index);
      })
  });
}
}