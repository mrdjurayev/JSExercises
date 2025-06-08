// 85. Write a JavaScript program to divide a given array of positive integers into 
// two parts. First element belongs to the first part, second element belongs to 
// the second part, and third element belongs to the first part and so on. 
// Now compute the sum of two parts and store it in an array of size two.

function splitAndSum(arr) {
    const firstElements = arr.filter((num, index) => index % 2 === 0);
    const secondElements = arr.filter((num, index) => index % 2 !== 0);

    const sum1 = firstElements.reduce((acc, num) => acc + num, 0);
    const sum2 = secondElements.reduce((acc, num) => acc + num, 0);

    return [sum1, sum2];
}

console.log(splitAndSum([1, 2, 3, 4, 5]));