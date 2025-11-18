function addAnimation() {
  var el = document.querySelector('.miClase');
  el.classList.remove('animate__shakeX'); // elimina clase previa si existe
  void el.offsetWidth; // forzar reflow
  el.classList.add('animate__animated', 'animate__shakeX');
  el.addEventListener('animationend', function handler() {
    el.classList.remove('animate__shakeX');
    el.removeEventListener('animationend', handler);
  });
}
