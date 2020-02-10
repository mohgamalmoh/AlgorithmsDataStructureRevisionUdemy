// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var obj = {}
    //let max = 0
    let maxKey = str[0]
    /*str.split('').every((char,i)=>{
        obj[char] = !obj[char] ? 0 : obj[char]++
    })*/

    for(let char of str){
        obj[char] = !obj[char] ? 1 : (obj[char]+1)
        if(obj[char] > obj[maxKey]){
            maxKey = char
        }

    }

    return maxKey
}

module.exports = maxChar;
