let vectorMath = (function () {
    //let vectorMath =  {
        function add(vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
        }

        function multiply(vec1, scalar) {
            return [vec1[0] * scalar, vec1[1] * scalar]
        }

        function length(vec1) {
            return Math.sqrt((vec1[0] * vec1[0]) + (vec1[1] * vec1[1]));
        }

        function dot(vec1, vec2) {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];
        }

        function cross(vec1, vec2) {
            return (vec1[0] * vec2[1]) - (vec1[1] * vec2[0]);
        }



    //};
    return {add, multiply, length, dot, cross};
})()

console.log(vectorMath.add([1,1], [1,0]));
console.log(vectorMath.multiply([3.5, -2], 2));
console.log(vectorMath.length([3, -4]));
console.log(vectorMath.dot([1, 0], [0, -1]));
console.log(vectorMath.cross([3, 7], [1, 0]));