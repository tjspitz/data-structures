var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
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


