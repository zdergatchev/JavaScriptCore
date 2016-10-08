function countWordsWithMaps(inputLines) {
    let words = inputLines.join('\n').toLowerCase()
        .split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let result = new Map();
    for (let word of words){
        if (result.has(word)){
            result.set(word, result.get(word) + 1);
        }
        else
        {
            result.set(word, 1);
        }
    }

    let allWords = Array.from(result.keys()).sort();
    allWords.forEach(w =>
        console.log(`'${w}' -> ${result.get(w)} times`));
}


countWordsWithMaps(['Far too slow, you\'re far too slow.']);