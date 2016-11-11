let Turtle = require('./Turtle.js');

class NinjaTurtle extends Turtle{
    constructor(name,age,gender,maskColor, weapon){
        super(name,age,gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this.level = 0;
    }

    grow(age){
        this._age += age;
        this.level += age;
    }

    toString(){
        let baseStr = super.toString();
        let shortName = [];
        for (let i =0;i<3;i++){
            shortName.push(this.name[i]);
        }

        shortName = shortName.join('');

        if(this.level < 25){
            return baseStr + `\n${shortName} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`;
        }
        else if(this.level >=25 && this.level < 100){
            return baseStr + `\n${shortName} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`
        }
        else if(this.level >= 100){
            return baseStr + `\n${shortName} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`;
        }
    }
}

module.exports = NinjaTurtle;