'use strict';

const player = document.querySelector('.player')
const video = player.querySelector('.video')
const progress = player.querySelector('.progress')
const movingProgress = player.querySelector('.progress__filled')
const playerButton = player.querySelector('.player__button img')
const skipButtons = player.querySelectorAll('.skip__button')
const ranges = player.querySelectorAll('.player__slider')
console.log(playerButton);
initializePlayer()

function initializePlayer() {
    playerButton.addEventListener('click', togglePlay)
    ranges.forEach(range => range.addEventListener('change', changeVideoPlaybackRate))
    ranges.forEach(range => range.addEventListener('mousemove', changeVideoPlaybackRate))
    skipButtons.forEach(btn => btn.addEventListener('click', skip))
    video.addEventListener('timeupdate', moveProgress)

    let mouseDown = false
    progress.addEventListener('click', scrub)
    progress.addEventListener('mousedown', () => mouseDown = true)
    progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
    progress.addEventListener('mouseup', () => mouseDown = false)
}  

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]()
    if(!video.paused) {
        playerButton.src = playerButton.dataset.pause
    }
    else{playerButton.src = playerButton.dataset.play }
}

function changeVideoPlaybackRate() {
    video[this.name] = this.value
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function moveProgress() {
    let progress = (video.currentTime / video.duration) * 100
    movingProgress.style.width = `${progress}%`
}

function scrub(e) {
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}