var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    // if head is null
    if (list.head === null) {
      // should point to invoking Node and passing in new value
      list.head = newNode;
      // tail should point to newly created Node
      list.tail = list.head;
      // if head is not null
    } else {
      // current node = list.head
      // while current node doesn't equal null
        // current node = newNode.next
      // current node.next = newNode
    }
  };

      // if head is null,
      // then list.head = new obj with two props {aVal:x, poinTo: {Node(newVal)}}
    // otherwise
      // {head: {aVal:x, poinTo: {next obj}}} lis.head.poinTo

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
