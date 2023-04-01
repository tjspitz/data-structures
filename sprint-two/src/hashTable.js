var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
  this.resizing = false;
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // object buckets - BETTER, O(1)
  this._storage[index] = this._storage[index] || {};
  var bucket = this._storage[index];
  bucket[k] = v;

  if (!this.resizing) {
    this.size += 1;
  }
  if (this.size / this._limit >= 0.75) {
    this.resize(2);
  }
  if (this.size / this._limit <= 0.25) {
    this.resize(0.5);
  }

  // array buckets - WORSE, O(n)
  // this._storage[index] = this._storage[index] || [];
  // var bucket = this._storage[index];
  // var updated = false;

  // for (var i = 0; i < bucket.length; i ++) {
  //   var tuple = bucket[i];
  //   if (tuple[0] === k) {
  //     tuple[1] = v;
  //     updated = true;
  //   }
  // }
  // if (!updated) {
  //   this._storage[index].push([k, v]);
  // }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // object buckets - BETTER, O(1)
  var bucket = this._storage[index];
  return bucket ? bucket[k] : undefined;

  // array buckets - WORSE, O(n)
  // var bucket = this._storage[index];
  // for (var i = 0; i < bucket.length; i ++) {
  //   var tuple = bucket[i];
  //   if (tuple[0] === k) {
  //     return tuple[1];
  //   }
  // }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // object buckets - BETTER, O(1)
  var bucket = this._storage[index];
  delete bucket[k];

  if (!this.resizing) {
    this.size -= 1;
  }
  if (this.size / this._limit < 0.25) {
    this.resize(0.5);
  }
  // array buckets - WORSE, O(n)
  // var bucket = this._storage[index];
  // this._storage[index] = bucket.filter(function(tuple) {
  //   return tuple[0] !== k;
  // })
};

HashTable.prototype.resize = function(ratio) {
  var hashTable = this;
  var oldStorage = this._storage;
  this.resizing = true;
  this._limit *= ratio;
  this._storage = LimitedArray(this._limit);

  for (var index in oldStorage) {
    var keys = Object.keys(oldStorage[index]);
    var vals = Object.values(oldStorage[index]);
    keys.forEach(function(key, i) {
      hashTable.insert(key, vals[i]);
    });
  }
  this.resizing = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
