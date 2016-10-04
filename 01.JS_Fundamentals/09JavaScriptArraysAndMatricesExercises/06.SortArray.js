function sortArray(input) {
    //input.sort((a, b) => a.length - b.length);
    input.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
    }).sort((a, b) => a.length - b.length);

    console.log(input.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma']);
//sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//sortArray(['test', 'Deny', 'omen', 'Default']);