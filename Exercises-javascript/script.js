// 88. Write a JavaScript program that takes two integers and a divisor. 
// If the given divisor divides both integers and does not divide either, 
// two specified integers are similar. Check whether two integers are similar or not.  

function checkSimilarity(a, b, divisor) {
    return (a % divisor !== 0 && b % divisor !== 0) || (a % divisor === 0 && b % divisor === 0);
}

console.log(checkSimilarity(16, 23, 3));