let firstValue, secondValue, operations, result;
function setValues(){
let firstValue = document.getElementById("firstNumber").valueAsNumber;
let secondValue = document.getElementById("secondNumber").valueAsNumber;
let operations = document.getElementById("operation").value;
let result = document.getElementById("result").value;
  }

  function sum() {
      setValues(operations);
      result = firstValue+secondValue;
      let resultContainer = document.getElementById("result");
      resultContainer.innerHTML = +result+"</b";
      return result;
  }
    function min() {
      setValues(operations);
      result = firstValue-secondValue;
      let resultContainer = document.getElementById("result");
      resultContainer.innerHTML = +result+"</b";
      return result;
  }
    function mult() {
      setValues(operations);
      result = firstValue*secondValue;
      let resultContainer = document.getElementById("result");
      resultContainer.innerHTML = +result+"</b";
      return result;
  }
    function div() {
      setValues(operations);
      result = firstValue/secondValue;
      let resultContainer = document.getElementById("result");
      resultContainer.innerHTML = +result+"</b";
      return result;
  }

