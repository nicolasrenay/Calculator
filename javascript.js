const displayContainer = document.querySelector(".display-container")

let buttonZero = document.getElementById("zero")
let button1 = document.getElementById("1")
let button2 = document.getElementById("2")
let button3 = document.getElementById("3")
let button4 = document.getElementById("4")
let button5 = document.getElementById("5")
let button6 = document.getElementById("6")
let button7 = document.getElementById("7")
let button8 = document.getElementById("8")
let button9 = document.getElementById("9")

let buttonAC = document.getElementById('ac')
let buttonPlusLess = document.getElementById("plus-less")
let buttonPourcentage = document.getElementById("pourcentage")
let buttonDivide = document.getElementById("divide")
let buttonPoint = document.getElementById("point")
let buttonEqual = document.getElementById("equal")
let buttonPlus = document.getElementById("plus")
let buttonLess = document.getElementById("less")
let buttonMultiple = document.getElementById("multiple")

let acc = "";
let acc2 = "";
let operator = "";
let sum = "";
let isSecondNumber = false;

buttonZero.addEventListener('click', (e) => handleInputOneAndTwo("0"));
button1.addEventListener('click', (e) => handleInputOneAndTwo("1"));
button2.addEventListener('click', (e) => handleInputOneAndTwo("2"));
button3.addEventListener('click', (e) => handleInputOneAndTwo("3"));
button4.addEventListener('click', (e) => handleInputOneAndTwo("4"));
button5.addEventListener('click', (e) => handleInputOneAndTwo("5"));
button6.addEventListener('click', (e) => handleInputOneAndTwo("6"));
button7.addEventListener('click', (e) => handleInputOneAndTwo("7"));
button8.addEventListener('click', (e) => handleInputOneAndTwo("8"));
button9.addEventListener('click', (e) => handleInputOneAndTwo("9"));

buttonPlus.addEventListener('click', (e) => handleOperator("+"));
buttonLess.addEventListener('click', (e) => handleOperator("-"));
buttonDivide.addEventListener('click', (e) => handleOperator("/"));
buttonMultiple.addEventListener('click', (e) => handleOperator("*"));


buttonEqual.addEventListener('click', (event) => {calculator(acc, operator, acc2)
   if (sum.toString().length > 12) {
    displayContainer.textContent = Number(sum).toExponential(12);
   } else {displayContainer.textContent = sum};
    operator = "";
    if (sum.length >= 18) {
        acc = sum.toExponential(sum.length);}
        else {acc = sum}
    acc2 = "";
    isSecondNumber = false;
});

// button special
buttonPlusLess.addEventListener('click', (event) => handleSpecial("+/-"));
buttonAC.addEventListener('click', (event) => handleSpecial("AC"));
buttonPourcentage.addEventListener('click', (event) => handleSpecial("%"));

buttonPoint.addEventListener('click', (event) => { handlePoint(".")});

function handlePoint(sign) {
    if (!isSecondNumber) {
        acc += sign;
        displayContainer.textContent = acc;
    } else if (isSecondNumber) {
        acc2 += sign;
        displayContainer.textContent = acc2;
    }
}

// calculate
function calculator(acc, operator, acc2) {
    if (operator === "+") {
        sum = Number(acc) +  Number(acc2);
    } else if (operator === "-") {
        sum = Number(acc) - Number(acc2);
    } else if (operator === "*") {
        sum = Number(acc) * Number(acc2);
    } else if (operator === "/") {
        sum = Number(acc) / Number(acc2);
    }
}

// Number button
function handleInputOneAndTwo(num) {
    if (!isSecondNumber && displayContainer.textContent === "0") {
        acc = num; 
        if (acc.toString().length >= 13) {
            displayContainer.textContent = Number(acc).toExponential(12);
        } else {displayContainer.textContent = acc}
    } else if (!isSecondNumber) {
        acc += num;
        if (acc.toString().length >= 12) {
            displayContainer.textContent = Number(acc).toExponential(12);
        } else {displayContainer.textContent = acc}
        } else if (isSecondNumber && displayContainer.textContent === "0") {
        acc2 = num; 
        if (acc2.toString().length >= 12) {
            displayContainer.textContent = Number(acc2).toExponential(12);
        } else {displayContainer.textContent = acc2}
        } else if (isSecondNumber) {
        acc2 += num
        if (acc2.toString().length >= 12) {
            displayContainer.textContent = Number(acc2).toExponential(12);
        } else {displayContainer.textContent = acc2}    }
}

// Operator
function handleOperator(op) {
    operator = op;
    isSecondNumber = true;
}

// Special button
function handleSpecial (num) {
    if (!isSecondNumber && num === "AC") {
        acc = "0";
        acc2 = ""
        sum = ""
        isSecondNumber = false;

        displayContainer.textContent = acc;
    } 
      else if (!isSecondNumber && num === "+/-") {
        acc = acc * -1
        displayContainer.textContent = acc;
      } else if (!isSecondNumber && num === "%") {    
        acc = Number(acc) * 0.1;
        displayContainer.textContent = acc;

    } else if (isSecondNumber && num === "AC") {
        acc2 = "0";
        acc = "";
        sum = "";
        isSecondNumber = false;
        displayContainer.textContent = acc2;
    } 
      else if (isSecondNumber && num === "+/-") {
        acc2 = acc2 * -1
        displayContainer.textContent = acc2;
      } else if (!isSecondNumber && num === "%") {    
        acc2 = Number(acc2) * 0.1;
        displayContainer.textContent = acc2;
    }
}