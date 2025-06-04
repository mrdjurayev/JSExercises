// 64. Write a Javascript program to concatenete two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string

function concatenateString(str1, str2) {
    const minLength = Math.min(str1.length, str2.length);
    return str1.slice(0, minLength) + str2.slice(0, minLength);
}

console.log(concatenateString('hello', 'world'));