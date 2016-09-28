function distanceVector([x1, y1, z1, x2, y2, z2]){
    [x1, y1, z1, x2, y2, z2] = [x1, y1, z1, x2, y2, z2].map(Number);
    let distance = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1));
    console.log(distance);
}

distanceVector(['3.5', '0', '1', '0', '2', '-1']);