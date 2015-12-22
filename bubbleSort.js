/*-----------------------------------------------------------------------------
*
* Implement bubbleSort
*
-----------------------------------------------------------------------------*/

var bubbleSort = function(array) {
  var sorted = false;
  var swapStore = 0;

  while(!sorted){
    sorted = true;

    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
        swapStore = array[i+1];
        array[i + 1] = array[i];
        array[i] = swapStore;
        sorted = false;
      }
    }
  }
  return array;
};