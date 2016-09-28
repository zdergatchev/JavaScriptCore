function rounding([number, precision]) {
    [number, precision] = [number, precision].map(Number);

    let numPow = 1;
    for(let i = 0; i < precision; i++){
        numPow *= 10;
    }


    let rounded = (Math.round(number * numPow) / numPow);
    console.log(rounded);
}


rounding(['3.1415926535897932384626433832795', '2']);
rounding([10.5, 3]);