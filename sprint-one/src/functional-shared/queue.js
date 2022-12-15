var Queue = function() {

  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storageVals = Object.values(this.storage);

  var workaround = this.storage;

  this.storage['0'] = value;

  storageVals.forEach(function(val, idx) {
    // console.log(this.storage);

    workaround[idx + 1] = val;
  });
}

queueMethods.dequeue = function() {

  var keysArr = Object.keys(this.storage);
  var dqed = this.storage[keysArr.length - 1];

  delete this.storage[keysArr.length - 1];
  return dqed;
}

queueMethods.size = function() {

  var keysArr = Object.keys(this.storage);
  return keysArr.length;
}

