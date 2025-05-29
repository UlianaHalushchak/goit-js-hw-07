const ulElems = document.querySelector('#categories');
const liElems = document.querySelectorAll('.item')
console.log(`Number of categories: ${liElems.length}`);


for (let i = 0; i < liElems.length; i++) {
    const item = liElems[i];
    const title = item.querySelector("h2").textContent;
    const subitems = item.querySelectorAll("ul li").length;
console.log(`Category: ${title}`);
console.log(`Elements: ${subitems}`);
}