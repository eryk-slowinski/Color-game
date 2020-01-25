import {
    slideRed,
    slideGreen,
    slideBlue,
    colorsData,
    resultsData,
} from './elements.js';

export function countAccuracy() {
    // Calculating acurracy at one try
    // This calculation assumes if player is more than 100 units from drawed color, his accuracy is 0%
    // Else, 1 unit difference is -1% from score (at certain R G or B)
    let accuracyRed = 100 - Math.abs(colorsData[0] - slideRed.value);
    if (accuracyRed < 0) accuracyRed = 0;
    let accuracyGreen = 100 - Math.abs(colorsData[1] - slideGreen.value);
    if (accuracyGreen < 0) accuracyGreen = 0;
    let accuracyBlue = 100 - Math.abs(colorsData[2] - slideBlue.value);
    if (accuracyBlue < 0) accuracyBlue = 0;
    resultsData.accuracy = ((accuracyRed + accuracyGreen + accuracyBlue) / 3).toFixed(2);
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