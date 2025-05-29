// 48. Write a Javascript code to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
} 

console.log(reverseString('hello'));