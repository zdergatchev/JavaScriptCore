function printNthElement(input) {
    let nthElement = Number(input[input.length - 1]);
    input.pop();

    for(let i = 0; i < input.length; i += nthElement){
        console.log(input[i]);
    }
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'tset', '2']);
printNthElement(['1', '2', '3', '4', '5']);