function sumFirstAndLast(arr) {
    let n1 = Number(arr[0]);
    let n2 = Number(arr[arr.length - 1]);
    return n1 + n2;
    //return Number(arr[0]) + Number(arr[arr.length - 1]);
}

console.log(sumFirstAndLast(['20', '30', '40']));