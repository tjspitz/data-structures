var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, queueMethods);
  // Object.assign(someInstance, queueMethods);

  // someInstance.enqueue = queueMethods.enqueue;
  // someInstance.deque = queueMethods.deque;
  // someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  for (var i = queueMethods.size(); i > 0; i --) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage['0'] = value;
};
queueMethods.dequeue = function() {
  var dequeue = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return dequeue;
};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
}

