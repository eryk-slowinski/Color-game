import {
    yourColor,
    playersColorValue,
    slideRed,
    slideGreen,
    slideBlue,
} from './elements.js';

export function updateColor() {
    yourColor.style.backgroundColor = `rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`;
    playersColorValue.textContent = `Your color: rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`;
}