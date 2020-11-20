"use strict";

// import { Modal } from "modal.js"

window.onload = function () {
  //Add Tags
  addTagsClickHandler();

  //screen slider
  slideScreensWithPhones();
};

const addTagsClickHandler = () => {
  document.querySelector(".portfolio__tags").addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === 'tag') {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickdeTag(clickedTag);
      changeImageOrder()
    }
    document.querySelector('.portfolio__tags').removeEventListener('click', (e))
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
  
  images[0].remove();
  layout.append(images[0]);
};

//---------------------slider---------------------

const slideScreensWithPhones = function () {
  const buttonNext = document.querySelectorAll("#arrow-next");
  const buttonPrev = document.querySelectorAll("#arrow-previous");
  const screens = document.querySelectorAll("#slider section");
  let i = 0;

  function getAway() {
    if (i > 0) {
      screens[i - 1].classList.remove("screen-showed");
    } else {
      screens[i + 1].classList.remove("screen-showed");
    }

    screens[i].classList.remove("absolution");
  }

  buttonPrev.forEach((btn) => {
    btn.onclick = function () {
      screens[i].animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(-100%)" }],
        { duration: 2000 }
      );

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

      setTimeout(getAway, 3000);
    };
  });

  buttonNext.forEach((el) => {
    el.onclick = function () {
      screens[i].animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
        { duration: 2000 }
      );

      i++;
      if (i >= screens.length) {
        i = 0;
      }

      screens[i].classList.add("screen-showed");
      screens[i].classList.add("absolution");

      screens[i].animate(
        [{ transform: "translateX(-100%)" }, { transform: "translateX(0%)" }],
        { duration: 2000 }
      );

      setTimeout(getAway, 3000);
    };
  });
};

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
