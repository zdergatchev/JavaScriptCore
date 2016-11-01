function personalBMI(name, age, weight, height) {
    let calcBmi = () => {
        return Math.round(weight / (height/100 * height / 100))
    }

    let status;
    switch(true){
        case(calcBmi() < 18.5): status = 'underweight'; break;
        case(calcBmi() < 25): status = 'normal'; break;
        case(calcBmi() < 30): status = 'overweight'; break;
        default: ststus = 'obese'; break;
    }

    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calcBmi(),
        status: status,
    }

    if (status === 'obese') {
        result.recommendation = 'admission required'
    }
    return result
}


console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));


