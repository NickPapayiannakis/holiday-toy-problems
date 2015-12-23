/*-----------------------------------------------------------------------------
*
* Write a function that accepts two strings as arguments, and returns only the
* characters that are common to both strings.
*
-----------------------------------------------------------------------------*/


var commonCharacters = function(string1, string2){
  var obj1 = mapChars(string1);
  var obj2 = mapChars(string2);

  return compareKeys(obj1, obj2);
};

var mapChars = function(str) {
  var obj = {};

  for(var i = 0; i < str.length; i++){
    obj[str[i]] = str.charCodeAt(i) === 32 ? undefined : true;
  }
  return obj;
};

var compareKeys = function(obj1, obj2) {
  var result = "";

  for(var key in obj1){
    if(obj2[key]){
      result += key;
    }
  }
  return result;
};