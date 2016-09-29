function biggest3Numbers(numbers) {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let num3 = Number(numbers[2]);
    console.log(Math.max(num1, num2, num3));
}

biggest3Numbers(['5', '-2', '7']);
biggest3Numbers(['130', '5', '99']);
biggest3Numbers(['43', '43.2', '43.1']);