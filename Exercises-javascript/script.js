// 61. Write a Javascript program to concatinate two strings except for their first character

function concatinateString(str1, str2) {
    const newStr1 = str1.slice(1);
    const newStr2 = str2.slice(1);

    return newStr1 + newStr2;
}

console.log(concatinateString('hello', 'javascript'));