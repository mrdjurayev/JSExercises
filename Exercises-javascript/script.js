// 3. Write a Javascript program to get the current date. Expected output: mm-dd-yyyy
const dateObject = new Date();

const month = dateObject.getMonth() + 1;
const today = dateObject.getDate();
const year = dateObject.getFullYear();

const displayDate = document.getElementById('current-date');
displayDate.textContent = `${month}-${today}-${year}`;