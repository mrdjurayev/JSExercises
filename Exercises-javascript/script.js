// 75. Write a Javascript program  to create an array taking the middle elements of the twow arrays of integer and each length 3.

function concatenateMiddleElement(str1, str2) {
    const middleElem1 = str1[1];
    const middleElem2 = str2[1];

    return [middleElem1, middleElem2];
}

console.log(concatenateMiddleElement([1, 2, 3], [4, 5, 6]));