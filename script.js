let quote = document.getElementById("quote").innerHTML;
let input = document.getElementById("input");
let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let result = document.getElementById("result");
let startTime, endTime;

function start() {
    input.disabled = false;
    input.focus();
    startBtn.disabled = true;
    resetBtn.disabled = false;
    startTime = new Date();
}

function reset() {
    input.value = "";
    input.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    result.innerHTML = "";
}

input.addEventListener("input", function () {
    let typedText = input.value;
    if (typedText == quote) {
        endTime = new Date();
        let totalTime = (endTime - startTime) / 1000;
        let speed = Math.round((quote.length / totalTime) * 60);
        result.innerHTML = "You typed " + quote.length + " characters in " + totalTime + " seconds. Your typing speed is " + speed + " WPM.";
    }
});
