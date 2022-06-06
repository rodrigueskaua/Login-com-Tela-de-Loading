function onLoginFormSubmit(event) {
  event.preventDefault();
  var container = document.querySelector('.container');
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'block';
  container.style.display = 'block';
}