function additionWithoutCarrying(param1, param2) {
    let oneDigits = numberToDigits(param1);
    let twoDigits = numberToDigits(param2);

    let length = Math.max(oneDigits.length, twoDigits.length);
    console.log(length);

    padZero(oneDigits, length);
    padZero(twoDigits, length);

    console.log(oneDigits);
    console.log(twoDigits);

    let result = [];
    for (let index = 0; index < length; index++) {
        let first = oneDigits[index];
        let second = twoDigits[index];
        let resDigit = first + second;
        if (resDigit >= 10) resDigit -= 10;
        result.push(resDigit);
    }

    let sum = digitsToNumber(result);
    return sum;
}

function padZero(array, length) {
    if (array.length < length) {
        while (array.length < length)
            array.unshift(0);
    }
}

function numberToDigits(number) {
    var digits = number.toString().split("").map(n => parseInt(n));
    return digits;
}

function digitsToNumber(digits) {
    var number = parseInt(digits.join(""));
    return number;
}


function calculate(){
    var first = document.getElementById("first").valueAsNumber;
    var second = document.getElementById("second").valueAsNumber;
    var result = document.getElementById("result");

    var value = additionWithoutCarrying(first, second);

    result.innerHTML = value;
}