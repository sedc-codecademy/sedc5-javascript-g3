function calculate(){
    let firstValue = document.getElementById("first").valueAsNumber;
    let secondValue = document.getElementById("second").valueAsNumber;
    let operator=document.getElementById("operator").value;
    
   

    function operate (firstValue, secondValue, operator) {
        if (operator=='add') {
            return firstValue + secondValue;
        } else if (operator=='substract'){
            return firstValue - secondValue;
        } else if (operator=='multiply') {
            return firstValue * secondValue;
        } else if (operator=='division') {
            return firstValue / secondValue;
        }

    }

 
    let result = operate(firstValue, secondValue, operator);

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<b style='color:green'>"+result+"</b>";

 
}
