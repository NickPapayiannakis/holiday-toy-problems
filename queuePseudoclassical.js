/*-----------------------------------------------------------------------------
*
* Implement a queue using an array.
*
*----------------------------------------------------------------------------*/

var Queue = function(){
  this._storage = [];
}

Queue.prototype.add = function(item){
  this._storage.push(item);
}

Queue.prototype.remove = function(){
  if(this._storage) {
    this._storage.shift();
  }
}

Queue.prototype.size = function(){
  return this._storage.length;
}