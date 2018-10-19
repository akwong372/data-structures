var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.storageSize = 0;
  newInstance.lastItem;

  return newInstance
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.storageSize] = value;
  this.lastItem = value;
  this.storageSize++;
}

queueMethods.dequeue = function() {
  if (this.storageSize > 0){
    this.storageSize--;
    this.lastItem = this.storage[0]
    delete this.storage[0];
  }
  for (key in this.storage){
    this.storage[key - 1] = this.storage[key];
  }
  return this.lastItem;
}

queueMethods.size = function() {
  return this.storageSize;
}

