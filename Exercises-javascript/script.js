// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. 
// This is in such a way that it will become equal to another given string. 

function canRearrangeToMatch(str1, str2) {
    if (str1.length !== str2.length) return false;

    function countLetters(str) {
        let map = {};
        for (let letter of str) {
            map[letter] = (map[letter] || 0) + 1;
        }
        return map;
    }

    let str1Letters = countLetters(str1);
    let str2Letters = countLetters(str2);

    for (let char in str1Letters) {
        if (str1Letters[char] !== str2Letters[char]) {
            return false;
        }
    }

    return true;
}

console.log(canRearrangeToMatch('hello', 'olleh'));
