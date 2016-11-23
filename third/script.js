function calculate(){
    let firstValue = document.getElementById("first").valueAsNumber;
    let secondValue = document.getElementById("second").valueAsNumber;

    let result = firstValue + secondValue;

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<b style='color:red'>"+result+"</b";

    return result;
}