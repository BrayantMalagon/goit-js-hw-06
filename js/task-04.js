const valueInit = document.getElementById('value');
console.log(valueInit.textContent); // Muestra el valor

const buttonOne = document.querySelector('button[data-action="decrement"]');
console.log(buttonOne); // Muestra todo el código
buttonOne.addEventListener('click', event => {
  valueInit.textContent =
    parseInt(valueInit.textContent) + parseInt(event.target.textContent); // El target me da información del evento
  console.log(valueInit.textContent);
});

const buttonTwo = document.querySelector('button[data-action="increment"]');
buttonTwo.addEventListener('click', event => {
  valueInit.textContent =
    parseInt(valueInit.textContent) + parseInt(event.target.textContent);
  console.log(valueInit.textContent);
});
console.log(buttonTwo);
