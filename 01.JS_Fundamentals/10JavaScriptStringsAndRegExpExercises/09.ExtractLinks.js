function extractLinkse(input) {
    let result = [];
    let text = '';
    let pattern = `www\\.[a-zA-Z0-9\\-]+(\\.[a-z]+)+`;
    let regex = new RegExp(pattern, 'g');

    for (let i = 0; i < input.length; i++) {
        let currentSentence = input[i];
        text += currentSentence + ' ';
    }

    let match = regex.exec(text);

    while (match) {
        result.push(match[0]);
        match = regex.exec(text);
    }
    console.log(result.join('\n'))
}

extractLinkse(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'We provide the best services in London.',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);

extractLinkse(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.']);

extractLinkse(['Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc']);