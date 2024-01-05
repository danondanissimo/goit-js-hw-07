const inputName = document.querySelector("#name-input");

const outputName = document.getElementById("name-output");

inputName.addEventListener("input", () => {
  if (inputName.value.trim().length !== 0) {
    outputName.innerHTML = inputName.value.trim();
  } else {
    outputName.innerHTML = "Anonymous";
  }
});

inputName.addEventListener("change", () => {
  inputName.value = "";
});
