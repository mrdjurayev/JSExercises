// 83. Write a Javascript program to find the longest string from a given array of strings.

function findLongestString(arr) {
    if(arr.length === 0) return 'Empty array!';

    let longest = arr[0]; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(findLongestString(['hello', 'Javascript']));
