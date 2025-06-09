//86. Write a Javascript program to find the types of a given angle.

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function findNameAngle(deg) {
    if(deg > 0 && deg < 90) {
        return 'Acute angle';
    } else if(deg === 90) {
        return 'Right angle';
    } else if(deg > 90 && deg < 180) {
        return 'Obtuse angle';
    } else if(deg === 180) {
        return 'Straight angle';
    } else return 'The degree is invalid for this example!';
}

console.log(findNameAngle(180));