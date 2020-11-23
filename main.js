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

makeCalculatorWork();

function makeCalculatorWork() {
  makeNumbersPush();
  makeOperatorsOperate();
  makeClearButtonsClean();
  makePointUse()
  makeResultShow()
}

function makeNumbersPush() {
  function clickNumbers(number) {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    num.addEventListener("click", function (e) {
      if (operandsAnswer !== "") {
        operandsAnswer = "";
        display.value = "0";
        clickNumbers(e.target.textContent);
      } else {
        clickNumbers(e.target.textContent);
      }
    });
  }
}

function makeOperatorsOperate() {
  function clickOperators(op) {
    if (operandFirst === "") {
      memoryOperator = op;
      operandFirst = Number(display.value);
      display.value = "";
    } else {
      if (operandFirst !== "" && Number(display.value)) {
        operandSecond = display.value;
        operandsAnswer = eval(
          `${operandFirst}${memoryOperator} ${operandSecond}`
        );
        display.value = operandsAnswer;
        memoryOperator = op;
        operandFirst = "";
        if (operandSecond !== "" && operandsAnswer !== "") {
          operandFirst = operandsAnswer;
        }
        //vopros----------------------------------
      }
    }
  }

  for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    operator.addEventListener("click", function (e) {
      clickOperators(e.target.textContent);
    });
  }
}

function makePointUse() {
  point.onclick = function () {
    if (display.value === "0" || display.value === "") {
      display.value = "0.";
    } else if (!display.value.includes(".")) {
      display.value += point.innerText;
      if (operandsAnswer !== "") {
        display.value = "0.";
        operandsAnswer = "";
      }
    } else {
      if (operandsAnswer !== "" && String(display.value).includes(".")) {
        display.value = "0.";
        operandsAnswer = "";
      }
    }
  };
}

function makeClearButtonsClean() {
  function clear(cancelButton) {
    if (cancelButton === "ce") {
      display.value = "0";
    } else if (cancelButton === "c") {
      display.value = "0";
      operandFirst = "";
      operandSecond = "";
    }
  }

  for (let i = 0; i < clearButtons.length; i++) {
    let cancelButton = clearButtons[i];
    cancelButton.addEventListener("click", function (e) {
      clear(e.target.textContent);
    });
  }
}

function makeResultShow() {
  result.onclick = function () {
    if (operandFirst !== "") {
      operandSecond = Number(display.value);
      operandsAnswer = eval(
        `${operandFirst}${memoryOperator} ${operandSecond}`
      );
      display.value = operandsAnswer;
      operandFirst = "";
      operandSecond = "";
    }
  };
}
