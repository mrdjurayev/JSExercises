// 10. Write a Javascript program to calculate multiplication and division of two numbers (input from the user)
function calculator() {
    const result = document.getElementById('result');

    function getNumbers() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        return {number1, number2};
    }

    document.getElementById('division').addEventListener('click', () => {
        const {number1, number2} = getNumbers();
        if(number2 === 0) {
            result.textContent = `Division by zero is not allowed!`;
        } else {
            result.textContent = `The result is: ${number1 / number2}`;
        }        
    });

    document.getElementById('multiplication').addEventListener('click', ()  => {
        const {number1, number2} = getNumbers();
        result.textContent = `The result is: ${number1 * number2}`;
    });
    

}

calculator();

