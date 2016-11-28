document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById("container");

    container.addEventListener('click', function(event) {
        console.log(event.target);
        console.log("DIV WAS CLICKED");
    });

    document.body.addEventListener('click', function(event) {
        console.log(event.target);
        console.log("BODY WAS CLICKED");
    });

    document.addEventListener('click', function(event) {
        console.log(event.target);
        console.log("DOCUMENT WAS CLICKED");
    });

    window.addEventListener('click', function(event) {
        console.log(event.target);
        console.log("WINDOW WAS CLICKED");
    });

    let person = {
        firstName: "Weko",
        lastName: "Stefanovski",
        age: 0x27
    }

    let kreator = document.createElement("button");
    let index = 1;
    kreator.innerHTML = "KREATOR";
    kreator.addEventListener('click', function() {
        let button = document.createElement("button");
        let title = `Button #${index} ${person.lastName}, ${person.firstName} (${person.age})`;
        let myIndex = index;
        button.innerHTML = title;
        button.className = "created";
        button.addEventListener('click', function() {
            console.log(`I'm clicked (and i'm button #${myIndex})`);
        });

        container.appendChild(button);
        index++;
    });

    let logMe = function(event) {
        console.log(event);
        console.log("it's been logged");
    }

    let logger = document.createElement("button");
    logger.innerHTML = "other method";
    logger.addEventListener('click', function() {
        var buttons = document.getElementsByClassName("created");
        for (var index = 0; index < buttons.length; index++) {
            var button = buttons[index];
            button.addEventListener('click', logMe)
        }
    });

    let unlogger = document.createElement("button");
    unlogger.innerHTML = "no other method";
    unlogger.addEventListener('click', function() {
        var buttons = document.getElementsByClassName("created");
        for (var index = 0; index < buttons.length; index++) {
            var button = buttons[index];
            button.removeEventListener('click', logMe)
        }
    });

    container.appendChild(kreator);
    container.appendChild(logger);
    container.appendChild(unlogger);
    container.appendChild(document.createElement("br"));
});