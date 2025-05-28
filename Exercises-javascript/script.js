// 39. Write a Javascript program to compute the sum of the two given integers. If the sum in the range 50..80 return 65 otherwise return 80.

function conditionalSum(a, b) {
    const sum = a + b;
    return sum >= 50 && sum <= 80 ? 65 : 80;
}

console.log(conditionalSum(12, 43));