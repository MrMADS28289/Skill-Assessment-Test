const findMax = numbers => {
    return Math.max(...numbers.map(row => Array.isArray(row) ? findMax(row) : row))
};

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

console.log(findMax(ar));