const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value == '' || password.value == '') {
    alert('Todos los espacios deben ser rellenados!');
    return;
  }
  console.log(`Email: ${email.value}`, `Contraseña: ${password.value}`);
  form.reset();
});
