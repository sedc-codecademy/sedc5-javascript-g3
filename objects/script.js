var person = {
    name: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x27,
    getFullName: function () {
        console.log(this);
        return `${this.name} ${this.lastName}`;
    },
    sayHi: function (greeting) {
        return `${greeting}, ${this.name}`;
    }
};

document.getElementById("addProp").addEventListener('click', function () {
    var propName = document.getElementById("propName").value;
    var propValue = document.getElementById("propValue").value;

    person[propName] = propValue;

    console.log(Object.keys(person));
});

function addItem(value) {
    var ul = document.getElementsByTagName("ul")[0];
    var li = document.createElement("li");
    li.innerHTML = value;
    ul.appendChild(li);
}

(function () {
    addItem(person.name);
    addItem(person.lastName);
    addItem(person.age);
    addItem("--------");

    let propName = "lastName";

    addItem(person[propName]);

    addItem(person.getFullName());
    addItem(person.sayHi("Hello"));

    let value = person.getFullName;

    var name = "NAME";
    var lastName = "LAST-NAME";
    addItem(value());
})();

(function (x, y) {
    let sx = x * x;
    let sy = y * y;
    console.log("within function");
    console.log(sx + sy);
})(7, 3)

;(function(){
    var xs = [1, 2, 3, 4];
    sx = xs[0] + xs[1] + xs[2] + xs[3]
    console.log(sx);
})();

