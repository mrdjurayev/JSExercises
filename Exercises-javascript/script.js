// 95. Write a Javascript program to replace all numbers with a specified number in an array of integers.

function replaceGivenNumber(arr, num) {
    const anotherArr = arr.map(() => num);
    return anotherArr;
}

console.log(replaceGivenNumber([1, 2, 3, 4], 5));