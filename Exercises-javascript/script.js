// 70. Write a Javascript program to rotate the elements left in a given array of integers of length 3.

function rotateArray(arr) {
    const shifted = arr.slice(1);
    shifted.push(arr[0]);
    return shifted;
}

console.log(rotateArray([1, 2, 3]));