'use strict';

const canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 50

let isDrawing = false
let x = 0
let y = 0
let hue = 0
let thickness = true

initializeCanvas()

function initializeCanvas() {
    canvas.addEventListener('mousedown', e => {
        isDrawing = true
        x = e.offsetX
        y = e.offsetY
    })
    
    canvas.addEventListener('mousemove', paintSmth)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    //canvas.addEventListener('mouseout', () => isDrawing = false)    
}

function paintSmth(e) {
    if(!isDrawing) return;
    context.strokeStyle = `hsl(${hue}, 100%, 30%)`
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke()
    x = e.offsetX
    y = e.offsetY

    changeHue()
    changeThickness()
}


function changeHue() {
    hue++
    if(hue > 360) {
        hue = 0
    }
}


function changeThickness() {
    if(context.lineWidth > 100 || context.lineWidth <= 1) {
        thickness = !thickness
    }
    if(thickness) {
        context.lineWidth++
    }
    else {
        context.lineWidth--
    }
}



const playButton = document.querySelector('.button')
const audio = document.getElementById('audio')
console.log(playButton);
playButton.addEventListener('click', () => {
    audio.play()
    playButton.style.zIndex = -100
    playButton.style.opacity = 0
    playButton.innerText = 'DO IT NOW!)'
})