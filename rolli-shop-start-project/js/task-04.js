/*

*/

const btnMinus = document.querySelector('button[data-action="decrement"]');
// console.log(btnMinus);

const btnPlus = document.querySelector('[data-action="increment"]');
// console.log(btnPlus);

// const counterValue = document.querySelector("#value").textContent;
// let counterValue = 0;

let counterValue = document.querySelector("#value");
// console.log(counterValue);

btnMinus.addEventListener("click", (event) => {
  counterValue.innerText = Number(counterValue.innerText) - 1;
});
btnPlus.addEventListener("click", (event) => {
  counterValue.innerText = Number(counterValue.innerText) + 1;
});

// console.log(counterValue);
