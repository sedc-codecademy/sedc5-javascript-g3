
let maxColor = 5;
document.getElementById("count").innerHTML = maxColor;

function getValue(){
    let input = document.getElementById("info");
    let output = document.getElementById("output");
    let button = document.getElementById("add");
    let value = input.value;
    input.value = "";
    
    let lis = document.querySelectorAll("li");
    let count = document.getElementById("count");
    let details = document.getElementById("details");

    let counter = maxColor - lis.length;

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = " x";
    a.setAttribute("href", "javascript:void(0)");
    output.appendChild(li).innerHTML = value;
    li.appendChild(a);

    lis = document.querySelectorAll("li");
    counter = maxColor - lis.length;
    details.setAttribute("style", "color:" + value);
    count.innerHTML = counter;

    if(counter <= 0){
        button.setAttribute("disabled", true);
    };

    let aTags = document.getElementsByTagName("a");
    for(var i = 0; i < aTags.length; i++){
        aTags[i].addEventListener("click", function(){
            this.parentElement.remove();
            lis = document.querySelectorAll("li");
            counter = maxColor - lis.length;
            details.setAttribute("style", "color:" + value);
            count.innerHTML = counter;
            button.removeAttribute("disabled");
        })
    };

}
