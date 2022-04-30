export default function initDropDown(){

}
const dropdown = document.querySelectorAll(['data-dropdown']);

dropdown.forEach (menu => {
  ['touchstart', 'click'].forEach(userEvent =>{
    menu.addEventListener(userEvent, hadleClick);
  })
})
function hadleClick(event){
  event.preventDefault();
  this.classList.toggle('active');
}