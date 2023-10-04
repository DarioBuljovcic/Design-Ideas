//animation for the burger menu
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const cursorDot = document.querySelector(".cursor-dot");
const optionsContainer = document.querySelector(".options");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  overlay.classList.toggle("active");
  cursorDot.classList.toggle("white");
  optionsContainer.classList.toggle("active");
});

//dot that follows
document.addEventListener("mousemove", (e) => {
  const lagX = e.clientX;
  const lagY = e.clientY;
  const size = cursorDot.offsetWidth;
  cursorDot.animate(
    [
      // keyframes
      { transform: `translate(${lagX - size / 2}px, ${lagY - size / 2}px)` },
    ],
    {
      // timing options
      duration: 1000,
      fill: "forwards",
      easing: "ease-out",
    }
  );
});
const options = document.querySelectorAll(".option");
console.log(options);
options.forEach((option) => {
  option.addEventListener("mousemove", (e) => {
    option.classList.add("active");
    const centerX =
      option.getBoundingClientRect().left +
      window.scrollX +
      option.clientWidth / 2;
    const centerY =
      option.getBoundingClientRect().top +
      window.scrollX +
      option.clientHeight / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    // Calculate the distance from the center to the mouse cursor
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    // Set the maximum distance for text movement
    const maxDistance = 20; // Adjust as needed

    // Calculate the new position of the text
    const newX = centerX + Math.cos(angle) * Math.min(distance, maxDistance);
    const newY = centerY + Math.sin(angle) * Math.min(distance, maxDistance);

    option
      .querySelector("h1")
      .animate(
        [{ transform: `translate(${newX - centerX}px, ${newY - centerY}px)` }],
        {
          duration: 5000,
          fill: "forwards",
          easing: "ease-out",
        }
      );
  });
  option.addEventListener("mouseleave", (e) => {
    option.classList.remove("active");
    option.querySelector("h1").animate([{ transform: `translate(0px,0px)` }], {
      duration: 1000,
      fill: "forwards",
      easing: "ease-out",
    });
  });
});
