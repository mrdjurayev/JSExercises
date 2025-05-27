// 36. Write a Javascript program that checks whether the last digit of three positive integers in the same.
function sameThreeNumbers(a, b, c) {
    return a % 10 === b % 10 && b % 10 === c % 10;
}

console.log(sameThreeNumbers(12, 1, 3412));