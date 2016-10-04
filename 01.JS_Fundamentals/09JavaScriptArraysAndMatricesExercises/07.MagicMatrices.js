function magixMatrix(input){
    let matrix = input.map(row => row.split(' ').map(Number));
    let sumRow = 0;
    let sumCols = 0;
    let sum = matrix[0].reduce((a, b) => a + b);

    for(let row = 1; row < matrix.length; row++){
        sumRow =  matrix[row].reduce((a, b) => a + b);
        if(sum != sumRow){
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++){
        for (let row = 0; row < matrix.length; row++) {
            sumCols += matrix[row][col];
            if (sum != sumCols) {
                return false;
            }
        }
    }
    return true;
}

console.log(magixMatrix(['4 5 6',
    '6 5 4',
    '5 5 5']));
console.log(magixMatrix(['11 32 45',
    '21 0 1',
    '21 1 1']));
console.log(magixMatrix(['1 0 0',
    '0 0 1',
    '0 1 0']));