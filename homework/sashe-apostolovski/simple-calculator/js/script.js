(function (){

  let calculate = function(){
    event.preventDefault();
    let firstNumber = parseFloat(document.getElementById('first-number').value);
    let secondNumber = parseFloat(document.getElementById('second-number').value);
    let operation = document.getElementById('operation').value;
    let resultSpanElement = document.getElementById('result');

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      resultSpanElement.innerHTML = '<span style="color: red;">Invalid input!</span>';
      throw 'Invalid input!';
    }
    if (!operation) {
      resultSpanElement.innerHTML = '<span style="color: red;">Please choose an operation!</span>';
      throw 'Please choose an operation!'
    }

    let result;
    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
    }
    resultSpanElement.innerHTML = `The result is: <b style="color: green;">${result}</b>`;
  };

  let calculateButtonElement = document.getElementById('calculate');
  calculateButtonElement.addEventListener('click', calculate, false);

  let resetButtonElement = document.getElementById('reset')
  resetButtonElement.addEventListener('click', function(){
    document.getElementById('result').innerHTML = '';
  }, false);
})();
