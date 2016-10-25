function CapitalizeTheWords([input]) {
    input = input.toLowerCase();
    let words = input.split(' ');

    let result = '';
    for(let word of words){
        for(let i = 0; i < word.length; i++){
            if(i === 0){
                result += word[i].toUpperCase();
            }
            else{
                result += word[i];
            }
        }
        result+= ' ';
    }

    console.log(result);
}

CapitalizeTheWords(['Capitalize these words']);
CapitalizeTheWords(['Was that Easy? tRY thIs onE for SiZe!']);
