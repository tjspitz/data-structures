class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var storage = this.storage;
    var vals = Object.values(storage);

    storage['0'] = value;
    _.each(vals, function(el, idx) {
      storage[idx + 1] = el;
    });
  }

  dequeue() {
    var storage = this.storage;
    var dqed = storage[Object.keys(storage).length - 1];

    delete storage[Object.keys(storage).length - 1];
    return dqed;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
