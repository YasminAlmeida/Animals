export default function initTabFaq() {
  const tabRFaq = document.querySelectorAll('.js-tabRespostaFaq');
  const tabPFaq = document.querySelectorAll('.js-tabPerguntaFaq');
  function activeTabfaq(index) {
    tabRFaq.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabRFaq[index].classList.add('ativo');
  }
  if (tabPFaq.length && tabRFaq.length) {
    tabRFaq[0].classList.add('ativo');
    tabPFaq.forEach((tabPFaq, index) => {
      tabPFaq.addEventListener('click', () => {
        activeTabfaq(index);
      });
    });
  }
}
