"use strict";

const KEYBOARD = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capslock: false,
  },

  init() {
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard", "keyboard-hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.append(this._createKeys())

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.key')

    this.elements.main.append(this.elements.keysContainer);
    document.querySelector(".app").append(this.elements.main);

    let input =  document.querySelector('.use-keyboard-input')
    input.addEventListener('focus', () => {
      this.open(input.value, currentValue => {
        input.value = currentValue
      })
    })
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "backspace",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "caps",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "enter",
      "done",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "?",
      "space",
    ];

    const createIconHTML = (icon_name) => {
      return `<i class = "material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      //vopros
      const insertLineBreak = ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("key__wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._triggerEvent('oninput');
          });
          break;

        case "caps":
          keyElement.classList.add("key__wide", "capslock");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapslock();
            keyElement.classList.toggle(
              "capslock-active",
              this.properties.capslock
            );
          });
          break;

        case "enter":
          keyElement.classList.add("key__wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "/n";
            this._triggerEvent('oninput');
          });
          break;

        case "space":
          keyElement.classList.add("key__extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent('oninput');
          });
          break;
          
        case "done":
            keyElement.classList.add("key__wide", 'key__dark');
            keyElement.innerHTML = createIconHTML("check_circle");
  
            keyElement.addEventListener("click", () => {
              this.close()
              this._triggerEvent('onclose');
            });
            break;

            
        default:
            keyElement.innerText = key.toLocaleLowerCase()
         
  
            keyElement.addEventListener("click", () => {
              this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLocaleLowerCase();
              this._triggerEvent('oninput');
            });
            break;
      }

      fragment.append(keyElement)
      if(insertLineBreak) {
        fragment.append(document.createElement('br'))
      }
    });

    return fragment
  },

  _triggerEvent(handlerName) {
    console.log("event:" + handlerName);
    if(typeof this.eventHandlers[handlerName] == 'function') {
      this.eventHandlers[handlerName](this.properties.value)
    }
  },

  _toggleCapslock() {
    console.log("capslock activated");
    this.properties.capslock = !this.properties.capslock

    for(let key of this.elements.keys) {
      if(key.childElementCount === 0) {
        key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase()
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || ''
    this.eventHandlers.oninput = oninput
    this.eventHandlers.onclose = onclose
    this.elements.main.classList.remove('keyboard-hidden')
  },

  close() {
    this.properties.value = ''
    this.eventHandlers.oninput = oninput
    this.eventHandlers.onclose = onclose
    this.elements.main.classList.add('keyboard-hidden')
  },
};

window.addEventListener("DOMContentLoaded", function () {
  KEYBOARD.init();  
});
