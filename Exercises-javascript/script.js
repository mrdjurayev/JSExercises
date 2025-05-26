// 22. Write a Javascript program to  remove a character at the specified position in a given string and return the modified string
const removeCharacter = (str, position) => {
    const part1 = str.substring(0, position); // [ 0 - position ) it  takes and creates a new string
    const part2 = str.substring(position + 1, str.length); // [ position + 1 - to the end ] it takes the rest, excluding the position
    return part1 + part2;
}

console.log(removeCharacter('Javascript', 5));
