function WordOccurences([sentence, word]) {
    let result = [];
    let pattern = `\\b(${word})+\\b`;
    let regex = new RegExp(pattern,'gi');
    let match = regex.exec(sentence);

    while(match){
        result.push(match[0]);
        match = regex.exec(sentence);
    }
    console.log(result.length);
}

WordOccurences(['The waterfall was so high, that the child couldn’t see its peak.', 'the']);

WordOccurences(['How do you plan on achieving that? How? How can you even think of that?', 'how']);

WordOccurences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);
