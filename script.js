"use strict";

// import { Modal } from "modal.js"

window.onload = function () {
  //Add Tags
  addTagsClickHandler();

  //showing and hiding of mobile screens
  showAndHidePhoneDisplay();

  //screen slider
  slideScreensWithPhones();
};

const addTagsClickHandler = () => {
  document.querySelector(".portfolio__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickdeTag(clickedTag);

      if (clickedTag.innerText != "All") {
        changeImageOrder();
      }
    }
  });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag_selected");
  });
};

const selectClickdeTag = (clickedTag) => {
  clickedTag.classList.add("tag_selected");
};

//------------changing of the image's order
const changeImageOrder = () => {
  let layout = document.querySelector("#portfolio");
  let images = document.querySelectorAll(".portfolio-picture");
  //let n = Math.floor(Math.random() * 10);
  images[0].remove();
  layout.append(images[0]);
};

//-----------hide and show mobile displays//////////////
const showAndHidePhoneDisplay = () => {};

class ScreenAndButton {
  constructor(button, display) {
    this.button = document.querySelector(button);
    this.display = document.querySelector(display);
    this.button.addEventListener("click", (e) => {
      this.hideAndShow();
    });
  }

  hide() {
    this.display.style.opacity === 0;
  }

  show() {
    this.display.style.opacity === 1;
  }

  hideAndShow() {
    if ((this.display.style.opacity = 1)) {
      this.hide();
    } else {
      this.show;
    }
  }
}

//---------------------slider---------------------

const slideScreensWithPhones = function () {
  const buttonNext = document.querySelectorAll("#arrow-next");
  const buttonPrev = document.querySelectorAll("#arrow-previous");
  const screens = document.querySelectorAll("#slider section");
  let i = 0;

  buttonPrev.forEach((btn) => {
    btn.onclick = function () {
      screens[i].animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(-100%)" }],
        { duration: 2000 }
      );

      // screens[i].classList.remove('screen-showed')

      i--;
      if (i < 0) {
        i = screens.length - 1;
      }

      screens[i].classList.add("screen-showed");
      screens[i].classList.add("absolution");

      screens[i].animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
        { duration: 2000 }
      );

      function getAway() {
        screens[i].classList.remove("absolution");

        screens[i - 1].classList.remove("screen-showed");
      }

      setTimeout(getAway, 3000);
    };
  });

  buttonNext.forEach((el) => {
    el.onclick = function () {
      screens[i].classList.remove("screen-showed");
      i++;
      if (i >= screens.length) {
        i = 0;
      }

      screens[i].classList.add("screen-showed");
    };
  });
};

//this is shuffle function to mix array's items

// const collection = [...pictures]
// console.log(collection);

// function shuffle(array) {
//     let j, temp
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//             temp = array[j];
//             array[j] = array[i];
//             array[i] = temp;

//     }

//     return array;
// }

//-------------------------scroling-----------------------///

// document.addEventListener('scroll', onScroll)

// function onScroll(event) {
//     const curPos = window.scrollY;
//     const divs = document.querySelectorAll('#wrapper>div');
//     const links = document.querySelectorAll('#menu a');

//     divs.forEach((el) => {
//         if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
//             links.forEach((a) => {
//                 a.classList.remove('active');
//                 if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
//                     a.classList.add('active')
//                 }
//             })
//         }
//     })
// }

/////////////////////////////////------------------//////////////////////////////////
