// 84. Write a Javascript program to replace each character in a given string with the next in the English alphabet.
//  Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replaceCharacter(str) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alphabetUp = alphabet.map(letter => letter.toUpperCase());
    
    const replacedStr = str.split('').map(letter => {
        if(letter === "z") {
            return "a";
        } else if(letter === 'Z') {
            return "A";
        }

        for(let i = 0; i < alphabet.length; i++) {
            if(letter === alphabet[i]) {
                return alphabet[i + 1];
            } else if(letter === alphabetUp[i]) {
                return alphabetUp[i + 1];
            }

        }

        return letter;
    });

    return replacedStr.join('');
}

console.log(replaceCharacter('hello javascript'));