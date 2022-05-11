const categoriesNumber = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesNumber.children.length}`);

const categoriesItem = document.querySelectorAll('.item');
categoriesItem.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})