const slideRed = document.querySelector('.red');
const slideGreen = document.querySelector('.green');
const slideBlue = document.querySelector('.blue');
const button = document.querySelector('#button');


const data = ['rgbRed', 'rgbGreen', 'rgbBlue', 'accuracy'];
const results = [];

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
    const accuracyRed = (data[0] > slideRed.value) ? slideRed.value / data[0] : data[0] / slideRed.value;
    const accuracyGreen = (data[1] > slideGreen.value) ? slideGreen.value / data[1] : data[1] / slideGreen.value;
    const accuracyBlue = (data[2] > slideBlue.value) ? slideBlue.value / data[2] : data[2] / slideBlue.value;
    const divAccuracy = document.querySelector('.accuracy');
    data[3] = (((accuracyRed + accuracyGreen + accuracyBlue) / 3) * 100).toFixed(2);
    results.push(parseFloat(data[3]));
    const overallAccuracy = results.reduce(function (acc, val) {
        return acc + val;
    }, 0) / results.length;
    divAccuracy.textContent = `Your accuracy is ${data[3]}%! Your overall accuracy is ${overallAccuracy.toFixed(2)}%!`;
}

function drawColor() {
    const randomColor = document.querySelector('.color-to-guess');
    for (let i = 0; i <= 2; i++) data[i] = Math.floor(Math.random() * 256);
    randomColor.style.backgroundColor = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
}

function buttonHandler(e) {
    const drawColorValue = document.querySelector('.draw-color-value');
    if (e.target.className === 'active') {
        drawColor();
        e.target.classList.toggle('active');
        e.target.textContent = 'Check';
        drawColorValue.textContent = `Random color: rgb(xxx, xxx, xxx)`
    } else {
        e.target.classList.toggle('active');
        e.target.textContent = 'Draw color';
        countAccuracy();
        drawColorValue.textContent = `Random color: rgb(${data[0]}, ${data[1]}, ${data[2]})`
    }
}

button.addEventListener('click', buttonHandler);