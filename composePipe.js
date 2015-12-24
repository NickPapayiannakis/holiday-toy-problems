/*-----------------------------------------------------------------------------
*
* Compose should return a function that is the composition of a list
* of functions of arbitrary length. Each function is called on the
* return value of the function that follows.
*
------------------------------------------------------------------------------*/



var compose = function(){
  var args = Array.prototype.slice.call(arguments);

  return function (arg) {
    var arg = arg;

    for (var i = args.length - 1; i >= 0; i--){
      arg = args[i].call(this, arg);
    }

    return arg;
  }
};

/*-----------------------------------------------------------------------------
*
* Pipe composes a series of functions and returns the resulting function.
* Each function is called on the return value of the preceding function.
*
------------------------------------------------------------------------------*/
var pipe = function(){
  var args = Array.prototype.slice.call(arguments);

  return function (arg) {
    var arg = arg;

    for (var i = 0; i < args.length; i++){
      arg = args[i].call(this, arg);
    }

    return arg;
  }
};
