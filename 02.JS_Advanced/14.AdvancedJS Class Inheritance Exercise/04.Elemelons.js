function elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = weight * melonSort.length;
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
            this.element = this.constructor.name.slice(0, -5);
        }
        get elementIndex() {
            return this._elementIndex;
        };
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }
        morph() {
            let currentElement = this.elements.shift();
            this.element = currentElement;
            this.elements.push(currentElement);
        }
    }
    return {Melon, Watermelon, Firemelon, Airmelon, Earthmelon, Melolemonmelon};
}




let Watermelon = elemelons().Watermelon;
let wm = new Watermelon(100, 'Watermelon');
console.log(wm.toString());

let MorphingMelon = elemelons().Melolemonmelon;
let mm = new MorphingMelon(100, 'Morphing Melon');
console.log(mm.toString());
for (let i = 0; i < 4; i++) {
    mm.morph();
    console.log(mm.toString());
}

  //throw error
// let Melon = elemelons().Melon;
// let m = new Melon(100, 'Melon');

// Element: Water
// Sort: Kingsize
// Element Index: 100

