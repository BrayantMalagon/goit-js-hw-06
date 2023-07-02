const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let list = document.getElementById('ingredients');

ingredients.forEach(element => {
  const li = document.createElement('li');
  li.textContent = element;
  console.log(li);
  list.append(li);
});
