"use strict";

let operators = document.querySelectorAll(".operator"),
  numbers = document.querySelectorAll(".number"),
  display = document.querySelector(".display"),
  clearButtons = document.querySelectorAll(".cancel"),
  result = document.querySelector("#result"),
  point = document.querySelector("#point"),
  a = "",
  b = "",
  c = "",
  memoryOperator = "";

for (let i = 0; i < clearButtons.length; i++) {
  let cancelBtn = clearButtons[i];
  cancelBtn.addEventListener("click", function (e) {
    clear(e.target.textContent);
  });
}

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  num.addEventListener("click", function (e) {
    if (c !== "") {
      c = "";
      display.value = "0";
      clickNumbers(e.target.textContent);
    } else if (c === "") {
      clickNumbers(e.target.textContent);
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  let operator = operators[i];

  operator.addEventListener("click", function (e) {
    clickOperators(e.target.textContent);
  });

  result.onclick = function () {
    if (a !== "") {
      b = Number(display.value);
      c = eval(`${a} ${memoryOperator} ${b}`);
      display.value = c;
      a = "";
      b = "";
    }
  };
}

function clickNumbers(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function clickOperators(op) {
  if (a === "") {
    memoryOperator = op;
    a = Number(display.value);
    display.value = "";
  } else {
    if (a !== "" && Number(display.value)) {
      b = display.value;
      c = eval(`${a} ${memoryOperator} ${b}`);
      display.value = c;
      memoryOperator = op;
      a = "";
      if (b !== "" && c !== "") {
        a = c;
      }
      //vopros----------------------------------
    }
  }
}

function clear(cancelBtn) {
  if (cancelBtn === "ce") {
    display.value = "0";
  } else if (cancelBtn === "c") {
    display.value = "0";
    a = "";
    b = "";
  }
}

point.onclick = function () {
  if (display.value === "0" || display.value === "") {
    display.value = "0.";
  } else if (!display.value.includes(".")) {
    display.value += point.innerText;
    if (c !== "") {
      display.value = "0.";
      c = "";
    }
  } else {
    if (c !== "" && String(display.value).includes(".")) {
      display.value = "0.";
      c = "";
    }
  }
};
