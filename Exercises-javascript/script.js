// 49. Write a Javascript program to replace  every character in a given string with the character following in the alphabet

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'
    , 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
function replaceCharacter(str) {
    let letters = str.split('');
    const replaceLetters = letters.map(letter => {
        const index = alphabet.findIndex(let => let === letter);
        return index === -1 || index === 25 ? 'a' : alphabet[index + 1];
    });

    return replaceLetters.join('');
    
}

console.log(replaceCharacter('hello.'));



