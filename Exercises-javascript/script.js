// 40. Write a Javascript program to check from two given integers whether one of them is 8 or  their sum or difference is 8

function conditionSum(a, b) {
    const sum = a + b;
    const diff = Math.abs(a - b);

    return sum === 8 || diff === 8 || a === 8 || b === 8 ? `equal` : `not equal`;
}

console.log(conditionSum(3, 8));