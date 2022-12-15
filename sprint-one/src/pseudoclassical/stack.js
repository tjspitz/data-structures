var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var storage = this.storage;
  var keys = Object.keys(storage);

  storage[keys.length] = value;
}

Stack.prototype.pop = function() {
  var storage = this.storage;
  var keys = Object.keys(storage);
  var popped = storage[keys.length - 1];

  delete storage[keys.length - 1];
  return popped;
}

Stack.prototype.size = function() {
  var storage = this.storage;

  return Object.keys(storage).length;
}