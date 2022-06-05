function onLoginFormSubmit(event) {
  event.preventDefault();
  var container = document.querySelector('.container');
  var fundo = document.querySelector('.fundo');
  fundo.style.filter = 'blur(10px)';
  container.style.display = 'block';
}