var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    // head & tail are null?
    if (!list.head && !list.tail) {
      // point both to a new Node w/ the value
      list.head = list.tail = new Node(value);
    } else {
      // otherwise, point current tail's 'next' to new Node, as well as (new) tail
      list.tail.next = list.tail = new Node(value);
    }
  };

  list.removeHead = function () {
    // head is null?
    if (!list.head) {
      // return null
      return null;
    }

    // store current head's Node
    var oldHead = list.head;
    // point head to current head's 'next'
    list.head = oldHead.next;
    // delete current head's Node (superfluous)
    delete oldHead;
    // return current head's value
    return oldHead.value;
  };

  list.contains = function (target, node) {
    node = node || this.head
    // if current Node's 'next' is null & value is not the target
    if (!node.next && node.value !== target) {
      // return false
      return false;
    }
    // if current Node's value is 'target',
    if (node.value === target) {
      // return true
      return true;
    } else {
      // otherwise, RETURN the call of .contains on this Node's 'next'
      return this.contains(target, node.next);
    }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var newLlist = LinkedList();
// console.log(newLlist);
