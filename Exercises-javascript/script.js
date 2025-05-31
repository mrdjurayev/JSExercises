// 52. Write a Javascript program to convert letters of a given string alphabetically

function sortLetters(str) {
    const letters = str.split('');
    return letters.sort().join('');
}

console.log(sortLetters('hello'));