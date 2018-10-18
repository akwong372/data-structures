var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return Boolean(this._storage[item]);
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  } else {
    var errorMsg = Error(`Value is not in set`);
    return errorMsg;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 // The time complexity would be 01, because all of the methods/functions are direct lookups.
 // Alvin and TJ.
 */
