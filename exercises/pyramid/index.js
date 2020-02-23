// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    print(n,1,'')
}

function print(size , row = 1, str){

    //console.log(str.length < (  (((2*size)-1)/2) - (((2*row)-1)/2)  ) || str.length >= (  (((2*size)-1)/2) + (((2*row)-1)/2)  ));
    if(row > size )
    {
        return ;
    }

    if(str.length == (2*size)-1){
        console.log(str)
        return print(size,row+1, '')
    }

    //str = str.length < row ? str+'#' : str+' '

    if(str.length < (  (((2*size)-1)/2) - (((2*row)-1)/2)  ) || str.length >= (  (((2*size)-1)/2) + (((2*row)-1)/2)  )){
        str = str + ' '
    }else{
        str = str +'#'
    }
    print(size,row, str)

}
module.exports = pyramid;
