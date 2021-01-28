'use strict'
const scoreBoard = document.querySelector('.scores')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
const startButton = document.querySelector('.start-button')
let lastmole
let timeUp = true
let score = 0
let gameStarted = false

function getRandomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function chooseRandomMole(moles) {
    let index = Math.floor(Math.random() * moles.length)
    let mole = moles[index]
    return mole
}

function peep() {
    const time = getRandomTime(200, 1000)
    const mole = chooseRandomMole(moles)
    mole.classList.add('active-mole')
    setTimeout(() => {
        mole.classList.remove('active-mole')
        if(timeUp === false) {peep()}
    }, time)
}

function startGame() {
    timeUp = false
    score = 0
    scoreBoard.innerText = 0
    peep()
    setTimeout(() => {
        timeUp = true
        gameStarted = false
    }, 10000)
}

function touch() {
    score++
    this.classList.remove('active-mole')
    scoreBoard.innerText = score
}

moles.forEach(mole => {
    mole.addEventListener('click', touch)
})

startButton.addEventListener('click', () => {
    if(!gameStarted) {
        startGame()
        gameStarted = true
    }
})