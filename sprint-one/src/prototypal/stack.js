var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};
stackMethods.pop = function() {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};
stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
  var storage = this.storage;
  var keys = Object.keys(storage);

  storage[keys.length] = value;
};

stackMethods.pop = function() {
  var storage = this.storage;
  var keys = Object.keys(storage);
  var popped = storage[keys.length - 1];

  delete storage[keys.length - 1];
  return popped;
};

stackMethods.size = function() {
  var storage = this.storage;

  return Object.keys(storage).length;
};

