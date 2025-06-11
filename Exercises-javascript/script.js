// 98. Write a Javascript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
// For example: "Write" will be write and "PHp" will be "PHP".

function toUpperOrLowerCase(str) {
    
    let upperChars = 0;
    let lowerChars = 0;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(/[A-Z]/.test(char)) {
            upperChars++;
        } else if(/[a-z]/.test(char)) {
            lowerChars++;
        }
    }

    if(upperChars > lowerChars) {
        return str.toUpperCase();
    } else if(upperChars < lowerChars) {
        return str.toLowerCase();
    }
    else return str;
}

console.log(toUpperOrLowerCase('HeLLo'));