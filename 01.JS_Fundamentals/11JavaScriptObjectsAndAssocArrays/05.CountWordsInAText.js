function countWordsInAText(inputLines) {
    let text = inputLines.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/)
        .filter(w => w != '');
    let wordsCount = {};
    for (let w of words)
        wordsCount[w] ? wordsCount[w]++ :
            wordsCount[w] = 1;
    return JSON.stringify(wordsCount);
}

console.log(countWordsInAText(['Far too slow, you\'re far too slow.']));
console.log(countWordsInAText(['JS devs use Node.js for server-side JS.-- JS for devs']));