let Turtle = require('./Turtle.js');

class GalapagusTurtle extends Turtle{
    constructor(name,age, gender){
        super(name,age,gender);
        this._thingsEaten = [];
    }

    get thingsEaten(){
        return this._thingsEaten;
    }

    eat(food){
        this.thingsEaten.push(food);
    }

    grow(age) {
        this._age += age;
        this._thingsEaten = [];
    }

    toString(){
        let baseStr = super.toString();
        let thingsEaten = this.thingsEaten.join(', ');
        return  baseStr + `\nThings, eaten this year: ${thingsEaten}`;
    }
}

module.exports = GalapagusTurtle;
let a = new GalapagusTurtle("Shit", 12, "male");
a.eat("shit");
a.eat("shit");
a.eat("shit");

console.log(a.toString());