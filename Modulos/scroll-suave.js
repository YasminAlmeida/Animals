export default function scrollSuave() {
  const section = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    section.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (section.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
