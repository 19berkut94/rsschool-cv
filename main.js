"use strict";

let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let clearButtons = document.querySelectorAll(".cancel");
let result = document.querySelector("#result");
let point = document.querySelector("#point");
let operandFirst = "";
let operandSecond = "";
let operandsAnswer = "";
let memoryOperator = "";

initializeCalculator();

function initializeCalculator() {
  addArrayHandler(numbers, clickNumbers);
  addArrayHandler(operators, clickOperators);
  addArrayHandler(clearButtons, clear);
  addElementHandler(result, showResult);
  addElementHandler(point, usePoint);
}

  function clickNumbers(event) {
    if (operandsAnswer !== "") {
      operandsAnswer = "";
      display.value = "0";
    }
    if (display.value === "0") {
      display.value = event.target.textContent;
    } else {
      display.value += event.target.textContent;
    }
  }

  function clickOperators(event) {
    if (operandFirst === "") {
      memoryOperator = event.target.textContent;
      operandFirst = Number(display.value);
      display.value = "";
    } else {
        operandSecond = Number(display.value);

       switchMemoryOperator()
        
        display.value = operandsAnswer;
        memoryOperator = event.target.textContent;
        operandFirst = "";
        if (operandSecond !== "" && operandsAnswer !== "") {
          operandFirst = operandsAnswer;
        }
    }
  }

  function clear(event) {
    if (event.target.textContent === "ce") {
      display.value = "0";
    } else {
      display.value = "0";
      operandFirst = "";
      operandSecond = "";
    }
  }

  function showResult() {
    if (operandFirst !== "") {
      operandSecond = Number(display.value);
      
      switchMemoryOperator()

      display.value = operandsAnswer;
      operandFirst = "";
      operandSecond = "";
    }
  };

  function usePoint() {
    if (display.value === "0" || display.value === "") {
      display.value = "0.";
    } else if (!display.value.includes(".")) {
      display.value += point.innerText;
      if (operandsAnswer !== "") {
        display.value = "0.";
        operandsAnswer = "";
      }
    } else {
        display.value = "0.";
        operandsAnswer = "";
    }
  };

function addArrayHandler(array, callback) {
  for(let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', callback)
  }
}

function addElementHandler(element, callback) {
  element.addEventListener('click', callback)
}

function switchMemoryOperator() {
  switch (memoryOperator) {
    case '+':
      operandsAnswer = operandFirst + operandSecond;
      break;
    case '-':
      operandsAnswer = operandFirst - operandSecond;
      break;
    case '*':
      operandsAnswer = operandFirst * operandSecond;
      break;
    case '/':
      operandsAnswer = operandFirst / operandSecond;
      break;
  }
}