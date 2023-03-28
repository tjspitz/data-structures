var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.deque = queueMethods.deque;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {

};
queueMethods.deque = function() {
  var dequed = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return dequed;
};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

