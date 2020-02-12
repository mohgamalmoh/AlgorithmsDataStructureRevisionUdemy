// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return formatString(stringA) == formatString(stringB)
}

/*

function anagrams(stringA, stringB) {
    var objA = buildMap(stringA)
    var objB = buildMap(stringB)



    if(objA['length'] != objB['length']){
        return false
    }

    for (let index in objA['obj']){
        if(objA['obj'][index] != objB['obj'][index]){
            return false
        }
    }

    return true
}

function buildMap(string){
    var obj = {}
    string = string.replace(/[^\w]/g , '').toLowerCase() //this keeps only alphaneumerals + undescores
    for(let char of string){
        obj[char] = !obj[char] ? 1 : (obj[char]+1)
    }
    return {'length':string.length , 'obj' : obj}
}*/
function formatString(string){

    return string.replace(/[^\w]/g , '').toLowerCase().split('').sort().join('') //this keeps only alphaneumerals + undescores

}
module.exports = anagrams;
