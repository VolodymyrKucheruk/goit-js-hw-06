const spanValue = document.querySelector("#value");
let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const subtractingValue = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};
decrementBtn.addEventListener("click", subtractingValue);

const additionValue = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};
incrementBtn.addEventListener("click", additionValue);
