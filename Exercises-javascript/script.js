// 69. Write a Javascript program to compute the sum of the three elements  of the given array of integers of length 3

function sumElementsArray(arr) {
    const sum = arr.reduce((sum, acc) => sum + acc, 0);
    return sum;
}

console.log(sumElementsArray([1, 2, 3]));