/**
Task II
Make a JavaScript calculator that will accept two numbers and an operation, and return the result of the operation.

*/

var result = "";

function calculate() {
    //Input
    var first, second, operand;
    first = document.getElementById("first");
    console.log(first);
    first = first.value;
    console.log(first);

    second = document.getElementById("second");
    console.log(second);
    second = second.value;
    console.log(second);

    var select = document.getElementById("operand");
    operand = select.options[select.selectedIndex];
    console.log(operand);
    operand = operand.value;
    console.log(operand);

    //Input check for missing and invalid fileds
    if (first === "" || second === "" || operand === "") {
        console.log("Missing values, please insert numbers in empty fileds and choose operand from drop down list!");
         result = "No result, empty input fileds found!";
         return result;
    } else if (isNaN(first) || isNaN(second)) {
        console.log("No numeric values found in empty fileds, please choose numeric values!");
        result = "No result, no numeric values found!";
        return result;
    }

    //Convert keyboard input into numeric values 
    first = parseInt(first);
    second = parseInt(second);

    //input check for valid input for matematical operation

    if (first === 0 && second === 0 && operand === "/") {
        console.log("Division by two zeros, is not a number");
        result = "Not a number";
        return result;
    }  else  if (operand === "/" && second === 0) {
        console.log("Division with zero give us infinity");
        result = "infinity";
        return result;
    }else if (operand === "%" && second === 0) {
        console.log("Modulus operation with zero, is not a number");
        result = "Not a number";
        return result;
    }



    //Calculations
    switch (operand) {
        case "+":
            result = first + second;

            break;
        case "-":
            result = first - second;

            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
        case "%":
            result = first % second;
            break;
    }

    //Output
    console.log(result);
    return result;
}

function populate(){
    document.getElementById("result").innerHTML = calculate();
}
