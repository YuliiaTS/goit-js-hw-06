const inputEl = document.querySelector('#validation-input');
const totalLenght = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputSymbols);

function onInputSymbols() {
  if (inputEl.value.length === Number(totalLenght)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
