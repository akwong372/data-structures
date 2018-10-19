var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastValue;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    lastValue = storage[size];
    size++;
  };

  someInstance.pop = function() {
    if (size > 0){
      delete storage[size];
      size--;
      lastValue = storage[size];
    }
    return lastValue;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
