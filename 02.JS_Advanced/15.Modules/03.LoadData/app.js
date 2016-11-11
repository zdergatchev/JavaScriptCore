let data = require('./function.js');

function sort (property) {
    data = data.sort((a, b) => {
        return a[property].localeCompare(b[property]);
    });
    return data;
}

function filter(property, value) {
    let result = data.filter(w => w[property] === value);
    return result;
}

result.sort = sort;
result.filter = filter;

