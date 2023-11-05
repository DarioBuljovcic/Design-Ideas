// const menuBtn = document.querySelector(".menu-btn");
// const overlay = document.querySelector(".overlay");
const cursorDot = document.querySelector(".cursor-dot");
const cards = document.querySelectorAll(".card");
let move = true;

document.addEventListener("mousemove", (e) => {
  moveMouse(e);
});

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    move = false;
    let cardPosition = card.getBoundingClientRect();
    let cardX =
      cardPosition.left + (cardPosition.right - cardPosition.left) / 2;
    let cardY = cardPosition.top + (cardPosition.bottom - cardPosition.top) / 2;
    cursorDot.animate(
      [
        // keyframes
        {
          transform: `translate(${cardX - 15 * 16}px, ${cardY - 15 * 16}px)`,
          width: "30rem",
          height: "30rem",
        },
      ],
      {
        duration: 300,
        fill: "forwards",
        easing: "ease-out",
      }
    );
  });
  card.addEventListener("mouseleave", (e) => {
    move = true;
    moveMouse(e);
  });
  let lastSize = document.querySelector(".size");
  card.querySelectorAll(".size").forEach((size) => {
    size.addEventListener("click", () => {
      lastSize.classList.remove("selected");
      lastSize = size;
      size.classList.add("selected");
    });
  });
  let favorite = card.querySelector(".favorite");
  favorite.addEventListener("click", () => {
    if (favorite.dataset.clicked == "false") {
      favorite.dataset.clicked = "true";
      favorite.style.color = "#9d0b30";
    } else {
      favorite.dataset.clicked = "false";
      favorite.style.color = "#363636";
    }
  });
});

function moveMouse(e) {
  if (move) {
    const lagX = e.clientX;
    const lagY = e.clientY;
    const size = 16;
    cursorDot.animate(
      [
        // keyframes
        {
          transform: `translate(${lagX - size / 2}px, ${lagY - size / 2}px)`,
          width: ".8rem",
          height: ".8rem",
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
        easing: "ease-out",
      }
    );
  }
}
