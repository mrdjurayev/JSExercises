// 41. Write a Javascript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40

function conditionNumbers(a, b, c) {
    if(a === b && b === c) return 30;
    if(a === b || a === c || b === c) return 40;
    else return 20;
}

console.log(conditionNumbers(12, 12, 345));