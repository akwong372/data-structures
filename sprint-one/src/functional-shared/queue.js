var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.storageSize = 0;
  newInstance.lastItem;
  newInstance.firstItem;

  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storageSize++;
};

queueMethods.dequeue = function() {
  if (this.storageSize > 0){
    this.storageSize--;
  }

};

queueMethods.size = function() {
  return this.storageSize;
};

