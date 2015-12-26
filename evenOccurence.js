/*-----------------------------------------------------------------------------
*
* Find the first item that occurs an even number of times in an array.
* Remember to handle multiple even-occurrence items and return the first
* one. Return null if there are no even-occurrence items.
*
-----------------------------------------------------------------------------*/

function evenOccurence(arr) {
    return findEven(arr, mapArr(arr));
};

var mapArr = function(array){
    var mappedArray = {};

    for (var i = 0; i < array.length; i++){
      arr[i] in hash ? hash[arr[i]]++ : hash[arr[i]] = 1;
    }
    return mappedArray;
};

var findEven = function(array, object){
    for (var i = 0; i < array.length; i++){
        if (object[array[i]] % 2 === 0){
            return array[i];
        }
    }
    return null;
};