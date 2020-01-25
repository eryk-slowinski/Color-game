import {
    divAccuracy,
    resultsData,
} from './elements.js';

export function uploadResults() {
    const divOverallAccuracy = document.querySelector('.overall-score');
    const divBestScore = document.querySelector('.best-score');
    divAccuracy.textContent = `Accuracy: ${resultsData.accuracy}%!`;
    divOverallAccuracy.textContent = `Your overall accuracy is: ${resultsData.overallScore.toFixed(2)}%!`;
    divBestScore.textContent = `Your best score so far is: ${resultsData.bestScore}%!`;
}