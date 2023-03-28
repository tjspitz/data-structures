var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // iterate backwards thru the keys while max is greater than 0,
    //   starting at 'storage' size (it is 1 more than max key)

    // {0: 'c', 1: 'b', 2: 'a'} - size 3, 'a' was inserted first

    for (var i = someInstance.size(); i > 0; i --) {
      storage[i] = storage[i - 1];
    // {0: 'c', 1: 'b', 2: 'a', 3: 'a'} // i = 3
    // {0: 'c', 1: 'b', 2: 'b', 3: 'a'} // i = 2
    // {0: 'c', 1: 'c', 2: 'b', 3: 'a'} // i = 1
    }

    storage['0'] = value;
    // {0: 'd', 1: 'c', 2: 'b', 3: 'a'}

  };

  someInstance.dequeue = function() {
    var dequed = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return dequed;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
