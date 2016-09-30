function printTriangle(size) {
    for (let row=1; row<=size; row++)
        printStars(row);
    for (let row=size-1; row>0; row--)
        printStars(row);
    function printStars(count) {
        console.log("*".repeat(count));
    }
}

printTriangle(3);