function trianglesOfDollars_v2(dimenssion) {
    let n = Number(dimenssion[0]);
    for (let row = 1; row <= n; row++) {
        let line = '';
        console.log('$'.repeat(row));
    }
}

trianglesOfDollars_v2(['4']);