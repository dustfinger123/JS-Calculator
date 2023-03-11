let firstInput = [];
const digits = document.querySelectorAll("[dataNumer]");
const currentOperandText = document.querySelector("[dataCurrentOperand]");
digits.forEach(function (button) {
  button.addEventListener("click", function () {
    if (firstInput === [] && button.textContent === ".") {
      firstInput.push("0" + button.textContent);
      currentOperandText.innerHTML = parseFloat(firstInput.join(""));
      console.log(firstInput);
    } else {
      firstInput.push(button.textContent);
      currentOperandText.innerHTML = parseFloat(firstInput.join(""));
      console.log(firstInput);
    }
  });
});

// digits.forEach(function (button) {
//   button.addEventListener("click", function () {
//     if (firstInput === [] && button.textContent === ".") {
//       firstInput.push("0" + button.textContent);
//       currentOperandText.innerHTML = parseFloat(firstInput.join(""));
//       console.log(firstInput);
//     }
//   });
// });

let operator = "";
let firstInputForUse = [];
const operations = document.querySelectorAll("[dataOperation]");
const previousOperandText = document.querySelector("[dataPreviousOperand]");
operations.forEach(function (button) {
  button.addEventListener("click", function () {
    operator = button.textContent;
    previousOperandText.innerHTML = currentOperandText.innerHTML;
    currentOperandText.innerHTML = 0;
    firstInputForUse = previousOperandText.innerHTML;
    firstInput = [];
    console.log(firstInput, operator, firstInputForUse);
  });
});

const equalBtn = document.querySelector("[dataEqual]");
let finalResult;
equalBtn.addEventListener("click", function () {
  switch (operator) {
    case "+":
      finalResult =
        parseFloat(firstInputForUse) + parseFloat(firstInput.join(""));
      break;
    case "-":
      finalResult =
        parseFloat(firstInputForUse) - parseFloat(firstInput.join(""));
      break;
    case "*":
      finalResult =
        parseFloat(firstInputForUse) * parseFloat(firstInput.join(""));
      break;
    case "÷":
      finalResult =
        parseFloat(firstInputForUse) / parseFloat(firstInput.join(""));
      break;
    default:
      finalResult = null;
      break;
  }
  previousOperandText.innerHTML = "";
  currentOperandText.innerHTML = finalResult;
  firstInput = [];

  console.log(finalResult, firstInput);
});

const deleteButton = document.querySelector("[dataDelete]");
deleteButton.addEventListener("click", function () {
  firstInput.pop();
  currentOperandText.innerHTML = parseFloat(firstInput.join(""));
  if (firstInput.length === 0) {
    firstInput = [];
    currentOperandText.innerHTML = 0;
  }
  console.log(firstInput);
});
