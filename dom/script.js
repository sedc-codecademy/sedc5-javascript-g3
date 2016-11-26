function calculate() {
    let firstValue = document.getElementById("first").valueAsNumber;
    let secondValue = document.getElementById("second").valueAsNumber;

    let result = firstValue + secondValue;

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<b style='color:red'>" + result + "</b";

    return result;
}

let countCalls = 0;

function getTreeDepth(element) {
    countCalls++;
    let tallestChild = 0;
    for (var index = 0; index < element.children.length; index++) {
        let child = element.children[index];
        let childDepth = getTreeDepth(child)
        if (childDepth > tallestChild) {
            tallestChild = childDepth;
        }
    }
    return 1 + tallestChild;
}


function enumeratePage() {
    enumerateTag(document, 0);
}

function enumerateTag(element, level) {
    let string = new Array(level * 2).fill(" ").join("");
    console.log(string, element.tagName);

    if (element.attributes) {
        for (var index = 0; index < element.attributes.length; index++) {
            var attribute = element.attributes[index];
            console.log(string, "-", attribute);
        }
    }

    for (var index = 0; index < element.children.length; index++) {
        var child = element.children[index];
        enumerateTag(child, level + 1);
    }
}

// function enumerateTag(element){
//     console.log(element.tagName);
//     for (var index = 0; index < element.children.length; index++) {
//         var child = element.children[index];
//         enumerateTag(child);
//     }
// }

function getWeko() {
    let weko = document.getElementById("weko");
    let wekoValue = weko.attributes["weko"].value;
    console.log(wekoValue);
    enumerateTag(weko, 0);
}

function makeWekosGreen() {
    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i += 1) {
        let td = tds[i];
        if (td.attributes["weko"]){
            let colorValue = td.attributes["weko"].value; 
            td.style.backgroundColor = colorValue;
        }
    }
}

function addRow(){
    let table = document.getElementById("myTable");
    let row = document.createElement("tr");
    row.insertCell();
    row.cells[0].innerHTML = `#${table.rows.length}`;
    row.insertCell();
    row.cells[1].innerHTML = "Added cell";
    table.appendChild(row);
}

function removeRow(){
    alert("NOT IMPLEMENTED");
}