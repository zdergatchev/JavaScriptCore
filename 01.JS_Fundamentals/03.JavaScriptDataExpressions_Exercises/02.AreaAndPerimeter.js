function rectangleAreaAndPerimeter([a, b]) {
    [a, b] = [a, b].map(Number);
    let area = a * b;
    let perimeter = 2 * a + 2 * b;
    let areaRounded = Math.round(area * 100) / 100;
    let perimeterRounded = Math.round(perimeter * 100) / 100;
    console.log(areaRounded);
    console.log(perimeterRounded);
}

rectangleAreaAndPerimeter(['2.5', '3.14']);

