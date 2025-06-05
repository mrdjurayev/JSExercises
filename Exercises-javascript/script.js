// 67. Write a Javascript program to create a new  string from a given string. This program removes the first and last characters of the string if the first and last character is 'P'. Return the original string if the condition is not satisfied.

function removeCharacter(str) {
    const firstChar = str.startsWith('P');
    const lastChar = str.endsWith('P');

    if(firstChar && lastChar) {
        return str.slice(1, -1);
    } else if(firstChar) {
        return str.slice(1);
    } else if(lastChar) {
        return str.slice(0, -1);
    }

    return str;
}

console.log(removeCharacter('Python'));