


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
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
  if (bucket){
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        this._storage.set(index, undefined);
      }
    }
  } else {
    return Error('Key does not exist');
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 There is an extremely low chance of all functions being linear 0(n), only if there are duplicates. However the chance for duplicates
 in the same index are extremely low.
 */


