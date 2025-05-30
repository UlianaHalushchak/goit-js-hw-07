const bodycolor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

bodycolor.addEventListener('click', handleColorChange);


function handleColorChange() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}