// 57. Write a Javascript program to create of specified copies (positive numbers) of a given string

function stringCopy(str, num) {
    if (typeof str !== 'string' || typeof num !== 'number' || num < 1) {
        return '';
    }
    return str.repeat(num);
}
console.log(stringCopy('awda', 3));