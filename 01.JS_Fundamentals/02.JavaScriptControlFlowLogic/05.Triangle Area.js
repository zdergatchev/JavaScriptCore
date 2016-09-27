function triangleArea([a, b, c]) {
    let sp = (Number(a) + Number(b) + Number(c)) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area;
}

console.log(triangleArea(['2', '3.5', '4']));