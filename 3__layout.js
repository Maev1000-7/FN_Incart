function centered() {
  const box = document.querySelector(".flex-container");
  const left = document.querySelector(".left-p");
  const right = document.querySelector(".right-p");

  const boxWidth = box.getBoundingClientRect().width;

  const totalWidth =
    left.getBoundingClientRect().width + right.getBoundingClientRect().width;

  if (totalWidth > boxWidth) {
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    right.style.transformOrigin = `center center`;
    left.style.transformOrigin = `center center`;
  } else {
    box.style.flexDirection = "row";
    box.style.alignItems = "stretch";
    right.style.transformOrigin = `right center`;
    left.style.transformOrigin = `left center`;
  }
}

window.addEventListener("resize", centered);
centered();
