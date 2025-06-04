// 63. Write a Javascript program to create a string using the middle three chracters of a given string of odd length. The string length must be greater then or equal to three.

function getMiddleThree(str) {
    if(str.length % 2 == 0 || str.length < 3) {
        return `The string lenght must be greater than or equal to three!`;
    }

    return str.slice((str.length - 3) / 2, (str.length - 3) / 2 + 3);
}

console.log(getMiddleThree('getting'));

