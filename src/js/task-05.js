const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputName);

function onInputName(event) {
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
