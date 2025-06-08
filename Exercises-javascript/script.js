// 82. Write a Javascript program to add two positive integer witout carrying.

function addWithoutCarrying(a, b) {
    const longer = Math.max(a.toString().length, b.toString().length);
    const strA = a.toString().padStart(longer, '0');
    const strB = b.toString().padStart(longer, '0');
    
    let added = '';
    for(let i = 0; i < longer; i++) {
        added += ((+strA[i] + +strB[i]) % 10).toString();
    }

    return Number(added);
}

console.log(addWithoutCarrying(12, 48));


