// document.addEventListener('DOMContentLoaded', function(){                //Comment out for test access (can we test otherwise?)

  // DOM Elements to work with
  let elements = {
    display: document.querySelector('#display > span'),
    displayCommands: document.querySelector('#display-commands > span'),
    keyboard: document.getElementById('keyboard'),
  };

  // Operation functions for basic arithmetics
  let operations = {
    '+': function(firstOperand, secondOperand){
      let result = firstOperand + secondOperand;
      if (isFloat(result)){
        return parseFloat(result.toFixed(7));
      }
      return result;
    },

    '-': function(firstOperand, secondOperand){
      let result = firstOperand - secondOperand;
      if (isFloat(result)){
        return parseFloat(result.toFixed(7));
      }
      return result;
    },

    'x': function(firstOperand, secondOperand){
      let result = firstOperand * secondOperand;
      if (isFloat(result)){
        return parseFloat(result.toFixed(7));
      }
      return result;
    },

    '/': function(firstOperand, secondOperand){
      let result = firstOperand / secondOperand;
      if (isFloat(result)) {
        return parseFloat(result.toFixed(7));
      }
      return result;
    },
  };   // End of operations object

  let operationData = [];
  // let commandStack = [];

  // Event listener on the keyboard element of the calcutaror
  elements.keyboard.addEventListener('click', function(){                 // This throws an exception in tests because elements is not recognized yet
    event.stopPropagation();
    let pressedKeyValue = event.target.id;
    if (!isNaN(pressedKeyValue) || pressedKeyValue === '.') {             // If key pressed is a number or '.'
      if (!isNaN(operationData[operationData.length -1]) || operationData[operationData.length -1] === '.') {
        operationData[operationData.length - 1] += pressedKeyValue;
        // commandStack[commandStack.length - 1] += pressedKeyValue;
        writeOnDisplay(pressedKeyValue);
        // console.log(operationData);
      }
      else {
        operationData.push(pressedKeyValue);
        // commandStack.push(pressedKeyValue);
        writeOnDisplay(pressedKeyValue);
        // console.log(operationData);
      }
    }    
    else {
      switch (pressedKeyValue) {
        case '+':
        case '-':
        case 'x':
        case '/':
          clearDisplay();
          writeOnDisplay(pressedKeyValue);
          writeCommands(operationData);
          operationData.push(pressedKeyValue);
          // commandStack.push(pressedKeyValue);
          if (operationData.length > 3) {
            let firstOperand = getFirstOperand(operationData);
            let secondOperand = getSecondOperand(operationData);
            let operation = getOperation(operationData);
            let result = operation(firstOperand, secondOperand);
            operationData = [result];
            writeCommands(operationData);
            operationData.push(pressedKeyValue);
          }
          // console.log(operationData);
          // console.log(operationData.length);
          break;
      
        case 'ac':
          clearDisplay();
          clearCommandsDisplay();
          operationData = [];
          // commandStack = [];
          console.log(operationData);
          break;

        case 'c':
          elements.display.innerHTML = elements.display.innerHTML.replace(operationData.pop(), '');
          // elements.displayCommands.innerHTML = elements.displayCommands.innerHTML.replace(commandStack.pop(), '');
          console.log(operationData);
          break;
        case '=':
          let firstOperand = getFirstOperand(operationData);
          let secondOperand = getSecondOperand(operationData);
          let operation = getOperation(operationData);
          let result = operation(firstOperand, secondOperand);
          clearDisplay();
          writeOnDisplay(`= ${result}`)
          writeCommands(operationData);
          operationData = [result];
          console.log(operationData);
          break;

        default:
          break;

      }   // End switch
    }
  });


// HELPERS
/** @description Get the first operand from current operation (operationData array)
 * @param {array} operationData operationData
 * @return {number}  
 */  
function getFirstOperand(operationData) {
  return parseFloat(operationData[0])
}

/** @description Get the second operand from current operation (operationData array)
 * @param {array} operationData operationData
 * @return {number}  
 */  
function getSecondOperand(operationData) {
  return parseFloat(operationData[2])
}

/** @description Get the operation for the current operation (operationData array)
 * @param {array} operationData operationData
 * @return {function}  
 */  
function getOperation(operationData) {
  return operations[operationData[1]]
}


/** @description Writes on display
*/  
function writeOnDisplay(str) {
  if (isNaN(str)) str += ' ';
  elements.display.insertAdjacentText('beforeend', str);
}

/** @description Wipes the display content
*/  
function clearDisplay(){
  elements.display.innerHTML = '';
}

/** @description Writes commands on display
*/  
function writeCommands(commandStack) {
  elements.displayCommands.innerHTML = commandStack.join(' ');
}

/** @description Wipes display for commands
*/  
function clearCommandsDisplay(){
  elements.displayCommands.innerHTML = '';
}
  
/** @description Check if number is float
*/  
function isFloat(num){
  return num % 1;
}


// });      // DOMContentLoaded