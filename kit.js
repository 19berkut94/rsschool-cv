'use strict';

startDrumKit()

function startDrumKit() {
    const keys = Array.from(document.querySelectorAll('.keys__item'))
    keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
    })

    window.addEventListener('keydown', playSound)
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

function playSound(e) {
    const song = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!song) return

    key.classList.add('playing')
    song.currentTime = 0
    song.play()
}

