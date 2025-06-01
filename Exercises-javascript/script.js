// 54. Write a Javascript program to count the number of vowels in a given string

function countVowels(str) {
    // let vowelLetters = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const letters = str.toLowerCase().split('');
    const vowelLetters = letters.filter(letter => {
        return vowels.includes(letter);
    });

    return vowelLetters.length;
}

console.log(countVowels('hello javascript'));

