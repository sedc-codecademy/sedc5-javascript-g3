document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById("container");

    container.addEventListener('click', function (event) {
        console.log(event.target);
        console.log("DIV WAS CLICKED");
    });

    document.body.addEventListener('click', function (event) {
        console.log(event.target);
        console.log("BODY WAS CLICKED");
    });

    document.addEventListener('click', function (event) {
        console.log(event.target);
        console.log("DOCUMENT WAS CLICKED");
    });

    window.addEventListener('click', function (event) {
        console.log(event.target);
        console.log("WINDOW WAS CLICKED");
    });

    let person = {
        firstName: "Weko",
        lastName: "Stefanovski",
        age: 0x27
    }

    container.addEventListener('click', function (event) {
        //event.cancelBubble = true;
        let target = event.target;
        if (target.className === "created") {
            console.log(`I'm clicked (and i'm button #${target.id})`);
        }
    })

    let kreator = document.createElement("button");
    let index = 1;
    kreator.innerHTML = "KREATOR";
    kreator.addEventListener('click', function () {
        let button = document.createElement("button");
        let title = `Button #${index} ${person.lastName}, ${person.firstName} (${person.age})`;
        button.innerHTML = title;
        button.className = "created";
        button.id = index;

        container.appendChild(button);
        index++;
    });

    let logMe = function (event) {
        let target = event.target;
        if (target.className === "created") {
            console.log(event.target.id);
            console.log("it's been logged");
        }
    }

    let logger = document.createElement("button");
    logger.innerHTML = "other method";
    logger.addEventListener('click', function () {
        container.addEventListener('click', logMe);
    });

    let unlogger = document.createElement("button");
    unlogger.innerHTML = "no other method";
    unlogger.addEventListener('click', function () {
        container.removeEventListener('click', logMe);
    });

    container.appendChild(kreator);
    container.appendChild(logger);
    container.appendChild(unlogger);
    container.appendChild(document.createElement("br"));


    document.getElementById("progress").addEventListener('click', function () {
        console.log("Progressing...");
    })

    document.getElementById("cancel").addEventListener('click', function (event) {
        event.cancelBubble = true;
        console.log("Stop progressing...");
    })
});