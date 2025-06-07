// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  
function checkNumber(arr) {
    return !arr.includes(1) && !arr.includes(3);
}

console.log(checkNumber([0, 2]));