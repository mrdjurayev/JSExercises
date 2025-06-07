// 81. Write a Javascript program to add two digits to a given  positive integer of length two.

function add(number)  {
    if(number >= 10 && number <= 99) {
        return Math.floor(number / 10) + (number % 10);
    }

    return `The number length isn't 2!`;
}

console.log(add(99));