let currentImg = document.querySelector(".imageContainer");
document.querySelectorAll(".imageContainer").forEach((img) => {
  img.addEventListener("click", () => {
    if (img !== currentImg) {
      img.classList.add("active");
      currentImg.classList.remove("active");
      currentImg = img;
      console.log(img);
    }
  });
});
