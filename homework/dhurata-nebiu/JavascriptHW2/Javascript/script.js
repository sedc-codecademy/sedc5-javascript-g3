//Fuction calculate: to declare first, second number, operator selecting and getting the result

function calculate() {
   
	    let first = parseInt(validate(document.getElementById("first").value.trim()));
        let second = parseInt(validate(document.getElementById("second").value.trim()));
        let operator = document.getElementById('operator').value;
        document.getElementById("result").value = operate(first, second, operator);

    } 


//Fuction operate: we declare parameters of function and we have if statements for each option 

function operate(first, second, operator) {
        if (operator == 'addition') {
            return first + second;
            }
        else if (operator == 'subtraction') {
        return first - second;
            } 
        else if (operator == 'division') {
            return first / second;
            } 
        else if (operator == 'multiplication') {
            return first * second;
            }
        }


// function validate values
function validate(value) {
        if (value == null || value == "") {
            alert("Required Field");
            return 0;
        } 
        else if (isNaN(value)) {
            alert("Must be a Number Field");
            return 0;
         } 
        else {
            return value;
            }
        }       


