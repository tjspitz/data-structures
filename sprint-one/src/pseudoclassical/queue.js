var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.size(); i > 0; i --) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage['0'] = value;
};
Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return dequeued;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  var storage = this.storage;
  var vals  = Object.values(storage);

  this.storage['0'] = value;
  _.each(vals, function(el, idx) {
    storage[idx + 1] = el;
  });
}

Queue.prototype.dequeue = function() {
  var storage = this.storage;
  var dqed = storage[Object.keys(storage).length - 1];

  delete storage[Object.keys(storage).length - 1];
  return dqed;
}

Queue.prototype.size = function() {
  var storage = this.storage;

  return Object.keys(storage).length;
}


