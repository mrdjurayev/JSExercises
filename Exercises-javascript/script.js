// 79. Write a Javascript program to test whether a given array of integers cotains 30 and 40 twice. The array length should be 0, 1 or 2.

function checkNumber(arr) {
    if(arr.length === 2) {
        return (arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40);
    }
    return false;
}

console.log(checkNumber([30, 30]));