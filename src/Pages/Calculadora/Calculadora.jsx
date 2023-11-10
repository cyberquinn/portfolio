import React from 'react'; // Importe o React
import Header from '../../Header';
import Footer from '../../footer';

function Calculadora() {

const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false) {
    result.innerText = originClear ? "0" : currentNumber.replace(".", ",");
}

function addDigit(digit) {
    if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

    if (restart) {
    currentNumber = digit;
    restart = false;
    } else {
    currentNumber += digit;
    }

    updateResult();
}

function setOperator(newOperator) {
    if (currentNumber) {
    calculate();

    firstOperand = parseFloat(currentNumber.replace(",", "."));
    currentNumber = "";
    }

    operator = newOperator;
}

function calculate() {
    if (operator === null || firstOperand === null) return;
    let secondOperand = parseFloat(currentNumber.replace(",", "."));
    let resultValue;

    switch (operator) {
    case "+":
        resultValue = firstOperand + secondOperand;
        break;
    case "-":
        resultValue = firstOperand - secondOperand;
        break;
    case "×":
        resultValue = firstOperand * secondOperand;
        break;
    case "÷":
        resultValue = firstOperand / secondOperand;
        break;
    default:
        return;
    }

    if (resultValue.toString().split(".")[1]?.length > 5) {
    currentNumber = parseFloat(resultValue.toFixed(5)).toString();
    } else {
    currentNumber = resultValue.toString();
    }

    operator = null;
    firstOperand = null;
    restart = true;
    updateResult();
}

function clearCalculator() {
    currentNumber = "";
    firstOperand = null;
    operator = null;
    updateResult(true);
}

function setPercentage() {
    let percentageResult = parseFloat(currentNumber) / 100;

    if (["+", "-"].includes(operator)) {
      percentageResult = percentageResult * (firstOperand || 1);
    }

    if (percentageResult.toString().split(".")[1]?.length > 5) {
    percentageResult = percentageResult.toFixed(5).toString();
    }

    currentNumber = percentageResult.toString();
    updateResult();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (/^[0-9,]+$/.test(buttonText)) {
        addDigit(buttonText);
    } else if (["+", "-", "×", "÷"].includes(buttonText)) {
        setOperator(buttonText);
    } else if (buttonText === "=") {
        calculate();
    } else if (buttonText === "C") {
        clearCalculator();
    } else if (buttonText === "±") {
        currentNumber = (
          parseFloat(currentNumber || firstOperand) * -1
        ).toString();
        updateResult();
    } else if (buttonText === "%") {
        setPercentage();
    }
    });
});

    return(

        <>
        <Header />

        <main>
        <div className="calculator">
            <div className="result">0</div>
            <div className="buttons">
            <button className="bg-gray">C</button>
            <button className="bg-gray">±</button>
            <button className="bg-gray">%</button>
            <button className="bg-orange">÷</button>

            <button className="bg-light-gray">7</button>
            <button className="bg-light-gray">8</button>
            <button className="bg-light-gray">9</button>
            <button className="bg-orange">×</button>

            <button className="bg-light-gray">4</button>
            <button className="bg-light-gray">5</button>
            <button className="bg-light-gray">6</button>
            <button className="bg-orange">-</button>

            <button className="bg-light-gray">1</button>
            <button className="bg-light-gray">2</button>
            <button className="bg-light-gray">3</button>
            <button className="bg-orange">+</button>

            <button className="bg-light-gray button-zero">0</button>
            <button className="bg-light-gray">,</button>
            <button className="bg-orange">=</button>
            </div>
        </div>
    </main>

<Footer />
</>
    );

}

export default Calculadora;