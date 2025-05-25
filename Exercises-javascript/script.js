// 15. Write a Javascript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference
function difference13(n) {
    if(n <= 13) {
        return 13 - n;
    } else {
        return 2 * (n - 13);
    }
}

console.log(difference13(12));