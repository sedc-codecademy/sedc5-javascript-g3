console.log("Hello world!")

let weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
};

weko.age = 0x27;

console.log(weko);
console.log(weko.firstName);
console.log(weko.lastName);
console.log(weko.age);

function getFullName(person) {
    console.log("inside function");
    return person.firstName.length + person.lastName.length;
}

function isNameLonger(person) {
    let firstNameLength = person.firstName.length;
    let lastNameLength = person.lastName.length;
    let result = (firstNameLength > lastNameLength);
    return result;
}

console.log("after function");

if (getFullName(weko) > 12) {
    console.log("long name");
} else {
    console.log("short name");
}

var ivan = {
    firstName: "Ivan",
    lastName: "Acev"
}

ivan.nameLength =  getFullName(ivan);
console.log(ivan);



