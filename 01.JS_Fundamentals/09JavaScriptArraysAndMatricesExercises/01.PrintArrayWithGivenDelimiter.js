function printArray(input){
    let delimiter = input[input.length - 1];
    input.pop();

    let result = "";

    for(let i = 0; i < input.length; i++){
        if(i == 0){
            result += input[i];
        }
        else {
            result += delimiter + input[i];
        }
    }
    console.log(result);
}

printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']);
printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);