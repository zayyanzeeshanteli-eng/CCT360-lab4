let currentState = "start";

let focusedButton = document.getElementById("focused-button");
let creativeButton = document.getElementById("creative-button");
let tiredButton = document.getElementById("tired-button");

let resultTitle = document.getElementById("result-title");
let resultText = document.getElementById("result-text");
let resultBox = document.getElementById("result-box");
let stateText = document.getElementById("state-text");


function chooseState(choice) {

    currentState = choice;

    if (currentState === "focused") {

        resultTitle.innerHTML = "Focused Mode";
        resultText.innerHTML = "You are ready for a focused work session. Pick one important task and get started.";
        resultBox.style.backgroundColor = "#dceef8";

    } else if (currentState === "creative") {

        resultTitle.innerHTML = "Creative Mode";
        resultText.innerHTML = "You are in a creative mood. Work on something that lets you design, write, or experiment.";
        resultBox.style.backgroundColor = "#f5e6ff";

    } else {

        resultTitle.innerHTML = "Rest Mode";
        resultText.innerHTML = "You seem tired. Take a short break before deciding what to work on next.";
        resultBox.style.backgroundColor = "#fff1d6";
    }

    stateText.innerHTML = "Current state: " + currentState;
}


focusedButton.addEventListener("click", function() {
    chooseState("focused");
});

creativeButton.addEventListener("click", function() {
    chooseState("creative");
});

tiredButton.addEventListener("click", function() {
    chooseState("tired");
});
