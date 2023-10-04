const scrollers = document.querySelectorAll(".container");

scrollers.forEach((scroller) => {
  const scrollerInner = scroller.querySelector(".scroller");
  const content = Array.from(scrollerInner.children);
  content.forEach((item) => {
    const copy = item.cloneNode(true);
    scrollerInner.appendChild(copy);
  });
});
