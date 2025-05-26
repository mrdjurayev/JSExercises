// 28. Write a Javascript program to check whether to given integer values are in the range 50..99(inclusive).
// Return true if either of them falls within the range

function inRange(number1, number2) {
    return number1 >= 50 && number1 <= 99 || number2 >= 50 && number2 <= 99;
}

console.log(inRange(60, 0));