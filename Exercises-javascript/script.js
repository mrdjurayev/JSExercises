// 32. Write a Javascript program to find the largest of three given integers
function findLargestIntegers(a, b, c) {
    if(a >= b && a >= c) return a;
    else if(b >= a && b >= c) return b;
    else return c;
}

console.log(findLargestIntegers(10, 15, 15));
