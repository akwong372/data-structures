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
    return Error(`Value is not in set`);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: 0(1)
 contains: 0(1)
 remove: 0(1)
 */
