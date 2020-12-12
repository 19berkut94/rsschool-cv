"use strict";

const slides = document.querySelectorAll(".container__item");

function chooseSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("open");
  });
  this.classList.add("open");
}

function toggleShowedText(e) {
  if (e.propertyName.includes("flex-grow")) {
    this.classList.toggle("showed-text");
  }
}

slides.forEach((slide) => {
  slide.addEventListener("click", chooseSlide);
});

slides.forEach((slide) => {
  slide.addEventListener("transitionend", toggleShowedText);
});
