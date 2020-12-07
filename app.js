"use strict";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const replay = document.querySelector(".replay");

const song = document.querySelector(".song");
const video = document.querySelector(".video-container video");

const moodButtons = document.querySelectorAll(".mood button");
const intervalButtons = document.querySelectorAll(".intervals button");

const timeDisplay = document.querySelector(".player__time");
const outline = document.querySelector(".moving-outline circle");
const outlineLength = outline.getTotalLength();

let chosenInterval = 600;

initializeMyApp();

function initializeMyApp() {
  updatePlaying()
  addElementHandler(intervalButtons, chooseInterval)
  addElementHandler(moodButtons, chooseMood)
 
  play.addEventListener('click', () => {
      checkSongPlaying(song)
  })
}


function checkSongPlaying() {
  if(song.paused) {
      song.play()
      video.play()
      play.src = './svg/pause.svg'
  }
  else {
      song.pause()
      video.pause()
      play.src = './svg/play.svg'
  }
}

function chooseMood() {
  song.src = this.getAttribute("data-sound");
  video.src = this.getAttribute("data-video");
  checkSongPlaying(song);
}

function chooseInterval() {
  chosenInterval = this.getAttribute('data-time')
  timeDisplay.innerText = `${addZero(Math.floor(chosenInterval / 60))} : ${addZero(Math.floor(chosenInterval % 60))}`
}

function updatePlaying() {
  outline.style.strokeDashoffset = outlineLength;
  outline.style.strokeDasharray = outlineLength;
  timeDisplay.innerText = `${addZero(Math.floor(chosenInterval / 60))} : ${addZero(Math.floor(chosenInterval % 60))}`;

  song.addEventListener('timeupdate', function() {
    let currentTime = song.currentTime
    let restTime = chosenInterval - currentTime
    let seconds = Math.floor(restTime % 60)
    let minutes = Math.floor(restTime / 60)

    timeDisplay.innerText = `${addZero(minutes)} : ${addZero(seconds)}`

    let progress = outlineLength - (currentTime / chosenInterval) * outlineLength;
    outline.style.strokeDashoffset = progress;


    if (currentTime >= chosenInterval) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  })
}

function addElementHandler(array, callback) {
  array.forEach(el => {
    el.addEventListener('click', callback)
  })
}

function addZero(num) {
  if(num < 10) {
   return (num = '0' + String(num))
  }
  else {
    return (num = '' + String(num))
  }
}
