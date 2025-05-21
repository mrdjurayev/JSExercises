// 4. Write a Javascript program to find the area of a triangle three sides are 5, 6, 7;
function AreaTriangle(a, b, c) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p-a) * (p-b) * (p-c));
    return area;
}

console.log(AreaTriangle(5, 6, 7)); // you can try it with other numbers