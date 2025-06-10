// 94. Write a Javascript program to find the number appearing most frequently in a given array of integers.

function mostFrequent(arr) {
    let count = {};
    let maxCount = 0;
    let result = null;

    for(let num of arr) {
        count[num] = (count[num] || 0) + 1;

        if(count[num] > maxCount) {
            maxCount = count[num];
            result = num;
        }
    }
    return result;
}

console.log(mostFrequent([1, 2, 3, 4, 3, 6]));