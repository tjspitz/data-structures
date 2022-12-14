// No arrays! Instead, use an object with numeric keys

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var getKeys = function() {
    return Object.keys(storage);
  };

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // put the val 'on the back'...

    // declare var to hold 'old' vals in an arr
    // assign key 0 to hold 'value'
    // for each el in the Obj.Vals arr
      // assign storage @ [cur idx + 1] to equal cur val
    var oldStorage = Object.values(storage);
    var updater = function(val, idx) {
      storage[idx + 1] = val;
    };

    storage['0'] = value;
    oldStorage.forEach(updater);

  };

  someInstance.dequeue = function() {
    // remove a val 'from the front'
    // return that val
    var dqed = storage[getKeys().length - 1];
    delete storage[getKeys().length - 1];
    return dqed;
  };

  someInstance.size = function() {
    return getKeys().length;

  };

  return someInstance;
};
