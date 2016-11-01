function sortArray(inputArray, sortMathod) {

    var accedingComparator = function (a, b){
       return a - b;
    };
    var descendingComparator = function (a, b){
        return b - a;
    };

    var sortStrategies = {
        'asc': accedingComparator,
        'desc': descendingComparator
    };

    return inputArray.sort(sortStrategies[sortMathod]);
}