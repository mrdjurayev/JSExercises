// 56. Write a Javascript program to divide two positive numbers and return the result as string with properly formatted

function divideAndFormat(a, b) {
    if(a <= 0 || b <= 0) {
        return `Please enter positive numbers!`;
    }

    const result = a / b;
    return result.toLocaleString('en-US');
}

console.log(divideAndFormat(1232, 900));

