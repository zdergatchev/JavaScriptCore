function matchAllWords(text) {
    if (Array.isArray(text)) text = text[0];
    let words = text.match(/\w+/g);
    return words.join('|');
}

console.log(matchAllWords(['_ (Underscores) are also word characters!']));