const contentInput = document.getElementById('validation-input');
// console.log(contentInput);
const maxItems = parseInt(
  document.querySelector('input[data-length="6"]').dataset.length,
);
console.log('Numero maximo de elementos ' + maxItems);

contentInput.classList.add('validation-input');
let valueIngrese = 0;
contentInput.addEventListener('change', e => {
  valueIngrese = e.target.value.length;
  console.log('caracteres ingresados = ' + valueIngrese);
});
contentInput.addEventListener('blur', () => {
  if (valueIngrese == 0) {
    contentInput.classList.add('validation-input');
    contentInput.classList.remove('invalid', 'valid');
    return;
  }
  if (valueIngrese == maxItems) {
    contentInput.classList.add('valid');
    contentInput.classList.remove('invalid');
    console.log('El valor es valido');
  } else {
    contentInput.classList.add('invalid');
    contentInput.classList.remove('valid');
    console.log(
      'Invalido, el valor ingresado no corresponde con el valor solicitado',
    );
  }
});
