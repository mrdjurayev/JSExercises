// 23. Write a Javascript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
const swapChar = str => {
    if(str.length <= 1) return str;

    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    const middleChar = str.substring(1, str.length - 1);
    return lastChar + middleChar + firstChar;
}

console.log(swapChar('hello'));