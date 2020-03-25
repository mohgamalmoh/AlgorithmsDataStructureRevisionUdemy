// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {


    /*let reversed = '';
    for(let charac of str){
        reversed = charac + reversed
        debugger
    }
    return reversed*/
    //debugger

    return   str.split('').reduce((reversed,char)=>  reversed = char + reversed,'');
}

reverse('xyz')
module.exports = reverse;
