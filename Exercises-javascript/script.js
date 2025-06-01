// 60. Write a Javascript program to create a new string without the first and last characters of a given string

function newString(str) {
    const newStr = str.slice(1, str.length - 1);
    return newStr;
}

console.log(newString('Javascript'));

