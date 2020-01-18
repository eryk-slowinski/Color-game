const slideRed = document.querySelector('.red');
const slideGreen = document.querySelector('.green');
const slideBlue = document.querySelector('.blue');
const randomColor = document.querySelector('.color-to-guess');
const button = document.querySelector('#button');
const divAccuracy = document.querySelector('.accuracy');
const divTimer = document.querySelector('.timer');
let timeLeft = 4;

const colorsData = ['rgbRed', 'rgbGreen', 'rgbBlue', 'timeOfColorVisible'];
const resultsData = {
    accuracy: 0,
    overallScore: 0,
    scores: [],
    bestScore: 0,
}

slideRed.addEventListener('input', function () {
    updateColor();
})
slideGreen.addEventListener('input', function () {
    updateColor();
})
slideBlue.addEventListener('input', function () {
    updateColor();
})

function updateColor() {
    const yourColor = document.querySelector('.your-color');
    const playersColorValue = document.querySelector('.players-color-value');
    yourColor.style.backgroundColor = `rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`;
    playersColorValue.textContent = `Your color: rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`
}

function countAccuracy() {
    // Calculating acurracy at one try, saving data in 'resultsData' object
    const accuracyRed = (colorsData[0] > slideRed.value) ? slideRed.value / colorsData[0] : colorsData[0] / slideRed.value;
    const accuracyGreen = (colorsData[1] > slideGreen.value) ? slideGreen.value / colorsData[1] : colorsData[1] / slideGreen.value;
    const accuracyBlue = (colorsData[2] > slideBlue.value) ? slideBlue.value / colorsData[2] : colorsData[2] / slideBlue.value;
    resultsData.accuracy = (((accuracyRed + accuracyGreen + accuracyBlue) / 3) * 100).toFixed(2);
    // Calculating accuracy with all shots using array from 'resultsData' object
    resultsData.scores.push(parseFloat(resultsData.accuracy));
    resultsData.overallScore = resultsData.scores.reduce(function (acc, val) {
        return acc + val;
    }, 0) / resultsData.scores.length;
    // Calculating best score so far
    resultsData.bestScore = resultsData.scores.reduce(function (a, b) {
        return Math.max(a, b);
    })
}

function uploadResults() {
    const divOverallAccuracy = document.querySelector('.overall-score');
    const divBestScore = document.querySelector('.best-score');
    divAccuracy.textContent = `Accuracy: ${resultsData.accuracy}%!`;
    divOverallAccuracy.textContent = `Your overall accuracy is: ${resultsData.overallScore.toFixed(2)}%!`
    divBestScore.textContent = `Your best score so far is: ${resultsData.bestScore}%!`
}

function drawColor() {
    for (let i = 0; i <= 2; i++) colorsData[i] = Math.floor(Math.random() * 256);
    randomColor.style.backgroundColor = `rgb(${colorsData[0]}, ${colorsData[1]}, ${colorsData[2]})`;
    colorsData[3] = setTimeout(function () {
        randomColor.style.backgroundColor = '#71919B';
        randomColor.textContent = '?';
    }, 4000);
}

function disableInputs(bool) {
    if (bool === true) {
        button.disabled = true;
        slideRed.disabled = true;
        slideGreen.disabled = true;
        slideBlue.disabled = true;
    } else if (bool === false) {
        button.disabled = false;
        slideRed.disabled = false;
        slideGreen.disabled = false;
        slideBlue.disabled = false;
    }
}

function timer() {
    divTimer.textContent = `${timeLeft}...`;
    timeLeft--;
    const time = setTimeout(timer, 1000);
    if (timeLeft < 0) {
        clearTimeout(time);
        divTimer.textContent = '';
        timeLeft = 4;
        disableInputs(false);
    }
}

function buttonHandler(e) {
    const drawColorValue = document.querySelector('.draw-color-value');
    if (e.target.className === 'active') {
        e.target.classList.toggle('active');
        e.target.textContent = 'Check';
        drawColorValue.textContent = `Random color: rgb(xxx, xxx, xxx)`
        divAccuracy.textContent = '';
        drawColor();
        timer();
        disableInputs(true);
    } else {
        e.target.classList.toggle('active');
        e.target.textContent = 'Draw color';
        drawColorValue.textContent = `Random color: rgb(${colorsData[0]}, ${colorsData[1]}, ${colorsData[2]})`
        randomColor.style.backgroundColor = `rgb(${colorsData[0]}, ${colorsData[1]}, ${colorsData[2]})`;
        randomColor.textContent = '';
        clearTimeout(colorsData[3]);
        countAccuracy();
        uploadResults();
    }
}

button.addEventListener('click', buttonHandler);