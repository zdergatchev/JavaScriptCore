function processOddNumbers(arr) {
    let result = arr
        .filter((num, i)=> i % 2 == 1)
        .map(x =>x*2)
        .reverse();
    return result.join(' ');
}

console.log(processOddNumbers(['10', '15', '20', '25']));
console.log(processOddNumbers(['3', '0', '10', '4', '7', '3']));



