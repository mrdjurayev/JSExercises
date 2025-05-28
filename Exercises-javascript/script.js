// 43. Write a Javascript proram to check from three given numbers (non negative  integers) that two or all of them have the same rightmost digit

function numbersCheck(a, b, c) {
    if(a % 10 === b % 10 && b % 10 === c % 10) return true;
    else if(a % 10 === b % 10 || b % 10 === c % 10 || a % 10 === c % 10) return true;
    else return  false;
}

console.log(numbersCheck(12, 22, 45));