function magicMatrix(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;
        for (let col = 0; col < matrix.length; col++){
            if(row == 0){
                sum += matrix[row][col];
            }
            else {
                currentSum += matrix[row][col];
            }
        }
        if (sum != currentSum && row > 0){
            return 'false';
        }
    }

    return 'true';
}
console.log(magicMatrix(['4 5 6',
    '4 5 6',
    '5 5 5']));
console.log(magicMatrix(['11 32 45',
    '21 0 1',
    '21 1 1']));
console.log(magicMatrix(['1 0 0',
    '0 0 1',
    '0 1 0']));