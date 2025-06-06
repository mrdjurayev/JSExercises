// 74. Write a Javascript program to find the largerst value between the first and last elements and set all the  other elements to that value. Display the updated.

function updateElements(arr) {
    const largest = Math.max(...arr.slice(1, arr.length - 1));
    const updatedArr = arr.map((elem, index) => {
        return index === 0 || index === arr.length - 1 ? elem : largest;
    });
    return updatedArr;
}

console.log(updateElements([1, 20, 30, 40, 50]));