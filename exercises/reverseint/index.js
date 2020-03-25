// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    //let str = n.toString()
    //let sign = Math.sign(n)

   /* if( sign == -1){
        str = str.substr(1,str.length)
    }*/
    //return  str

   /* let endOfZeroes = str.length
    for(let i = str.length-1 ; i>=0 ; i--){
        if(str[i] == 0){
            endOfZeroes = i
        }

    }
    //return endOfZeroes
    //debugger;
    str = str.substr(0,endOfZeroes+1)*/
    let reversed = n.toString().split('').reduce((rev,char)=> char + rev, '')
    let result =   parseInt(reversed) * Math.sign(n)

    return parseInt(result)
}

module.exports = reverseInt;
