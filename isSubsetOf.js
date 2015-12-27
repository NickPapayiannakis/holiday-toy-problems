/*-----------------------------------------------------------------------------
*
* Make an array method that can return whether or not a context array is a
* subset of an input array. To simplify the problem, you can assume that both
* arrays will contain only strings.
*
------------------------------------------------------------------------------*/

Array.prototype.isSubsetOf = function(inArr) {
  var map = {};
  var subset = this;
  
  for (var i = 0; i < inArr.length; i++){
    map[inArr[i]] = true;
  }
  
  for (var e = 0; e < subset.length; e++){
    if(subset[e] in map){
      continue;
    } else {
      return false
    }
  }
  return true;
}