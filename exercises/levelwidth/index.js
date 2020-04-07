// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let temp_arr = [root,null]
    let lengths = [0]
    let current_level = 0
    while(temp_arr.length > 1){
        let node = temp_arr.shift()
        if(node){
            lengths[current_level]++
            temp_arr.push(...node.children)
        }else{
            //if(temp_arr.length ){
                temp_arr.push(null)
                current_level++
                lengths[current_level] = 0
           // }

        }

    }
    return lengths
}

module.exports = levelWidth;
