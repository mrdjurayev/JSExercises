// 42. Write a Javascript program to check whether three given numbers are increasing in strict or in soft mode. 
// strict mode --> 10, 14, 23; soft mode --> 24, 22, 31 (c >= b);

function checkOrder(a, b, c) {
    if(a < b && b < c) return `Strict mode`;
    else if(c >= b) return `Soft mode`;
    else return `the numbers are not sorted`;
}

console.log(checkOrder(12, 4, 3));
