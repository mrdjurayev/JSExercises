// 91. Write a Javascript program to find the maximum possible sum of some of its k consecutive numbers in a  given array of positive integers.


let k = 3;
const numbers = [1, 2, 3, 4, 5, 6, 7];
let separatedSumGroup = []; 

for (let i = 0; i <= numbers.length - k; i++) {
    const separated = numbers.slice(i, i + k);
    const separatedSum = separated.reduce((acc, val) => acc + val, 0);
    separatedSumGroup.push(separatedSum);
}

console.log(Math.max(...separatedSumGroup)); 


