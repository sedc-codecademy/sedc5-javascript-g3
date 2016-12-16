var numbers = [["one", "1"],["two", "2"],["three", "3"],["four", "4"],["five", "5"],["six", "6"],["seven", "7"],["eight", "8"],["nine", "9"]];
var teens = [["ten", "0"],["eleven", "1"],["twelve", "2"],["thirteen", "3"],["fourteen", "4"],["fifteen", "5"],["sixteen", "6"],["seventeen", "7"],["eighteen", "8"],["nineteen", "9"]];
var doubleDigit = [["ten", "1"],["twenty", "2"],["thirty", "3"],["fourty", "4"],["fifty", "5"],["sixty", "6"],["seventy", "7"],["eighty", "8"],["ninety", "9"]];

function hundred(numArr){
	let result = "";
	if(numArr[0] !== "0"){
		for(let i = 0; i < numbers.length; i++){
			if(numArr[0] === numbers[i][1]){
				result = numbers[i][0] + " hundred ";
			};
		};
	};
	if(numArr[1] === "1" && numArr[2] === "0"){
		result += "ten"
	} else if(numArr[1] === "1"){
		for(let i = 0; i < teens.length; i++){
			if(numArr[2] === teens[i][1]){
				result += teens[i][0];
			};
		};
	} else {
		if(numArr[1] !== "0"){
			for(let i = 0; i < doubleDigit.length; i++){
				if(numArr[1] === doubleDigit[i][1]){
					if(numArr[2] === "0"){
						result += doubleDigit[i][0];
					} else {
						result += doubleDigit[i][0] + "-";
					};
				};
			};
		};
		if(numArr[2] !== "0"){
			for(let i = 0; i < numbers.length; i++){
				if(numArr[2] === numbers[i][1]){
					result += numbers[i][0];
				};
			};
		};
	};
	return result;
};

function bigNumber(num, extension){
	var result = "";
	if(num[0] === "0" && num[1] === "0" && num[2] === "0"){
		result = "";
	} else {
		result = hundred(num) + " " + extension + ", ";
	};
	return result;
};

function sayIt(num){
	num = parseInt(num);
	let numArr = [];
	let trillionResult = "", billionResult = "", millionResult = "", thousandResult = "", hundredResult = "", negative = "";
	let result = "";
	num = (""+num).split("");
	for(let i = 0; i < num.length; i++){
		numArr.push(num[i]);
	};
	for(let i = 0; i < 15 - num.length; i++){
		numArr.unshift("0")
	};
	if(numArr.indexOf("-") >= 0){
		numArr[numArr.indexOf("-")].replace("-","0");
		negative = "minus ";
	};
	if(parseInt(num) === 0){
		result = "zero";
		return result;
	};

	var numTrillion = [], numBillion = [], numMillion = [], numThousands = [], numHundred = [];
	numTrillion.push(numArr[0], numArr[1], numArr[2]);
	numBillion.push(numArr[3], numArr[4], numArr[5]);
	numMillion.push(numArr[6], numArr[7], numArr[8]);
	numThousands.push(numArr[9], numArr[10], numArr[11]);
	numHundred.push(numArr[12], numArr[13], numArr[14])

	trillionResult = bigNumber(numTrillion, "trillion");
	billionResult = bigNumber(numBillion, "billion");
	millionResult = bigNumber(numMillion, "million");
	thousandResult = bigNumber(numThousands, "thousand");
	hundredResult = hundred(numHundred);

	result = negative + trillionResult + billionResult + millionResult + thousandResult + hundredResult;

	return result;
};

function calculate(){
	var inputNumber = document.getElementById("Number").value;
	var outputString = document.getElementById("result");
	var result = "";

	if(Number.isInteger(Number(inputNumber)) === false){
		outputString.innerHTML = "Enter an integer";
	} else{
		result = sayIt(inputNumber);
		outputString.innerHTML = result;
	};
};
