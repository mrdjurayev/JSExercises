// 76. Write a Javascript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

function createNewArray(arr) {
    if(arr.length < 1) {
        return `The length must be larger than or equal to 1!`;
    }

    return [arr[0], arr[arr.length - 1]];
}

console.log(createNewArray([1, 2, 3]));