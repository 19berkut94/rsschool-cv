'use strict';

const settings = document.querySelectorAll('.work-area input')

initializeVars()

function initializeVars() {
    // addEventHandler('mousemove', settings, changeSettings)
    // addEventHandler('change', settings, changeSettings)
    settings.forEach(set => set.addEventListener('change', changeSettings))
    settings.forEach(set => set.addEventListener('input', changeSettings))
}

function changeSettings() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// function addEventHandler(event, arr, callback) {
//     arr.forEach(el => {
//         el.addEventListener(event, callback)
//     })
// }