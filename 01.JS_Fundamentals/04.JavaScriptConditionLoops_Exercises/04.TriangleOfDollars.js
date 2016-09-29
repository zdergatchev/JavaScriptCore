function trianglesOfDollars(dimenssion) {
    let n = Number(dimenssion[0]);
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= row; col++) {
            line += '$';
        }
        console.log(line);
    }
}

trianglesOfDollars(['4']);