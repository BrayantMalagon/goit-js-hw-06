const inputFont = document.getElementById('font-size-control');
const idtext = document.getElementById('text');
// console.log(inputFont);
inputFont.addEventListener('input', e => {
  let valueFont = e.target.value;
  console.log(valueFont);
  idtext.style.fontSize = `${valueFont}px`;
});
