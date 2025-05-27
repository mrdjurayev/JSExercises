//  37. Write a Javascript program produce a new string that has the first 3 characters in lower case from a given 
// string. If the  string length is  less than 3 convert characters to  upper case
function modifyString(str) {
    if(str.length < 3) return str.toUpperCase();
    else {
        const part1 = str.substring(0, 3);
        const part2 = str.substring(3);
        return part1.toLowerCase() + part2;
    }
}

console.log(modifyString('Hi'));