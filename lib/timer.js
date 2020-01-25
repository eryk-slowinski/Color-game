import {
    divTimer,
} from './elements.js';
import {
    disableInputs,
} from './disableinputs.js';

let timeLeft = 4;

export function timer() {
    divTimer.textContent = `${timeLeft}...`;
    timeLeft--;
    const time = setTimeout(timer, 1000);
    if (timeLeft < 0) {
        clearTimeout(time);
        divTimer.textContent = '';
        timeLeft = 4;
        // Calling disableInputs here, so user can manage inputs again when drawed color disappears
        disableInputs(false);
    }
}