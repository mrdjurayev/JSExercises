// 14. Write a Javascript program to get the filename extension
function getFileExtension(filename) {
    return filename.split('.').pop(); //it splits the filename by the dot and converts in into an array and pop takes the last element
}

console.log(getFileExtension('Javascript.pdf')); // pdf