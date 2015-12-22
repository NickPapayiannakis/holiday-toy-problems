/*-----------------------------------------------------------------------------
*
* Implement a stack with pseudoclassical instantiation.
*
-----------------------------------------------------------------------------*/

var Stack = function(){
  this._storage = [];
  this.size = 0;
};

Stack.prototype.add = function(item){
  this._storage.push(item);
  this.size++;
};

Stack.prototype.remove = function(){
  if(this._storage){
    this._storage.pop();
    this.size--;
  }
}

Stack.prototype.size = function(){
  return this.size;
}

Stack.prototype.dump = function(){
  if(this._storage){
    this._storage = [];
  }
}

Stack.prototype.show = function(){
  console.log(this._storage);
}