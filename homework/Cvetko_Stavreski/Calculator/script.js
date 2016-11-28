function calculate(){
    var form = document.getElementById("form");
    var result = "";
    if(form[1].value === "empty"){
        alert("Please choose an operator")
    } else{
        result = form[0].value + form[1].value + form[2].value;
        result = eval(result);
        console.log(result);
        document.getElementById("result").innerHTML = result;
    };
};