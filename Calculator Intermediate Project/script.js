let firstNumber = "";
let secondNumber = "";
let mathOperator = "";
let onSecondNumber = false;

const buttonOne = () => {
    if (onSecondNumber === false) {
    document.getElementById("demo").innerHTML = firstNumber += '1';
    } else {
        document.getElementById("demo").innerHTML = secondNumber += '1';
    }
};

const buttonTwo = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '2';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '2';
        }
};

const buttonThree = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '3';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '3';
        }
};

const buttonFour = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '4';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '4';
        }
};

const buttonFive = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '5';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '5';
        }
};

const buttonSix = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '6';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '6';
        }
};

const buttonSeven = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '7';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '7';
        }
};

const buttonEight = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '8';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '8';
        }
};

const buttonNine = () => {
    if (onSecondNumber === false) {
        document.getElementById("demo").innerHTML = firstNumber += '9';
        } else {
            document.getElementById("demo").innerHTML = secondNumber += '9';
        }
};

const divideNumbers = () => {
    mathOperator = "/";
    document.getElementById("demo").innerHTML = mathOperator;
    onSecondNumber = true;
};

const multiplyNumbers = () => {
    mathOperator = "*";
    document.getElementById("demo").innerHTML = mathOperator;
    onSecondNumber = true;
};

const addNumbers = () => {
    mathOperator = "+";
    document.getElementById("demo").innerHTML = mathOperator;
    onSecondNumber = true;
};

const subtractNumbers = () => {
    mathOperator = "-";
    document.getElementById("demo").innerHTML = mathOperator;
    onSecondNumber = true;
};

const equalSign = () => {
    if (mathOperator === "/") {
        document.getElementById("demo").innerHTML = firstNumber / secondNumber;
    } else if (mathOperator === "*") {
        document.getElementById("demo").innerHTML = firstNumber * secondNumber;
    } else if (mathOperator === "-") {
        document.getElementById("demo").innerHTML = firstNumber - secondNumber;
    } else if (mathOperator === "+") {
        document.getElementById("demo").innerHTML = firstNumber + secondNumber;
    }
}