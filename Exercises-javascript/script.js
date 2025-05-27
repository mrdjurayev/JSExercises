// 32. Write a Javascrip program to find closest value to 100 from two numerical values
function findClosest(num1, num2) {
    const diff1 = Math.abs(100 - num1);
    const diff2 = Math.abs(100 - num2);

    if(diff1 < diff2) return num1;
    else if(diff1 > diff2) return num2;
    else return {num1, num2};
}

console.log(findClosest(110, 110));