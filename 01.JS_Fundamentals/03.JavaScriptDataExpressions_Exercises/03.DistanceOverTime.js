function distanceOverTime([v1, v2, period]) {
    [v1, v2, period] = [v1, v2, period].map(Number);
    let object1 = (v1 * period) * (1000 / 3600); //    m
    let object2 = (v2 * period) * (1000 / 3600); //    m
    let difference = Math.abs(object1 - object2);
    console.log(difference);
}

distanceOverTime(['5', '-5', '40']);