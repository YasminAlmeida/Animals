export default function initTooltip(){
  
}
const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
})
function onMouseOver(event){
  const tooltipBox = criarTolltipBox(this);
  tooltipBox.style.top = event.pageY + 'px';
  tooltipBox.style.left = event.pageX + 'px';
  
  onMouseLeave.tooltipBox = tooltipBox;
  this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
  tooltipBox: '',
  handleEvent(){
    this.tooltipBox.remove();  
    this.removeaddEventListener('mouseleave', onMouseLeave)
  }
}

function criarTolltipBox(element){
  const tooltipBox= document.createElement('div');
 const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}