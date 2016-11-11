let Turtle = require('./Turtle.js');

class WaterTurtle extends Turtle{
    constructor(name,age,gender,waterPool){
        super(name,age,gender);
        this._waterPool = waterPool;
    }

    get currentWaterPool(){
        return this._waterPool;
    }

    travel(waterPool){
        this._waterPool = waterPool;
        this.grow(5);
    }

    toString(){
        let baseStr = super.toString();
        return baseStr + `\nCurrently inhabiting ${this.currentWaterPool}`;
    }
}

module.exports = WaterTurtle;