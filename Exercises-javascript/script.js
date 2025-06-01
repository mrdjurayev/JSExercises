// 58. Write a Javascript program to create an updated of 4 copies of the last 3 characters of a given string original string. The string length must  be 3 and above.

function copyCharacter(str) {
    if(str.length < 3) return `The string length must be 3 or above!`;
    
    const lastThree = str.slice(-3);

    return lastThree.repeat(4);
}

console.log(copyCharacter('hello'));