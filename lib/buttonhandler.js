import {
    divAccuracy,
    randomColor,
    colorsData,
} from './elements.js';
import {
    drawColor,
} from './drawcolor.js';
import {
    timer,
} from './timer.js';
import {
    disableInputs,
} from './disableinputs.js';
import {
    countAccuracy,
} from './countaccuracy.js';
import {
    uploadResults,
} from './uploadresults.js';

export function buttonHandler(e) {
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