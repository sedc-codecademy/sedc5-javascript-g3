document.addEventListener('DOMContentLoaded', function(){
  // DOM elements to work with
  let elements = {
    resultContainer: document.getElementById('resultContainer'),
    input: document.getElementById('numberInput'),
    convertButton: document.getElementById('btnConvert'),
    // New p element
    p: document.createElement('P'),
  }

 /** @description callback for the event handler
 *   @return {string}  
 */  
  function handler(event){
    event.preventDefault();
    let result = 0;
    if (isNaN(elements.input.value)) result = false;
    else result = toWords(parseInt(elements.input.value));

    if (result) {
      elements.p.style['border-color'] = 'green';
      elements.p.innerHTML = result;
    }
    else {
      elements.p.style['border-color'] = 'red';
      elements.p.innerHTML = 'Invalid input! Only integer numbers up to 12 digits are supported!';
    }
    elements.resultContainer.appendChild(elements.p);
    elements.input.value = '';
    elements.input.focus();
  };
  
  // Button behavior
  elements.convertButton.addEventListener('click', handler);

 // Pressing enter in text input element fires a click event on the button 
  elements.input.addEventListener('keyup', function(){
    if (event.keyCode === 13) {
      elements.convertButton.click();
    }
  });
})