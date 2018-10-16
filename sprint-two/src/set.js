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
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 // The time complexity would be 01, because all of the methods/functions are direct lookups.
 // Alvin and TJ.
 */
