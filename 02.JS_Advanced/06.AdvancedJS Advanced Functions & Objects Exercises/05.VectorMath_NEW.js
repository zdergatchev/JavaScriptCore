(function solve() {
    return{
        add: function ([x1,y1], [x2,y2]) {
            return [x1 + x2, y1 + y2];
        },
        multiply: function ([x1,y1], power) {
            return [x1 * power, y1 * power];
        },
        length: function ([x, y]) {
            return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        },
        dot: function ([x1,y1], [x2,y2]) {
            return (x1 * x2 + y1 * y2);
        },
        cross: function ([x1,y1], [x2,y2]) {
            return ((x1 * y2) - (y1 * x2));
        },
    };
}())