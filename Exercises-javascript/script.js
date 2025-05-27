// 35. Write a  program to check  whether a specified character exists between the 2nd and 4th positions in a given string.
function checkCharacter(str, char) {
    const strBetween = str.substring(1, 4);
    return strBetween.includes(char);
}

console.log(checkCharacter('hel', 'l'));