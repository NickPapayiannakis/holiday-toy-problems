/*-----------------------------------------------------------------------------
*
* Write a function that takes as its input a string and returns an array of
* arrays sorted in descending order by frequency and then by ascending order
* by character.
*
* Developer note: Function sorts by character rather than frequency.  I
* mis-read the problem statement and ran out of time. Currently does not work.
------------------------------------------------------------------------------*/

function characterFrequency (str) {
  return sortChars(mapChars(str));
}

var mapChars = function(str){
  var chrMap = {};

  for ( var c = 0; c < str.length; c++ ){
    chrMap[str.charCodeAt(str[c])] += 1;
  }
  return chrMap;
}

var sortChars = function( map ) {
  var ch, result;
  ch = [], result = [];

  for(var key in map){
    ch.push(convertKey(key));
    ch.push(map[key]);
    result.push(ch);
    ch = [];
  }
  return result;
}

var convertKey = function(key){
  return String.fromCharCode(key);
}