let i;
const sliderWrapper = document.querySelector(".slider__wrapper");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const autoSlide = () => {
  console.log(positionDiff);
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = sliderWrapper.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  positionDiff = e.pageX - prevPageX;
  sliderWrapper.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  autoSlide();
};

sliderWrapper.addEventListener("mousedown", dragStart);
sliderWrapper.addEventListener("mousemove", dragging);
sliderWrapper.addEventListener("mouseup", dragStop);

for (i = 0; i < sliderWrapper.length; i++) {
  sliderWrapper[i].style.display = "none";
}

function btnCandidate() {
  location.assign("/index.html");
}

function btnEmployer() {
  location.assign("/pages/employer/index.html");
}
