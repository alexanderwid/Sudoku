// A suduko puzzle is a 9x9 array with numbers from 0-9.

// Some examples:

var diagonal =
    [ [1,0,0,0,0,0,0,0,0]
    , [0,2,0,0,0,0,0,0,0]
    , [0,0,3,0,0,0,0,0,0]
    , [0,0,0,4,0,0,0,0,0]
    , [0,0,0,0,5,0,0,0,0]
    , [0,0,0,0,0,6,0,0,0]
    , [0,0,0,0,0,0,7,0,0]
    , [0,0,0,0,0,0,0,8,0]
    , [0,0,0,0,0,0,0,0,9] ];

var easy =
    [ [0,2,0,4,5,6,7,8,9]
    , [4,5,7,0,8,0,2,3,6]
    , [6,8,9,2,3,7,0,4,0]
    , [0,0,5,3,6,2,9,7,4]
    , [2,7,4,0,9,0,6,5,3]
    , [3,9,6,5,7,4,8,0,0]
    , [0,4,0,6,1,8,3,9,7]
    , [7,6,1,0,4,0,5,2,8]
    , [9,3,8,7,2,5,0,6,0] ];

var medium =
    [ [0,4,0,0,0,2,0,1,9]
    , [0,0,0,3,5,1,0,8,6]
    , [3,1,0,0,9,4,7,0,0]
    , [0,9,4,0,0,0,0,0,7]
    , [0,0,0,0,0,0,0,0,0]
    , [2,0,0,0,0,0,8,9,0]
    , [0,0,9,5,2,0,0,4,1]
    , [4,2,0,1,6,9,0,0,0]
    , [1,6,0,8,0,0,0,7,0] ];

var hard =
    [ [0,2,0,0,0,0,0,0,0]
    , [0,0,0,6,0,0,0,0,3]
    , [0,7,4,0,8,0,0,0,0]
    , [0,0,0,0,0,3,0,0,2]
    , [0,8,0,0,4,0,0,1,0]
    , [6,0,0,5,0,0,0,0,0]
    , [0,0,0,0,1,0,7,8,0]
    , [5,0,0,0,0,9,0,0,0]
    , [0,0,0,0,0,0,0,4,0] ];

var almostsolved =
    [ [0,2,3,4,5,6,7,8,9]
    , [4,5,7,1,8,9,2,3,6]
    , [6,8,9,2,3,7,1,4,5]
    , [8,1,5,3,6,2,9,7,4]
    , [2,7,4,8,9,1,6,5,3]
    , [3,9,6,5,7,4,8,1,2]
    , [5,4,2,6,1,8,3,9,7]
    , [7,6,1,9,4,3,5,2,8]
    , [9,3,8,7,2,5,4,6,1] ];

var solved =
    [ [1,2,3,4,5,6,7,8,9]
    , [4,5,7,1,8,9,2,3,6]
    , [6,8,9,2,3,7,1,4,5]
    , [8,1,5,3,6,2,9,7,4]
    , [2,7,4,8,9,1,6,5,3]
    , [3,9,6,5,7,4,8,1,2]
    , [5,4,2,6,1,8,3,9,7]
    , [7,6,1,9,4,3,5,2,8]
    , [9,3,8,7,2,5,4,6,1] ];

// Return an empty sudoku
function emptySudoku() {
    return [ [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0]
           , [0,0,0,0,0,0,0,0,0] ];
}


// Convert an array of arrays to a string keeping track of the inner
// arrays.
function arrayToString(arr) {
    var s = "";
    for (var i = 0; i < arr.length; i++){
        if (i == arr.length - 1){
            s += "<br>[" + arr[i].toString() + "]</br>";
        }
        else{
            s += "<br>[" + arr[i].toString() + "]</br>\n";
        }
    }
    return s;
}


// Compute all 27 blocks of a sudoku. Returns all 9 rows, 9 cols and 9
// 3x3 blocks
function blocks(sud) {

    all_blocks = [];
    // This for loop adds all rows to blocks
    for (var i = 0; i < sud.length; i++){
        all_blocks.push(sud[i]);
    }

    // This for loop adds all columns to blocks
    for (var i = 0; i < sud.length; i++){
        column = [];
        for (var j = 0; j < sud.length; j++){
            column.push(sud[j][i])
        }
        all_blocks.push(column)
    }
 
    // This for loop adds all 3x3 squares to blocks
    square = [];
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    
    square = [];
    for (var i = 0; i < 3; i++){
        for (var j = 3; j < 6; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    
    square = [];
    for (var i = 0; i < 3; i++){
        for (var j = 6; j < 9; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);

    square = [];
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    square = [];
    for (var i = 0; i < 3; i++){
        for (var j = 3; j < 6; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    square = [];
    for (var i = 0; i < 3; i++){
        for (var j = 6; j < 9; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);

    square = []
    for (var i = 6; i < 9; i++){
        for (var j = 0; j < 3; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    square = [];
    for (var i = 6; i < 9; i++){
        for (var j = 3; j < 6; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    square = []
    for (var i = 6; i < 9; i++){
        for (var j = 6; j < 9; j++){
            square.push(sud[i][j])
        }
    }
    all_blocks.push(square);
    return all_blocks;
}



// Check that a block is valid (i.e. that it contains no duplicate
// number 1-9, but multiple 0 is fine).
function isValidBlock(b) {
    const set = new Set();
    for (var i of b){
        if (i != 0){
            if (set.has(i)){
                return false;
            }
            set.add(i);
        }
    }
    return true;
}


// Check that a sudoku is valid by checking that all of its blocks are
// valid.
function isValid(sud) {
    for (var block of blocks(sud)){
        if (!isValidBlock(block)){
            return false;
        }
    }
    return true;
}


// Check if a sudoku is solved by checking that there are no zeroes
// and that it is valid.
function isSolved(sud) {
    all_blocks = blocks(sud);
    const allowable_numbers = new Set([1,2,3,4,5,6,7,8,9]);
    for (var block of all_blocks){ 
        const seen = new Set();
        for (var num of block){
            if (allowable_numbers.has(num)){
                if (seen.has(num)){
                    return false;
                }
                seen.add(num);
            }
            else{
                return false;
            }
        }
    }
    return true;
}


// Draw the start sudoku
function init(sud) {
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            var element_id = "c" + i + "x" + j;
            if (sud[i][j] != 0){
                document.getElementById(element_id).innerHTML = sud[i][j];
                document.getElementById(element_id).style.backgroundColor = "#b6d9ee";
            }
            else{
                document.getElementById(element_id).onclick = klick(element_id);
            }
        }
    }
}


// What to do when the user clicks on a tile
function klick(id) {
    var input_num = prompt("Enter number betweeen 1 and 9");
    document.getElementById(id).innerHTML = input_num;
}


// Fetch the current sudoku
function getSudoku() {

}
