let buttons = document.querySelectorAll("input");
let dot = document.querySelector(".dot");
let worm = document.querySelector(".worm");
let last = 0;

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    last = i;
    console.log(button.offsetTop);
    dot.style.top = `${button.offsetTop + 12}px`;
  });
});
