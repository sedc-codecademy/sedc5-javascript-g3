var person = {
    name: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x27,
    getFullName: function () {
        console.log(this);
        return this.name + " " + this.lastName;
    },
    sayHi: function (greeting) {
        return greeting + ", " + this.name;
    }
};
