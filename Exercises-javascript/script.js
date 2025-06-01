// 55. Write a Javascript program to check whether  a given string contains an equal number of p's and t's

const countLetters = str => {
    const letters = str.toLowerCase().split('');
    const countP = letters.filter(letter => letter === 'p').length;
    const countT = letters.filter(letter => letter === 't').length;
    const isEqual = countP === countT;
    return {countP, countT, isEqual};
}

console.log(countLetters('hello Master'));