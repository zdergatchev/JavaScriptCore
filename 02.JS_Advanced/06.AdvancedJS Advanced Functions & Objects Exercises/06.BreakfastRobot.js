(function breakfastRobot (input) {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let breakfast = (function() {
        let recipes = {
            apple: {
                carb: 1,
                flavour: 2
            },
            coke: {
                carb: 10,
                flavour: 20
            },
            burger: {
                carb: 5,
                fat: 7,
                flavour: 3
            },
            omlet: {
                protein: 5,
                fat: 1,
                flavour: 1
            },
            cheverme: {
                protein: 10,
                fat: 1,
                flavour: 1
            }
        }

        return {
            restock: (microelement, quantity) => {
                console.log('Success')
                return robot[microelement] += quantity
            },
            prepare: (recipe, quantity)  => {
                let error = false;
                for (let rec in recipes[recipe]) {
                    let str = rec;

                    if (str == 'carb')
                        str = 'carbohydrate';

                    if (robot[str] >= recipes[recipe][rec] * quantity) {
                        robot[str] -= recipes[recipe][rec] * quantity;
                    } else {
                        console.log(`Error: not enough ${str} in stock`)
                        error = true;
                        break;
                    }
                }

                if (!error)
                    console.log('Success');
            },
            print: () => {
                let result = '';
                for (let prop in robot)
                    result += `${prop}=${robot[prop]} `;

                return result;
            }
        }
    })();

    for (let cmd of input) {
        [command, val1, val2] = cmd[0].split(' ');
        breakfast[command](val1, val2);
    }
})()

console.log(breakfastRobot(['restock flavour 50', 'prepare coke 4']));