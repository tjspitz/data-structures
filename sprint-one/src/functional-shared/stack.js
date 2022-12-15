var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, stackMethods);

  return someInstance;
};

// helper Fn for the keys

var stackMethods = {};

// add methods PUSH, POP, and SIZE to 'stackMethods'
stackMethods.push = function(value) {
  var keysArr = Object.keys(this.storage);
  this.storage[keysArr.length] = value;
}
stackMethods.pop = function() {
  var keysArr = Object.keys(this.storage);
  var popped = this.storage[keysArr.length - 1];
  delete this.storage[keysArr.length - 1];
  return popped;
}
stackMethods.size = function() {
  return Object.keys(this.storage).length;
}

/*
ANGRY SPEC RUNNER DOES NOT WANT
    getKeys: function() {
      return Object.keys(this.storage);
    }
*/