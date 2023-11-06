const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  const boxSize = 30;
  if (amount <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  let boxesMarkup = "";
  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    const box = ` <div style='width: ${size}px; height: ${size}px; background-color: ${color}; border-radius: 2px;'></div>`;
    boxesMarkup += box;
  }
  boxes.insertAdjacentHTML("beforeend", boxesMarkup);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
