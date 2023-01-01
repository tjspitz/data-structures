

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // is there anything in this.storage @ INDEX? if NOT, make a new bucket []
  var bucket = this._storage.get(index) || [];

  // iterate over the 'bucket'
    // if there is already a key for k
    // (opt) store old value
    // reassign value at k to v (new value)
    // (opt) return old value

  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      var oldVal = bucket[i][1];
      bucket[i][1] = v;
      return oldVal;
    }
  }

  // (no pre-existing keys for k found...)
  // push into bucket: k & v WITHIN their own ARRAY ---> so there aren't collisions!
  // use set to store index & val in limited array
  // increment the size
  bucket.push( [k, v] );
  this._storage.set(index, bucket);
  this._size ++;

  // additional actions for checking size & resizing
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  // return undefined if the arg doesn't exist in storage
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

    // we have to iterate through k&v pairs in this.storage @ index
    // does this.storage @ index @ i @ 0 equal k? if so... // <--- not feeling 100% but close
      // remove this array (this.storage[index][i])

    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this._size --;
        // additional actions for checking size & resizing
      }

    }
  // return undefined if the arg doesn't exist in storage
  return undefined;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


