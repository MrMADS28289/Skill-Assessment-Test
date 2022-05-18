function UniqueArray(numbers) {

    let newNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (newNumbers.indexOf(numbers[i]) === -1) {
            newNumbers.push(numbers[i]);
        }
    }
    return newNumbers;
}

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
const uniqeNumbers = UniqueArray(arr);
console.log(uniqeNumbers);