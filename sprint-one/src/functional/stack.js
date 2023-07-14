// No arrays! Instead, use an object with numeric keys
// USE YOUR WHITEBOARD TOM

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var getKeys = function() {
    return Object.keys(storage);
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var popped = storage[someInstance.size() - 1];

    if (!someInstance.size()) {
      return 0;
    }

    delete storage[someInstance.size() - 1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

// object.keys, .vals, return --> array, which has .length