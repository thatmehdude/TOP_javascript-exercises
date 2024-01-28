function reverseString(string){
    let character = string.split('');
    let reversedCharacters = character.reverse();
    let reversedString = reversedCharacters.join('');
    return reversedString;
}
// Do not edit below this line
module.exports = reverseString;
