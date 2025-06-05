// 73. Write a Javascript program to reverse the elements of a given array of integers of length 3.

function reverseElement(arr) {
    return [...arr].reverse();
}

console.log(reverseElement([1, 2, 3]));