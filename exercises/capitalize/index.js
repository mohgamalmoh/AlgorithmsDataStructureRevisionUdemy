// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let captalized = str.toString().split(' ').reduce((prev,currentword,i)=> {

        let newWord = currentword[0].toUpperCase() + currentword.slice(1)
        return prev + newWord + ' '

    }, '')

    return captalized.trim()
}

module.exports = capitalize;
