const value = {};
const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]
arr.forEach(function (x) { value[x] = (value[x] || 0) + 1; });
console.log(value);