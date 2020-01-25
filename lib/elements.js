export const slideRed = document.querySelector('.red');
export const slideGreen = document.querySelector('.green');
export const slideBlue = document.querySelector('.blue');
export const dynamicColor = document.querySelector('#dynamic');
export const randomColor = document.querySelector('.color-to-guess');
export const button = document.querySelector('#button');
export const divAccuracy = document.querySelector('.accuracy');
export const divTimer = document.querySelector('.timer');
export const yourColor = document.querySelector('.your-color');
export const playersColorValue = document.querySelector('.players-color-value');
export const colorsData = ['rgbRed', 'rgbGreen', 'rgbBlue', 'timeOfColorVisible'];
export const resultsData = {
    accuracy: 0,
    overallScore: 0,
    scores: [],
    bestScore: 0,
}