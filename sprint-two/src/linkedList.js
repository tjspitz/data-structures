var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    // if head is null
    if (list.head === null) { //
      // should point to invoking Node and passing in new value
      list.head = newNode; // {head:{Node(newVal)}}
      // tail should point to newly created Node
      list.tail = list.head; // list{tail:{Node(newVal)}}

    } else {
      // list.tail.next is the newNode
      list.tail.next = newNode;
      // reassign the tail to be the newNode
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // find out what the head is pointing to and save to a variable called currentFirst
    var currentFirst = list.head;  //{head:{object that is currently there}}
    // give the head the pointers from currentFirst, thus taking it out of the chain
    list.head = currentFirst.next;
    return currentFirst.value;
  };

  list.contains = function(target) {
    // traverse the list starting at the head.
    var hasTarget = false;
    // create variable for currentNode = list.head
    var currentNode = list.head;

    var innerFunction = function(node) {
      if (node.value === target) {
        hasTarget = true;
      } else if (node.next !== null) {
        return innerFunction(node.next);
      }
    };

    innerFunction(currentNode);
    return hasTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var newLlist = LinkedList();
console.log(newLlist);
