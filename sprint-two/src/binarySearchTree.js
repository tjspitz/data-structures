var BinarySearchTree = function(value) {

  const bst = {};

  bst.value = value;
  bst.left = null;
  bst.right = null;
  _.extend(bst, bstMethods);

  return bst;
};

const bstMethods = {};

bstMethods.insert = function(value) {

  if (this.left === null && value < this.value) {
    this.left = new BinarySearchTree(value);
  }

  if (this.right === null && value > this.value) {
    this.right = new BinarySearchTree(value);
  }

  if (value < this.value) {
    this.left.insert(value);
  }

  if (value > this.value) {
    this.right.insert(value);
  }
}

bstMethods.contains = function(value) {

  var found = found || false;

  if (this.value === value) {
    found = true;
  }

  if (this.left && value < this.value) {
    return this.left.contains(value);
  }

  if (this.right && value > this.value) {
    return this.right.contains(value);
  }

  return found;
}

bstMethods.depthFirstLog = function(callback) {

  if (this.value) {
    callback(this.value)
  }
  if (this.left) {
    this.left.depthFirstLog(callback)
  }

  if (this.right) {
    this.right.depthFirstLog(callback)
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
