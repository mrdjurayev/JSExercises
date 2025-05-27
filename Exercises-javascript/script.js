// 34. Write a Javascrip program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive
function findLargestRange(a, b) {
    if(!(a >= 40 && a <= 60) || !(b >= 40 && b <= 60)) return `Invalid input: both numbers must be between 40 and 60 inclusive`;
    else return Math.max(a, b);
}

console.log(findLargestRange(5, 56));