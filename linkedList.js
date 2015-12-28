/*-----------------------------------------------------------------------------
*
* Implement a linked list.
*
-----------------------------------------------------------------------------*/

var List = function(){
  this.head = null;
  this.next = null;
  this.length = 0;
}

List.prototype = {
  add: function(value) {
    //make a node
    var node = {
      data: value,
      next: null
    }
    if(this.head === null){
      this.head = node.data;
      this.length++;
    } else {
      var current = this.head;
      while(current.next){
        current = this.next;
      }

      current = node.data;
      this.length++;
    }
  },

  search: function(index) {
    // validate input
    if(index < 0 || index > this.length || typeof index !== 'number'){
      throw "Invalid input...";
    } else if (index === 0) {
        return this.head;
    } else {

      var current = this.head;
      var pos = 0;

      while(++pos < index){
        current = current.next;
      }
      return current.data;
    }
  },

  insert: function(value, index){
    // validate input
    var node = {
      data: value,
      next: null
    };

    if(index < 0 || index > this.length || typeof index !== 'number'){
      throw "Invalid input...";

    } else if(index === 0){
      if (this.head === null){
        this.head = node.data;
      } else {
        var swap = this.head;
        this.head = node.data;
        this.next = this.head;
      }
    } else if (index > 0 && index < this.length){
      var prev = null;
      var current = this.head;
      var pos = 0;

      while (++i < index){
        prev = current;
        current = this.next;
      }

      prev.next = node.data;
      node.next = current.next;
      this.length++
    }
  }
}