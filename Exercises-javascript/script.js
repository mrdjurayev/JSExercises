// 77. Write a Javascript program to test whether an array of integers of length 2 contains 1 or 3.

function checkNumber(arr) {
    return arr.includes(1) || arr.includes(3);
}

console.log(checkNumber([1, 2]));