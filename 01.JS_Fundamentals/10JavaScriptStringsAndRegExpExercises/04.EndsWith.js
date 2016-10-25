function endsWith([sentence,theSubstring]) {
    let words = sentence.split(' ').reverse();
    let wordsOfSubstring = theSubstring.split(' ');
    let checker = true;
    for(let i= 0; i<wordsOfSubstring.length;i++){
        if(words[i] != wordsOfSubstring[i]) {checker = false; break;}
    }
    console.log(checker);
}

endsWith(['This sentence ends with fun?', 'fun?']);
endsWith(['This is Houston, we have…', 'We have…?']);
endsWith(['The new iPhone has no headphones jack.', 'no headphones jack.']);
