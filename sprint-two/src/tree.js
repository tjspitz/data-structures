var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  // _.extend(newTree, treeMethods);
  Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // push a new Tree into the caller's children array
  // (every Tree is a Child / every Child is a Tree)
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  // declare a boolean var to be updated
  var found = false;
  // if caller's value is target, return true
  if (this.value === target) {
    return true;
  }
  // for each child in this Tree's children array
  this.children.forEach(function (child) {
    // found is true from previous exec. context?
    // return true
    if (found) {
      return true;
    }
    // update 'found' w/ call of .contains on current child
    found = child.contains(target);
  });

  // return value of 'found'
  return found;

  /*
    Note that .forEach is arguably *more* confusing than a for loop, in this application

      if ( this.value === target ) {
        return true;
      }
      for ( var i = 0; i < this.children.length; i++ ) {
        var child = this.children[i];
        if (child.contains(target)) {
          return true;
        }
      }
      return false;

  */
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
