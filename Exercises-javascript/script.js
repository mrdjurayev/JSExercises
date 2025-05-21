// 1. Write a javascript program to display the current day and time in the following format. Sample output: Today is : Tuesday, current time is: 10PM : 30 : 38;
const date = new Date();
const day = date.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = document.getElementById('current-date');
currentDate.textContent = `Today is: ${days[day]}`;

const hour = String(date.getHours()).padStart(2, '0');
const minut = String(date.getMinutes()).padStart(2, '0');
const second = String(date.getSeconds()).padStart(2, '0');

const currentTime = document.getElementById('current-time');
currentTime.textContent = `Current time: ${hour}:${minut}:${second}`;