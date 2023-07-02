const categories = document.getElementById('categories');
console.log('Number of categories: ' + categories.children.length);

let listadoDeItems = document.querySelectorAll('.item');
// console.log(listadoDeItems);

// let listadoDeItems2 = document.getElementsByClassName('item');
// console.log(listadoDeItems2);
const ArrayItems = [];

listadoDeItems.forEach(element => {
  console.log('Category ' + element.firstElementChild.textContent);
  console.log('Elements: ' + element.lastElementChild.children.length);
});
