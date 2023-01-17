const liList = document.querySelectorAll('li.item');
const arrayList = Array.from(liList);

console.log("Number of categories: ", arrayList.length);



const categoryElementsCount = liList.forEach((e)=>{console.log(`Category: ${e.querySelector('h2').textContent}\nElements: ${e.querySelector('ul').childElementCount}`)})