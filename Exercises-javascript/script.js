// 59. Write a Javascript program to extract the first half of a even string

function extractStringHalf(str) {
    if(str.length % 2 !== 0) {
        return `String's length isn't even!`;
    }

    const stringHalf = str.slice(0, str.length / 2);

    return stringHalf;
}

console.log(extractStringHalf('java'));

