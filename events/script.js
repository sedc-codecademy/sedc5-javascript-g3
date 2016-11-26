document.addEventListener('DOMContentLoaded', function () {

})

let person = {
    firstName: "Weko",
    lastName: "Stefanovski",
    age: 0x27
}

let kreator = document.createElement("button");
let index = 1;
kreator.innerHTML = "KREATOR";
kreator.onclick = function () {
    let button = document.createElement("button");
    let title = `Button #${index} ${person.lastName}, ${person.firstName} (${person.age})`;
    let myIndex = index; 
    button.innerHTML = title;
    button.onclick = function () {
        console.log(`I'm clicked (and i'm button #${myIndex})`);
    }

    document.body.appendChild(button);
    index++;
}


document.body.appendChild(kreator);