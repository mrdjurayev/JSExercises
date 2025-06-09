// 90. Write a Javascript program to find the k th greatest element in a  given array  of integers.

function findGreatest(arr, k) {
    const sorted = arr.sort((a, b) => b - a);

    return sorted[k-1];
}

console.log(findGreatest([1,2, 232, 3444, 55], 2));