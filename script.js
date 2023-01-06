const plusButton = document.getElementById("plus-btn")
const minusButton = document.getElementById("minus-btn")
const multiplyButton = document.getElementById("multiply-btn")
const divideButton = document.getElementById("divide-btn")
const modulusButton = document.getElementById("modulus-btn")
const squareButton = document.getElementById("square-btn")
const firstNumber = document.getElementById("number1")
const secondNumber = document.getElementById("number2")
const displayOutput = document.getElementById("display-output")


// function check() {
//     console.log('is checking.....')
// }

function addition() {
    console.log("is working....")
    displayOutput.innerHTML = firstNumber + secondNumber
}