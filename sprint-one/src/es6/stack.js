class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var keys = Object.keys(this.storage);

    this.storage[keys.length] = value;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var popped = this.storage[keys.length - 1];

    delete this.storage[keys.length - 1];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}