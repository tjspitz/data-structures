class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.storage = {};
  }
  enqueue(value) {
    var storage = this.storage;

    for (var i = this.size(); i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage['0'] = value;
  }
  dequeue() {
    var storage = this.storage;
    var size = this.size();

    var dequeued = storage[size - 1];
    delete storage[size - 1];
    return dequeued;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
