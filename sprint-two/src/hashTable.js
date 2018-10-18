


var HashTable = function() { //steven seagal, [[steven, seagal]]
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //[[k,v][]], [k,v]
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1] = v;
      } else {
        bucket.push(tuple);
      }
    }
  } else {
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      this._storage.set(index, undefined);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 // Time complexity should be Constant Time (O1). It may become linear if there are duplicates in an index,
 // though the chances of it happening are very very small. - Alvin and TJ.
 */


