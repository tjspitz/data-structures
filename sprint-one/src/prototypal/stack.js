var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

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

