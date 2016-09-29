function quadraticEquation([a, b, c]){
    [a, b, c] = [a, b, c].map(Number);
    //let discriminant = ((b*b) - 4*(a * c));
    let discriminant = Math.pow(b,2) - 4 * a * c;
    if (discriminant < 0){
        console.log("No");
    }

    if (discriminant == 0){
        result = (-b)/(2 * a);
        console.log(result);
    }

    if (discriminant > 0){
        result1 = (-b - Math.sqrt(discriminant))/(2 * a);
        result2 = (-b + Math.sqrt(discriminant))/(2 * a);
        console.log(result1);
        console.log(result2);
    }
}


quadraticEquation(['6', '11', '-35']);
quadraticEquation(['1', '-12', '36']);
quadraticEquation(['5', '2', '1']);