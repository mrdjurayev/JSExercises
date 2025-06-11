// 97. Write a JavaScript program to find the shortest possible string. 
// This can be converted into a string and converted into a palindrome by adding characters to the end of it. 

function shortestPalindromeByAddingToAnd(str) {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    for(let i = 0; i < str.length; i++) {
        let suffix = str.slice(i);

        if(isPalindrome(suffix)) {
            const prefixToAdd = str.slice(0, i).split('').reverse().join('');
            return str + prefixToAdd;
        }
    }

    return str;
}

console.log(shortestPalindromeByAddingToAnd('race'));