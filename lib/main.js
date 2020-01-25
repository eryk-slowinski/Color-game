import {
    button,
    slideRed,
    slideGreen,
    slideBlue,
    dynamicColor,
} from './elements.js';
import {
    buttonHandler,
} from './buttonhandler.js';
import {
    updateColor,
} from './updatecolor.js';
import {
    handleDynamicColor,
} from './handledynamiccolor.js';

slideRed.addEventListener('input', updateColor);
slideGreen.addEventListener('input', updateColor);
slideBlue.addEventListener('input', updateColor);
dynamicColor.addEventListener('input', handleDynamicColor);
button.addEventListener('click', buttonHandler);