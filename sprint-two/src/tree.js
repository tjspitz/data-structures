var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};


treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {
  var hasTarget = false;
  var currentTree = this;

  var innerFunc = function(curTree) {
    var curVal = curTree.value;
    var curChildren = curTree.children;
    if (curVal === target) {
      hasTarget = true;
    } else {
      curChildren.forEach(function(child) {
        innerFunc(child);
      });
    }
  };

  innerFunc(currentTree);

  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


