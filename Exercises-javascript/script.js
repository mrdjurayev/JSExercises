// 20. Write a Javascript program to check two given integers whether one is positive and another one is negative
function positiveNegative(a, b) {
    return (a > 0 && b < 0) || (a < 0 && b > 0);
}

console.log(positiveNegative(5, -3));  // true
console.log(positiveNegative(-7, 9));  // true
console.log(positiveNegative(0, -1));  // false
console.log(positiveNegative(4, 6));   // false
console.log(positiveNegative(-2, -8)); // false
