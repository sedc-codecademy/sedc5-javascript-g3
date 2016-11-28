console.groupCollapsed("Add examples");

function add(x, y) {
    return x + y;
}

let first = add(1, 3);
let second = add("Wekoslav", "Stefanovski");
let third = add({}, []);

console.log(first);
console.log(second);
console.log(third);

let forth = add(1);          // add (1, undefined)
let fifth = add(1, 2, 3, 4); // add (1, 2)
let sixth = add();           // add (undefined, undefined)

console.log(forth);
console.log(fifth);
console.log(sixth);

console.log("--------------------")
console.groupEnd();

console.group("writeNumber tests");
//1234567 -> 1.234.567  / 1,234,567 / 1#234#567 
function writeNumber(number, separator) {
    if (separator === undefined) {
        separator = ".";
    }
    if (number === null || number === undefined){
        return "number is falsy";
    }
    
    let digits = number.toString().split("").reverse();

    let isThree = 0;
    let result = "";

    for (var index = 0; index < digits.length; index++) {
        var digit = digits[index];
        result = digit + result;
        isThree+=1;
        if (isThree === 3){
            result = separator + result;
            isThree = 0;
        }
    }

    return result;
}

console.log(writeNumber(undefined));
console.log(writeNumber());
console.log(writeNumber(null));
console.log(writeNumber(0));
console.log(writeNumber(1234));
console.log(writeNumber(1234, "."));
console.log(writeNumber(1234, ","));
console.log(writeNumber(123456789));

console.groupEnd();
