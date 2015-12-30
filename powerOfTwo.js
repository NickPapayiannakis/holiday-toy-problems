/*
*
* Write a function that checks if a number is a power of two
*
*/

var powerOfTwo = function(n) {
  if(n <= 0){
    return false;
  } else {
    if(n % 1 === 0){
      return oneCheck((n >>> 0).toString(2));
    } else {
      return oneCheck((1/n >>> 0).toString(2));
      }
    }
  }

var oneCheck = function(string) {
  var oneCount, i;
  oneCount = 0, i = 0;

  for(var i = 0; i < string.length; i++) {
    if (string[i] === "1"){
      oneCount++;
    } else if (oneCount > 1) {
      return false;
    }
  }
  return oneCount === 1;
}