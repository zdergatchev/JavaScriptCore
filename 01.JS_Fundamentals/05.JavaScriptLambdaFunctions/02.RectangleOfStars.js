function squareOfStars(size) {
    for (let row=1; row<=size; row++)
        printStars()
    function printStars(count = size) {
        console.log("*" + " *".repeat(count-1));
    }
}

squareOfStars(4);