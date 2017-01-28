let screen = document.getElementById("screen");
let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let dot = document.getElementById('dot');

let value1 = "";
let value2 = "";
let operator = "";

let obj = {
    '/': function(){
        return Number(value1) / Number(value2);
    },
    '*': function(){
        return Number(value1) * Number(value2);
    },
    '-': function(){
        return Number(value1) - Number(value2);
    },
    '+': function(){
        return Number(value1) + Number(value2);
    },
};

for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
            value2 += this.value;
            screen.value = value2;
            if(value2.indexOf('.') >= 0){
                dot.setAttribute("disabled", "true");
            };
    })
};
for(var i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        operator = this.value;
        dot.removeAttribute("disabled");
        value1 = value2;
        value2 = "";
        screen.value = "";
    })
};

function result(){
    screen.value = obj[operator]();
};
function reset(){
    value1 = "";
    value2 = "";
    operator = "";
    screen.value = "0";
    dot.removeAttribute("disabled");
};