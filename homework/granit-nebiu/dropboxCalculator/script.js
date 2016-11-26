function calculator() {
    let firstNum = document.getElementById("firstNum").valueAsNumber;
    let secondNum = document.getElementById("secondNum").valueAsNumber;

  /*  let firstNum=parseFloat(document.getElementById("firstNum").value);
    let secondNum=parseFloat(document.getElementById("secondNum").value);*/
    let selectValue=document.getElementById("list").value;
    let result;

if(selectValue == "sum") {
    result = parseFloat(firstNum + secondNum);
}
else if(selectValue == "minus") {
    result = parseFloat(firstNum - secondNum);
} 
else if(selectValue == "multiply") {
    result = parseFloat(firstNum * secondNum);
} else {
    result = parseFloat(firstNum/secondNum);
    }

let output=document.getElementById("result");
output.value=result;
}

