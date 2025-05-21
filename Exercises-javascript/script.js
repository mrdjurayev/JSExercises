// 5. Write a javascript program to rotate the string 'Hello' in the right direction. This is done by periodically removing one letter from the string end and attaching it the front.
let str = 'Hello';
setInterval(() => {
    str = str[str.length - 1] + str.slice(0, str.length - 1);
    console.log(str);
}, 1000);