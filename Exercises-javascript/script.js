// 68. Write a Javascript program to create a new string using the first and last n characters from a given string. The string length  must be larger than or equal to n

function createString(str, n) {
    if(str.length < n) {
        return `The string length must be longer than or equal to n!`;
    }

    const firstCharacters = str.slice(0, n);
    const lastCharacters = str.slice(-n);

    return firstCharacters + lastCharacters;
}

console.log(createString('hello', 2));