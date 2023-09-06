const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

const counter = document.querySelector("#count");

increment.addEventListener("click", () => {
  let prevCount = parseInt(counter.innerText);
  counter.innerText = prevCount + 1;
});

decrement.addEventListener("click", () => {
  let prevCount = parseInt(counter.innerText);

  if (prevCount === 0) {
    alert("Cannot go below 0");
  } else {
    counter.innerText = prevCount - 1;
  }
});

reset.addEventListener("click", () => {
  counter.innerText = 0;
});
