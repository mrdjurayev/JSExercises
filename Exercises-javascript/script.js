// 50. Write a Javascript program to capitalize the first letter of each word in a given string

function capitalizeWords(text) {
    const words = text.split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords('hello world!'));