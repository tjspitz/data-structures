

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // this.storage is where my key-vals are... LimitedArray makes the storage []
  // is there anything in this.storage @ INDEX (var above)? if NOT, make a new bucket ( [] ) @ index
  // this.storage --- push into it: k & v WITHIN their own ARRAY ---> so there aren't collisions!
  // bucket @ 'index': [ [k, v] ]
  console.log('what is THIS?: ', this);
  console.log('what is index?: ', index);
  console.log('what is storage?: ', this._storage);
  console.log('is this a bucket?: ', this._storage[index]);

  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) { // this._storage[1][i][0]
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    // we have to iterate through k&v pairs in this.storage @ index
    // does this.storage @ index @ i @ 0 equal k? if so... // <--- not feeling 100% but close
      // remove this array (this.storage[index][i])
  // var bucket = this._storage[index];
  // return bucket.filter(function(item) {
  //   return item[0] !== k;
  // });
};

//   THIS IS BUCKET -- remove k3 --- return an array = bucket w/ k3 filtered out
// [
// 0  [ k1, v],
// 1  [ k2, v],
// 2  [ k3, v],
// 3  [ k4, v],
// 4  [ k5, v]
// ]


/*
 * Complexity: What is the time complexity of the above functions?
 */


