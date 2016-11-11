let Turtle = require('./Turtle.js');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this.evkodiumValue = evkodiumValue;
    }

    get evkodium() {
        if (this.gender === 'female') {
            return {
                value: this.evkodiumValue,
                density: this.age * 2

            }
        }
        else if(this.gender === 'male' ){
            return {
                value: this.evkodiumValue,
                density: this.age * 3
            }
        }
    }

    toString(){
        let baseStr = super.toString();
        return baseStr + `\nEvkodium: ${this.evkodium.value * this.evkodium.density}`
    }
}

module.exports = EvkodianTurtle;