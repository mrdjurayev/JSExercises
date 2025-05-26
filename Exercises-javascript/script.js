// 21. Write a Javascript program to create another string  by addding "Py" in front of a given string. If the given string begins with "Py" return the original string
function addPy(str) {
    if(str.startsWith("Py")) {
        return str;
    } else {
        return "Py" + str;
    }
}

console.log(addPy("autoGUI"));

// short version: 
const addPy = str => str.startsWith("Py") ? str : "Py" + str;
console.log(addPy('hello')); // same result as the below code, just comment out the previous code
