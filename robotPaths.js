/*
* * Attempted robot paths in 30min
*
*
A robot located at the top left corner of an n x n grid is 
trying to reach the bottom right corner. The robot can move
either up, down, left, or right, but cannot visit the same 
spot twice. How many possible unique paths are there to the 
bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)
You've got Helpers! 
function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}


INPUT: Integer (grid size)
OUTPUT: Integer (representing unique paths)

CONSTRAINTS:

1. Robot cannot move diagonally.
2. Paths must lead to bottom right corner
3. Solution must work for a grid of any size
4. No input validation required, assume correct input.
5. Robot cannot move over same square twice per path.
6. Paths must be unique to count in solution.

REDUCTION:

-Find a way to keep track of square visited (togglepiece method)
-Iterate over board to discover all unique paths to bottom right
-Keep track of how many paths were found

PSEUDOCODING:

  //declare x postion
  // declare y position
  // declare count
  
// Base case
 // If at bottom right corner
  // add one to count
  // return 
  
// Recursive case

  // If square above/below exists and has not been visited
    //move to that square recursively up (set coords to row above, same index)
    
  // If square left/right exists and has not been visited
    //move to that square recursively up (set coords to index -1/ index +1)
    
CODE:
*/
function robotPaths (n) {
  var xpos, ypos, pathCount;
  xpos = 0, ypos = 0, pathCount = 0;
  
  var findPath = function(ypos,xpos) {
    // Base case
    if (xpos === n && ypos === n){
      pathCount++;
      return;
    }

    // Recursive case
    board.togglePiece(ypos, xpos);
    
    // Above
    if(board[ypos - 1][xpos] && board.hasBeenVisited === false){
      findPath(ypos-1,xpos);
    }
    // Below
    if(board[ypos + 1][xpos] && board.hasBeenVisited === false){
      findPath(ypos+1, xpos);
    }
    
    // Left
    if(board[ypos][xpos - 1] && board.hasBeenVisited === false){
      findPath(ypos, xpos-1);
    }
    
    // Right
    if(board[ypos][xpos + 1] && board.hasBeenVisited === false){
      findPath(ypos, xpos+1);
    }
  }

  findPath(0,0);
  return pathCount;
}