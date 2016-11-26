let firstNumber;
let secondNumber;
let result;

function inputNumbers() {
	firstNumber = document.getElementById("number1").valueAsNumber;
	secondNumber = document.getElementById("number2").valueAsNumber;
}

function add () {
	inputNumbers();
	result = firstNumber + secondNumber;
	alert("The result is " + result);
}

function subtract () {
	inputNumbers();
	result = firstNumber - secondNumber;
	alert("The result is " + result);
}

function multiply () {
	inputNumbers();
	result = firstNumber * secondNumber;
	alert("The result is " + result);
}

function divide () {
	inputNumbers();
	result = firstNumber / secondNumber;
	alert("The result is " + result);
}