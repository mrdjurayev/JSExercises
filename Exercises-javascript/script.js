// 8. Write a Javascript program where the prgram takes a random integer between 1 and 10 ,
// and the user is then prompted to input a guess number. The program displays a message "Good work" 
// if the input matches the guess number otherwise "not mached".
let randomNumber = Math.floor((Math.random() * 10)) + 1;
let inputNumber = prompt('Enter your number');
if(Number(inputNumber) === randomNumber) {
    alert("Good work");
} else {
    alert("incorrect");
}
