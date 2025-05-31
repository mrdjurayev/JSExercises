// 53. Write a Javascript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string

function checkLetter(str) {
    const letters = str.split('');
    for(let i = 0; i < letters.length - 4; i++) {
        if(
            str[i] === 'a' && str[i + 4] === 'b' ||
            str[i] === 'b' && str[i + 4] === 'a'
        ) return true;        
    }

    return false;
}

console.log(checkLetter('askdb'));