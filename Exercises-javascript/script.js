// 24. Write a Javascript program to create another string from a given string with the first character of the given string added to the front and back
const FrontBackCharacter = function(str) {
    if(str.length === 0) return "";
    const firstCharacter = str[0];
    return firstCharacter + str + firstCharacter;
}

console.log(FrontBackCharacter(''));