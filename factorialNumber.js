function factorial(n) {
    let num = 1;
    if (n == 0 || n == 1) {
        return num;
    } else {
        for (let i = n; i >= 1; i--) {
            num = num * i;
        }
        return num;
    }
}
let n = 9;
num = factorial(n)
console.log("The factorial of " + n + " is " + num);