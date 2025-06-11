// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 

function sumOfAbsoluteDifferences(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i + 1] - arr[i]);
    }

    return sum;
}

console.log(sumOfAbsoluteDifferences([1, 2, 3, 4, 5, 6, 7, 12, 23, 34]));