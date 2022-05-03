export default function initAnimalNumber(){
}
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero) => {
    const total = +numero.innerHTML;
    const inscremento = Math.floor(total/100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + inscremento;
      numero.innerText = start;
      if(start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    },0);
  });