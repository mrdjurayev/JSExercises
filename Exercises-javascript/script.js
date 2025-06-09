// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 

function maxDifference(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return max - min;
}

console.log(maxDifference([1, 2, 34, 55, 90]));
