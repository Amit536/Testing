const box = document.querySelector(".box");
let isPushed = false;
box.addEventListener("click", () => {
  if (box.classList.contains("moving")) return;
  box.classList.add("moving");
  box.classList.remove("pushed", "reverse");
  void box.offsetWidth;
  if (isPushed) {
    box.classList.add("reverse");
  } else {
    box.classList.add("pushed");
  }
  isPushed = !isPushed;
});
box.addEventListener("animationend", () => {
  box.classList.remove("moving");
});
