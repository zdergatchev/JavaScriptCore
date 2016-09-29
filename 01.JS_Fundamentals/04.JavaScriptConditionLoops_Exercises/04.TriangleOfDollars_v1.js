function trianglesOfDollars_v1(dimenssion) {
    let n = Number(dimenssion[0]);
    for (let row = 1; row <= n; row++) {
        let line = '';
        console.log(new Array(row+1).join('$'));
    }
}

trianglesOfDollars_v1(['4']);