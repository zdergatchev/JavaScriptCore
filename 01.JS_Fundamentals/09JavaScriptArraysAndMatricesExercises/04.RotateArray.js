function rotateArray(input) {
    let offset = Number(input.pop()) % input.length;

    for(let i = 0; i < offset; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
