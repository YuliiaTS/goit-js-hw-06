const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

function onIncrementBtnClick() {
  refs.valueEl.textContent = counterValue += 1;
}

function onDecrementBtnClick() {
  refs.valueEl.textContent = counterValue -= 1;
}

refs.incrementBtn.addEventListener("click", onIncrementBtnClick);
refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
