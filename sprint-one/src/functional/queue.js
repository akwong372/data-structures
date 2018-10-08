var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastItem;
  var firstItem;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    lastItem = value;
    size++;
    return lastItem;
  };

  someInstance.dequeue = function() {
    if (size > 0){
      size--;
    }
    firstItem = storage[0];
    delete storage[0];
    for (key in storage){
      storage[key - 1] = storage[key];
    }
    return firstItem;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
