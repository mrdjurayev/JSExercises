// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in
//  a given string. If "Script" appears in the string, return the string without 
// "Script" otherwise return the original one.  

function checkScript(str) {
    const startScript = str.substring(4, 10);
    return startScript === 'Script' ? str.substring(0, 4) : str; 
}

console.log(checkScript('wellScript'));