// 72. Write a Javascript program to check  whether the first and last elements are  the same in a given array of integers of length 3.

function checkFirstLastElement(arr) {
    return arr[0] === arr[arr.length - 1];
}

console.log(checkFirstLastElement([3, 2, 3]));