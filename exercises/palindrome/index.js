// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let half = str.substr(0,parseInt(str.length/2))
    let halfReversed =  half.split('').reduce((rev, char) => char + rev, '');

    let start = parseInt(str.length/2) //even
    if(str.length % 2 != 0){
        start = parseInt(str.length/2) + 1
    }
    return halfReversed == str.substr(start,str.length)

    /*return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });*/

}

module.exports = palindrome;
