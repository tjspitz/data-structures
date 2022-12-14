// No arrays! Instead, use an object with numeric keys
// USE YOUR WHITEBOARD TOM

var Stack = function() {
  var someInstance = {
    // so abstract... are we looking to put anything in here? NOOOOOOO the user does not like garbage
  };

  // Use an object with numeric keys to store values
  var storage = {
    // WILL get populated with methods and other 'user stuff'
  };

  var getKeys = function() {
    return Object.keys(storage);
  };

  // Implement the methods below
  someInstance.push = function(value) {
    // create a new prop with key '1 more than what's in storage' and val 'value'
    // storage[the length of the keys arr] = value

    storage[getKeys().length] = value;

  };

  someInstance.pop = function() {
    // delete the prop w/ the highest-num key (since the keys are numeric)

    // delete storage[the length of the keys arr MINUS 1]
    // give me the thing I just deleted

    var popped = storage[getKeys().length - 1];
    delete storage[getKeys().length - 1];
    return popped;

  };

  someInstance.size = function() {
    return getKeys().length;
  };

  return someInstance;
};

// object.keys, .vals, return --> array, which has .length