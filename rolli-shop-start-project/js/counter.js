// /*
// Один counter
// */

// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector("[data-counter]");

// btnMinus.addEventListener("click", (event) => {
//   if (Number(counter.innerText) > 1) {
//     counter.innerText -= 1;
//   }
// });

// btnPlus.addEventListener("click", (event) => {
//   counter.innerText = Number(counter.innerText) + 1;
// });

/*
ВСЕ Счётчики
*/

window.addEventListener("click", function (event) {
  if (
    event.target.dataset.action === "minus" ||
    event.target.dataset.action === "plus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");

    // console.log("Click window");

    if (event.target.dataset.action === "minus") {
      // console.log(event.target.dataset.action);
      if (Number(counter.innerText) > 1) {
        counter.innerText -= 1;
      }
    }
    if (event.target.dataset.action === "plus") {
      counter.innerText = Number(counter.innerText) + 1;
    }
  }
});
