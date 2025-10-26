let count = 0;

let buttons = document.getElementById("button_container");
let output = document.getElementById("output");

buttons.addEventListener("click",function(event) {
    if (event.target.tagName() == 'BUTTON') {
        output.textContent = event.target.textContent + " was pressed.";
    }
});

