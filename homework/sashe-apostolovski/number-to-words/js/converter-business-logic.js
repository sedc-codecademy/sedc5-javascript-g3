// document.addEventListener('DOMContentLoaded', function(){                        // Commented out for the tests.

 /** @description Convert a number to words
 *   @param {number} number number to convert to words
 *   @return {string}  
 */  
  function toWords(number){
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigNumbers = [
                        {quadrillion: 1000000000000000},
                        {trillion: 1000000000000},
                        {billion: 1000000000},
                        {million: 1000000},
                        {thousand: 1000},
                        {hundred: 100}
                       ];

    let words = '';

    if (isNaN(number)) {
      return false;
    }
    else if (number > Number.MAX_SAFE_INTEGER) {
      words = 'Are you crazy?';
    }
    else if (number < 0) {
      words = `minus ${toWords(number * -1)}`;
    }
    else if (number < 10) {
      words = ones[number];
    }

    else if (number >= 10 && number < 20) {
      words = tenToNineteen[number % 10];
    }

    else if (number >= 20 && number < 100) {
      let tensIndex = tens[Math.floor(number / 10) - 2];
      remainder = number % 10;
      words = remainder ? `${tensIndex} ${toWords(remainder)}` : tensIndex;
    }

    else {
      words = oneHundredPlus(number, bigNumbers);
    }

    return capitalize(words);
  };
  

 /** @description Resolve 
 *   @param {number} number number to 
 *   @param {object} bigNumbers object containing numbers like 100, 1000, 1000000 along with their representation in words
 *   @return {string} 
 */  
function oneHundredPlus(number, bigNumbers) {
  let words = '';
  for (let i = 0; i < bigNumbers.length; i += 1) {
    let el = bigNumbers[i];
    let label = Object.keys(el)[0];
    let n = el[Object.keys(el)[0]]
    let primary = 0
    let remainder = 0;
    console.log(`${number} / ${n} = ${Math.floor(number / n)}`)

    if (Math.floor(number / n)) {
      console.log(`Go`);
      primary = Math.floor(number / n);
      remainder = number % n;
      words = remainder ? `${toWords(primary)} ${label} ${toWords(remainder)}` : `${toWords(primary)} ${label}`;
      break;
    }
  }

  return words;
}

 /** @description Capitalizes the first letter of a string
 *   @param {string} str string to capitalize
 *   @return {string} 
 */  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
// })