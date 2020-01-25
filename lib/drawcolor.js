import {
    colorsData,
    randomColor,
} from './elements.js';

export function drawColor() {
    for (let i = 0; i <= 2; i++) colorsData[i] = Math.floor(Math.random() * 256);
    randomColor.style.backgroundColor = `rgb(${colorsData[0]}, ${colorsData[1]}, ${colorsData[2]})`;
    colorsData[3] = setTimeout(function () {
        randomColor.style.backgroundColor = '#71919B';
        randomColor.textContent = '?';
    }, 4000);
}