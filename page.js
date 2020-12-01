"use strict";

const time = document.getElementById("time");
const name = document.getElementById("name");
const goal = document.getElementById("goal");
const app = document.querySelector(".application");

initializeLandingPage();

function initializeLandingPage() {
  showDate();
  setInterval(showDate, 1000);
  setGreetingAndBackground();
  getDataItem(name);
  getDataItem(goal);
  name.addEventListener("blur", setName);
  goal.addEventListener("blur", setGoal);
  name.addEventListener("keypress", setName);
  goal.addEventListener("keypress", setGoal);
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
  time.innerHTML = `${hour} <span>:</span> ${addZero(
    min
  )} <span>:</span> ${addZero(sec)} ${amPm}`;
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
  if (localStorage.getItem(dataItem) === null) {
    dataItem.textContent = `[Enter ${dataItem.getAttribute("id")}]`;
  } else {
    dataItem.textContent = localStorage.getItem(dataItem);
  }
}

function setName(e) {
  if (e.type === "keypress" && e.keyCode == 13) {
    localStorage.setItem("name", e.target.innerText);
    name.blur();
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setGoal(e) {
  if (e.type === "keypress" && e.keyCode == 13) {
    localStorage.setItem("goal", e.target.innerText);
    goal.blur();
  } else {
    localStorage.setItem("goal", e.target.innerText);
  }
}
