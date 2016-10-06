function CaptureTheNumbers(input) {
    let numbers =[];
    let regex = /\d+/g;
    let text ="";

    for(let i=0; i < input.length; i++){
        let currentSentence = input[i];
        text += currentSentence;
    }

    let match = regex.exec(text);
    while(match){
        numbers.push(match[0]);
        match = regex.exec(text);
    }
    console.log(numbers.join(' '));
}

CaptureTheNumbers(['The300',
                   'What is that?',
                   'I think it’s the 3rd movie.',
                   'Lets watch it at 22:45']);

CaptureTheNumbers(['123a456',
                   '789b987?',
                   '654c321',
                   '0']);

CaptureTheNumbers(['Let’s go11!!!11!',
                   'Okey!1!']);