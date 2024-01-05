function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("[data-create]");

const buttonDestroy = document.querySelector("[data-destroy]");

const number = document.querySelector('[type="number"]');

const boxesContainer = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  if (number.value <= 100 && number.value > 0) {
    boxesContainer.innerHTML = "";
    createBoxes(number.value);
  }
  number.value = "";
});

buttonDestroy.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});

function createBoxes(elemAmount) {
  for (let i = 0; i < elemAmount; i += 1) {
    const element = document.createElement("div");

    element.style.height = `${30 + 10 * i}px`;
    element.style.width = `${30 + 10 * i}px`;
    element.style.backgroundColor = getRandomHexColor();

    boxesContainer.prepend(element);
  }
}
