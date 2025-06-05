// 71. Write a Javascript  program to check whether 1 appears in the first or last position of a given array of integers. The  array length must be larger than or equal to 1.

function checkCharacter(arr) {
    if(arr.length < 1) {
        return `array's length must be longer than or equal to 1!`;
    }

    return arr[0] === 1 || arr[arr.length - 1] === 1;
}

console.log(checkCharacter([10, 2, 3, 1]));