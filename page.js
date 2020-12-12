"use strict";

let time = document.getElementById("time");
let name = document.getElementById("name");
let goal = document.getElementById("goal");
let app = document.querySelector(".application");

initializeLandingPage();

function initializeLandingPage() {
  showDate();
  setInterval(showDate, 1000);
  setGreetingAndBackground();
  getDataItem(name);
  getDataItem(goal);

  name.addEventListener("blur", (e) => {
    setDataToLocalStorage(e, name);
  });

  goal.addEventListener("blur", (e) => {
    setDataToLocalStorage(e, goal);
  });

  name.addEventListener("keypress", (e) => {
    setDataToLocalStorage(e, name);
  });

  goal.addEventListener("keypress", (e) => {
    setDataToLocalStorage(e, goal);
  });
}

function showDate() {
  let amPm = "AM";
  let todayDate = new Date();
  let hour = todayDate.getHours();
  let min = todayDate.getMinutes();
  let sec = todayDate.getSeconds();
  if (hour > 12) {
    amPm = "PM";
    hour -= 12;
  }
  time.innerText = `${hour} : ${addZero(min)} : ${addZero(sec)} ${amPm}`;
}

function addZero(n) {
  if (parseInt(n, 10) < 10) {
    return (n = "0" + n);
  } else {
    return (n = "" + n);
  }
}

function setGreetingAndBackground() {
  let today = new Date();
  let hours = today.getHours();
  let greeting = document.getElementById("greeting");

  if (+hours < 12) {
    app.style.backgroundImage = "url(images/morning.jpg)";
    greeting.innerText = "good morning,";
  } else if (+hours < 18) {
    app.style.backgroundImage = "url(images/afternoon.jpg)";
    greeting.innerText = "good afternoon,";
  } else if (+hours > 18) {
    app.style.backgroundImage = "url(images/evening.jpg)";
    greeting.innerText = "good evening,";
    app.style.color = "white";
  }
}

function getDataItem(dataItem) {
  if (localStorage.getItem(`${dataItem.getAttribute('id')}`) === null) {
    dataItem.textContent = `[Enter ${dataItem.getAttribute("id")}]`;
  } else {
    dataItem.textContent = localStorage.getItem(`${dataItem.getAttribute('id')}`);
  }
}

function setDataToLocalStorage(e, dataItem) {
  localStorage.setItem(dataItem.getAttribute("id"), e.target.innerText);
  if (e.type === "keypress" && e.code === 'Enter') {
    dataItem.blur();
  }
}
