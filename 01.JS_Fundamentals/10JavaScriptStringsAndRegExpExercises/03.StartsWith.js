function StartsWith([sentence,theSubstring]) {
    let checker = true;
    for(let i=0; i < theSubstring.length;i++){
        if(theSubstring[i] != sentence[i]) {
            checker = false;
            break;
        }
    }
    console.log(checker);
}

StartsWith(['How have you been?', 'how']);
StartsWith(['The quick brown fox…', 'The quick brown fox…']);
StartsWith(['The quick brown fox…', 'The quick brown fox…']);