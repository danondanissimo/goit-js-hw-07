const inputName = document.querySelector("#name-input");

inputName.addEventListener("change", () => {
  if (inputName.value.trim().length !== 0) {
    document.getElementById("name-output").innerHTML = inputName.value.trim();
  }
});
