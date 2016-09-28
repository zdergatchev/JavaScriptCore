function gradsToDegrees(angleInGrade) {
    let grad = Number(angleInGrade[0]);
    let degrees = (grad * 0.9) % 360;
    if(degrees < 0){
        console.log(360 + degrees);
    }
    else console.log(degrees);
}

gradsToDegrees(['-50']);