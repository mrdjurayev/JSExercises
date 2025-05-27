// 33. Write a Javascript program to check whether two numbers are in the range 40..60 or 70..100 inclusive
function checkRange(num1, num2) {
    return (num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) && (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)
}

console.log(checkRange(12, 23));