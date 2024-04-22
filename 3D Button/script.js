const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;

    const offsetX = e.offsetX - centerX;
    const offsetY = e.offsetY - centerY;

    console.log(offsetX, offsetY);

    button.style.setProperty("--_x-motion", `${offsetX}px`);
    button.style.setProperty("--_y-motion", `${offsetY}px`);
  });
});
