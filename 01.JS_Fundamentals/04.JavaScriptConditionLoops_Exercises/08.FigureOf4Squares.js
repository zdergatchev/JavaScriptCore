function draw4Squares(input) {
    size = Number(input);
    let dash = '-';
    let space = ' ';
    let middle = size - 2;
    if (size % 2 == 0 ) {
        size -= 1;
    }
    if (size <= 2){
        size = 3;
    }

    for (let i = 0; i < size; i++) {

        if (i == 0 || i == size - 1 || (size-1) / 2 == i) { //first, last, and middle row
            console.log(`+${dash.repeat(middle)}+${dash.repeat(middle)}+`);
        }
        else {
            console.log(`|${space.repeat(middle)}|${space.repeat(middle)}|`);
        }
    }
}
draw4Squares(['4']);