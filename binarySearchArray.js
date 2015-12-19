/*
PROBLEM:

Given a sorted array of integers, find the index
of a target value using a binary search algorithm.


REQUIREMENTS:

Input: Array (of integers), Integer (target)
Output: integer (index of element, or -1)


CONTSTRAINTS:

-Must use binary search algorithm (recursion)
-Must return -1 if the element is not found
-No need to validate input/ouput
-Cannot use Array.prototype.indexOf
-Input is sorted

REDUCTION:

1. Need a way to keep track of our which half of the array we are on
2. Return -1 by default
3. Need a way to keep narrowing search


METAPHORE:

There is a coin hidden in a loaf of bread.
You've got keep slicing the loaf in half
until you find the coin


PSEUDOCODE:

//declare min., max, midpoint
// Assign min to zeroith index, max to end of array


// inner function (min, max)

    // Base case

        // calculate midpoint
        // if midpoint is target
        //return index of midpoint

        // If max is the target
        //return index of max
        //If min is the target
        //return index of min


    // Recursive case

        // If target is > midpoint
        // make min = midpoint
        //max--

        // If target < midpoint
        //make max = midpoint
        //min++

        //innerfunction(max,min, target)

*/

/*
*  COMMENT: GETTING UNKNOWN ERROR FROM MAKER SQUARE.
*  MOST LIKELY DUE TO RETURN STATEMENT ON LINE 100. RAN OUT OF TIME.
*/

function binarySearch (array, target) {
    var min, max;

    min = 0, max = array.length-1;

    var binarySearchAlgorithm = function (min,max){
        var mid;
        mid = Math.floor((max + min)/2);

        // Base Case (check whether min, max, or mid is the target
        if(array[mid] === target){
            return mid;
        } else if (array[min] === target){
            return min;
        } else if(array[max] === target){
            return max;
        }

        // Recursive case
        if(target > array[mid]){
            min = mid;
            max--;
        } else if(target < array[mid]){
            max = mid;
            min++
        }
        binarySearchAlgorithm(min,max);
    }
    binarySearchAlgorithm(min,max);
    return -1;
}
binarySearch([0,12,23,41,67,100,105,307,500], 41);