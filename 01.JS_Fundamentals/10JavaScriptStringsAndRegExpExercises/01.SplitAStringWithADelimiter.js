function SplitAStringWithADelimiter([sentence,delimeter]) {
    let splittedWords = sentence.split(delimeter);

    for(let word of splittedWords)
        console.log(word);
}

SplitAStringWithADelimiter(['One-Two-Three-Four-Five','-']);