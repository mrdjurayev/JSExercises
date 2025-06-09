// 92. Write a Javascript program to find the maximum difference between any two adjacent  elements of a given array integers.

const numbers = [1, 20, 30, 49090, 5];
let separateGroup = [];
for(let i = 0; i < numbers.length - 1; i++) {
    const diff = Math.abs(numbers[i + 1] - numbers[i]);
    separateGroup.push(diff);
}

console.log(Math.max(...separateGroup));
