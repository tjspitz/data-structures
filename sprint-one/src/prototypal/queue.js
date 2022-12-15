var Queue = function() {

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storage = this.storage;
  var vals = Object.values(storage);

  this.storage['0'] = value;

  vals.forEach(function(el, idx) {
    storage[idx + 1] = el;
  });
};

queueMethods.dequeue = function() {
  var storage = this.storage;
  var dqed = storage[Object.keys(storage).length - 1];

  delete storage[Object.keys(storage).length - 1];
  return dqed;
};

queueMethods.size = function() {
  var storage = this.storage;

  return Object.keys(storage).length;
};


