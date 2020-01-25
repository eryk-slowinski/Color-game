import {
    button,
    slideRed,
    slideGreen,
    slideBlue,
    dynamicColor,
} from './elements.js';

export function disableInputs(bool) {
    if (bool === true) {
        button.disabled = true;
        slideRed.disabled = true;
        slideGreen.disabled = true;
        slideBlue.disabled = true;
        dynamicColor.disabled = true;
    } else if (bool === false) {
        button.disabled = false;
        slideRed.disabled = false;
        slideGreen.disabled = false;
        slideBlue.disabled = false;
        dynamicColor.disabled = false;
    }
}