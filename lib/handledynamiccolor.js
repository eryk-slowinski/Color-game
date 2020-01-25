import {
    dynamicColor,
    yourColor,
    playersColorValue,
    slideRed,
    slideGreen,
    slideBlue,
} from './elements.js';

export function handleDynamicColor() {
    const rgbColor = hexToRgb(dynamicColor.value);
    yourColor.style.backgroundColor = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    playersColorValue.textContent = `Your color: rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
    slideRed.value = rgbColor.r;
    slideGreen.value = rgbColor.g;
    slideBlue.value = rgbColor.b;
}

function hexToRgb(hex) {
    let m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}