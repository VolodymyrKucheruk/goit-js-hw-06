// Скрипт який виводить список категорій.
const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");
console.dir(`Number of categories: ${categories.length}`);
// Застосовуємо  метод forEach() і виводимо в консоль імена категорій і кількість елементів.
categories.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});

