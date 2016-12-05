function additionWithoutCarrying(param1, param2) {

}

function numberToDigits(number) {
    var digits = number.toString().split("").map(n => parseInt(n));
    return digits;
}

function digitsToNumber(digits) {
    var number = parseInt(digits.join(""));
    return number;
}