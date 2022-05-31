export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const flecha = document.querySelector('.rotated');
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add('ativo');
    flecha.classList.add('rotatedativo');
  }
  function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove('ativo');
    flecha.classList.remove('rotatedativo');
  }
  function cliqueForaModal(event) {
    if (event.target === this);
    fecharModal(event);
  }
  botaoAbrir.addEventListener('click', abrirModal);
  botaoFechar.addEventListener('click', fecharModal);
  containerModal.addEventListener('click', cliqueForaModal);
}
