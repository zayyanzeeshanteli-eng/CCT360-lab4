let energyState = "none";
let timeState = "none";

let pageBody = document.getElementById("page-body");

let focusedButton = document.getElementById("focused-button");
let creativeButton = document.getElementById("creative-button");
let tiredButton = document.getElementById("tired-button");

let shortButton = document.getElementById("short-button");
let longButton = document.getElementById("long-button");

let resetButton = document.getElementById("reset-button");

let energyFeedback = document.getElementById("energy-feedback");
let timeFeedback = document.getElementById("time-feedback");

let energyStateText = document.getElementById("energy-state");
let timeStateText = document.getElementById("time-state");

let resultBox = document.getElementById("result-box");
let resultTitle = document.getElementById("result-title");
let resultText = document.getElementById("result-text");
let resultReason = document.getElementById("result-reason");

function chooseEnergy(choice) {

    energyState = choice;
    energyStateText.innerHTML = "Energy: " + energyState;

    if (energyState === "focused") {

        energyFeedback.innerHTML = "Focused selected. You are ready for structured work.";

    } else if (energyState === "creative") {

        energyFeedback.innerHTML = "Creative selected. You are ready to explore and make something.";

    } else {

        energyFeedback.innerHTML = "Tired selected. Your plan should protect your energy.";
    }

    updateResult();
}

function chooseTime(choice) {

    timeState = choice;
    timeStateText.innerHTML = "Time: " + timeState;

    if (timeState === "20 minutes") {

        timeFeedback.innerHTML = "Short session selected. Your plan will stay simple and realistic.";

    } else {

        timeFeedback.innerHTML = "Long session selected. Your plan can include a deeper task.";
    }

    updateResult();
}

function updateResult() {

    if (energyState === "none" || timeState === "none") {

        resultTitle.innerHTML = "One more choice needed.";
        resultText.innerHTML = "Choose both your energy and available time before the page can build your mission.";
        resultReason.innerHTML = "Current state is incomplete.";

        resultBox.style.backgroundColor = "#ffffff";
        resultBox.style.borderColor = "#315f70";
        pageBody.style.backgroundColor = "#eaf2f8";

    } else if (energyState === "focused" && timeState === "20 minutes") {

        resultTitle.innerHTML = "Mission: Quick Win Sprint";
        resultText.innerHTML = "Choose one important task and work on only that task for the full 20 minutes.";
        resultReason.innerHTML = "You have strong focus but limited time, so a single clear task is the best match.";

        resultBox.style.backgroundColor = "#d9edf7";
        resultBox.style.borderColor = "#3f7e9e";
        pageBody.style.backgroundColor = "#edf6fa";

    } else if (energyState === "focused" && timeState === "60 minutes") {

        resultTitle.innerHTML = "Mission: Deep Focus Session";
        resultText.innerHTML = "Use the full hour for your most demanding task and keep your attention on one goal.";
        resultReason.innerHTML = "High focus plus more time creates the strongest state for deep work.";

        resultBox.style.backgroundColor = "#cfe8f3";
        resultBox.style.borderColor = "#245b78";
        pageBody.style.backgroundColor = "#e6f2f7";

    } else if (energyState === "creative" && timeState === "20 minutes") {

        resultTitle.innerHTML = "Mission: Idea Burst";
        resultText.innerHTML = "Spend 20 minutes sketching, writing, planning, or testing one creative idea.";
        resultReason.innerHTML = "Creative energy with a short window works well for fast experimentation.";

        resultBox.style.backgroundColor = "#eee0f5";
        resultBox.style.borderColor = "#78548f";
        pageBody.style.backgroundColor = "#f6eff9";

    } else if (energyState === "creative" && timeState === "60 minutes") {

        resultTitle.innerHTML = "Mission: Creative Build";
        resultText.innerHTML = "Choose one idea and turn it into something more complete during the next hour.";
        resultReason.innerHTML = "Creative energy plus more time gives you room to develop an idea instead of only starting it.";

        resultBox.style.backgroundColor = "#ead7f2";
        resultBox.style.borderColor = "#6f4b84";
        pageBody.style.backgroundColor = "#f4ecf7";

    } else if (energyState === "tired" && timeState === "20 minutes") {

        resultTitle.innerHTML = "Mission: Reset and Recover";
        resultText.innerHTML = "Take a short reset, then complete one very small task before you stop.";
        resultReason.innerHTML = "Low energy and limited time means the plan should be gentle and achievable.";

        resultBox.style.backgroundColor = "#fff0cf";
        resultBox.style.borderColor = "#a77a2d";
        pageBody.style.backgroundColor = "#fff8e8";

    } else {

        resultTitle.innerHTML = "Mission: Gentle Progress";
        resultText.innerHTML = "Use the hour slowly: begin with a break, then work on an easier task at a comfortable pace.";
        resultReason.innerHTML = "You have time available, but your current energy state suggests avoiding an intense session.";

        resultBox.style.backgroundColor = "#f5e6c8";
        resultBox.style.borderColor = "#9a7535";
        pageBody.style.backgroundColor = "#fcf5e8";
    }
}

function resetChoices() {

    energyState = "none";
    timeState = "none";

    energyStateText.innerHTML = "Energy: not selected";
    timeStateText.innerHTML = "Time: not selected";

    energyFeedback.innerHTML = "Choose one energy state to begin.";
    timeFeedback.innerHTML = "Your time choice will combine with your energy choice.";

    resultTitle.innerHTML = "Your mission is waiting.";
    resultText.innerHTML = "Select both your energy and available time to generate a personalized plan.";
    resultReason.innerHTML = "The final result will depend on both choices.";

    resultBox.style.backgroundColor = "#ffffff";
    resultBox.style.borderColor = "#315f70";
    pageBody.style.backgroundColor = "#eaf2f8";
}

focusedButton.addEventListener("click", function() {
    chooseEnergy("focused");
});

creativeButton.addEventListener("click", function() {
    chooseEnergy("creative");
});

tiredButton.addEventListener("click", function() {
    chooseEnergy("tired");
});

shortButton.addEventListener("click", function() {
    chooseTime("20 minutes");
});

longButton.addEventListener("click", function() {
    chooseTime("60 minutes");
});

resetButton.addEventListener("click", resetChoices);
