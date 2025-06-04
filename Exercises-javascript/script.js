// 65. Write a Javascript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

function endWithScript(str) {
    if(str.length >= 6) {
        return str.endsWith('Script');
    }

    return `The string must be greater than or equal to 6!`;
}

console.log(endWithScript('Script'));

