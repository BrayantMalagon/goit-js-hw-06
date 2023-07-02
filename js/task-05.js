const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

console.log(nameInput);
console.log(nameOutput.textContent);

nameInput.addEventListener('input', event => {
  nameOutput.textContent = event.currentTarget.value;
  if (event.target.value == '') {
    nameOutput.textContent = 'Anonymous';
  }
});
