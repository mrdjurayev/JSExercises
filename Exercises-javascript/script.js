// 62. Write a javascript program to move the last three characters to start of a given string. The  string length must be greater than or equal to three

function moveCharacter(str) {
    if(str.length < 3) {
        return `String length must be greater than or equal to 3`;
    }

    const lastThreeCharacters = str.slice(-3);
    const restStr = str.slice(0, str.length - 3);
    return lastThreeCharacters + restStr;
}

console.log(moveCharacter('javascript'));