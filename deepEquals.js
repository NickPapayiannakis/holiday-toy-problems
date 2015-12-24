/*-----------------------------------------------------------------------------
*
* Write a function that, given two objects, returns whether or not the two
* are deeply equivalent–meaning the structure of the two objects is the same,
* and so is the structure of each of their corresponding descendants.
*
* ATTEMPTED.
*
------------------------------------------------------------------------------*/

deepEquals = function(a, b){
  var equals = true;

  var recursiveCheck = function(){

    for (var key in a){
      if (a[key] !== b[key] ||  Object.keys(a).length !== Object.keys(b).length) {
        equals = false;
        break;
      }
    }

  }
  return equals;
};

var keyPusher = function(o1, k) {
  for (var key in o){
    if (typeof o[key] === 'object' && o[key] !== null ){
      keyPusher(key, o[key]);
    }
    propertyCompare()
  }
}

var propertyCompare = function (property1, property2) {
  if (property1 !== property2){
    return false;
  }
}