const inputName = document.querySelector("#name-input");

const outputName = document.getElementById("name-output");

inputName.addEventListener("input", () => {
  if (inputName.value.trim().length !== 0) {
    outputName.innerHTML = inputName.value.trim();
  } else {
    outputName.value = "Anonymous";
    console.log(outputName.innerHTML);
    inputName.value = "";
  }
});

inputName.addEventListener("change", () => {
  inputName.value = "";
});
