// 80. Write a Javascrip program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swapElements(arr) {
    if(arr.length < 1) return `The array length should be at least 1!`;
    const firstChar = arr[0];
    const lastChar = arr[arr.length - 1];
    const betweenChar = arr.slice(1, arr.length - 1);
    return [lastChar, ...betweenChar, firstChar];
}

console.log(swapElements([1, 2, 3, 4, 5]));