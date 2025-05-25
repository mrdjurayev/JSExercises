// 16. Write a Javascript program to compute the sum of the given integers. If the two values are the same, then return triple their sum.
function sum(a, b) {
    if(a === b) return (a + b) * 3;
    return a + b;
}

console.log(sum(12, 12));