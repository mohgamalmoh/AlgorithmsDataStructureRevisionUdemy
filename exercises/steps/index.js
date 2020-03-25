// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

print(n,1,'')

    //print(n,n);

    /*for (let i = 0 ; i < n ; i++){
        let str = ''
        for (let j = 0 ; j < i+1 ; j++){
            str = str + "#"
        }

        for (let k = i+1 ; k < n ; k++){
            str = str + " "
        }

        if(i < n-1){
            //str = str + "\n"
        }

        console.log(str);
    }*/

}

    function print(size , row = 1, str){
        if(row > size)
        {
            return ;
        }

        if(str.length == size){
            console.log(str)
            return print(size,row+1, '')
        }

        str = str.length < row ? str+'#' : str+' '

        print(size,row, str)

    }
    /*function print(size , n)
    {

        if(n === 0)
            {
                return ;
            }

        print(size , n-1);

        let str = ""
        for (let j = 0 ; j < n ; j++){
            str = str + "#"
        }

        for (let k = n ; k < size ; k++){
            str = str + " "
        }

        console.log(str);
        }*/

module.exports = steps;
