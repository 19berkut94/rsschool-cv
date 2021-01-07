'use strict';

const video = document.querySelector('.video')
const speedBlock = document.querySelector('.speed')
const speedController = document.querySelector('.speed__controller')

speedBlock.addEventListener('mousemove', changeSpeed)

function changeSpeed(e) {
    let y = e.pageY - this.offsetTop
    let percent = y / this.offsetHeight
    let minValue = 0.5
    let maxValue = 5
    let height = Math.round(percent * 100) + '%'
    let playbackRate = percent * (maxValue - minValue) + minValue

    video.playbackRate = playbackRate
    speedController.style.height = height
    speedController.innerText = playbackRate.toFixed(2) + 'x'
}

