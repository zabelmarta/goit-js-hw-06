function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

//const createBoxes = (amount) => {
//  const elementsToAdd = [];
//  for (let i = 0; i < amount; i++) {
//    const div = document.createElement("div");
//    const px = 30 + 10 * i
//    div.style.height = `${px}px`;
//    div.style.width = `${px}px`;
//    div.style.background = getRandomHexColor();
//    elementsToAdd.push(div);
    
//  }
//  return elementsToAdd;
//};


function createBoxes(amount) {
  let bgBoxes = ``;

  for (let i = 0; i < amount; i += 1) {
    bgBoxes += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }
  
  boxes.insertAdjacentHTML('afterbegin', bgBoxes);

  const boxArray = [...boxes.children];
  boxArray.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
};

btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

btnDestroy.addEventListener("click", () => {
  inputNum.value = "";
  boxes.innerHTML = "";
});